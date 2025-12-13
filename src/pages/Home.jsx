import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { FaBox, FaTruck, FaUsers, FaAward, FaCheckCircle, FaStar, FaArrowRight, FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import './Home.css'

// Import service images
import boppTransparent from '../assets/BOPP Tape (Transparent).png'
import aluminiumFoil from '../assets/Aluminium-foil-tape.png'
import packagingProducts from '../assets/packaging products.jpg'
import ppStrap from '../assets/PP-STRAP.jpeg'
import boppTapeHighAdhesive from '../assets/BOPP-TAPE-High-Adhesive-Strength.jpeg'
import packagingBanner from '../assets/Packaging-Banner.jpeg'
import stretchFilm from '../assets/STRETCH-FILM.jpeg'

const Home = () => {
  useEffect(() => {
    // Initialize scroll reveal animations when component mounts
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed')
        }
      })
    }, observerOptions)

    // Observe all elements with scroll-reveal class
    const scrollElements = document.querySelectorAll('.scroll-reveal')
    scrollElements.forEach(el => observer.observe(el))

    // Cleanup observer on component unmount
    return () => {
      observer.disconnect()
    }
  }, [])

  const features = [
    {
      icon: <FaBox />,
      title: 'Quality Products',
      description: 'Premium BOPP tapes and aluminium tapes that meet international standards'
    },
    {
      icon: <FaTruck />,
      title: 'Fast Delivery',
      description: 'Quick and reliable delivery across the country'
    },
    {
      icon: <FaUsers />,
      title: 'Expert Team',
      description: 'Experienced professionals dedicated to your success'
    },
    {
      icon: <FaAward />,
      title: 'Certified Quality',
      description: 'ISO certified processes and quality assurance'
    }
  ]

  const services = [
    {
      title: 'PP Strap',
      description: 'Good tensile strength and elongation for secure packaging',
      image: ppStrap
    },
    {
      title: 'Packaging That Holds',
      description: 'Strong. Secure. Reliable. Complete packaging solutions for your business',
      image: packagingBanner
    },
    {
      title: 'Stretch Film',
      description: 'Excellent puncture resistance for superior product protection',
      image: stretchFilm
    },
    {
      title: 'BOPP Tape - High Adhesive Strength',
      description: 'High adhesive strength for reliable sealing and bonding',
      image: boppTapeHighAdhesive
    },
    {
      title: 'BOPP Tapes',
      description: 'High-quality BOPP tapes in transparent, brown, and colored varieties',
      image: boppTransparent
    },
    {
      title: 'Aluminium Tapes',
      description: 'Premium aluminium foil tapes for heat resistance and insulation',
      image: aluminiumFoil
    },
    {
      title: 'Packaging Solutions',
      description: 'Comprehensive packaging solutions for industrial applications',
      image: packagingProducts
    }
  ]

  const testimonials = [
    {
      name: 'Rajesh Kumar',
      text: 'Sri Lalith Enterprises has been our trusted supplier for BOPP tapes and packaging solutions for over 5 years. Their quality and service are exceptional.',
      rating: 5
    },
    {
      name: 'Priya Sharma',
      text: 'The team at Sri Lalith Enterprises understands our industrial tape requirements perfectly and delivers solutions that exceed expectations.',
      rating: 5
    },
    {
      name: 'Amit Patel',
      text: 'Professional service, on-time delivery, and excellent quality BOPP tapes. Highly recommended for all packaging needs!',
      rating: 5
    }
  ]

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-bg-graphic" aria-hidden="true">
          {/* Wavy line SVG (top left) */}
          <svg width="420" height="120" viewBox="0 0 420 120" fill="none" style={{position:'absolute',top:'-40px',left:'-60px',zIndex:0}}>
            <path d="M0,60 Q70,0 140,60 T280,60 T420,60" stroke="#138808" strokeWidth="10" fill="none" opacity="0.18"/>
            <path d="M0,90 Q70,30 140,90 T280,90 T420,90" stroke="#ffff00" strokeWidth="6" fill="none" opacity="0.13"/>
          </svg>
          
          {/* Large circle SVG (top right) */}
          <svg width="180" height="180" viewBox="0 0 180 180" fill="none" style={{position:'absolute',top:'-60px',right:'-40px',zIndex:0}}>
            <circle cx="90" cy="90" r="80" fill="#ffff00" opacity="0.10"/>
            <circle cx="90" cy="90" r="60" fill="#138808" opacity="0.08"/>
          </svg>
          
          {/* Abstract polygon/blob SVG (bottom left) */}
          <svg width="220" height="160" viewBox="0 0 220 160" fill="none" style={{position:'absolute',bottom:'-40px',left:'-60px',zIndex:0}}>
            <path d="M40,140 Q110,60 180,140 Q220,160 220,80 Q220,0 110,0 Q0,0 0,80 Q0,160 40,140 Z" fill="#ef2f2f" opacity="0.13"/>
            <ellipse cx="160" cy="80" rx="40" ry="18" fill="#ffff00" opacity="0.09"/>
          </svg>
          
          {/* Abstract polygon/blob SVG (bottom right) */}
          <svg width="320" height="220" viewBox="0 0 320 220" fill="none" style={{position:'absolute',bottom:'-50px',right:'-60px',zIndex:0}}>
            <path d="M60,200 Q160,100 260,200 Q320,220 320,120 Q320,20 160,20 Q0,20 0,120 Q0,220 60,200 Z" fill="#ef2f2f" opacity="0.13"/>
            <ellipse cx="220" cy="120" rx="60" ry="30" fill="#ffff00" opacity="0.09"/>
          </svg>
          
          {/* Floating triangles (top center) */}
          <svg width="200" height="150" viewBox="0 0 200 150" fill="none" style={{position:'absolute',top:'20px',left:'50%',transform:'translateX(-50%)',zIndex:0}}>
            <polygon points="100,20 120,60 80,60" fill="#138808" opacity="0.12"/>
            <polygon points="80,80 100,120 60,120" fill="#ffff00" opacity="0.10"/>
            <polygon points="120,80 140,120 100,120" fill="#ef2f2f" opacity="0.08"/>
          </svg>
          
          {/* Zigzag pattern (left side) */}
          <svg width="80" height="300" viewBox="0 0 80 300" fill="none" style={{position:'absolute',left:'20px',top:'50%',transform:'translateY(-50%)',zIndex:0}}>
            <path d="M0,50 L20,30 L40,50 L60,30 L80,50 M0,150 L20,130 L40,150 L60,130 L80,150 M0,250 L20,230 L40,250 L60,230 L80,250" stroke="#138808" strokeWidth="3" fill="none" opacity="0.15"/>
          </svg>
          
          {/* Zigzag pattern (right side) */}
          <svg width="80" height="300" viewBox="0 0 80 300" fill="none" style={{position:'absolute',right:'20px',top:'50%',transform:'translateY(-50%)',zIndex:0}}>
            <path d="M80,50 L60,30 L40,50 L20,30 L0,50 M80,150 L60,130 L40,150 L20,130 L0,150 M80,250 L60,230 L40,250 L20,230 L0,250" stroke="#ffff00" strokeWidth="3" fill="none" opacity="0.12"/>
          </svg>
          
          {/* Scattered dots (center area) */}
          <svg width="400" height="200" viewBox="0 0 400 200" fill="none" style={{position:'absolute',top:'50%',left:'50%',transform:'translate(-50%, -50%)',zIndex:0}}>
            <circle cx="50" cy="50" r="4" fill="#138808" opacity="0.20"/>
            <circle cx="150" cy="30" r="3" fill="#ffff00" opacity="0.18"/>
            <circle cx="250" cy="70" r="5" fill="#ef2f2f" opacity="0.15"/>
            <circle cx="350" cy="40" r="3" fill="#138808" opacity="0.16"/>
            <circle cx="100" cy="150" r="4" fill="#ffff00" opacity="0.14"/>
            <circle cx="200" cy="120" r="3" fill="#ef2f2f" opacity="0.12"/>
            <circle cx="300" cy="160" r="4" fill="#138808" opacity="0.18"/>
          </svg>
          
          {/* Geometric squares (top left corner) */}
          <svg width="120" height="120" viewBox="0 0 120 120" fill="none" style={{position:'absolute',top:'40px',left:'40px',zIndex:0}}>
            <rect x="10" y="10" width="30" height="30" fill="#138808" opacity="0.10"/>
            <rect x="50" y="30" width="25" height="25" fill="#ffff00" opacity="0.08"/>
            <rect x="80" y="50" width="20" height="20" fill="#ef2f2f" opacity="0.06"/>
          </svg>
          
          {/* Geometric squares (bottom right corner) */}
          <svg width="120" height="120" viewBox="0 0 120 120" fill="none" style={{position:'absolute',bottom:'40px',right:'40px',zIndex:0}}>
            <rect x="80" y="80" width="30" height="30" fill="#138808" opacity="0.10"/>
            <rect x="45" y="65" width="25" height="25" fill="#ffff00" opacity="0.08"/>
            <rect x="20" y="50" width="20" height="20" fill="#ef2f2f" opacity="0.06"/>
          </svg>
          
          {/* Curved lines (center top) */}
          <svg width="300" height="100" viewBox="0 0 300 100" fill="none" style={{position:'absolute',top:'30px',left:'50%',transform:'translateX(-50%)',zIndex:0}}>
            <path d="M0,50 Q75,20 150,50 T300,50" stroke="#138808" strokeWidth="2" fill="none" opacity="0.12"/>
            <path d="M0,70 Q75,40 150,70 T300,70" stroke="#ffff00" strokeWidth="2" fill="none" opacity="0.10"/>
          </svg>
          
          {/* Curved lines (center bottom) */}
          <svg width="300" height="100" viewBox="0 0 300 100" fill="none" style={{position:'absolute',bottom:'30px',left:'50%',transform:'translateX(-50%)',zIndex:0}}>
            <path d="M0,50 Q75,80 150,50 T300,50" stroke="#ef2f2f" strokeWidth="2" fill="none" opacity="0.12"/>
            <path d="M0,30 Q75,60 150,30 T300,30" stroke="#138808" strokeWidth="2" fill="none" opacity="0.10"/>
          </svg>
        </div>
        <div className="container">
          <div className="hero-content">
            <h1 className="fade-in-up">Leading BOPP Tapes & Packaging Solutions</h1>
            <p className="fade-in-up">
              We provide premium BOPP tapes, aluminium tapes, and innovative packaging solutions for businesses across India. 
              Quality, reliability, and customer satisfaction are our top priorities.
            </p>
            <div className="hero-buttons fade-in-up">
              <Link to="/products" className="btn">
                Explore Products
                <FaArrowRight />
              </Link>
              <Link to="/contact" className="btn-hero btn-secondary">Get Quote</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section">
        <div className="container">
          <h2 className="section-title scroll-reveal">Our Services</h2>
          <p className="section-subtitle scroll-reveal">
            Comprehensive tape and packaging solutions tailored to your needs
          </p>

          {/* Services Carousel */}
          <ServicesCarousel services={services} />
        </div>
      </section>

      {/* Features Section */}
      <section className="section">
        <div className="container">
          <h2 className="section-title scroll-reveal">Why Choose Sri Lalith Enterprises?</h2>
          <p className="section-subtitle scroll-reveal">
            We are committed to delivering excellence in every aspect of our service
          </p>
          <div className="grid grid-5">
            {features.map((feature, index) => (
              <div key={index} className="feature-card card scroll-reveal" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="feature-icon float">{feature.icon}</div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="section about-preview">
        <div className="container">
          <div className="grid grid-2">
            <div className="about-content scroll-reveal">
              <h2>About Sri Lalith Enterprises</h2>
              <p>
                With 5+ years of experience in the tapes and packaging industry, Sri Lalith Enterprises 
                has established itself as a trusted name in providing innovative BOPP tapes, aluminium tapes, 
                and packaging solutions. We serve clients across various sectors including manufacturing, 
                logistics, automotive, and industrial applications.
              </p>
              <div className="about-stats">
                <div className="stat">
                  <h3 className="accent-red">500+</h3>
                  <p>Happy Clients</p>
                </div>
                <div className="stat">
                  <h3 className="accent-red">1000+</h3>
                  <p>Projects Completed</p>
                </div>
                <div className="stat">
                  <h3 className="accent-red">5+</h3>
                  <p>Years Experience</p>
                </div>
              </div>
              <Link to="/about" className="btn">
                Learn More
                <FaArrowRight />
              </Link>
            </div>
            <div className="about-image scroll-reveal">
              <img 
                src={packagingProducts} 
                alt="BOPP Tapes and Packaging Solutions"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section testimonials">
        <div className="container">
          <h2 className="section-title scroll-reveal">What Our Clients Say</h2>
          <p className="section-subtitle scroll-reveal">
            Don't just take our word for it - hear from our satisfied customers
          </p>
          <div className="grid grid-4">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="testimonial-card card scroll-reveal" style={{ animationDelay: `${index * 0.15}s` }}>
                <div className="testimonial-rating">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <FaStar key={i} className="star" />
                  ))}
                </div>
                <p className="testimonial-text">"{testimonial.text}"</p>
                <div className="testimonial-author">
                  <h4>{testimonial.name}</h4>
                  <span>{testimonial.company}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section cta-section">
        <div className="container">
          <div className="cta-content scroll-reveal">
            <h2>Ready to Get Started?</h2>
            <p>
              Contact us today to discuss your BOPP tape and packaging needs and get a free consultation
            </p>
            <div className="cta-buttons">
              <Link to="/contact" className="btn">
                Contact Us
                <FaArrowRight />
              </Link>
              <Link to="/products" className="btn btn-secondary">View Products</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home

// Carousel dedicated to the Home page services section
const ServicesCarousel = ({ services }) => {
  const getVisibleCount = () => {
    if (typeof window === 'undefined') return 1
    if (window.innerWidth >= 1024) return 4
    if (window.innerWidth >= 768) return 2
    return 1
  }

  const [visibleCount, setVisibleCount] = useState(getVisibleCount())
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const handleResize = () => setVisibleCount(getVisibleCount())
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  // Auto-advance
  useEffect(() => {
    const interval = setInterval(() => handleNext(), 6000)
    return () => clearInterval(interval)
  }, [visibleCount, services.length])

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % services.length)
  }

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + services.length) % services.length)
  }

  const visibleServices = Array.from({ length: visibleCount }, (_, i) => {
    const index = (currentIndex + i) % services.length
    return services[index]
  })

  return (
    <div className="services-carousel">
      <div className="services-carousel-track">
        {visibleServices.map((service, index) => (
          <div key={`${service.title}-${index}`} className="service-card card">
            <div className="service-image">
              <img src={service.image} alt={service.title} />
            </div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
            <Link to="/services" className="btn btn-secondary">
              Learn More
              <FaArrowRight />
            </Link>
          </div>
        ))}
      </div>

      <div className="services-controls">
        <button type="button" className="services-nav" onClick={handlePrev} aria-label="Previous service">
          <FaChevronLeft />
        </button>
        <button type="button" className="services-nav" onClick={handleNext} aria-label="Next service">
          <FaChevronRight />
        </button>
      </div>

      <div className="services-dots" aria-hidden="true">
        {services.map((_, idx) => (
          <span
            key={idx}
            className={`services-dot ${idx === currentIndex ? 'active' : ''}`}
          />
        ))}
      </div>
    </div>
  )
}
