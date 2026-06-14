import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

export default function Sermons() {
  const sermonCategories = [
    {
      title: 'Friday Tamil Sermons',
      desc: 'Powerful covenant blessings and spirit-filled exhortations delivered in Tamil.',
      icon: 'bi-translate'
    },
    {
      title: 'Friday English Sermons',
      desc: 'Weekly messages designed to strengthen and guide English-speaking congregation members.',
      icon: 'bi-chat-left-text'
    },
    {
      title: 'Psalm Exhortations',
      desc: 'Short, inspiring insights directly from the Book of Psalms to start your day in prayer.',
      icon: 'bi-music-note-beamed'
    },
    {
      title: 'Short Messages',
      desc: 'Quick devotions and faith highlights to build your daily spiritual walk.',
      icon: 'bi-lightning-fill'
    },
    {
      title: 'Bible Studies',
      desc: 'Deep theology, character studies, and scripture analysis for dedicated believers.',
      icon: 'bi-book'
    }
  ]

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  }

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  return (
    <main className="main redesign-mode">

      {/* Page Header */}
      <div className="about-banner">
        <div className="container">
          <h1>Sermons</h1>
          <div className="breadcrumbs">
            <Link to="/">Home</Link>
            <span style={{ margin: '0 8px', color: 'var(--text-cosmic)' }}>/</span>
            <span style={{ color: 'var(--accent-gold)' }}>Sermons</span>
          </div>
        </div>
      </div>

      {/* Sermons Categories Grid */}
      <section className="redesign-section">
        <div className="container">
          <div className="redesign-section-header">
            <h2>Our Sermon Library</h2>
            <p>Listen to weekly spiritual teachings, Bible studies, and short video messages from our pastors.</p>
          </div>

          <motion.div 
            className="row g-4 justify-content-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={staggerContainer}
          >
            {sermonCategories.map((sermon, idx) => (
              <div className="col-lg-4 col-md-6" key={idx}>
                <motion.div
                  className="campus-card"
                  variants={fadeInUp}
                >
                  <i className={`bi ${sermon.icon} campus-card-icon`}></i>
                  <h3 className="campus-card-title">
                    {sermon.title}
                  </h3>
                  <p className="campus-card-desc">
                    {sermon.desc}
                  </p>
                  <Link to="/contact" className="campus-card-btn">
                    Browse Sermons <i className="bi bi-arrow-right"></i>
                  </Link>
                </motion.div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

    </main>
  )
}
