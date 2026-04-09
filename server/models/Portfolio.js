import mongoose from 'mongoose'

const portfolioSchema = new mongoose.Schema({
  title: { type: String, required: true, trim: true },
  category: {
    type: String,
    required: true,
    enum: ['Business', 'E-Commerce', 'Portfolio', 'Mobile App'],
  },
  description: { type: String, required: true },
  problem: String,
  solution: String,
  tech: [String],
  imageUrl: String,
  liveUrl: String,
  featured: { type: Boolean, default: false },
  order: { type: Number, default: 0 },
}, { timestamps: true })

export default mongoose.model('Portfolio', portfolioSchema)
