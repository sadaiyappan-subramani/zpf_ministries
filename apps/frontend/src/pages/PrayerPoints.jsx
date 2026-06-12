import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import SpotlightCard from '../components/bits/SpotlightCard'

export default function PrayerPoints() {
  const prayerPoints = [
    {
      num: '01',
      title: 'Spiritual Revival',
      desc: 'Pray for a deep outpouring of the Holy Spirit upon Zion Prayer Fellowship, local churches, and Chennai.'
    },
    {
      num: '02',
      title: 'Our Pastors & Servants',
      desc: 'Pray for wisdom, health, protection, and fresh spiritual anointing upon Bro. Perinba Dhas, Bro. Muhil, and the deacons.'
    },
    {
      num: '03',
      title: 'Kids & Youth Ministries',
      desc: 'Pray for the Kids Bible School, teens, and young adults to grow in biblical truth and stand firm in faith.'
    },
    {
      num: '04',
      title: 'Ongoing Church Construction',
      desc: 'Pray for the funding, logistics, and safety of workers involved in ongoing rural and branch church buildings.'
    },
    {
      num: '05',
      title: 'Outreach & Missions',
      desc: 'Pray for evangelists in mission fields, Jericho prayer drives, and outreach visits to industrial zones.'
    },
    {
      num: '06',
      title: 'Families & Social Care',
      desc: 'Intercede for widows, orphans, blind evangelists, sick people, and families facing financial hardships.'
    }
  ]

  // Slide deck placeholders (ready for user's slide images)
  const slides = [
    {
      title: 'Outpouring of the Holy Spirit',
      subtitle: 'Prayer Point 1: Spiritual Revival',
      image: '/assets/img/hero_worship.png',
      bulletPoints: [
        'Intercede for Chennai city revival and neighborhood conversion.',
        'Pray for fresh spiritual fire and devotion among youth.',
        'Pray for guidance during Bible study and prayer drives.'
      ]
    },
    {
      title: 'Pastors, Deacons & Support Teams',
      subtitle: 'Prayer Point 2: Leadership Protection',
      image: '/assets/img/pastor.png',
      bulletPoints: [
        'Pray for physical health, strength, and safety of Bro. Perinba Dhas.',
        'Intercede for Bro. Muhil and family in guiding services.',
        'Pray for deacons and outreach leaders across all units.'
      ]
    },
    {
      title: 'Kids Bible School & Youth Care',
      subtitle: 'Prayer Point 3: Next Generation',
      image: '/assets/img/kids_ministry.png',
      bulletPoints: [
        'Pray for Sunday school kids to memorize scriptures effectively.',
        'Intercede for Sunday school teachers and teens coordinators.',
        'Pray for summer Bible exams and seasonal VBS classes.'
      ]
    },
    {
      title: 'Church Expansion & Funding',
      subtitle: 'Prayer Point 4: Construction Projects',
      image: '/assets/img/dhas_outside.png',
      bulletPoints: [
        'Pray for resources and permission for rural church construction.',
        'Pray for safety and health of constructors and volunteers.',
        'Intercede for financial support channel openings.'
      ]
    }
  ]

  const [activeSlide, setActiveSlide] = useState(0)

  const handleNextSlide = () => {
    setActiveSlide((prev) => (prev + 1) % slides.length)
  }

  const handlePrevSlide = () => {
    setActiveSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  }

  return (
    <main className="main redesign-mode">

      {/* Page Banner */}
      <div className="about-banner">
        <div className="container">
          <h1>Regular Prayer Points</h1>
          <div className="breadcrumbs">
            <Link to="/">Home</Link>
            <span style={{ margin: '0 8px', color: '#999' }}>/</span>
            <span style={{ color: '#333' }}>Prayer Points</span>
          </div>
        </div>
      </div>

      {/* Interactive Presentation Slides Area */}
      <section className="redesign-section light-bg">
        <div className="container">
          <div className="redesign-section-header" style={{ marginBottom: '40px' }}>
            <h2>Intercessory Prayer Slides</h2>
            <p>Engage with our visual slides designed for congregational prayers and projection displays.</p>
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-10">
              <motion.div
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                style={{
                  position: 'relative',
                  background: '#ffffff',
                  border: '1px solid #eaeaea',
                  borderRadius: '20px',
                  boxShadow: '0 15px 45px rgba(0, 0, 0, 0.05)',
                  overflow: 'hidden'
                }}
              >
                {/* Image and Slide content row */}
                <div className="row g-0 align-items-center">
                  
                  {/* Left Column: Image with blurred border */}
                  <div className="col-md-6">
                    <div style={{ position: 'relative', height: '400px', width: '100%', background: '#000', overflow: 'hidden' }}>
                      <img
                        src={slides[activeSlide].image}
                        alt={slides[activeSlide].title}
                        style={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover',
                          opacity: 0.9
                        }}
                      />
                      <div
                        style={{
                          position: 'absolute',
                          bottom: 0,
                          left: 0,
                          right: 0,
                          background: 'linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0) 100%)',
                          padding: '30px 20px 20px',
                          color: '#fff',
                          zIndex: 2
                        }}
                      >
                        <span style={{ fontSize: '0.8rem', color: '#bf953f', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px' }}>
                          {slides[activeSlide].subtitle}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Right Column: Key Bullet Points */}
                  <div className="col-md-6">
                    <div style={{ padding: '40px' }}>
                      <h3 style={{ fontSize: '1.6rem', fontWeight: 800, color: '#1a1a1a', marginBottom: '25px' }}>
                        {slides[activeSlide].title}
                      </h3>
                      <ul style={{ paddingLeft: '20px', color: '#555', fontSize: '0.95rem', lineHeight: '1.8', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                        {slides[activeSlide].bulletPoints.map((pt, i) => (
                          <li key={i}>{pt}</li>
                        ))}
                      </ul>
                    </div>
                  </div>

                </div>

                {/* Slides Navigation Bar */}
                <div
                  style={{
                    background: '#fcfcfc',
                    borderTop: '1px solid #eee',
                    padding: '15px 30px',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    flexWrap: 'wrap',
                    gap: '15px'
                  }}
                >
                  <div style={{ display: 'flex', gap: '8px' }}>
                    {slides.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => setActiveSlide(i)}
                        style={{
                          width: '10px',
                          height: '10px',
                          borderRadius: '50%',
                          background: activeSlide === i ? '#2563eb' : '#ccc',
                          border: 'none',
                          padding: 0,
                          cursor: 'pointer',
                          transition: 'all 0.3s'
                        }}
                        aria-label={`Go to slide ${i + 1}`}
                      />
                    ))}
                  </div>

                  <div style={{ display: 'flex', gap: '10px' }}>
                    <button
                      onClick={handlePrevSlide}
                      style={{
                        background: '#fff',
                        border: '1px solid #ddd',
                        width: '40px',
                        height: '40px',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        cursor: 'pointer',
                        color: '#333',
                        transition: 'all 0.2s'
                      }}
                      onMouseEnter={e => e.currentTarget.style.borderColor = '#2563eb'}
                      onMouseLeave={e => e.currentTarget.style.borderColor = '#ddd'}
                    >
                      <i className="bi bi-chevron-left"></i>
                    </button>
                    <button
                      onClick={handleNextSlide}
                      style={{
                        background: '#fff',
                        border: '1px solid #ddd',
                        width: '40px',
                        height: '40px',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        cursor: 'pointer',
                        color: '#333',
                        transition: 'all 0.2s'
                      }}
                      onMouseEnter={e => e.currentTarget.style.borderColor = '#2563eb'}
                      onMouseLeave={e => e.currentTarget.style.borderColor = '#ddd'}
                    >
                      <i className="bi bi-chevron-right"></i>
                    </button>
                  </div>
                </div>

              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Grid of the 6 Structured Prayer Points */}
      <section className="redesign-section gray-bg" id="list">
        <div className="container">
          <div className="redesign-section-header">
            <h2>Our Weekly Prayer Shield</h2>
            <p>Carry these prayer burdens in your family devotions and weekly covenant hours.</p>
          </div>

          <div className="row g-4">
            {prayerPoints.map((point, idx) => (
              <div className="col-lg-4 col-md-6" key={idx}>
                <motion.div
                  className="campus-card"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeInUp}
                  style={{ display: 'flex', flexDirection: 'row', gap: '20px', alignItems: 'flex-start', padding: '25px', height: '100%' }}
                >
                  <span style={{
                    fontSize: '1.8rem',
                    fontWeight: 900,
                    color: '#2563eb',
                    background: '#eff6ff',
                    padding: '8px 12px',
                    borderRadius: '8px',
                    lineHeight: 1
                  }}>
                    {point.num}
                  </span>
                  <div>
                    <h3 style={{ fontSize: '1.15rem', fontWeight: 800, color: '#1a1a1a', marginBottom: '8px' }}>
                      {point.title}
                    </h3>
                    <p style={{ fontSize: '0.85rem', color: '#666', lineHeight: '1.5', margin: 0 }}>
                      {point.desc}
                    </p>
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </main>
  )
}
