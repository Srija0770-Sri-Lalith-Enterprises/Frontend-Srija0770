import React from 'react'
import { Link } from 'react-router-dom'
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaInstagram, FaWhatsapp } from 'react-icons/fa'
import './Footer.css'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const quickLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About Us' },
    { path: '/products', label: 'Products' },
    { path: '/services', label: 'Services' },
    { path: '/contact', label: 'Contact' }
  ]

  const services = [
    'Flexible Packaging',
    'Rigid Packaging',
    'Labels & Stickers',
    'Custom Solutions',
    'Bulk Packaging'
  ]

  const socialLinks = [
    { icon: <FaWhatsapp />, url: 'https://wa.me/917013404083', label: 'WhatsApp' },
    { icon: <FaInstagram />, url: 'https://www.instagram.com/tape_manufacturer_vijayawada/profilecard/?utm_source=qr&igsh=MXZ5eXc3ejh0NDE4MQ%3D%3D', label: 'Instagram' }
  ]

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          {/* Company Info */}
          <div className="footer-section">
            <h3>Sri Lalith Enterprises</h3>
            <p>
              Leading provider of innovative packaging solutions with 5+ years 
              of experience in serving businesses across India. We deliver quality, 
              reliability, and innovation in every package.
            </p>
            <div className="social-links">
              {socialLinks.map((social, index) => (
                <a 
                  key={index} 
                  href={social.url} 
                  aria-label={social.label}
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-section">
            <h3>Quick Links</h3>
            <ul>
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link to={link.path}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="footer-section">
            <h3>Our Services</h3>
            <ul>
              {services.map((service, index) => (
                <li key={index}>
                  <Link to="/services">{service}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="footer-section">
            <h3>Contact Info</h3>
            <div className="contact-info">
              <div className="contact-item">
                <FaMapMarkerAlt />
                <span>D. No. 76-16-36, Urmila Nagar, Bhavanipuram, Vijayawada, Andhra Pradesh 520012</span>
              </div>
              <div className="contact-item">
                <FaPhone />
                <span>+91 7013404083</span>
              </div>
              <div className="contact-item">
                <FaEnvelope />
                <span>srilalithenterprises99@gmail.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <p>
            &copy; {currentYear} Sri Lalith Enterprises. All rights reserved. | 
            <Link to="/privacy"> Privacy Policy</Link> | 
            <Link to="/terms"> Terms of Service</Link>
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer 