import express from 'express'
import Portfolio from '../models/Portfolio.js'

const router = express.Router()

// GET /api/portfolio — Get all projects
router.get('/', async (req, res) => {
  try {
    const { category } = req.query
    const filter = category && category !== 'All' ? { category } : {}
    const projects = await Portfolio.find(filter).sort({ order: 1, createdAt: -1 })
    res.json({ projects, count: projects.length })
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch portfolio.' })
  }
})

// GET /api/portfolio/:id
router.get('/:id', async (req, res) => {
  try {
    const project = await Portfolio.findById(req.params.id)
    if (!project) return res.status(404).json({ error: 'Project not found.' })
    res.json({ project })
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch project.' })
  }
})

// POST /api/portfolio — Create project
router.post('/', async (req, res) => {
  try {
    const project = await Portfolio.create(req.body)
    res.status(201).json({ project })
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
})

export default router
