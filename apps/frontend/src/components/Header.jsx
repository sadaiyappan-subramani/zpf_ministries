import React, { useState, useEffect } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'

export default function Header() {
  const [isMobileActive, setIsMobileActive] = useState(false)
  const location = useLocation()

  const toggleMobileNav = () => {
    setIsMobileActive(!isMobileActive)
  }

  const closeMobileNav = () => {
    setIsMobileActive(false)
  }

  // Handle body scrolling lock when mobile nav is open
  useEffect(() => {
    if (isMobileActive) {
      document.body.classList.add('mobile-nav-active')
    } else {
      document.body.classList.remove('mobile-nav-active')
    }
    return () => {
      document.body.classList.remove('mobile-nav-active')
    }
  }, [isMobileActive])

  const handleNavClick = () => {
    closeMobileNav()
  }

  return (
    <header id="header" className="header redesign-header">
      <Link to="/" className="logo d-flex align-items-center" onClick={closeMobileNav}>
        <img
          src="/assets/img/zpf_logo.png"
          alt="ZPF Ministries Logo"
        />
      </Link>
      <nav className="navmenu align-items-center">
        <ul>
          {/* ABOUT DROPDOWN */}
          <li className="dropdown">
            <Link
              to="/about"
              className={location.pathname === '/about' ? 'active' : ''}
              onClick={closeMobileNav}
            >
              <span>About</span> <i className="bi bi-chevron-down toggle-dropdown"></i>
            </Link>
            <ul>
              <li><Link to="/about" onClick={closeMobileNav}>About ZPF</Link></li>
              <li><Link to="/about#what-we-believe" onClick={closeMobileNav}>What We Believe</Link></li>
              <li><Link to="/about#servants" onClick={closeMobileNav}>Servants</Link></li>
            </ul>
          </li>

          {/* MEETINGS LINK */}
          <li>
            <NavLink
              to="/events"
              className={({ isActive }) => isActive ? 'active' : ''}
              onClick={closeMobileNav}
            >
              Meetings
            </NavLink>
          </li>

          {/* MINISTRIES LINK */}
          <li>
            <NavLink
              to="/ministries"
              className={({ isActive }) => isActive ? 'active' : ''}
              onClick={closeMobileNav}
            >
              Ministries
            </NavLink>
          </li>

          {/* DEBORAH FELLOWSHIP LINK */}
          <li>
            <NavLink
              to="/deborah-fellowship"
              className={({ isActive }) => isActive ? 'active' : ''}
              onClick={closeMobileNav}
            >
              Deborah Fellowship
            </NavLink>
          </li>

          {/* KIDS BIBLE SCHOOL LINK */}
          <li>
            <NavLink
              to="/kids-bible-school"
              className={({ isActive }) => isActive ? 'active' : ''}
              onClick={closeMobileNav}
            >
              Kids Bible School
            </NavLink>
          </li>

          {/* ZION SONGS LINK */}
          <li>
            <NavLink
              to="/songs"
              className={({ isActive }) => isActive ? 'active' : ''}
              onClick={closeMobileNav}
            >
              Zion Songs
            </NavLink>
          </li>

          {/* SERMONS LINK */}
          <li>
            <NavLink
              to="/sermons"
              className={({ isActive }) => isActive ? 'active' : ''}
              onClick={closeMobileNav}
            >
              Sermons
            </NavLink>
          </li>

          {/* LIVE LINK */}
          <li>
            <NavLink
              to="/live"
              className={({ isActive }) => isActive ? 'active' : ''}
              onClick={closeMobileNav}
            >
              Live
            </NavLink>
          </li>

          {/* PRAYER POINTS LINK */}
          <li>
            <NavLink
              to="/prayer-points"
              className={({ isActive }) => isActive ? 'active' : ''}
              onClick={closeMobileNav}
            >
              Prayer Points
            </NavLink>
          </li>

          {/* GALLERY LINK */}
          <li>
            <NavLink
              to="/gallery"
              className={({ isActive }) => isActive ? 'active' : ''}
              onClick={closeMobileNav}
            >
              Gallery
            </NavLink>
          </li>
          {sessionStorage.getItem('zpf_logged_in') === 'true' && (
            <li className="mobile-only-logout">
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault()
                  sessionStorage.removeItem('zpf_logged_in')
                  window.location.reload()
                }}
                style={{ color: '#e74c3c', fontWeight: 'bold' }}
              >
                Logout
              </a>
            </li>
          )}
        </ul>
      </nav>

      {sessionStorage.getItem('zpf_logged_in') === 'true' && (
        <div className="desktop-only-logout">
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault()
              sessionStorage.removeItem('zpf_logged_in')
              window.location.reload()
            }}
            className="header-logout-btn"
          >
            Logout
          </a>
        </div>
      )}

      <i
        className={`mobile-nav-toggle bi ${isMobileActive ? 'bi-x' : 'bi-list'}`}
        onClick={toggleMobileNav}
        aria-label="Toggle navigation menu"
      ></i>
    </header>
  )
}

