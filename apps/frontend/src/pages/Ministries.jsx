import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import SpotlightCard from '../components/bits/SpotlightCard'

export default function Ministries() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 35 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
  }

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12
      }
    }
  }

  return (
    <main className="main redesign-mode">

      {/* 1. Page Banner */}
      <div className="about-banner">
        <div className="container">
          <h1>Our Ministries</h1>
          <div className="breadcrumbs">
            <Link to="/">Home</Link>
            <span style={{ margin: '0 8px', color: '#999' }}>/</span>
            <span style={{ color: '#333' }}>Ministries</span>
          </div>
        </div>
      </div>

      {/* 2. Ministries & Equipping Sections */}
      <section className="redesign-section light-bg">
        <div className="container">
          <div className="redesign-section-header">
            <h2>Outreach & Support</h2>
            <p>Zion Prayer Fellowship acts as a channel of blessing, supporting active building projects, missionary networks, education programs, and community welfare.</p>
          </div>

          {/* Outreach Support Grid */}
          <motion.div 
            className="row g-4" 
            style={{ marginBottom: '60px' }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={staggerContainer}
          >
            {[
              { title: 'Church Construction', desc: 'Constructed new houses of worship and currently supporting ongoing building projects in rural zones.', icon: 'bi-bank', color: '#f97316' },
              { title: 'Churches Supported', desc: 'Providing financial and spiritual backing to local churches, evangelists, and pastors.', icon: 'bi-heart-fill', color: '#f97316' },
              { title: 'Kids & Orphan Education', desc: 'Funding basic education, classroom support, and study fees for orphans and children in need.', icon: 'bi-mortarboard', color: '#f97316' },
              { title: 'Bible College Students', desc: 'Supporting students studying theology to become future ministers of the Gospel.', icon: 'bi-backpack', color: '#f97316' },
              { title: 'Social Care Ministries', desc: 'Providing widow support, aiding blind evangelists, and funding treatments for sick people.', icon: 'bi-bandaid', color: '#f97316' }
            ].map((item, idx) => (
              <div className="col-lg-4 col-md-6" key={idx}>
                <motion.div variants={fadeInUp} style={{ height: '100%' }}>
                  <div className="campus-card" style={{ height: '100%', padding: '24px' }}>
                    <i className={`bi ${item.icon}`} style={{ fontSize: '1.8rem', color: item.color, marginBottom: '10px' }}></i>
                    <h4 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#1a1a1a', marginBottom: '8px' }}>{item.title}</h4>
                    <p style={{ fontSize: '0.85rem', color: '#666', lineHeight: '1.5', margin: 0 }}>{item.desc}</p>
                  </div>
                </motion.div>
              </div>
            ))}
          </motion.div>

          {/* Jericho Prayer Drives Highlight Banner */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{ marginBottom: '80px' }}
          >
            <SpotlightCard className="feature-card" spotlightColor="rgba(37, 99, 235, 0.08)" style={{ border: '1px solid #eaeaea', borderRadius: '16px', overflow: 'hidden' }}>
              <div className="row g-0 align-items-center">
                <div className="col-lg-6">
                  <div style={{ padding: '40px' }}>
                    <span style={{ background: '#eff6ff', color: '#2563eb', fontSize: '0.75rem', fontWeight: 700, padding: '4px 12px', borderRadius: '20px', textTransform: 'uppercase', display: 'inline-block', marginBottom: '15px' }}>
                      Outreach Ministry
                    </span>
                    <h4 style={{ fontSize: '1.6rem', fontWeight: 800, color: '#1a1a1a', marginBottom: '15px' }}>Jericho Prayer Drives</h4>
                    <p style={{ fontSize: '0.95rem', color: '#666', lineHeight: '1.6', margin: 0 }}>
                      We drive prayers actively through cities, invoking blessings, and praising God in industrial areas, neighborhoods, and outreach pathways to proclaim His glory and cover the land in prayer.
                    </p>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div style={{ backgroundImage: `url('/assets/img/bible_club_banner.png')`, backgroundSize: 'cover', backgroundPosition: 'center', height: '300px', width: '100%' }}></div>
                </div>
              </div>
            </SpotlightCard>
          </motion.div>

          {/* Equipping & Edifying Section */}
          <div id="edifying-one-another">
            <div className="redesign-section-header" style={{ marginBottom: '35px' }}>
              <h2>Equipping & Edifying</h2>
              <p>We are committed to training, raising, and releasing believers to fulfill their spiritual callings in the church and outreach fields. Our structured edification path empowers every member to grow and serve.</p>
            </div>

            <motion.div 
              className="row g-4"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={staggerContainer}
            >
              {/* Category 1: Spiritual Growth */}
              <div className="col-lg-4 col-md-6">
                <motion.div variants={fadeInUp} style={{ height: '100%' }}>
                  <SpotlightCard className="campus-card" spotlightColor="rgba(37, 99, 235, 0.08)" style={{ padding: '25px', height: '100%', display: 'flex', flexDirection: 'column' }}>
                    <i className="bi bi-book-half" style={{ fontSize: '2rem', color: '#2563eb', marginBottom: '15px', display: 'block' }}></i>
                    <h4 style={{ fontSize: '1.2rem', fontWeight: 800, marginBottom: '12px', color: '#1a1a1a' }}>Spiritual Growth</h4>
                    <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.88rem', color: '#555' }}>
                      <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <i className="bi bi-patch-check-fill" style={{ color: '#2563eb' }}></i>
                        Partaking in all Fellowships
                      </li>
                      <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <i className="bi bi-patch-check-fill" style={{ color: '#2563eb' }}></i>
                        Bible Knowledge & Tests
                      </li>
                      <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <i className="bi bi-patch-check-fill" style={{ color: '#2563eb' }}></i>
                        Spiritual Mentorship Training
                      </li>
                    </ul>
                  </SpotlightCard>
                </motion.div>
              </div>

              {/* Category 2: Leadership & Service */}
              <div className="col-lg-4 col-md-6">
                <motion.div variants={fadeInUp} style={{ height: '100%' }}>
                  <SpotlightCard className="campus-card" spotlightColor="rgba(37, 99, 235, 0.08)" style={{ padding: '25px', height: '100%', display: 'flex', flexDirection: 'column' }}>
                    <i className="bi bi-award-fill" style={{ fontSize: '2rem', color: '#2563eb', marginBottom: '15px', display: 'block' }}></i>
                    <h4 style={{ fontSize: '1.2rem', fontWeight: 800, marginBottom: '12px', color: '#1a1a1a' }}>Leadership & Service</h4>
                    <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.88rem', color: '#555' }}>
                      <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <i className="bi bi-patch-check-fill" style={{ color: '#2563eb' }}></i>
                        Preaching & Serving
                      </li>
                      <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <i className="bi bi-patch-check-fill" style={{ color: '#2563eb' }}></i>
                        Engaging in Support Ministries
                      </li>
                      <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <i className="bi bi-patch-check-fill" style={{ color: '#2563eb' }}></i>
                        Haggai Leadership Training
                      </li>
                    </ul>
                  </SpotlightCard>
                </motion.div>
              </div>

              {/* Category 3: Missions & Studies */}
              <div className="col-lg-4 col-md-6">
                <motion.div variants={fadeInUp} style={{ height: '100%' }}>
                  <SpotlightCard className="campus-card" spotlightColor="rgba(37, 99, 235, 0.08)" style={{ padding: '25px', height: '100%', display: 'flex', flexDirection: 'column' }}>
                    <i className="bi bi-globe-americas" style={{ fontSize: '2rem', color: '#2563eb', marginBottom: '15px', display: 'block' }}></i>
                    <h4 style={{ fontSize: '1.2rem', fontWeight: 800, marginBottom: '12px', color: '#1a1a1a' }}>Missions & Studies</h4>
                    <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.88rem', color: '#555' }}>
                      <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <i className="bi bi-patch-check-fill" style={{ color: '#2563eb' }}></i>
                        Visiting Active Mission Fields
                      </li>
                      <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <i className="bi bi-patch-check-fill" style={{ color: '#2563eb' }}></i>
                        Short-term Missionary Training
                      </li>
                      <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <i className="bi bi-patch-check-fill" style={{ color: '#2563eb' }}></i>
                        Theological Studies (M.Div)
                      </li>
                    </ul>
                  </SpotlightCard>
                </motion.div>
              </div>
            </motion.div>
          </div>

        </div>
      </section>

    </main>
  )
}
