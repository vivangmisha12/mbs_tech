import express from 'express'
import Blog from '../models/Blog.js'

const router = express.Router()

// GET /api/blog — Get all published posts
router.get('/', async (req, res) => {
  try {
    const { category } = req.query
    const filter = { published: true }
    if (category && category !== 'All') filter.category = category
    const posts = await Blog.find(filter).sort({ createdAt: -1 })
    res.json({ posts, count: posts.length })
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch blog posts.' })
  }
})

// GET /api/blog/:slug
router.get('/:slug', async (req, res) => {
  try {
    const post = await Blog.findOne({ slug: req.params.slug, published: true })
    if (!post) return res.status(404).json({ error: 'Post not found.' })
    res.json({ post })
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch post.' })
  }
})

export default router
