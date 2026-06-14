import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import SpotlightCard from '../components/bits/SpotlightCard'

export default function DeborahFellowship() {
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
          <h1>Deborah Fellowship</h1>
          <div className="breadcrumbs">
            <Link to="/">Home</Link>
            <span style={{ margin: '0 8px', color: 'var(--text-cosmic)' }}>/</span>
            <span style={{ color: 'var(--text-cream)' }}>Deborah Fellowship</span>
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
                  Women's Prayer Fellowship
                </motion.h2>
                <motion.p className="lead" variants={fadeInUp} style={{ color: 'var(--text-cosmic)', fontSize: '1.1rem', lineHeight: '1.7', marginBottom: '25px' }}>
                  Deborah Fellowship is a monthly prayer sanctuary dedicated to bringing women together to intercede for their families, local church ministries, outreach missions, and the neighborhood.
                </motion.p>
                <motion.p variants={fadeInUp} style={{ color: 'var(--text-cosmic)', lineHeight: '1.6', marginBottom: '30px' }}>
                  Named after the biblical prophetess Deborah, who stood as a mother in Israel, we believe in empowering wives, mothers, and sisters to grow in spiritual leadership, scriptural wisdom, and prayerful intercession.
                </motion.p>

                {/* Schedule & Timing Info Block */}
                <motion.div variants={fadeInUp} style={{ background: 'rgba(168, 85, 247, 0.08)', borderLeft: '4px solid #a855f7', padding: '24px', borderRadius: '0 12px 12px 0', marginBottom: '30px' }}>
                  <h4 style={{ fontWeight: 800, color: '#c084fc', marginBottom: '10px', fontSize: '1.1rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <i className="bi bi-clock-fill"></i> Schedule & Timings
                  </h4>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0, fontSize: '0.95rem', color: 'var(--text-cosmic)', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    <li><strong style={{ color: 'var(--text-cream)' }}>Timing:</strong> 8:00 PM – 9:30 PM</li>
                    <li><strong style={{ color: 'var(--text-cream)' }}>Frequency:</strong> Every First Wednesday of the Month</li>
                    <li style={{ borderTop: '1px dashed rgba(168, 85, 247, 0.25)', paddingTop: '8px', marginTop: '4px' }}>
                      <strong style={{ color: 'var(--text-cream)' }}>Participation:</strong> Open to all women, wives, and mothers in the fellowship.
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
                <SpotlightCard className="campus-card" spotlightColor="rgba(168, 85, 247, 0.08)" style={{ padding: '40px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '25px' }}>
                    <i className="bi bi-gender-female" style={{ fontSize: '3rem', color: '#a855f7', filter: 'drop-shadow(0 0 8px rgba(168, 85, 247, 0.4))' }}></i>
                    <span style={{ fontSize: '0.8rem', background: 'rgba(168, 85, 247, 0.15)', color: '#c084fc', padding: '5px 14px', borderRadius: '20px', fontWeight: 700, border: '1px solid rgba(168, 85, 247, 0.3)' }}>
                      Join Us
                    </span>
                  </div>

                  <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--text-cream)', marginBottom: '20px' }}>Focus Areas & Activities</h3>
                  
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '15px', fontSize: '0.9rem', color: 'var(--text-cosmic)', marginBottom: '35px' }}>
                    {[
                      'Intercessory Prayer',
                      'Family Blessings',
                      'Missionary Support',
                      'Spiritual Mentorship',
                      'Sisterhood Fellowship',
                      'Testimony Sharing'
                    ].map((activity, i) => (
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }} key={i}>
                        <i className="bi bi-check-circle-fill" style={{ color: '#a855f7', fontSize: '0.9rem' }}></i>
                        <span>{activity}</span>
                      </div>
                    ))}
                  </div>

                  <div style={{ display: 'flex', gap: '15px' }}>
                    <Link to="/events" className="btn-secondary" style={{ flex: 1, textAlign: 'center', fontSize: '0.85rem', padding: '12px 0', border: '1px solid #bf953f', borderRadius: '30px', textDecoration: 'none' }}>
                      Meetings Page
                    </Link>
                    <Link to="/contact" className="btn-primary" style={{ flex: 1, textAlign: 'center', fontSize: '0.85rem', padding: '12px 0', background: 'var(--gold-metallic)', color: '#050609', border: 'none', borderRadius: '30px', fontWeight: 700, textDecoration: 'none' }}>
                      Join / Contact
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
