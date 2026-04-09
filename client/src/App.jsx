import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Portfolio from './pages/Portfolio'
import Process from './pages/Process'
import Pricing from './pages/Pricing'
import Testimonials from './pages/Testimonials'
import Blog from './pages/Blog'
import Contact from './pages/Contact'
import Team from './pages/Team'
import PageLoader from './components/UI/PageLoader'

export default function App() {
  const location = useLocation()
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem('darkMode') === 'true'
  })
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Simulate initial load
    const timer = setTimeout(() => setLoading(false), 1200)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
    localStorage.setItem('darkMode', darkMode)
  }, [darkMode])

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [location.pathname])

  if (loading) return <PageLoader />

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 transition-colors duration-300">
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/process" element={<Process />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/team" element={<Team />} />
        </Routes>
      </AnimatePresence>
      <Footer />
    </div>
  )
}
