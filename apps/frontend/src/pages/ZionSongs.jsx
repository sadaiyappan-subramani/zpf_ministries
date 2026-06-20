import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import SpotlightCard from '../components/bits/SpotlightCard'

export default function ZionSongs() {
  const [activeTab, setActiveTab] = useState('newly-released-songs')
  const [selectedVideo, setSelectedVideo] = useState(null)

  const defaultZionSongs = [
    { id: 'gjWVYjgsbvo', title: 'Siluvaiandai Vaa Maganae (Communion/Good Friday Song)', desc: 'Watch and listen to our newly released original track.', category: 'new release' },
    { id: 'G8HSX2oNkOk', title: 'Gethsemanae Poongavinil (Good Friday Song)', desc: 'Watch and listen to our newly released original track.', category: 'new release' },
    { id: 'ahIVNoJZR2k', title: 'Gospel Song on John 3:16', desc: 'Watch and listen to our newly released original track.', category: 'new release' },
    { id: 'Oi7MXSJbhi4', title: 'HE is my everything', desc: 'Watch and listen to our newly released original track.', category: 'new release' },
    { id: 'LmegPb_8LY8', title: 'Way Maker - Miracle Worker', desc: 'Watch and listen to our newly released original track.', category: 'new release' },
    { id: '1rXDQYK7eyk', title: 'Dayavulla devan', desc: 'Watch the gospel video highlight and worship song.', category: 'worship' },
    { id: '7j3ZrHhGMgk', title: 'Samuvel Pol', desc: 'Watch the gospel video highlight and worship song.', category: 'worship' }
  ]

  const [zionSongsList, setZionSongsList] = useState(defaultZionSongs)

  useEffect(() => {
    const fetchSongs = async () => {
      try {
        const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:3000'
        const res = await fetch(`${apiUrl}/content/zion_songs`)
        if (res.ok) {
          const data = await res.json()
          if (data && Array.isArray(data)) {
            setZionSongsList(data)
          }
        }
      } catch (err) {
        console.error('Failed to load dynamic zion songs:', err)
      }
    }

    fetchSongs()
  }, [])

  // Song groupings based on IDs
  const newlyReleasedIds = ['gjWVYjgsbvo', 'G8HSX2oNkOk']
  const zionKidsIds = ['ahIVNoJZR2k', 'Oi7MXSJbhi4', 'LmegPb_8LY8']
  const otherSongsIds = ['1rXDQYK7eyk', '7j3ZrHhGMgk']

  const newlyReleasedList = zionSongsList.filter(song => newlyReleasedIds.includes(song.id))
  const zionKidsList = zionSongsList.filter(song => zionKidsIds.includes(song.id))
  const otherZionSongsList = zionSongsList.filter(song => otherSongsIds.includes(song.id))

  const getYoutubeThumb = (id) => `https://img.youtube.com/vi/${id}/hqdefault.jpg`

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  }

  return (
    <main className="main redesign-mode">

      {/* Page Header */}
      <div className="about-banner">
        <div className="container">
          <h1>Zion Songs</h1>
          <div className="breadcrumbs">
            <Link to="/">Home</Link>
            <span style={{ margin: '0 8px', color: 'var(--text-cosmic)' }}>/</span>
            <span style={{ color: 'var(--accent-gold)' }}>Zion Songs</span>
          </div>
        </div>
      </div>

      {/* Tab Filter Navigation */}
      <section className="redesign-section pb-0">
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'center', gap: '15px', borderBottom: '1px solid var(--border-gold-light)', paddingBottom: '20px', flexWrap: 'wrap' }}>
            <button
              onClick={() => setActiveTab('newly-released-songs')}
              style={{
                background: 'none',
                border: 'none',
                fontSize: '1.1rem',
                fontWeight: 700,
                color: activeTab === 'newly-released-songs' ? 'var(--accent-gold)' : 'var(--text-cosmic)',
                borderBottom: activeTab === 'newly-released-songs' ? '3px solid var(--accent-gold)' : '3px solid transparent',
                paddingBottom: '10px',
                cursor: 'pointer',
                transition: 'all 0.3s ease'
              }}
            >
              Newly Released Songs
            </button>
            <button
              onClick={() => setActiveTab('zion-kids-songs')}
              style={{
                background: 'none',
                border: 'none',
                fontSize: '1.1rem',
                fontWeight: 700,
                color: activeTab === 'zion-kids-songs' ? 'var(--accent-gold)' : 'var(--text-cosmic)',
                borderBottom: activeTab === 'zion-kids-songs' ? '3px solid var(--accent-gold)' : '3px solid transparent',
                paddingBottom: '10px',
                cursor: 'pointer',
                transition: 'all 0.3s ease'
              }}
            >
              Songs by Zion Kids
            </button>
            <button
              onClick={() => setActiveTab('other-zion-songs')}
              style={{
                background: 'none',
                border: 'none',
                fontSize: '1.1rem',
                fontWeight: 700,
                color: activeTab === 'other-zion-songs' ? 'var(--accent-gold)' : 'var(--text-cosmic)',
                borderBottom: activeTab === 'other-zion-songs' ? '3px solid var(--accent-gold)' : '3px solid transparent',
                paddingBottom: '10px',
                cursor: 'pointer',
                transition: 'all 0.3s ease'
              }}
            >
              Other Zion Songs
            </button>
          </div>
        </div>
      </section>

      {/* Content Render Grid */}
      <section className="redesign-section">
        <div className="container">

          {/* TAB 1: NEWLY RELEASED SONGS */}
          {activeTab === 'newly-released-songs' && (
            <div>
              <div className="redesign-section-header">
                <h2>Newly Released Songs</h2>
                <p>Watch and listen to our newly released original tracks.</p>
              </div>
              <div className="row g-4">
                {newlyReleasedList.map((song, idx) => {
                  const coverImg = song.cover || (song.id ? getYoutubeThumb(song.id) : '/assets/img/all_ministries.png')
                  const categoryLabel = song.category || 'new release'
                  const descText = song.desc || 'Watch and listen to our newly released original track.'
                  return (
                    <div className="col-lg-4 col-md-6" key={idx}>
                      <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                        style={{ height: '100%' }}
                      >
                        <SpotlightCard className="feature-card" spotlightColor="rgba(229, 193, 88, 0.12)" style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                          <div className="feature-card-img" style={{ backgroundImage: `url(${coverImg})` }}></div>
                          <div className="feature-card-body" style={{ background: 'var(--bg-glass)', border: '1px solid var(--border-gold-light)', borderTop: 'none', color: 'var(--text-cream)', flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                            <div style={{ marginBottom: '10px' }}>
                              <span style={{ background: 'rgba(229, 193, 88, 0.1)', color: 'var(--accent-gold)', fontSize: '0.75rem', fontWeight: 700, padding: '4px 10px', borderRadius: '20px', textTransform: 'uppercase' }}>
                                {categoryLabel}
                              </span>
                            </div>
                            <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--text-cream)', marginBottom: '10px' }}>
                              {song.title}
                            </h3>
                            <p style={{ fontSize: '0.85rem', color: 'var(--text-cosmic)', lineHeight: '1.5', marginBottom: '20px' }}>
                              {descText}
                            </p>
                            <div style={{ marginTop: 'auto' }}>
                              <button
                                onClick={() => setSelectedVideo(song.id)}
                                style={{
                                  display: 'flex',
                                  alignItems: 'center',
                                  justifyContent: 'center',
                                  gap: '10px',
                                  background: 'var(--gold-metallic)',
                                  border: 'none',
                                  padding: '12px 20px',
                                  borderRadius: '30px',
                                  width: '100%',
                                  cursor: 'pointer',
                                  fontSize: '0.9rem',
                                  fontWeight: 700,
                                  color: '#050609',
                                  boxShadow: 'var(--gold-glow)',
                                  transition: 'all 0.2s ease'
                                }}
                                onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-1.5px)'}
                                onMouseLeave={(e) => e.currentTarget.style.transform = 'none'}
                              >
                                <i className="bi bi-play-fill" style={{ fontSize: '1.2rem' }}></i>
                                <span>Watch Video</span>
                              </button>
                            </div>
                          </div>
                        </SpotlightCard>
                      </motion.div>
                    </div>
                  )
                })}
              </div>
            </div>
          )}

          {/* TAB 2: SONGS BY ZION KIDS */}
          {activeTab === 'zion-kids-songs' && (
            <div>
              <div className="redesign-section-header">
                <h2>Songs by Zion Kids</h2>
                <p>Listen and watch songs performed by the Zion Kids team.</p>
              </div>
              <div className="row g-4">
                {zionKidsList.map((song, idx) => {
                  const coverImg = song.cover || (song.id ? getYoutubeThumb(song.id) : '/assets/img/all_ministries.png')
                  const categoryLabel = song.category || 'new release'
                  const descText = song.desc || 'Watch and listen to our newly released original track.'
                  return (
                    <div className="col-lg-4 col-md-6" key={idx}>
                      <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                        style={{ height: '100%' }}
                      >
                        <SpotlightCard className="feature-card" spotlightColor="rgba(229, 193, 88, 0.12)" style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                          <div className="feature-card-img" style={{ backgroundImage: `url(${coverImg})` }}></div>
                          <div className="feature-card-body" style={{ background: 'var(--bg-glass)', border: '1px solid var(--border-gold-light)', borderTop: 'none', color: 'var(--text-cream)', flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                            <div style={{ marginBottom: '10px' }}>
                              <span style={{ background: 'rgba(229, 193, 88, 0.1)', color: 'var(--accent-gold)', fontSize: '0.75rem', fontWeight: 700, padding: '4px 10px', borderRadius: '20px', textTransform: 'uppercase' }}>
                                {categoryLabel}
                              </span>
                            </div>
                            <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--text-cream)', marginBottom: '10px' }}>
                              {song.title}
                            </h3>
                            <p style={{ fontSize: '0.85rem', color: 'var(--text-cosmic)', lineHeight: '1.5', marginBottom: '20px' }}>
                              {descText}
                            </p>
                            <div style={{ marginTop: 'auto' }}>
                              <button
                                onClick={() => setSelectedVideo(song.id)}
                                style={{
                                  display: 'flex',
                                  alignItems: 'center',
                                  justifyContent: 'center',
                                  gap: '10px',
                                  background: 'var(--gold-metallic)',
                                  border: 'none',
                                  padding: '12px 20px',
                                  borderRadius: '30px',
                                  width: '100%',
                                  cursor: 'pointer',
                                  fontSize: '0.9rem',
                                  fontWeight: 700,
                                  color: '#050609',
                                  boxShadow: 'var(--gold-glow)',
                                  transition: 'all 0.2s ease'
                                }}
                                onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-1.5px)'}
                                onMouseLeave={(e) => e.currentTarget.style.transform = 'none'}
                              >
                                <i className="bi bi-play-fill" style={{ fontSize: '1.2rem' }}></i>
                                <span>Watch Video</span>
                              </button>
                            </div>
                          </div>
                        </SpotlightCard>
                      </motion.div>
                    </div>
                  )
                })}
              </div>
            </div>
          )}

          {/* TAB 3: OTHER ZION SONGS */}
          {activeTab === 'other-zion-songs' && (
            <div>
              <div className="redesign-section-header">
                <h2>Other Zion Songs</h2>
                <p>Listen and watch other original gospel and worship releases.</p>
              </div>
              <div className="row g-4">
                {otherZionSongsList.map((song, idx) => {
                  const coverImg = song.cover || (song.id ? getYoutubeThumb(song.id) : '/assets/img/all_ministries.png')
                  const categoryLabel = song.category || 'worship'
                  const descText = song.desc || 'Watch the gospel video highlight and worship song.'
                  return (
                    <div className="col-lg-4 col-md-6" key={idx}>
                      <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                        style={{ height: '100%' }}
                      >
                        <SpotlightCard className="feature-card" spotlightColor="rgba(229, 193, 88, 0.12)" style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                          <div className="feature-card-img" style={{ backgroundImage: `url(${coverImg})` }}></div>
                          <div className="feature-card-body" style={{ background: 'var(--bg-glass)', border: '1px solid var(--border-gold-light)', borderTop: 'none', color: 'var(--text-cream)', flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                            <div style={{ marginBottom: '10px' }}>
                              <span style={{ background: 'rgba(229, 193, 88, 0.1)', color: 'var(--accent-gold)', fontSize: '0.75rem', fontWeight: 700, padding: '4px 10px', borderRadius: '20px', textTransform: 'uppercase' }}>
                                {categoryLabel}
                              </span>
                            </div>
                            <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--text-cream)', marginBottom: '10px' }}>
                              {song.title}
                            </h3>
                            <p style={{ fontSize: '0.85rem', color: 'var(--text-cosmic)', lineHeight: '1.5', marginBottom: '20px' }}>
                              {descText}
                            </p>
                            <div style={{ marginTop: 'auto' }}>
                              <button
                                onClick={() => setSelectedVideo(song.id)}
                                style={{
                                  display: 'flex',
                                  alignItems: 'center',
                                  justifyContent: 'center',
                                  gap: '10px',
                                  background: 'var(--gold-metallic)',
                                  border: 'none',
                                  padding: '12px 20px',
                                  borderRadius: '30px',
                                  width: '100%',
                                  cursor: 'pointer',
                                  fontSize: '0.9rem',
                                  fontWeight: 700,
                                  color: '#050609',
                                  boxShadow: 'var(--gold-glow)',
                                  transition: 'all 0.2s ease'
                                }}
                                onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-1.5px)'}
                                onMouseLeave={(e) => e.currentTarget.style.transform = 'none'}
                              >
                                <i className="bi bi-play-fill" style={{ fontSize: '1.2rem' }}></i>
                                <span>Watch Video</span>
                              </button>
                            </div>
                          </div>
                        </SpotlightCard>
                      </motion.div>
                    </div>
                  )
                })}
              </div>
            </div>
          )}

        </div>
      </section>

      {/* YOUTUBE LIGHTBOX MODAL */}
      <AnimatePresence>
        {selectedVideo && (
          <motion.div
            className="modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedVideo(null)}
          >
            <motion.div
              className="modal-content"
              style={{ maxWidth: '800px', width: '90%', border: 'none', background: '#000' }}
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              onClick={e => e.stopPropagation()}
            >
              <div className="modal-header" style={{ borderBottom: '1px solid var(--border-gold-light)', background: '#0b0c13', padding: '10px 20px' }}>
                <h3 style={{ margin: 0, color: '#fff', fontSize: '1.1rem' }}>Watching Zion Songs</h3>
                <button className="btn-close" onClick={() => setSelectedVideo(null)} style={{ color: '#fff' }}>
                  <i className="bi bi-x"></i>
                </button>
              </div>
              <div className="modal-body" style={{ padding: 0 }}>
                <div className="ratio ratio-16x9">
                  <iframe
                    src={`https://www.youtube.com/embed/${selectedVideo}?autoplay=1`}
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </main>
  )
}
