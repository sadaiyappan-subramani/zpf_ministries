import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import SpotlightCard from '../components/bits/SpotlightCard'

export default function About() {
  const [dhasPhotoIndex, setDhasPhotoIndex] = React.useState(0)
  const [activeTab, setActiveTab] = useState('leadership')
  const dhasPhotos = [
    '/assets/img/dhas_church.png',
    '/assets/img/dhas_outside.png'
  ]

  React.useEffect(() => {
    const timer = setInterval(() => {
      setDhasPhotoIndex((prev) => (prev + 1) % dhasPhotos.length)
    }, 4500)
    return () => clearInterval(timer)
  }, [])

  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
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

      {/* 1. ABOUT HERO BANNER */}
      <div className="about-banner">
        <div className="container">
          <h1>About Us</h1>
          <div className="breadcrumbs">
            <Link to="/">Home</Link>
            <span className="mx-2" style={{ margin: '0 8px', color: 'var(--text-cosmic)' }}>/</span>
            <span style={{ color: 'var(--text-cream)' }}>About</span>
          </div>
        </div>
      </div>

      {/* 2. WHO WE ARE & FOUNDER */}
      <section className="redesign-section">
        <div className="container">
          <div className="row align-items-center gy-5">

            {/* History Details */}
            <div className="col-lg-6">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={staggerContainer}
              >
                <motion.h2 variants={fadeInUp} style={{ fontSize: '2.4rem', marginBottom: '20px' }}>
                  Our Story
                </motion.h2>
                <motion.p className="lead" variants={fadeInUp} style={{ fontSize: '1.1rem', color: 'var(--text-cream)', marginBottom: '20px', lineHeight: '1.8', fontWeight: 500 }}>
                  Zion Prayer Fellowship (ZPF) was founded in 2002 under intense societal restrictions in Saudi Arabia by Pastor Dhas. Our Fellowship began as a defiant step of faith with just two families and four bachelors. Pastor Dhas was a radical pioneer known for his strict discipline, burning authority, and an absolute refusal to compromise on biblical truth, beautifully balancing this fearless nature with a deeply loving, fatherly heart that embraced all people.
                </motion.p>

                <motion.div variants={fadeInUp} style={{ background: 'rgba(229, 193, 88, 0.08)', borderLeft: '4px solid var(--accent-gold)', padding: '15px 20px', marginBottom: '20px', borderRadius: '0 8px 8px 0' }}>
                  <h4 style={{ fontWeight: 800, color: 'var(--text-cream)', marginBottom: '5px', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Defiant Step of Faith</h4>
                  <p style={{ color: 'var(--accent-gold)', margin: 0, fontSize: '1.05rem', fontWeight: 700 }}>Founded July 2002 — Saudi Arabia</p>
                </motion.div>

                <motion.p variants={fadeInUp} style={{ color: 'var(--text-cosmic)', lineHeight: '1.7', marginBottom: '20px' }}>
                  Driven by a profound global vision for souls, he heavily supported church-planting ministries across North India and demonstrated legendary resilience—continuing to relentlessly gather believers for worship without ever canceling a single service, even after facing government crackdowns and a three-day imprisonment.
                </motion.p>
                <motion.p variants={fadeInUp} style={{ color: 'var(--text-cosmic)', lineHeight: '1.7' }}>
                  Today, the thriving, vision-driven church stands as an enduring testament to the sacrificial seed he sowed, having evolved into a powerhouse of intercession where the anointing of prayer is so heavy that timers are used to manage continuous worship. Operating on the conviction that radical prayer breaks demonic strongholds and shifts national circumstances, the ministry continues to raise a resilient army of young prayer warriors dedicated to the work of the Gospel.
                </motion.p>
              </motion.div>
            </div>

            {/* Founder Card */}
            <div className="col-lg-6">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <SpotlightCard className="pastor-family-card" spotlightColor="rgba(229, 193, 88, 0.12)">
                  <img
                    src={dhasPhotos[dhasPhotoIndex]}
                    alt="Founder Pas. Perinba Dhas and Wife"
                    className="pastor-family-card-img"
                    style={{
                      transition: 'opacity 0.6s ease-in-out',
                      width: '100%',
                      height: '580px',
                      objectFit: 'cover'
                    }}
                  />
                  <div className="pastor-family-card-body">
                    <h3 className="pastor-family-card-title">Pas. Perinba Dhas</h3>
                    <p className="pastor-family-card-role">Our Founder & Senior Pastor</p>
                  </div>
                </SpotlightCard>
              </motion.div>
            </div>

          </div>

          {/* Founder's Families */}
          <div style={{ marginTop: '60px', paddingTop: '40px', borderTop: '1px dashed rgba(255, 255, 255, 0.15)' }}>
            <div className="redesign-section-header" style={{ marginBottom: '40px' }}>
              <h2>Founder's Families</h2>
              <p>We honor the continuing legacy of our Founder Bro. Perinba Dhas through the active service of his family members supporting the fellowship.</p>
            </div>
            <div className="row g-4 justify-content-center">
              {/* Jemima Lydia's Family Card */}
              <div className="col-lg-6 col-md-6">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <SpotlightCard className="pastor-family-card" spotlightColor="rgba(229, 193, 88, 0.12)">
                    <div style={{ position: 'relative', height: '480px', width: '100%', overflow: 'hidden', backgroundColor: '#f8f9fa' }}>
                      <img
                        src="/assets/img/daughter_family_2.jpg"
                        alt=""
                        style={{
                          position: 'absolute',
                          top: 0,
                          left: 0,
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover',
                          filter: 'blur(12px) brightness(0.95)',
                          opacity: 0.4,
                          transform: 'scale(1.1)'
                        }}
                      />
                      <img
                        src="/assets/img/daughter_family_2.jpg"
                        alt="Founder's Daughter and Family"
                        className="pastor-family-card-img"
                        style={{
                          position: 'relative',
                          width: '100%',
                          height: '100%',
                          objectFit: 'contain',
                          zIndex: 1
                        }}
                      />
                    </div>
                    <div className="pastor-family-card-body" style={{ padding: '20px 15px' }}>
                      <h3 className="pastor-family-card-title" style={{ fontSize: '1.15rem' }}>Jemima Lydia's Family</h3>
                      <p className="pastor-family-card-role" style={{ fontSize: '0.8rem' }}>Daughter's Family</p>
                    </div>
                  </SpotlightCard>
                </motion.div>
              </div>

              {/* Aileen Sonia's Family Card */}
              <div className="col-lg-6 col-md-6">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <SpotlightCard className="pastor-family-card" spotlightColor="rgba(229, 193, 88, 0.12)">
                    <div style={{ position: 'relative', height: '480px', width: '100%', overflow: 'hidden', backgroundColor: '#f8f9fa' }}>
                      <img
                        src="/assets/img/aileen_sonia_family.jpg"
                        alt=""
                        style={{
                          position: 'absolute',
                          top: 0,
                          left: 0,
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover',
                          filter: 'blur(12px) brightness(0.95)',
                          opacity: 0.4,
                          transform: 'scale(1.1)'
                        }}
                      />
                      <img
                        src="/assets/img/aileen_sonia_family.jpg"
                        alt="Aileen Sonia's Family"
                        className="pastor-family-card-img"
                        style={{
                          position: 'relative',
                          width: '100%',
                          height: '100%',
                          objectFit: 'contain',
                          zIndex: 1
                        }}
                      />
                    </div>
                    <div className="pastor-family-card-body" style={{ padding: '20px 15px' }}>
                      <h3 className="pastor-family-card-title" style={{ fontSize: '1.15rem' }}>Aileen Sonia's Family</h3>
                      <p className="pastor-family-card-role" style={{ fontSize: '0.8rem' }}>Daughter's Family</p>
                    </div>
                  </SpotlightCard>
                </motion.div>
              </div>

              {/* John Wesley's Family Card */}
              <div className="col-lg-6 col-md-6">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <SpotlightCard className="pastor-family-card" spotlightColor="rgba(229, 193, 88, 0.12)">
                    <div style={{ position: 'relative', height: '480px', width: '100%', overflow: 'hidden', backgroundColor: '#f8f9fa' }}>
                      <img
                        src="/assets/img/john_wesley_family.jpg"
                        alt=""
                        style={{
                          position: 'absolute',
                          top: 0,
                          left: 0,
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover',
                          filter: 'blur(12px) brightness(0.95)',
                          opacity: 0.4,
                          transform: 'scale(1.1)'
                        }}
                      />
                      <img
                        src="/assets/img/john_wesley_family.jpg"
                        alt="John Wesley's Family"
                        className="pastor-family-card-img"
                        style={{
                          position: 'relative',
                          width: '100%',
                          height: '100%',
                          objectFit: 'contain',
                          zIndex: 1
                        }}
                      />
                    </div>
                    <div className="pastor-family-card-body" style={{ padding: '20px 15px' }}>
                      <h3 className="pastor-family-card-title" style={{ fontSize: '1.15rem' }}>John Wesley's Family</h3>
                      <p className="pastor-family-card-role" style={{ fontSize: '0.8rem' }}>Son's Family</p>
                    </div>
                  </SpotlightCard>
                </motion.div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 3. WHAT WE BELIEVE */}
      <section className="redesign-section" id="what-we-believe">
        <div className="container">
          <div className="redesign-section-header">
            <h2>What We Believe?</h2>
            <p>Our statement of faith underpins all our ministries, teachings, and spiritual growth initiatives.</p>
          </div>

          <div className="belief-grid">
            {/* Card 1: Holy Scripture */}
            <div className="belief-card">
              <i className="bi bi-book belief-card-icon"></i>
              <h3 className="belief-card-title">Holy Scripture</h3>
              <p className="belief-card-text">
                We trust the 66 books of the Bible as God’s fully inspired, complete, and authoritative word to humanity.
              </p>
              <span className="belief-card-scripture">
                Psalms 19:7, 2 Timothy 3:16-18
              </span>
            </div>

            {/* Card 2: The Holy Trinity */}
            <div className="belief-card">
              <i className="bi bi-shield-check belief-card-icon"></i>
              <h3 className="belief-card-title">The Holy Trinity</h3>
              <p className="belief-card-text">
                Our faith rests in the one true God, who has revealed Himself from all eternity in three distinct Persons: Father, Son, and Holy Spirit.
              </p>
              <span className="belief-card-scripture">
                Numbers 6:24-26; Matthew 3:16-17; 2 Corinthians 13:14
              </span>
            </div>

            {/* Card 3: Jesus Christ */}
            <div className="belief-card">
              <i className="bi bi-heart-pulse belief-card-icon"></i>
              <h3 className="belief-card-title">Jesus Christ</h3>
              <p className="belief-card-text">
                We believe in the complete divinity and humanity of Jesus Christ: His miraculous virgin birth, His sinless life, and His sacrificial death on our behalf. We believe He physically conquered the grave, ascended to heaven, and will return in person to gather His people.
              </p>
              <span className="belief-card-scripture">
                1 Corinthians 15
              </span>
            </div>

            {/* Card 4: Fall & Redemption */}
            <div className="belief-card">
              <i className="bi bi-person-x belief-card-icon"></i>
              <h3 className="belief-card-title">Fall & Redemption</h3>
              <p className="belief-card-text">
                We believe that apart from God, all people are spiritually dead and completely separated from Him. The only way to receive forgiveness is to turn away from sin and trust completely in the death and resurrection of Jesus Christ.
              </p>
              <span className="belief-card-scripture">
                Isaiah 53:4-12; Romans 3:23, Ephesians 2:5
              </span>
            </div>

            {/* Card 5: Water Baptism */}
            <div className="belief-card">
              <i className="bi bi-droplet-half belief-card-icon"></i>
              <h3 className="belief-card-title">Water Baptism</h3>
              <p className="belief-card-text">
                We believe in the Water baptism by full immersion, following the new birth, administered in the name of the Father, the Son, and the Holy Spirit.
              </p>
              <span className="belief-card-scripture">
                Ezekiel 36:26-27; Matthew 28:19-20; Mark 16:16
              </span>
            </div>

            {/* Card 6: Spiritual Rebirth */}
            <div className="belief-card">
              <i className="bi bi-arrow-repeat belief-card-icon"></i>
              <h3 className="belief-card-title">Spiritual Rebirth</h3>
              <p className="belief-card-text">
                We affirm that the Holy Spirit renews our inner being, granting us a spiritual rebirth and making us true children of God.
              </p>
              <span className="belief-card-scripture">
                John 3:3-6; Ephesians 1:13-14; 1 Corinthians 12:13
              </span>
            </div>

            {/* Card 7: Justification */}
            <div className="belief-card">
              <i className="bi bi-bookmark-check belief-card-icon"></i>
              <h3 className="belief-card-title">Justification</h3>
              <p className="belief-card-text">
                We are justified by faith alone, which inevitably produces good works to God's glory.
              </p>
              <span className="belief-card-scripture">
                Ephesians 2:8-10; 1 Corinthians 10:31
              </span>
            </div>

            {/* Card 8: Holy Spirit Power */}
            <div className="belief-card">
              <i className="bi bi-fire belief-card-icon"></i>
              <h3 className="belief-card-title">Holy Spirit Power</h3>
              <p className="belief-card-text">
                We believe we must be continually filled with the Holy Spirit to receive the power to witness for Christ through both our words and our lives.
              </p>
              <span className="belief-card-scripture">
                Joel 2:28-30; John 16:7-11 & 13-14; Acts 2:38 & 11:15
              </span>
            </div>

            {/* Card 9: Eternal Destiny */}
            <div className="belief-card">
              <i className="bi bi-sunrise belief-card-icon"></i>
              <h3 className="belief-card-title">Eternal Destiny</h3>
              <p className="belief-card-text">
                We believe in the resurrection of all people—believers to eternal life and unbelievers to eternal judgment.
              </p>
              <span className="belief-card-scripture">
                Ecclesiastes 12:14; 2 Corinthians 5:10; Hebrews 9:27; Revelation 20:12-13
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 4. OUR SERVANTS */}
      <section className="redesign-section" id="servants">
        <div className="container">
          <div className="redesign-section-header">
            <h2>Our Servants</h2>
            <p>Meet the leaders, teachers, and coordinators who serve dedicatedly to build Zion Prayer Fellowship.</p>
          </div>

          {/* Interactive Servants Tab Selector */}
          <div className="servants-tab-container">
            <div className="servants-tabs">
              <button
                className={`servants-tab-btn ${activeTab === 'leadership' ? 'active' : ''}`}
                onClick={() => setActiveTab('leadership')}
              >
                Leadership & Elders
              </button>
              <button
                className={`servants-tab-btn ${activeTab === 'service' ? 'active' : ''}`}
                onClick={() => setActiveTab('service')}
              >
                Service Ministries
              </button>
              <button
                className={`servants-tab-btn ${activeTab === 'support' ? 'active' : ''}`}
                onClick={() => setActiveTab('support')}
              >
                Support Teams
              </button>
            </div>

            <AnimatePresence mode="wait">
              {activeTab === 'leadership' && (
                <motion.div
                  key="leadership"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Current Pastor */}
                  <div className="row align-items-center gy-5" style={{ marginBottom: '60px' }}>
                    <div className="col-lg-6 order-lg-2">
                      <SpotlightCard className="pastor-family-card" spotlightColor="rgba(229, 193, 88, 0.12)">
                        <img
                          src="/assets/img/muhil_family.png"
                          alt="Pastor Bro. Muhil and Family"
                          className="pastor-family-card-img"
                          style={{ height: '500px', width: '100%', objectFit: 'cover' }}
                        />
                        <div className="pastor-family-card-body">
                          <h3 className="pastor-family-card-title">Bro. Muhil & Family</h3>
                          <p className="pastor-family-card-role">Our Pastor</p>
                        </div>
                      </SpotlightCard>
                    </div>

                    <div className="col-lg-6 order-lg-1">
                      <h3 style={{ fontSize: '1.8rem', fontWeight: 800, marginBottom: '20px', color: 'var(--accent-gold)' }}>Pastoral Leadership</h3>
                      <p style={{ color: 'var(--text-cosmic)', lineHeight: '1.7', marginBottom: '15px' }}>
                        Pastor Bro. Muhil leads our weekly services, coordinates support team units, and preaches the Gospel with passion and spirit-led guidance.
                      </p>
                      <p style={{ color: 'var(--text-cosmic)', lineHeight: '1.6' }}>
                        Dedicated to shepherding the congregation, teaching biblical foundation classes, and encouraging members to grow in their personal prayer lives.
                      </p>
                    </div>
                  </div>

                  {/* Elders Section */}
                  <div style={{ marginBottom: '50px' }}>
                    <h3 className="servants-subheading-centered">Elders</h3>
                    <div className="servants-centered-grid">
                      {[
                        { name: 'Bro. Alwyn', image: '/assets/img/servants/elder_alwyn.png', role: 'Church Elder' },
                        { name: 'Bro. Asir', image: '/assets/img/servants/elder_asir.png', role: 'Church Elder' },
                        { name: 'Bro. Simon', image: '/assets/img/servants/elder_simon.png', role: 'Church Elder' }
                      ].map((elder, idx) => (
                        <div key={idx} className="servant-profile-card">
                          <div className="servant-profile-img-wrapper">
                            <img src={elder.image} alt={elder.name} className="servant-profile-img" />
                          </div>
                          <div className="servant-profile-name">{elder.name}</div>
                          <span className="servant-badge badge-elder">{elder.role}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}

              {activeTab === 'service' && (
                <motion.div
                  key="service"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Kids Bible School Teachers Section */}
                  <div style={{ marginBottom: '60px' }}>
                    <h3 className="servants-subheading-centered">Kids Bible School Teachers</h3>
                    <div className="servants-centered-grid">
                      {[
                        { name: 'Bro. Prabu', image: '/assets/img/servants/teacher_prabu.png', role: 'Sunday School Teacher' },
                        { name: 'Sis. Jancy', image: '/assets/img/servants/teacher_jancy.png', role: 'Sunday School Teacher' },
                        { name: 'Sis. Nithya', image: '/assets/img/person/person-f-6.webp', role: 'Sunday School Teacher' },
                        { name: 'Sis. Helen', image: '/assets/img/person/person-f-10.webp', role: 'Sunday School Teacher' },
                        { name: 'Sis. Shobha', image: '/assets/img/person/person-f-12.webp', role: 'Sunday School Teacher' }
                      ].map((teacher, idx) => (
                        <div key={idx} className="servant-profile-card">
                          <div className="servant-profile-img-wrapper">
                            <img src={teacher.image} alt={teacher.name} className="servant-profile-img" />
                          </div>
                          <div className="servant-profile-name">{teacher.name}</div>
                          <span className="servant-badge badge-teacher">{teacher.role}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Service Deacons Section */}
                  <div style={{ marginBottom: '60px' }}>
                    <h3 className="servants-subheading-centered">Service Deacons</h3>

                    <div style={{ marginTop: '30px' }}>
                      <h4 style={{ fontWeight: 800, color: 'var(--text-cream)', textTransform: 'uppercase', fontSize: '1.05rem', letterSpacing: '1px', textAlign: 'center', marginBottom: '20px' }}>
                        Tamil Service — Worship Ministry
                      </h4>
                      <div className="servants-centered-grid" style={{ marginBottom: '40px' }}>
                        {[
                          { name: 'Bro. James', image: '/assets/img/events/speaker-1.webp', role: 'Worship Ministry' },
                          { name: 'Bro. Vinu', image: '/assets/img/events/speaker-2.webp', role: 'Worship Ministry' },
                          { name: 'Bro. Moses', image: '/assets/img/events/speaker-3.webp', role: 'Worship Ministry' },
                          { name: 'Bro. Prabu', image: '/assets/img/events/speaker-4.webp', role: 'Worship Ministry' },
                          { name: 'Bro. Raja Mohan', image: '/assets/img/events/speaker-5.webp', role: 'Worship Ministry' }
                        ].map((deacon, idx) => (
                          <div key={idx} className="servant-profile-card">
                            <div className="servant-profile-img-wrapper">
                              <img src={deacon.image} alt={deacon.name} className="servant-profile-img" />
                            </div>
                            <div className="servant-profile-name">{deacon.name}</div>
                            <span className="servant-badge badge-worship">{deacon.role}</span>
                          </div>
                        ))}
                      </div>

                      <h4 style={{ fontWeight: 800, color: 'var(--text-cream)', textTransform: 'uppercase', fontSize: '1.05rem', letterSpacing: '1px', textAlign: 'center', marginBottom: '20px' }}>
                        Tamil Service — Psalms & Short Sermons
                      </h4>
                      <div className="servants-centered-grid" style={{ marginBottom: '50px' }}>
                        {[
                          { name: 'Bro. John Peter', image: '/assets/img/events/speaker-6.webp', role: 'Psalms & Sermons' },
                          { name: 'Bro. Vigil', image: '/assets/img/events/speaker-7.webp', role: 'Psalms & Sermons' },
                          { name: 'Bro. Gilbert', image: '/assets/img/events/speaker-8.webp', role: 'Psalms & Sermons' },
                          { name: 'Bro. Philip', image: '/assets/img/events/speaker-9.webp', role: 'Psalms & Sermons' }
                        ].map((deacon, idx) => (
                          <div key={idx} className="servant-profile-card">
                            <div className="servant-profile-img-wrapper">
                              <img src={deacon.image} alt={deacon.name} className="servant-profile-img" />
                            </div>
                            <div className="servant-profile-name">{deacon.name}</div>
                            <span className="servant-badge badge-sermons">{deacon.role}</span>
                          </div>
                        ))}
                      </div>

                      <h4 style={{ fontWeight: 800, color: 'var(--text-cream)', textTransform: 'uppercase', fontSize: '1.05rem', letterSpacing: '1px', textAlign: 'center', marginBottom: '20px' }}>
                        English Service — Family Worship
                      </h4>
                      <div className="servants-centered-grid" style={{ marginBottom: '40px' }}>
                        {[
                          { name: 'Deacon Families', image: '/assets/img/person/person-f-10.webp', role: 'Family Worship' }
                        ].map((deacon, idx) => (
                          <div key={idx} className="servant-profile-card">
                            <div className="servant-profile-img-wrapper">
                              <img src={deacon.image} alt={deacon.name} className="servant-profile-img" />
                            </div>
                            <div className="servant-profile-name">{deacon.name}</div>
                            <span className="servant-badge badge-worship">{deacon.role}</span>
                          </div>
                        ))}
                      </div>

                      <h4 style={{ fontWeight: 800, color: 'var(--text-cream)', textTransform: 'uppercase', fontSize: '1.05rem', letterSpacing: '1px', textAlign: 'center', marginBottom: '20px' }}>
                        English Service — Sermons
                      </h4>
                      <div className="servants-centered-grid" style={{ marginBottom: '30px' }}>
                        {[
                          { name: 'Bro. Prabu', image: '/assets/img/events/speaker-4.webp', role: 'Sermons' },
                          { name: 'Bro. Jeremiah', image: '/assets/img/events/speaker-10.webp', role: 'Sermons' },
                          { name: 'Bro. Joseph Mani', image: '/assets/img/events/speaker-11.webp', role: 'Sermons' }
                        ].map((deacon, idx) => (
                          <div key={idx} className="servant-profile-card">
                            <div className="servant-profile-img-wrapper">
                              <img src={deacon.image} alt={deacon.name} className="servant-profile-img" />
                            </div>
                            <div className="servant-profile-name">{deacon.name}</div>
                            <span className="servant-badge badge-sermons">{deacon.role}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {activeTab === 'support' && (
                <motion.div
                  key="support"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Support Ministries Section */}
                  <div style={{ marginBottom: '60px' }}>
                    <h3 className="servants-subheading-centered">Support Ministries Deacons</h3>

                    <div style={{ marginTop: '30px' }}>
                      <h4 style={{ fontWeight: 800, color: 'var(--text-cream)', textTransform: 'uppercase', fontSize: '1.05rem', letterSpacing: '1px', textAlign: 'center', marginBottom: '20px' }}>
                        Media Team
                      </h4>
                      <div className="servants-centered-grid" style={{ marginBottom: '40px' }}>
                        {[
                          { name: 'Bro. Gilbert', image: '/assets/img/events/speaker-8.webp', role: 'Media Team' },
                          { name: 'Bro. Pon Christopher', image: '/assets/img/person/person-m-12.webp', role: 'Media Team' },
                          { name: 'Bro. Immanuel', image: '/assets/img/person/person-m-8.webp', role: 'Media Team' },
                          { name: 'Bro. Milton', image: '/assets/img/person/person-m-12.webp', role: 'Media Team' }
                        ].map((deacon, idx) => (
                          <div key={idx} className="servant-profile-card">
                            <div className="servant-profile-img-wrapper">
                              <img src={deacon.image} alt={deacon.name} className="servant-profile-img" />
                            </div>
                            <div className="servant-profile-name">{deacon.name}</div>
                            <span className="servant-badge badge-media">{deacon.role}</span>
                          </div>
                        ))}
                      </div>

                      <h4 style={{ fontWeight: 800, color: 'var(--text-cream)', textTransform: 'uppercase', fontSize: '1.05rem', letterSpacing: '1px', textAlign: 'center', marginBottom: '20px' }}>
                        Food Ministry
                      </h4>
                      <div className="servants-centered-grid" style={{ marginBottom: '40px' }}>
                        {[
                          { name: 'Bro. James & Team', image: '/assets/img/events/speaker-1.webp', role: 'Food Ministry' }
                        ].map((deacon, idx) => (
                          <div key={idx} className="servant-profile-card">
                            <div className="servant-profile-img-wrapper">
                              <img src={deacon.image} alt={deacon.name} className="servant-profile-img" />
                            </div>
                            <div className="servant-profile-name">{deacon.name}</div>
                            <span className="servant-badge badge-food">{deacon.role}</span>
                          </div>
                        ))}
                      </div>

                      <h4 style={{ fontWeight: 800, color: 'var(--text-cream)', textTransform: 'uppercase', fontSize: '1.05rem', letterSpacing: '1px', textAlign: 'center', marginBottom: '20px' }}>
                        Cleaning Team
                      </h4>
                      <div className="servants-centered-grid" style={{ marginBottom: '40px' }}>
                        {[
                          { name: 'Bro. Gilbert', image: '/assets/img/events/speaker-8.webp', role: 'Cleaning Team' },
                          { name: 'Bro. Pon Christopher', image: '/assets/img/person/person-m-12.webp', role: 'Cleaning Team' },
                          { name: 'Bro. Dhinesh', image: '/assets/img/person/person-m-8.webp', role: 'Cleaning Team' },
                          { name: 'Bro. Immanuel', image: '/assets/img/person/person-m-12.webp', role: 'Cleaning Team' }
                        ].map((deacon, idx) => (
                          <div key={idx} className="servant-profile-card">
                            <div className="servant-profile-img-wrapper">
                              <img src={deacon.image} alt={deacon.name} className="servant-profile-img" />
                            </div>
                            <div className="servant-profile-name">{deacon.name}</div>
                            <span className="servant-badge badge-cleaning">{deacon.role}</span>
                          </div>
                        ))}
                      </div>

                      <h4 style={{ fontWeight: 800, color: 'var(--text-cream)', textTransform: 'uppercase', fontSize: '1.05rem', letterSpacing: '1px', textAlign: 'center', marginBottom: '20px' }}>
                        Maintenance Team
                      </h4>
                      <div className="servants-centered-grid" style={{ marginBottom: '40px' }}>
                        {[
                          { name: 'Bro. Gilbert', image: '/assets/img/events/speaker-8.webp', role: 'Maintenance Team' },
                          { name: 'Bro. Arul Prabu', image: '/assets/img/person/person-m-8.webp', role: 'Maintenance Team' },
                          { name: 'Bro. Joshua', image: '/assets/img/person/person-m-12.webp', role: 'Maintenance Team' },
                          { name: 'Bro. Moses', image: '/assets/img/events/speaker-3.webp', role: 'Maintenance Team' },
                          { name: 'Bro. Simon', image: '/assets/img/servants/elder_simon.png', role: 'Maintenance Team' },
                          { name: 'Bro. Ravivarma', image: '/assets/img/person/person-m-8.webp', role: 'Maintenance Team' }
                        ].map((deacon, idx) => (
                          <div key={idx} className="servant-profile-card">
                            <div className="servant-profile-img-wrapper">
                              <img src={deacon.image} alt={deacon.name} className="servant-profile-img" />
                            </div>
                            <div className="servant-profile-name">{deacon.name}</div>
                            <span className="servant-badge badge-maintenance">{deacon.role}</span>
                          </div>
                        ))}
                      </div>

                      <h4 style={{ fontWeight: 800, color: 'var(--text-cream)', textTransform: 'uppercase', fontSize: '1.05rem', letterSpacing: '1px', textAlign: 'center', marginBottom: '20px' }}>
                        Transport Team
                      </h4>
                      <div className="servants-centered-grid">
                        {[
                          { name: 'All Brothers', image: '/assets/img/all_ministries.png', role: 'Transport Team' }
                        ].map((deacon, idx) => (
                          <div key={idx} className="servant-profile-card">
                            <div className="servant-profile-img-wrapper">
                              <img src={deacon.image} alt={deacon.name} className="servant-profile-img" />
                            </div>
                            <div className="servant-profile-name">{deacon.name}</div>
                            <span className="servant-badge badge-transport">{deacon.role}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </div>
      </section>
    </main>
  )
}

