import mongoose from 'mongoose'

const blogSchema = new mongoose.Schema({
  title: { type: String, required: true, trim: true },
  slug: { type: String, required: true, unique: true },
  excerpt: { type: String, required: true },
  content: String,
  category: {
    type: String,
    enum: ['Web Development', 'E-Commerce', 'Startup Tips', 'Technology', 'Design'],
  },
  tags: [String],
  readTime: String,
  published: { type: Boolean, default: false },
  featured: { type: Boolean, default: false },
}, { timestamps: true })

export default mongoose.model('Blog', blogSchema)
