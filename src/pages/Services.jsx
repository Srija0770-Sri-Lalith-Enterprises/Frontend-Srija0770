import React from 'react'
import { useNavigate } from 'react-router-dom'
import { FaCog, FaUsers, FaTruck, FaCheckCircle, FaLightbulb, FaShieldAlt, FaRecycle, FaChartLine } from 'react-icons/fa'
import Carousel from '../components/Carousel'
import './Services.css'

// Import product images
import boppTransparent from '../assets/BOPP Tape (Transparent).png'
import aluminiumFoil from '../assets/Aluminium-foil-tape.png'
import packagingProducts from '../assets/packaging products.jpg'

const Services = () => {
  const navigate = useNavigate()

  const services = [
    {
      icon: <FaCog />,
      title: 'Custom BOPP Tape Manufacturing',
      description: 'Tailored BOPP tape solutions designed specifically for your packaging requirements.',
      features: [
        'Custom width and length',
        'Brand-specific colors',
        'Custom printing options',
        'Specialized adhesives'
      ]
    },
    {
      icon: <FaUsers />,
      title: 'Consultation & Planning',
      description: 'Expert consultation to help you choose the right tape and packaging solution for your business needs.',
      features: [
        'Product analysis',
        'Application testing',
        'Cost optimization',
        'Technical support'
      ]
    },
    {
      icon: <FaTruck />,
      title: 'Manufacturing & Production',
      description: 'State-of-the-art manufacturing facilities with quality control at every step.',
      features: [
        'Advanced machinery',
        'Quality control processes',
        'Bulk production capabilities',
        'On-time delivery'
      ]
    },
    {
      icon: <FaCheckCircle />,
      title: 'Quality Assurance',
      description: 'Rigorous quality control measures to ensure your tapes meet the highest standards.',
      features: [
        'ISO certified processes',
        'Testing and validation',
        'Documentation',
        'Continuous improvement'
      ]
    }
  ]

  const processSteps = [
    {
      number: '01',
      title: 'Consultation',
      description: 'We begin with a detailed consultation to understand your tape requirements, application needs, and budget constraints.',
      icon: <FaUsers />
    },
    {
      number: '02',
      title: 'Design & Planning',
      description: 'Our technical team creates custom BOPP tape solutions that align with your specifications and application requirements.',
      icon: <FaLightbulb />
    },
    {
      number: '03',
      title: 'Sample Development',
      description: 'We develop samples for testing and approval before moving to full-scale production.',
      icon: <FaCog />
    },
    {
      number: '04',
      title: 'Production',
      description: 'Once approved, we begin production using advanced machinery and quality control processes.',
      icon: <FaChartLine />
    },
    {
      number: '05',
      title: 'Quality Control',
      description: 'Every batch undergoes rigorous quality control testing to ensure it meets our high standards.',
      icon: <FaCheckCircle />
    },
    {
      number: '06',
      title: 'Delivery',
      description: 'We ensure timely delivery of your BOPP tapes and packaging solutions with proper logistics and tracking.',
      icon: <FaTruck />
    }
  ]

  const specializations = [
    {
      title: 'Manufacturing',
      description: 'BOPP tapes for industrial manufacturing and production processes.',
      icon: <FaShieldAlt />
    },
    {
      title: 'Logistics & Shipping',
      description: 'Packaging tapes for secure shipping and transportation services.',
      icon: <FaShieldAlt />
    },
    {
      title: 'Automotive',
      description: 'Specialized tapes for automotive applications and insulation.',
      icon: <FaRecycle />
    },
    {
      title: 'Electronics',
      description: 'Aluminium tapes and specialized solutions for electronics industry.',
      icon: <FaCog />
    }
  ]

  return (
    <div className="services-page">
      {/* Hero Section */}
      <section className="services-hero">
        <div className="container">
          <div className="services-hero-content">
            <h1>Our Services</h1>
            <p>Comprehensive BOPP tape and packaging solutions from concept to delivery</p>
          </div>
        </div>
      </section>

      {/* Manufacturing Process Carousel */}
      <section className="section manufacturing-carousel">
        <div className="container">
          <h2 className="section-title">Our Manufacturing Process</h2>
          <p className="section-subtitle">Take a virtual tour of our manufacturing facility and see how we maintain the highest quality standards
          </p>
          <Carousel 
            autoPlay={true} 
            interval={4500} 
            showControls={true} 
            showIndicators={true}
          />
        </div>
      </section>

      {/* Main Services */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">What We Offer</h2>
          <p className="section-subtitle">
            From initial consultation to final delivery, we provide end-to-end BOPP tape and packaging solutions
          </p>
          <div className="grid grid-2">
            {services.map((service, index) => (
              <div key={index} className="service-card card">
                <div className="service-icon">{service.icon}</div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <ul>
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex}>{feature}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section process-section">
        <div className="container">
          <h2 className="section-title">Our Process</h2>
          <p className="section-subtitle">
            A systematic approach to delivering quality BOPP tape solutions
          </p>
          <div className="process-grid">
            {processSteps.map((step, index) => (
              <div key={index} className="process-step">
                <div className="step-number">{step.number}</div>
                <div className="step-icon">{step.icon}</div>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
                {index < processSteps.length - 1 && <div className="step-connector"></div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Specializations */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">Industry Specializations</h2>
          <p className="section-subtitle">
            We serve various industries with specialized BOPP tape and packaging solutions
          </p>
          <div className="grid grid-5">
            {specializations.map((spec, index) => (
              <div key={index} className="specialization-card card">
                <div className="spec-icon">{spec.icon}</div>
                <h3>{spec.title}</h3>
                <p>{spec.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our Services */}
      <section className="section why-services">
        <div className="container">
          <h2 className="section-title">Why Choose Our Services?</h2>
          <div className="grid grid-2">
            <div className="why-content">
              <div className="why-item">
                <h4>Experience & Expertise</h4>
                <p>5+ years of experience in the BOPP tape and packaging industry with deep technical knowledge and understanding of various sectors.</p>
              </div>
              <div className="why-item">
                <h4>Custom Solutions</h4>
                <p>Every project is unique. We create tailored BOPP tape solutions that perfectly match your application requirements and specifications.</p>
              </div>
              <div className="why-item">
                <h4>Quality Assurance</h4>
                <p>ISO certified processes with multiple quality checkpoints to ensure your BOPP tapes meet the highest standards.</p>
              </div>
              <div className="why-item">
                <h4>Timely Delivery</h4>
                <p>We understand the importance of deadlines and ensure on-time delivery with efficient project management.</p>
              </div>
            </div>
            <div className="why-image mt-30">
              <img 
                src={packagingProducts} 
                alt="Our BOPP Tape Services"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Service Features */}
      <section className="section service-features">
        <div className="container">
          <h2 className="section-title">Service Features</h2>
          <div className="grid grid-3">
            <div className="feature-item">
              <div className="feature-icon">
                <FaShieldAlt />
              </div>
              <h3>Quality Guarantee</h3>
              <p>We guarantee the quality of our BOPP tapes with comprehensive testing and validation processes.</p>
            </div>
            <div className="feature-item">
              <div className="feature-icon">
                <FaRecycle />
              </div>
              <h3>Sustainable Options</h3>
              <p>Eco-friendly BOPP tape materials and processes to help reduce your environmental footprint.</p>
            </div>
            <div className="feature-item">
              <div className="feature-icon">
                <FaChartLine />
              </div>
              <h3>Cost Optimization</h3>
              <p>We help optimize costs while maintaining quality through efficient design and production processes.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Get Started?</h2>
            <p>
              Contact us today to discuss your BOPP tape and packaging needs and get a free consultation. 
              Our experts are ready to help you find the perfect solution.
            </p>
            <button className="btn" onClick={() => navigate('/contact')}>Get Free Consultation</button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Services 