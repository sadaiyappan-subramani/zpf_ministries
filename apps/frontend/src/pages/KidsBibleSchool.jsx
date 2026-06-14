import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import SpotlightCard from '../components/bits/SpotlightCard'

export default function KidsBibleSchool() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  }

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  }

  return (
    <main className="main redesign-mode">

      {/* Page Banner */}
      <div className="about-banner">
        <div className="container">
          <h1>Kids Bible School</h1>
          <div className="breadcrumbs">
            <Link to="/">Home</Link>
            <span style={{ margin: '0 8px', color: 'var(--text-cosmic)' }}>/</span>
            <span style={{ color: 'var(--text-cream)' }}>Kids Bible School</span>
          </div>
        </div>
      </div>

      {/* Main Content Section */}
      <section className="redesign-section light-bg">
        <div className="container">
          <div className="row gy-5 align-items-center">
            
            {/* Left Column: Details & Information */}
            <div className="col-lg-6">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={staggerContainer}
              >
                <motion.h2 variants={fadeInUp} style={{ fontSize: '2.2rem', fontWeight: 800, marginBottom: '20px', color: 'var(--accent-gold)' }}>
                  Sunday Children Ministry
                </motion.h2>
                <motion.p className="lead" variants={fadeInUp} style={{ color: 'var(--text-cosmic)', fontSize: '1.1rem', lineHeight: '1.7', marginBottom: '25px' }}>
                  Kids Bible School (KBS) is focused on building strong biblical foundations, scripture memorization, and praise worship in the hearts of children from a young age.
                </motion.p>
                <motion.p variants={fadeInUp} style={{ color: 'var(--text-cosmic)', lineHeight: '1.6', marginBottom: '30px' }}>
                  Our dedicated teachers foster a fun, creative, and spiritually enriching environment where kids learn the word of God, engage in choir and music classes, and participate in annual Bible competitions and vacation camps (VBS).
                </motion.p>

                {/* Timings & Classes Info Block */}
                <motion.div variants={fadeInUp} style={{ background: 'rgba(234, 179, 8, 0.08)', borderLeft: '4px solid #eab308', padding: '24px', borderRadius: '0 12px 12px 0', marginBottom: '30px' }}>
                  <h4 style={{ fontWeight: 800, color: '#fcd34d', marginBottom: '10px', fontSize: '1.1rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <i className="bi bi-clock-fill"></i> Timings & Sessions
                  </h4>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0, fontSize: '0.95rem', color: 'var(--text-cosmic)', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    <li><strong style={{ color: 'var(--text-cream)' }}>Morning Session:</strong> 9:30 AM – 10:30 AM (During HBR/Kothanur Service)</li>
                    <li><strong style={{ color: 'var(--text-cream)' }}>Evening Session:</strong> 5:00 PM – 6:00 PM (During Kothanur Service)</li>
                    <li style={{ borderTop: '1px dashed rgba(234, 179, 8, 0.25)', paddingTop: '8px', marginTop: '4px' }}>
                      <strong style={{ color: 'var(--text-cream)' }}>Age Groups:</strong> Beginners (3-5), Primary (6-8), Juniors (9-12), Teens (13+)
                    </li>
                  </ul>
                </motion.div>
              </motion.div>
            </div>

            {/* Right Column: Spotlight Interactive Activities Card */}
            <div className="col-lg-6">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <SpotlightCard className="campus-card" spotlightColor="rgba(234, 179, 8, 0.08)" style={{ padding: '40px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '25px' }}>
                    <i className="bi bi-book-half" style={{ fontSize: '3rem', color: '#eab308', filter: 'drop-shadow(0 0 8px rgba(234, 179, 8, 0.4))' }}></i>
                    <span style={{ fontSize: '0.8rem', background: 'rgba(234, 179, 8, 0.15)', color: '#fcd34d', padding: '5px 14px', borderRadius: '20px', fontWeight: 700, border: '1px solid rgba(234, 179, 8, 0.3)' }}>
                      Every Sunday
                    </span>
                  </div>

                  <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--text-cream)', marginBottom: '20px' }}>Core Activities & Focus</h3>
                  
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '15px', fontSize: '0.9rem', color: 'var(--text-cosmic)', marginBottom: '35px' }}>
                    {[
                      'Bible Storytelling',
                      'Scripture Memory',
                      'Choir & Singing',
                      'Instrument Lessons',
                      'Annual Bible Exams',
                      'Summer VBS Camps'
                    ].map((activity, i) => (
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }} key={i}>
                        <i className="bi bi-check-circle-fill" style={{ color: '#eab308', fontSize: '0.9rem' }}></i>
                        <span>{activity}</span>
                      </div>
                    ))}
                  </div>

                  <div style={{ display: 'flex', gap: '15px' }}>
                    <Link to="/about#servants" className="btn-secondary" style={{ flex: 1, textAlign: 'center', fontSize: '0.85rem', padding: '12px 0', border: '1px solid #bf953f', borderRadius: '30px', textDecoration: 'none' }}>
                      Meet Teachers
                    </Link>
                    <Link to="/gallery" className="btn-primary" style={{ flex: 1, textAlign: 'center', fontSize: '0.85rem', padding: '12px 0', background: 'var(--gold-metallic)', color: '#050609', border: 'none', borderRadius: '30px', fontWeight: 700, textDecoration: 'none' }}>
                      View Gallery
                    </Link>
                  </div>
                </SpotlightCard>
              </motion.div>
            </div>

          </div>
        </div>
      </section>

    </main>
  )
}
