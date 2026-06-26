import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import ShinyText from '../components/bits/ShinyText'
import SpotlightCard from '../components/bits/SpotlightCard'

export default function Home() {
  // Hero Carousel State
  const [heroIndex, setHeroIndex] = useState(0)
  const heroSlides = [
    {
      image: '/assets/img/bg_slide_1.png',
      tag: 'WELCOME TO ZION PRAYER FELLOWSHIP',
      title: 'ZION PRAYER FELLOWSHIP',
      subtitle: (
        <div className="hero-slide-bible">
          <div className="tamil-verse">கர்த்தர் சீயோனிலிருந்து உன்னை ஆசீர்வதிப்பார்</div>
          <div className="english-verse">The LORD shall bless thee out of Zion (Psalms 128:5)</div>
        </div>
      )
    },
    {
      image: '/assets/img/bg_slide_2.png',
      tag: 'OUR VISION',
      title: 'Isaiah 58:12',
      subtitle: (
        <div className="hero-slide-bible" style={{ borderColor: '#ffffff' }}>
          <div className="tamil-verse">உன்னிடத்திலிருந்து தோன்றினவர்கள் பூர்வமுதல் பாழாய்க்கிடந்த ஸ்தலங்களைக் கட்டுவார்கள்; தலைமுறை தலைமுறையாக இருக்கும் அஸ்திபாரங்கள்மேல் நீ கட்டுவாய்; திறப்பானதை அடைக்கிறவன் என்றும், குடியிருக்கும்படி பாதைகளைத் திருத்துகிறவன் என்றும் நீ பெயர் பெறுவாய்</div>
          <div className="english-verse">Those from among you Shall build the old waste places; You shall raise up the foundations of many generations; And you shall be called the Repairer of the Breach, The Restorer of Streets to Dwell In.</div>
        </div>
      )
    },
    {
      image: '/assets/img/bg_slide_3.png',
      tag: 'OUR MISSION',
      title: 'Colossians 1:28',
      subtitle: (
        <div className="hero-slide-bible">
          <div className="tamil-verse">எந்த மனுஷனையும் கிறிஸ்து இயேசுவுக்குள் தேறினவனாக நிறுத்தும்படிக்கு, அவரையே நாங்கள் அறிவித்து, எந்த மனுஷனுக்கும் புத்திசொல்லி, எந்த மனுஷனுக்கும் எல்லா ஞானத்தோடும் உபதேசம்பண்ணுகிறோம்.</div>
          <div className="english-verse">Him we preach, warning every man and teaching every man in all wisdom, that we may present every man perfect in Christ Jesus.</div>
        </div>
      )
    },
    {
      image: '/assets/img/bg_slide_2.png',
      tag: 'OUR FELLOWSHIP',
      title: 'Our Cell Groups',
      subtitle: (
        <div className="hero-slide-bible">
          <div className="tamil-verse">சகோதரர் ஒருமித்து வாசம்பண்ணுகிறது எவ்வளவு நன்மையும் எவ்வளவு இன்பமுமானது! (சங்கீதம் 133:1)</div>
          <div className="english-verse">Find family, prayer support, and grow together in our weekly local home cell groups.</div>
        </div>
      )
    },
    {
      image: '/assets/img/bg_slide_4.png',
      tag: 'PRAYER SANCTUARY',
      title: 'Active Prayer Fellowship',
      subtitle: (
        <div className="hero-slide-bible">
          <div className="tamil-verse">எப்பொழுதும் சந்தோஷமாயிருங்கள். இடைவிடாமல் ஜெபம்பண்ணுங்கள். (1 தெசலோனிக்கேயர் 5:16-17)</div>
          <div className="english-verse">Rejoice always, pray without ceasing, in everything give thanks; for this is the will of God in Christ Jesus for you.</div>
        </div>
      )
    }
  ]

  // Auto-scroll Hero Carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setHeroIndex((prev) => (prev + 1) % heroSlides.length)
    }, 8000) // 8 seconds per slide for readable text
    return () => clearInterval(timer)
  }, [heroSlides.length])

  const nextHeroSlide = () => {
    setHeroIndex((prev) => (prev + 1) % heroSlides.length)
  }

  const prevHeroSlide = () => {
    setHeroIndex((prev) => (prev - 1 + heroSlides.length) % heroSlides.length)
  }

  // Involved Carousel State
  const [involvedIndex, setInvolvedIndex] = useState(0)
  const involvedSlides = [
    {
      image: '/assets/img/sunday_worship.png',
      tag: 'PRAISE THE LORD ON MY SOUL',
      title: 'SUNDAY Worship Service',
      timings: 'TIMINGS: 9:00 AM (KOTHANUR) & 11:30 AM (HBR)'
    },
    {
      image: '/assets/img/hero_worship.png',
      tag: 'WEEKLY PRAYER & BIBLE STUDY',
      title: 'FRIDAY Covenant Blessing Service',
      timings: 'TIMINGS: 10:00 AM & 6:30 PM'
    }
  ]

  // Auto-scroll Involved Carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setInvolvedIndex((prev) => (prev + 1) % involvedSlides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [involvedSlides.length])

  return (
    <main className="main redesign-mode">

      {/* 1. HERO SLIDESHOW */}
      <section className="redesign-hero">
        <div className="redesign-hero-slider" style={{ zIndex: 2 }}>
          {heroSlides.map((slide, idx) => (
            <div
              key={idx}
              className={`redesign-hero-slide ${idx === heroIndex ? 'active' : ''}`}
              style={{
                backgroundImage: `url(${slide.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
              }}
            >
              {/* Overlay inside each slide under content to correctly dim the background image */}
              <div className="redesign-hero-overlay" style={{ zIndex: 1 }}></div>

              <div className="container" style={{ zIndex: 2, position: 'relative' }}>
                <div className="redesign-hero-content">
                  <div className="redesign-hero-tag">{slide.tag}</div>
                  <h1 className="redesign-hero-title" style={{ fontSize: slide.title.length > 25 ? '3rem' : '4rem' }}>
                    {slide.title}
                  </h1>
                  <div className="redesign-hero-subtitle">{slide.subtitle}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Carousel controls */}
        <button className="redesign-hero-arrow prev" onClick={prevHeroSlide} aria-label="Previous Slide">
          <i className="bi bi-chevron-left"></i>
        </button>
        <button className="redesign-hero-arrow next" onClick={nextHeroSlide} aria-label="Next Slide">
          <i className="bi bi-chevron-right"></i>
        </button>

        <div className="redesign-hero-dots">
          {heroSlides.map((_, idx) => (
            <button
              key={idx}
              className={`redesign-hero-dot ${idx === heroIndex ? 'active' : ''}`}
              onClick={() => setHeroIndex(idx)}
              aria-label={`Go to slide ${idx + 1}`}
            ></button>
          ))}
        </div>

        <Link to="/contact" className="redesign-hero-btn">
          Latest Broadcast <i className="bi bi-chevron-right ms-1"></i>
        </Link>
      </section>

      {/* 2. CAMPUSES SECTION */}
      <section className="redesign-section light-bg">
        <div className="container">
          <div className="redesign-section-header">
            <h2>There's more than one way to belong at ZPF Ministries.</h2>
            <p>Explore our locations, services and we would love to connect with you.</p>
          </div>

          <div className="campus-grid">
            {/* Card 1 */}
            <SpotlightCard className="campus-card" spotlightColor="rgba(229, 193, 88, 0.12)">
              <i className="bi bi-geo-alt-fill campus-card-icon text-center"></i>
              <h3 className="campus-card-title text-center">Kothanur Campus</h3>
              <p className="campus-card-desc text-center">
                Welcome to ZPF Ministries Kothanur. Join our English Service for powerful praise and teaching in our main sanctuary.
              </p>
              <div className="campus-card-timings text-center">
                <strong>Service Timings:</strong>
                English Service: 9:00 AM<br />
                Evening Service: 6:00 PM
              </div>
              <Link to="/contact" className="campus-card-btn">
                Get our location <i className="bi bi-arrow-right"></i>
              </Link>
            </SpotlightCard>

            {/* Card 2 */}
            <SpotlightCard className="campus-card" spotlightColor="rgba(229, 193, 88, 0.12)">
              <i className="bi bi-geo-alt-fill campus-card-icon text-center"></i>
              <h3 className="campus-card-title text-center">HBR Campus</h3>
              <p className="campus-card-desc text-center">
                Join the HBR layout community as we gather for worship, interactive bible teaching, and family prayer groups.
              </p>
              <div className="campus-card-timings text-center">
                <strong>Service Timings:</strong>
                Tamil Service: 7:00 AM<br />
                English Service: 11:30 AM
              </div>
              <Link to="/contact" className="campus-card-btn">
                HBR Location <i className="bi bi-arrow-right"></i>
              </Link>
            </SpotlightCard>

            {/* Card 3 */}
            <SpotlightCard className="campus-card" spotlightColor="rgba(229, 193, 88, 0.12)">
              <i className="bi bi-geo-alt-fill campus-card-icon text-center"></i>
              <h3 className="campus-card-title text-center">Cornerstone Campus</h3>
              <p className="campus-card-desc text-center">
                Our Cornerstone branch hosts regional language fellowships, focusing on local outreach and youth cell groups.
              </p>
              <div className="campus-card-timings text-center">
                <strong>Service Timings:</strong>
                Malayalam Service: 9:00 AM<br />
                Telugu Service: 11:30 AM
              </div>
              <Link to="/contact" className="campus-card-btn">
                Cornerstone Location <i className="bi bi-arrow-right"></i>
              </Link>
            </SpotlightCard>

            {/* Card 4 */}
            <SpotlightCard id="live-stream" className="campus-card" spotlightColor="rgba(229, 193, 88, 0.12)">
              <i className="bi bi-broadcast campus-card-icon text-center"></i>
              <h3 className="campus-card-title text-center">Live Stream</h3>
              <p className="campus-card-desc text-center">
                Can't make it in person? Join our vibrant online community live from wherever you are. Live chat and prayer available.
              </p>
              <div className="campus-card-timings text-center">
                <strong>Broadcast Timings:</strong>
                Sunday Morning: 9:00 AM<br />
                Friday Evening: 6:30 PM
              </div>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="campus-card-btn">
                Latest live stream <i className="bi bi-arrow-right"></i>
              </a>
            </SpotlightCard>
          </div>
        </div>
      </section>

      {/* 3. GET INVOLVED CAROUSEL SECTION */}
      <section className="redesign-section gray-bg">
        <div className="container">
          <div className="redesign-section-header">
            <h2>Get Involved. Stay Connected.</h2>
            <p>There is always something happening at ZPF Ministries. Join us in our weekly and monthly events.</p>
          </div>

          <div className="involved-slider-container">
            {involvedSlides.map((slide, idx) => (
              <div
                key={idx}
                className="involved-slide"
                style={{
                  backgroundImage: `url(${slide.image})`,
                  display: idx === involvedIndex ? 'flex' : 'none'
                }}
              >
                <div className="involved-slide-overlay"></div>
                <div className="involved-slide-content">
                  <div className="involved-slide-tag">{slide.tag}</div>
                  <h3 className="involved-slide-title">{slide.title}</h3>
                  <p className="involved-slide-timings">
                    {slide.timings}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. WORSHIP TEAM SECTION */}
      <section className="worship-section redesign-section">
        <div className="container">
          <div className="worship-grid">
            <div className="worship-text-content">
              <span className="worship-tag">Worship</span>
              <h2 className="worship-title">Way Maker - Miracle Worker</h2>
              <p className="worship-desc">
                Watch the gospel video highlight and worship song. Experience the presence of God as we lift up His name together.
              </p>
              <a
                href="https://www.youtube.com/watch?v=LmegPb_8LY8"
                target="_blank"
                rel="noopener noreferrer"
                className="worship-play-btn"
              >
                <i className="bi bi-play-fill"></i> Watch Video
              </a>
            </div>

            <div className="worship-video-card">
              <div className="ratio ratio-16x9">
                <iframe
                  src="https://www.youtube.com/embed/LmegPb_8LY8"
                  title="Way Maker - Miracle Worker"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. SERMONS SPLIT GRID */}
      <section id="sermons" className="redesign-section light-bg">
        <div className="container">
          <div className="feature-row" style={{ display: 'flex', justifyContent: 'center' }}>
            {/* Sermons Card */}
            <SpotlightCard className="feature-card" spotlightColor="rgba(255, 255, 255, 0.15)" style={{ maxWidth: '580px', width: '100%' }}>
              <div className="feature-card-img" style={{ backgroundImage: `url('/assets/img/bg_slide_4.png')` }}></div>
              <div className="feature-card-body blue-bg">
                <div className="feature-card-header">
                  <h3 className="feature-card-title">Sermons</h3>
                  <i className="bi bi-book-half feature-card-icon"></i>
                </div>
                <p className="feature-card-desc">
                  Access our library of inspiring bible-based messages. Watch or listen to help deepen your faith and daily walk with Christ.
                </p>
                <Link to="/contact" className="feature-card-link">
                  Read more
                </Link>
              </div>
            </SpotlightCard>
          </div>
        </div>
      </section>



      {/* 8. ALL MINISTRIES SECTION */}
      <section className="redesign-section light-bg">
        <div className="container">
          <div className="all-ministries-card" style={{ backgroundImage: `url('/assets/img/all_ministries.jpg')` }}>
            <div className="all-ministries-overlay"></div>
            <div className="all-ministries-content">
              <h3 className="all-ministries-title">All Ministries</h3>
              <p className="all-ministries-desc">
                At ZPF Ministries, we believe there is a special place for everyone. Explore our extensive range of prayer meetings, missions, women's fellowships, and community groups.
              </p>
              <Link to="/about" className="all-ministries-btn">
                Explore All
              </Link>
            </div>
          </div>
        </div>
      </section>

    </main>
  )
}
