import React, { useState, useEffect } from 'react'
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

  const slideDecks = {
    arab_countries: {
      id: 'arab_countries',
      name: 'Arab Countries',
      icon: 'bi-globe-asia-australia',
      count: 12,
      folder: 'arab_countries'
    },
    children: {
      id: 'children',
      name: 'Children',
      icon: 'bi-people-fill',
      count: 13,
      folder: 'children'
    },
    indian_states: {
      id: 'indian_states',
      name: 'Indian States',
      icon: 'bi-geo-alt-fill',
      count: 14,
      folder: 'indian_states'
    },
    tn_districts: {
      id: 'tn_districts',
      name: 'TN Districts',
      icon: 'bi-map-fill',
      count: 15,
      folder: 'tn_districts'
    }
  }

  const getSlidesForDeck = (deckKey) => {
    const deck = slideDecks[deckKey]
    if (!deck) return []
    const slidesList = []
    for (let i = 1; i <= deck.count; i++) {
      const numStr = i.toString().padStart(2, '0')
      slidesList.push(`/assets/img/prayer_slides/${deck.folder}/slide_${numStr}.png`)
    }
    return slidesList
  }

  const [activeDeckKey, setActiveDeckKey] = useState('arab_countries')
  const [activeSlide, setActiveSlide] = useState(0)
  const [isFullscreen, setIsFullscreen] = useState(false)

  const currentSlides = getSlidesForDeck(activeDeckKey)

  const handleNextSlide = () => {
    setActiveSlide((prev) => (prev + 1) % currentSlides.length)
  }

  const handlePrevSlide = () => {
    setActiveSlide((prev) => (prev - 1 + currentSlides.length) % currentSlides.length)
  }

  const handleDeckChange = (deckKey) => {
    setActiveDeckKey(deckKey)
    setActiveSlide(0)
  }

  // Keyboard navigation for fullscreen presentation mode
  useEffect(() => {
    if (!isFullscreen) return

    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight') {
        handleNextSlide()
      } else if (e.key === 'ArrowLeft') {
        handlePrevSlide()
      } else if (e.key === 'Escape') {
        setIsFullscreen(false)
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [isFullscreen, activeSlide, activeDeckKey])

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  }

  return (
    <main className="main redesign-mode">

      {/* Page Header */}
      <div className="about-banner">
        <div className="container">
          <h1>Regular Prayer Points</h1>
          <div className="breadcrumbs">
            <Link to="/">Home</Link>
            <span style={{ margin: '0 8px', color: 'var(--text-cosmic)' }}>/</span>
            <span style={{ color: 'var(--accent-gold)' }}>Prayer Points</span>
          </div>
        </div>
      </div>

      {/* Interactive Presentation Slides Area */}
      <section className="redesign-section">
        <div className="container">
          <div className="redesign-section-header" style={{ marginBottom: '40px' }}>
            <h2>Intercessory Prayer Slides</h2>
            <p>Engage with our visual slides designed for congregational prayers and projection displays.</p>
          </div>

          {/* Deck Tab Buttons */}
          <div 
            style={{ 
              display: 'flex', 
              justifyContent: 'center', 
              gap: '12px', 
              flexWrap: 'wrap', 
              marginBottom: '30px' 
            }}
          >
            {Object.values(slideDecks).map((deck) => {
              const isActive = activeDeckKey === deck.id
              return (
                <button
                  key={deck.id}
                  onClick={() => handleDeckChange(deck.id)}
                  style={{
                    background: isActive ? 'var(--gold-metallic)' : 'rgba(255, 255, 255, 0.03)',
                    border: '1px solid ' + (isActive ? 'var(--accent-gold)' : 'var(--border-gold-light)'),
                    borderRadius: '30px',
                    padding: '10px 20px',
                    color: isActive ? '#050609' : 'var(--text-cream)',
                    fontWeight: isActive ? 800 : 600,
                    fontSize: '0.9rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    cursor: 'pointer',
                    boxShadow: isActive ? 'var(--gold-glow)' : 'none',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    if (!isActive) {
                      e.currentTarget.style.background = 'rgba(255, 255, 255, 0.08)'
                      e.currentTarget.style.borderColor = 'var(--accent-gold)'
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isActive) {
                      e.currentTarget.style.background = 'rgba(255, 255, 255, 0.03)'
                      e.currentTarget.style.borderColor = 'var(--border-gold-light)'
                    }
                  }}
                >
                  <i className={`bi ${deck.icon}`} style={{ fontSize: '1.1rem' }}></i>
                  {deck.name}
                  <span 
                    style={{ 
                      fontSize: '0.75rem', 
                      background: isActive ? 'rgba(0,0,0,0.15)' : 'rgba(255,255,255,0.1)', 
                      padding: '2px 8px', 
                      borderRadius: '12px',
                      marginLeft: '4px' 
                    }}
                  >
                    {deck.count}
                  </span>
                </button>
              )
            })}
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-10">
              <motion.div
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                style={{
                  position: 'relative',
                  background: 'var(--bg-glass)',
                  border: '1px solid var(--border-gold-light)',
                  borderRadius: '24px',
                  boxShadow: '0 20px 50px rgba(0, 0, 0, 0.5)',
                  overflow: 'hidden'
                }}
              >
                {/* 16:9 Aspect Ratio Viewport */}
                <div 
                  style={{ 
                    position: 'relative', 
                    width: '100%', 
                    paddingTop: '56.25%', 
                    background: '#090b11',
                    overflow: 'hidden'
                  }}
                >
                  {/* Slide Image */}
                  <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}>
                    <AnimatePresence mode="wait">
                      <motion.img
                        key={`${activeDeckKey}-${activeSlide}`}
                        src={currentSlides[activeSlide]}
                        alt={`${slideDecks[activeDeckKey].name} - Slide ${activeSlide + 1}`}
                        initial={{ opacity: 0, x: 40 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -40 }}
                        transition={{ duration: 0.25, ease: 'easeInOut' }}
                        style={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'contain',
                          display: 'block'
                        }}
                      />
                    </AnimatePresence>
                  </div>

                  {/* Left Navigation Overlay Button */}
                  <button
                    onClick={handlePrevSlide}
                    style={{
                      position: 'absolute',
                      left: '20px',
                      top: '50%',
                      transform: 'translateY(-50%)',
                      background: 'rgba(5, 6, 9, 0.65)',
                      border: '1px solid var(--border-gold-light)',
                      width: '44px',
                      height: '44px',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      cursor: 'pointer',
                      color: 'var(--accent-gold)',
                      fontSize: '1.1rem',
                      zIndex: 10,
                      backdropFilter: 'blur(4px)',
                      transition: 'all 0.2s'
                    }}
                    onMouseEnter={e => { e.currentTarget.style.background = 'rgba(5, 6, 9, 0.85)'; e.currentTarget.style.borderColor = 'var(--accent-gold)'; }}
                    onMouseLeave={e => { e.currentTarget.style.background = 'rgba(5, 6, 9, 0.65)'; e.currentTarget.style.borderColor = 'var(--border-gold-light)'; }}
                    aria-label="Previous Slide"
                  >
                    <i className="bi bi-chevron-left"></i>
                  </button>

                  {/* Right Navigation Overlay Button */}
                  <button
                    onClick={handleNextSlide}
                    style={{
                      position: 'absolute',
                      right: '20px',
                      top: '50%',
                      transform: 'translateY(-50%)',
                      background: 'rgba(5, 6, 9, 0.65)',
                      border: '1px solid var(--border-gold-light)',
                      width: '44px',
                      height: '44px',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      cursor: 'pointer',
                      color: 'var(--accent-gold)',
                      fontSize: '1.1rem',
                      zIndex: 10,
                      backdropFilter: 'blur(4px)',
                      transition: 'all 0.2s'
                    }}
                    onMouseEnter={e => { e.currentTarget.style.background = 'rgba(5, 6, 9, 0.85)'; e.currentTarget.style.borderColor = 'var(--accent-gold)'; }}
                    onMouseLeave={e => { e.currentTarget.style.background = 'rgba(5, 6, 9, 0.65)'; e.currentTarget.style.borderColor = 'var(--border-gold-light)'; }}
                    aria-label="Next Slide"
                  >
                    <i className="bi bi-chevron-right"></i>
                  </button>

                  {/* Fullscreen Button */}
                  <button
                    onClick={() => setIsFullscreen(true)}
                    style={{
                      position: 'absolute',
                      right: '20px',
                      top: '20px',
                      background: 'rgba(5, 6, 9, 0.65)',
                      border: '1px solid var(--border-gold-light)',
                      borderRadius: '8px',
                      padding: '8px 12px',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '6px',
                      cursor: 'pointer',
                      color: 'var(--accent-gold)',
                      fontSize: '0.8rem',
                      fontWeight: 600,
                      zIndex: 10,
                      backdropFilter: 'blur(4px)',
                      transition: 'all 0.2s'
                    }}
                    onMouseEnter={e => { e.currentTarget.style.background = 'rgba(5, 6, 9, 0.85)'; e.currentTarget.style.borderColor = 'var(--accent-gold)'; }}
                    onMouseLeave={e => { e.currentTarget.style.background = 'rgba(5, 6, 9, 0.65)'; e.currentTarget.style.borderColor = 'var(--border-gold-light)'; }}
                  >
                    <i className="bi bi-fullscreen"></i>
                    Fullscreen Mode
                  </button>
                </div>

                {/* Slides Footer Bar */}
                <div
                  style={{
                    background: 'rgba(255, 255, 255, 0.01)',
                    borderTop: '1px solid var(--border-gold-light)',
                    padding: '15px 30px',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    flexWrap: 'wrap',
                    gap: '15px'
                  }}
                >
                  <span style={{ fontSize: '0.9rem', color: 'var(--text-cosmic)', fontWeight: 500 }}>
                    Slide <strong style={{ color: 'var(--accent-gold)' }}>{activeSlide + 1}</strong> of {currentSlides.length}
                  </span>

                  {/* Dot Page Indicators */}
                  <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap', maxWidth: '60%', justifyContent: 'center' }}>
                    {currentSlides.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => setActiveSlide(i)}
                        style={{
                          width: activeSlide === i ? '20px' : '8px',
                          height: '8px',
                          borderRadius: '4px',
                          background: activeSlide === i ? 'var(--accent-gold)' : 'rgba(255, 255, 255, 0.2)',
                          border: 'none',
                          padding: 0,
                          cursor: 'pointer',
                          transition: 'all 0.3s ease'
                        }}
                        aria-label={`Go to slide ${i + 1}`}
                      />
                    ))}
                  </div>

                  <div style={{ display: 'flex', gap: '10px' }}>
                    <button
                      onClick={handlePrevSlide}
                      style={{
                        background: 'rgba(229, 193, 88, 0.05)',
                        border: '1px solid var(--border-gold-light)',
                        width: '40px',
                        height: '40px',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        cursor: 'pointer',
                        color: 'var(--accent-gold)',
                        transition: 'all 0.2s'
                      }}
                      onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--border-gold-focus)'; e.currentTarget.style.boxShadow = 'var(--gold-glow)'; }}
                      onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border-gold-light)'; e.currentTarget.style.boxShadow = 'none'; }}
                    >
                      <i className="bi bi-chevron-left"></i>
                    </button>
                    <button
                      onClick={handleNextSlide}
                      style={{
                        background: 'rgba(229, 193, 88, 0.05)',
                        border: '1px solid var(--border-gold-light)',
                        width: '40px',
                        height: '40px',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        cursor: 'pointer',
                        color: 'var(--accent-gold)',
                        transition: 'all 0.2s'
                      }}
                      onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--border-gold-focus)'; e.currentTarget.style.boxShadow = 'var(--gold-glow)'; }}
                      onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border-gold-light)'; e.currentTarget.style.boxShadow = 'none'; }}
                    >
                      <i className="bi bi-chevron-right"></i>
                    </button>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Fullscreen Presentation Mode Modal */}
          <AnimatePresence>
            {isFullscreen && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                style={{
                  position: 'fixed',
                  top: 0,
                  left: 0,
                  width: '100vw',
                  height: '100vh',
                  background: '#040508',
                  zIndex: 9999,
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center'
                }}
              >
                {/* Top Toolbar */}
                <div
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    padding: '20px 40px',
                    background: 'linear-gradient(to bottom, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0) 100%)',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    color: '#fff',
                    zIndex: 10000
                  }}
                >
                  <div>
                    <h4 style={{ fontSize: '1.2rem', margin: 0, fontWeight: 700, color: 'var(--accent-gold)' }}>
                      {slideDecks[activeDeckKey].name}
                    </h4>
                    <p style={{ margin: '4px 0 0', fontSize: '0.85rem', color: '#a0a3b1' }}>
                      Use Left / Right arrow keys to navigate. Press ESC to exit.
                    </p>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                    <span style={{ fontSize: '0.95rem', fontWeight: 600 }}>
                      Slide {activeSlide + 1} of {currentSlides.length}
                    </span>
                    <button
                      onClick={() => setIsFullscreen(false)}
                      style={{
                        background: 'rgba(255, 255, 255, 0.1)',
                        border: '1px solid rgba(255,255,255,0.2)',
                        borderRadius: '8px',
                        padding: '8px 16px',
                        color: '#fff',
                        cursor: 'pointer',
                        fontSize: '0.9rem',
                        fontWeight: 600,
                        transition: 'all 0.2s'
                      }}
                      onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255, 255, 255, 0.2)' }}
                      onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)' }}
                    >
                      <i className="bi bi-x-lg" style={{ marginRight: '6px' }}></i> Exit
                    </button>
                  </div>
                </div>

                {/* Slide Container */}
                <div style={{ width: '90%', height: '80%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                  <AnimatePresence mode="wait">
                    <motion.img
                      key={`fullscreen-${activeDeckKey}-${activeSlide}`}
                      src={currentSlides[activeSlide]}
                      alt={`${slideDecks[activeDeckKey].name} - Slide ${activeSlide + 1}`}
                      initial={{ opacity: 0, scale: 0.96 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.96 }}
                      transition={{ duration: 0.2 }}
                      style={{
                        maxWidth: '100%',
                        maxHeight: '100%',
                        objectFit: 'contain',
                        boxShadow: '0 10px 40px rgba(0,0,0,0.8)'
                      }}
                    />
                  </AnimatePresence>
                </div>

                {/* Bottom Navigation controls */}
                <div
                  style={{
                    position: 'absolute',
                    bottom: '40px',
                    display: 'flex',
                    gap: '20px',
                    alignItems: 'center',
                    zIndex: 10000
                  }}
                >
                  <button
                    onClick={handlePrevSlide}
                    style={{
                      background: 'rgba(255, 255, 255, 0.1)',
                      border: '1px solid rgba(255, 255, 255, 0.2)',
                      width: '48px',
                      height: '48px',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      cursor: 'pointer',
                      color: '#fff',
                      fontSize: '1.2rem',
                      transition: 'all 0.2s'
                    }}
                    onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255, 255, 255, 0.25)' }}
                    onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)' }}
                  >
                    <i className="bi bi-chevron-left"></i>
                  </button>
                  
                  <div style={{ display: 'flex', gap: '6px' }}>
                    {currentSlides.map((_, i) => (
                      <div
                        key={i}
                        style={{
                          width: '8px',
                          height: '8px',
                          borderRadius: '50%',
                          background: activeSlide === i ? 'var(--accent-gold)' : 'rgba(255, 255, 255, 0.3)',
                          transition: 'all 0.3s'
                        }}
                      />
                    ))}
                  </div>

                  <button
                    onClick={handleNextSlide}
                    style={{
                      background: 'rgba(255, 255, 255, 0.1)',
                      border: '1px solid rgba(255, 255, 255, 0.2)',
                      width: '48px',
                      height: '48px',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      cursor: 'pointer',
                      color: '#fff',
                      fontSize: '1.2rem',
                      transition: 'all 0.2s'
                    }}
                    onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255, 255, 255, 0.25)' }}
                    onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)' }}
                  >
                    <i className="bi bi-chevron-right"></i>
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* Grid of the 6 Structured Prayer Points */}
      <section className="redesign-section" id="list">
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
                    fontSize: '1.2rem',
                    fontWeight: 900,
                    color: '#050609',
                    background: 'var(--gold-metallic)',
                    boxShadow: 'var(--gold-glow)',
                    padding: '8px 14px',
                    borderRadius: '8px',
                    lineHeight: 1
                  }}>
                    {point.num}
                  </span>
                  <div>
                    <h3 style={{ fontSize: '1.15rem', fontWeight: 800, color: 'var(--text-cream)', marginBottom: '8px' }}>
                      {point.title}
                    </h3>
                    <p style={{ fontSize: '0.85rem', color: 'var(--text-cosmic)', lineHeight: '1.5', margin: 0 }}>
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
