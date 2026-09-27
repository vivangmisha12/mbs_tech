import mongoose from 'mongoose'

const contactSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name is required'],
    trim: true,
    maxlength: [100, 'Name cannot exceed 100 characters'],
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    trim: true,
    lowercase: true,
    match: [/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/, 'Invalid email address'],
  },
  phone: {
    type: String,
    trim: true,
    maxlength: 20,
  },
  service: {
    type: String,
    enum: ['Website Development', 'E-Commerce Store', 'Custom Software Development', 'Android App', 'SEO Setup', 'Digital Marketing & Ads', 'Website Redesign', 'Portfolio Website', 'Other', ''],
    default: '',
  },
  budget: {
    type: String,
    enum: ['under-500', '500-1000', '1000-2500', '2500-5000', '5000+', ''],
    default: '',
  },
  message: {
    type: String,
    required: [true, 'Message is required'],
    trim: true,
    maxlength: [2000, 'Message cannot exceed 2000 characters'],
  },
  status: {
    type: String,
    enum: ['new', 'read', 'replied', 'closed'],
    default: 'new',
  },
  ipAddress: String,
}, { timestamps: true })

export default mongoose.model('Contact', contactSchema)
