# MBS TECHNOLOGIES — Full Stack Agency Website

A modern, production-ready digital agency website built with the MERN stack (MongoDB, Express, React, Node.js).

## 🚀 Tech Stack

**Frontend**
- React 18 + Vite
- Tailwind CSS (utility-first styling)
- Framer Motion (animations)
- React Router v6
- React Helmet Async (SEO)
- React Hot Toast (notifications)

**Backend**
- Node.js + Express.js
- MongoDB + Mongoose
- Helmet (security headers)
- Express Rate Limit
- CORS configured

---

## 📁 Project Structure

```
mbs-webtech/
├── client/                  # React frontend
│   ├── public/
│   │   ├── robots.txt       # SEO
│   │   └── sitemap.xml      # SEO sitemap
│   ├── src/
│   │   ├── components/
│   │   │   ├── Navbar/
│   │   │   ├── Footer/
│   │   │   └── UI/
│   │   ├── pages/
│   │   │   ├── Home.jsx
│   │   │   ├── About.jsx
│   │   │   ├── Services.jsx
│   │   │   ├── Portfolio.jsx
│   │   │   ├── Process.jsx
│   │   │   ├── Pricing.jsx
│   │   │   ├── Testimonials.jsx
│   │   │   ├── Blog.jsx
│   │   │   ├── Contact.jsx
│   │   │   └── Team.jsx
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   ├── tailwind.config.js
│   ├── vite.config.js
│   └── vercel.json          # Vercel deployment config
│
└── server/                  # Express backend
    ├── models/
    │   ├── Contact.js
    │   ├── Portfolio.js
    │   └── Blog.js
    ├── routes/
    │   ├── contact.js
    │   ├── portfolio.js
    │   └── blog.js
    ├── index.js
    ├── .env.example
    └── render.yaml          # Render deployment config
```

---

## ⚡ Quick Start

### 1. Install Dependencies

```bash
# Install both client and server deps
cd client && npm install
cd ../server && npm install
```

### 2. Configure Environment

```bash
cd server
cp .env.example .env
# Edit .env with your MongoDB URI and other config
```

### 3. Run Development

```bash
# Terminal 1 - Frontend
cd client && npm run dev

# Terminal 2 - Backend
cd server && npm run dev
```

Frontend: http://localhost:5173
Backend: http://localhost:5000

---

## 📄 Pages

| Page | Route | Description |
|------|-------|-------------|
| Home | `/` | Hero, services, stats, portfolio preview, testimonials, team |
| About | `/about` | Story, mission, values, team, tech stack |
| Services | `/services` | All 6 services with details |
| Portfolio | `/portfolio` | Filterable project grid with modal |
| Process | `/process` | 6-step development workflow |
| Pricing | `/pricing` | 4 pricing packages + FAQs |
| Testimonials | `/testimonials` | Client reviews with ratings |
| Blog | `/blog` | Articles with category filter |
| Contact | `/contact` | Contact form → MongoDB |
| Team | `/team` | Full team profiles |

---

## 🌐 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/contact` | Submit contact form |
| GET | `/api/contact` | Get all submissions |
| GET | `/api/portfolio` | Get portfolio projects |
| POST | `/api/portfolio` | Create project |
| GET | `/api/blog` | Get blog posts |
| GET | `/api/health` | Health check |

---

## 🚀 Deployment

### Frontend → Vercel
1. Push to GitHub
2. Import to Vercel
3. Set root to `client/`
4. Add env var: `VITE_API_URL=https://your-backend.onrender.com`

### Backend → Render
1. Push to GitHub
2. Create Web Service on Render
3. Set root to `server/`
4. Add env vars: `MONGODB_URI`, `CLIENT_URL`, etc.

---

## ✨ Features

- ✅ Fully responsive (mobile-first)
- ✅ Dark mode toggle
- ✅ Smooth page transitions
- ✅ Animated components (Framer Motion)
- ✅ SEO optimized (meta tags, OG, sitemap, robots.txt)
- ✅ Contact form → MongoDB
- ✅ Portfolio with category filtering
- ✅ Project detail modal
- ✅ Rate limiting
- ✅ Security headers

---

## 📧 Contact

**MBS TECHNOLOGIES** — hello@mbstechnologies.com
