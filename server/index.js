import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import helmet from 'helmet'
import morgan from 'morgan'
import rateLimit from 'express-rate-limit'
import dotenv from 'dotenv'
import contactRoutes from './routes/contact.js'
import portfolioRoutes from './routes/portfolio.js'
import blogRoutes from './routes/blog.js'

dotenv.config()

const app = express()
const PORT = process.env.PORT || 5000

// ── Security Middleware ──────────────────────────────────────
app.use(helmet())
app.use(morgan('dev'))

// CORS
app.use(cors({
  origin: process.env.CLIENT_URL || 'http://localhost:5173',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
}))

// Body parsing
app.use(express.json({ limit: '10mb' }))
app.use(express.urlencoded({ extended: true }))

// Rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100,
  message: { error: 'Too many requests, please try again later.' }
})
app.use('/api/', limiter)

// Stricter limit for contact form
const contactLimiter = rateLimit({
  windowMs: 60 * 60 * 1000, // 1 hour
  max: 10,
  message: { error: 'Too many contact form submissions. Please try again later.' }
})
app.use('/api/contact', contactLimiter)

// ── Routes ───────────────────────────────────────────────────
app.use('/api/contact', contactRoutes)
app.use('/api/portfolio', portfolioRoutes)
app.use('/api/blog', blogRoutes)

// Health check
app.get('/api/health', (req, res) => {
  res.json({
    status: 'ok',
    message: 'MBS WebTech API is running',
    timestamp: new Date().toISOString(),
  })
})

// ── 404 & Error Handling ─────────────────────────────────────
app.use((req, res) => {
  res.status(404).json({ error: 'Route not found' })
})

app.use((err, req, res, next) => {
  console.error('Server Error:', err.stack)
  res.status(err.status || 500).json({
    error: process.env.NODE_ENV === 'production' ? 'Internal Server Error' : err.message
  })
})

// ── MongoDB & Start ──────────────────────────────────────────
const startServer = async () => {
  try {
    if (process.env.MONGODB_URI) {
      try {
        await mongoose.connect(process.env.MONGODB_URI)
        console.log('✅ MongoDB connected')
      } catch (dbError) {
        console.warn('⚠️ MongoDB connection failed. Continuing without database.')
        console.warn(dbError.message)
      }
    } else {
      console.log('⚠️  No MONGODB_URI set — running without database')
    }

    app.listen(PORT, () => {
      console.log(`🚀 MBS WebTech API running on port ${PORT}`)
    })
  } catch (error) {
    console.error('❌ Failed to start server:', error)
    process.exit(1)
  }
}

startServer()

export default app
