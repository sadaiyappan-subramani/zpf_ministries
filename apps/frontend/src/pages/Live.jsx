import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

export default function Live() {
  return (
    <main className="main redesign-mode">
      
      {/* Banner */}
      <div className="about-banner">
        <div className="container">
          <h1>Live Broadcast</h1>
          <div className="breadcrumbs">
            <Link to="/">Home</Link>
            <span style={{ margin: '0 8px', color: '#999' }}>/</span>
            <span style={{ color: '#333' }}>Live</span>
          </div>
        </div>
      </div>

      {/* Live Video Player Stream */}
      <section className="redesign-section light-bg">
        <div className="container">
          <div className="row gy-5">
            
            {/* Live Video Embed */}
            <div className="col-lg-8">
              <motion.div
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
              >
                <div style={{ borderRadius: '16px', overflow: 'hidden', border: '1px solid #eaeaea', boxShadow: '0 15px 40px rgba(0,0,0,0.08)' }}>
                  <div className="ratio ratio-16x9">
                    {/* Placeholder live stream or latest broadcast video link */}
                    <iframe
                      src="https://www.youtube.com/embed/live_stream?channel=ZPF_MINISTRIES_PLACEHOLDER"
                      title="ZPF Ministries Live Broadcast"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                  <div style={{ padding: '24px', background: '#ffffff', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '15px' }}>
                    <div>
                      <span style={{ background: '#ef4444', color: '#fff', fontSize: '0.75rem', fontWeight: 700, padding: '4px 10px', borderRadius: '20px', textTransform: 'uppercase', marginRight: '10px' }}>
                        ● Live
                      </span>
                      <h3 style={{ display: 'inline-block', fontSize: '1.25rem', fontWeight: 800, color: '#1a1a1a', margin: 0 }}>
                        Zion Prayer Fellowship Sunday Service
                      </h3>
                    </div>
                    <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" style={{ background: '#ef4444', color: '#fff', padding: '10px 20px', fontSize: '0.85rem', fontWeight: 700, textTransform: 'uppercase', borderRadius: '4px', textDecoration: 'none' }}>
                      Watch on YouTube
                    </a>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Timetable/Brief details */}
            <div className="col-lg-4">
              <div className="campus-card" style={{ padding: '30px', height: '100%' }}>
                <i className="bi bi-broadcast-pin" style={{ fontSize: '2.5rem', color: '#ef4444', marginBottom: '15px' }}></i>
                <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#111', marginBottom: '15px' }}>Broadcast Schedule</h3>
                <p style={{ fontSize: '0.9rem', color: '#666', lineHeight: '1.6' }}>
                  If the live stream is currently offline, you can catch up with our regularly scheduled weekly broadcasts:
                </p>
                <div style={{ marginTop: '20px' }}>
                  <div style={{ borderBottom: '1px solid #eee', paddingBottom: '10px', marginBottom: '10px' }}>
                    <strong style={{ display: 'block', color: '#111', fontSize: '0.95rem' }}>Sunday Morning Service</strong>
                    <span style={{ fontSize: '0.85rem', color: '#666' }}>9:00 AM — 12:30 PM (Weekly)</span>
                  </div>
                  <div style={{ borderBottom: '1px solid #eee', paddingBottom: '10px', marginBottom: '10px' }}>
                    <strong style={{ display: 'block', color: '#111', fontSize: '0.95rem' }}>Friday Covenant Blessing</strong>
                    <span style={{ fontSize: '0.85rem', color: '#666' }}>10:00 AM — 1:00 PM (Weekly)</span>
                  </div>
                  <div>
                    <strong style={{ display: 'block', color: '#111', fontSize: '0.95rem' }}>Tuesday Open Gate Prayer</strong>
                    <span style={{ fontSize: '0.85rem', color: '#666' }}>5:00 AM — 6:00 AM (Online Only)</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </main>
  )
}
