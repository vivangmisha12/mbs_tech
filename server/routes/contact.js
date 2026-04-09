import express from 'express'
import nodemailer from 'nodemailer'
import mongoose from 'mongoose'
import Contact from '../models/Contact.js'

const router = express.Router()
const DEFAULT_ADMIN_EMAIL = 'mbswebtechsolutions@gmail.com'

let mailTransporter

function getMailTransporter() {
  if (mailTransporter) return mailTransporter

  const host = process.env.EMAIL_HOST || 'smtp.gmail.com'
  const port = Number(process.env.EMAIL_PORT || 587)
  const user = process.env.EMAIL_USER
  const pass = process.env.EMAIL_PASS

  if (!user || !pass) return null
  if (user === 'your@gmail.com' || pass === 'your-app-password') return null

  mailTransporter = nodemailer.createTransport({
    host,
    port,
    secure: port === 465,
    auth: { user, pass },
  })

  return mailTransporter
}

function escapeHtml(value = '') {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;')
}

// POST /api/contact — Submit contact form
router.post('/', async (req, res) => {
  try {
    const { name, email, phone, service, budget, message } = req.body

    // Basic validation
    if (!name || !email || !message) {
      return res.status(400).json({ error: 'Name, email, and message are required.' })
    }

    // Email format validation
    const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/
    if (!emailRegex.test(email)) {
      return res.status(400).json({ error: 'Invalid email address.' })
    }

    const transporter = getMailTransporter()
    if (!transporter) {
      return res.status(500).json({
        error: 'Email service is not configured. Replace placeholder EMAIL_USER/EMAIL_PASS in server/.env with a real Gmail address and 16-character Gmail App Password.',
      })
    }

    const recipient = process.env.ADMIN_EMAIL || DEFAULT_ADMIN_EMAIL
    const fromAddress = process.env.EMAIL_FROM || process.env.EMAIL_USER

    await transporter.sendMail({
      from: fromAddress,
      to: recipient,
      replyTo: email.trim().toLowerCase(),
      subject: `New Contact Form Message from ${name.trim()}`,
      text: [
        'New contact form submission:',
        `Name: ${name.trim()}`,
        `Email: ${email.trim().toLowerCase()}`,
        `Phone: ${phone?.trim() || 'Not provided'}`,
        `Service: ${service || 'Not selected'}`,
        `Budget: ${budget || 'Not selected'}`,
        '',
        'Message:',
        message.trim(),
      ].join('\n'),
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${escapeHtml(name.trim())}</p>
        <p><strong>Email:</strong> ${escapeHtml(email.trim().toLowerCase())}</p>
        <p><strong>Phone:</strong> ${escapeHtml(phone?.trim() || 'Not provided')}</p>
        <p><strong>Service:</strong> ${escapeHtml(service || 'Not selected')}</p>
        <p><strong>Budget:</strong> ${escapeHtml(budget || 'Not selected')}</p>
        <p><strong>Message:</strong></p>
        <p>${escapeHtml(message.trim()).replace(/\n/g, '<br>')}</p>
      `,
    })

    let contactId = null
    if (mongoose.connection.readyState === 1) {
      const contact = await Contact.create({
        name: name.trim(),
        email: email.trim().toLowerCase(),
        phone: phone?.trim() || '',
        service: service || '',
        budget: budget || '',
        message: message.trim(),
        ipAddress: req.ip,
      })
      contactId = contact._id
    }

    res.status(201).json({
      success: true,
      message: 'Message received! We\'ll get back to you within 24 hours.',
      id: contactId,
    })
  } catch (error) {
    console.error('Contact form error:', error)
    if (error.name === 'ValidationError') {
      return res.status(400).json({ error: Object.values(error.errors)[0].message })
    }

    if (error.code === 'EAUTH' || error.responseCode === 535) {
      return res.status(500).json({
        error: 'Email authentication failed. Please check EMAIL_USER and EMAIL_PASS (Gmail App Password).',
      })
    }

    res.status(500).json({ error: 'Failed to submit. Please try again.' })
  }
})

// GET /api/contact — Get all contacts (protected, admin only)
router.get('/', async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 }).limit(100)
    res.json({ contacts, count: contacts.length })
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch contacts.' })
  }
})

export default router
