import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import SpotlightCard from '../components/bits/SpotlightCard'

export default function ZionSongs() {
  const [activeTab, setActiveTab] = useState('new-releases')
  const [selectedVideo, setSelectedVideo] = useState(null)

  const defaultZionSongs = [
    { id: 'ahIVNoJZR2k', title: 'Gospel Song on John 3:16', desc: 'Watch the gospel video highlight and worship song.', category: 'worship' },
    { id: 'Oi7MXSJbhi4', title: 'HE is my everything ', desc: 'Watch the gospel video highlight and worship song.', category: 'worship' },
    { id: 'LmegPb_8LY8', title: 'Way Maker - Miracle Worker', desc: 'Watch the gospel video highlight and worship song.', category: 'worship' },
    { id: 'gjWVYjgsbvo', title: 'Siluvaiandai Vaa Maganae (Communion/Good Friday)', desc: 'Watch the gospel video highlight and worship song.', category: 'communion' },
    { id: 'G8HSX2oNkOk', title: 'Gethsemanae Poongavinil (Good Friday)', desc: 'Watch the gospel video highlight and worship song.', category: 'good friday' },
    { id: '1rXDQYK7eyk', title: 'Dayavulla Devan', desc: 'Watch the gospel video highlight and worship song.', category: 'worship' },
    { id: '7j3ZrHhGMgk', title: 'Samuvel Pol', desc: 'Watch the gospel video highlight and worship song.', category: 'worship' }
  ]

  const defaultCasualCovers = [
    { id: 'TGjOdhv1Nhw', title: 'Take My Life', desc: 'Watch the gospel video highlight and worship song.', category: 'acoustic' },
    { id: 'Mre7sMP4x8s', title: 'Naan Vaalvathu', desc: 'Watch the gospel video highlight and worship song.', category: 'acoustic' },
    { id: 'nj8tjql_4_Y', title: 'Bless the LORD oh my Soul', desc: 'Watch the gospel video highlight and worship song.', category: 'acoustic' },
    { id: '1E7fi6_eqp8', title: 'Chinna Manusanukkulla', desc: 'Watch the gospel video highlight and worship song.', category: 'acoustic' },
    { id: 't1ve4SPQxU4', title: 'He is my Everything', desc: 'Watch the gospel video highlight and worship song.', category: 'acoustic' },
    { id: 's1vUKbApxdw', title: 'Unga Naamam Uyaranum', desc: 'Watch the gospel video highlight and worship song.', category: 'acoustic' },
    { id: 'TiPelJY81eQ', title: 'Unga Kirubai', desc: 'Watch the gospel video highlight and worship song.', category: 'acoustic' },
    { id: 'Jvk8HFrBrQU', title: 'Aadaram Neerthanaiyya', desc: 'Watch the gospel video highlight and worship song.', category: 'acoustic' },
    { id: 'PLDeUIFs_FU', title: 'Saranadaivaen', desc: 'Watch the gospel video highlight and worship song.', category: 'acoustic' },
    { id: '-BbX46j22V8', title: 'Alangara Vasalalae', desc: 'Watch the gospel video highlight and worship song.', category: 'acoustic' },
    { id: '3wkXygdy7CQ', title: 'Vaanathilum Intha Boomiyilum', desc: 'Watch the gospel video highlight and worship song.', category: 'acoustic' },
    { id: 'WcQ9zZ-9irI', title: 'Um Vasanam En Kangalai', desc: 'Watch the gospel video highlight and worship song.', category: 'acoustic' },
    { id: 'OY1kHI-RNac', title: 'Aathumamae En Ullamae', desc: 'Watch the gospel video highlight and worship song.', category: 'acoustic' },
    { id: 'QqFkV7mOw9I', title: 'Ennai Alithavarae', desc: 'Watch the gospel video highlight and worship song.', category: 'acoustic' },
    { id: 'MYghky75U_Q', title: 'Yehovayeerae', desc: 'Watch the gospel video highlight and worship song.', category: 'acoustic' },
    { id: 'fVvbm4wDAQM', title: 'Unga Naamam Uyaranum (Alt)', desc: 'Watch the gospel video highlight and worship song.', category: 'acoustic' },
    { id: 'C5RPPkk3-Ns', title: 'Maatrumae Ennai Maatrumae', desc: 'Watch the gospel video highlight and worship song.', category: 'acoustic' }
  ]

  const [zionSongsList, setZionSongsList] = useState(defaultZionSongs)
  const [casualCoversList, setCasualCoversList] = useState(defaultCasualCovers)

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

    const fetchCovers = async () => {
      try {
        const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:3000'
        const res = await fetch(`${apiUrl}/content/casual_covers`)
        if (res.ok) {
          const data = await res.json()
          if (data && Array.isArray(data)) {
            setCasualCoversList(data)
          }
        }
      } catch (err) {
        console.error('Failed to load dynamic casual covers:', err)
      }
    }

    fetchSongs()
    fetchCovers()
  }, [])

  // Derived list: Newly released songs are the first 3 original songs
  const newlyReleasedList = zionSongsList.slice(0, 3)

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
          <div style={{ display: 'flex', justifyContent: 'center', gap: '15px', borderBottom: '1px solid var(--border-gold-light)', paddingBottom: '20px' }}>
            <button
              onClick={() => setActiveTab('new-releases')}
              style={{
                background: 'none',
                border: 'none',
                fontSize: '1.1rem',
                fontWeight: 700,
                color: activeTab === 'new-releases' ? 'var(--accent-gold)' : 'var(--text-cosmic)',
                borderBottom: activeTab === 'new-releases' ? '3px solid var(--accent-gold)' : '3px solid transparent',
                paddingBottom: '10px',
                cursor: 'pointer',
                transition: 'all 0.3s ease'
              }}
            >
              Newly Released Songs
            </button>
            <button
              onClick={() => setActiveTab('released-songs')}
              style={{
                background: 'none',
                border: 'none',
                fontSize: '1.1rem',
                fontWeight: 700,
                color: activeTab === 'released-songs' ? 'var(--accent-gold)' : 'var(--text-cosmic)',
                borderBottom: activeTab === 'released-songs' ? '3px solid var(--accent-gold)' : '3px solid transparent',
                paddingBottom: '10px',
                cursor: 'pointer',
                transition: 'all 0.3s ease'
              }}
            >
              Songs Released
            </button>
            <button
              onClick={() => setActiveTab('cover-songs')}
              style={{
                background: 'none',
                border: 'none',
                fontSize: '1.1rem',
                fontWeight: 700,
                color: activeTab === 'cover-songs' ? 'var(--accent-gold)' : 'var(--text-cosmic)',
                borderBottom: activeTab === 'cover-songs' ? '3px solid var(--accent-gold)' : '3px solid transparent',
                paddingBottom: '10px',
                cursor: 'pointer',
                transition: 'all 0.3s ease'
              }}
            >
              Cover Songs
            </button>
          </div>
        </div>
      </section>

      {/* Content Render Grid */}
      <section className="redesign-section">
        <div className="container">

          {/* TAB 1: NEW RELEASES */}
          {activeTab === 'new-releases' && (
            <div>
              <div className="redesign-section-header">
                <h2>Newly Released Tracks</h2>
                <p>Listen to our latest original gospel singles and translation tracks released recently.</p>
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

          {/* TAB 2: SONGS RELEASED */}
          {activeTab === 'released-songs' && (
            <div>
              <div className="redesign-section-header">
                <h2>Zion Released Albums & Tracks</h2>
                <p>Browse our complete list of released original worship singles, choir tracks, and translations.</p>
              </div>
              <div className="row g-4">
                {zionSongsList.map((song, idx) => {
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

          {/* TAB 3: COVER SONGS */}
          {activeTab === 'cover-songs' && (
            <div>
              <div className="redesign-section-header">
                <h2>Casual Covers & Acoustic Jams</h2>
                <p>Listen to acoustic sessions, guitar covers, and fellowship worship times recorded casually.</p>
              </div>
              <div className="row g-4">
                {casualCoversList.map((cover, idx) => {
                  const coverImg = cover.cover || (cover.id ? getYoutubeThumb(cover.id) : '/assets/img/all_ministries.png')
                  const categoryLabel = cover.category || 'acoustic cover'
                  const descText = cover.desc || 'Watch the acoustic cover and praise jam highlight.'
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
                              {cover.title}
                            </h3>
                            <p style={{ fontSize: '0.85rem', color: 'var(--text-cosmic)', lineHeight: '1.5', marginBottom: '20px' }}>
                              {descText}
                            </p>
                            <div style={{ marginTop: 'auto' }}>
                              <button
                                onClick={() => setSelectedVideo(cover.id)}
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
