import React, { useState } from 'react'
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaPaperPlane, FaCheckCircle, FaChevronDown, FaChevronUp } from 'react-icons/fa'
import './Contact.css'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
    message: ''
  })
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)
  const [openFaqIndex, setOpenFaqIndex] = useState(0) // First FAQ open by default

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
    // Clear error when user starts typing
    if (error) setError(null)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError(null)
    setIsLoading(true)

    try {
      // Use environment variable for API URL, fallback to default if not set
      const API_URL = import.meta.env.VITE_API_URL
      
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      })

      // Check if response is JSON before parsing
      const contentType = response.headers.get('content-type')
      if (!contentType || !contentType.includes('application/json')) {
        const text = await response.text()
        // Only log errors in development
        if (import.meta.env.DEV) {
          console.error('Non-JSON response:', text)
        }
        setError('Server error. Please try again later.')
        setIsLoading(false)
        return
      }

      const data = await response.json()

      if (!response.ok) {
        // Handle validation errors
        if (data.errors && Array.isArray(data.errors)) {
          setError(data.errors.join(', '))
        } else {
          setError(data.message || 'Failed to send message. Please try again.')
        }
        setIsLoading(false)
        return
      }

      // Success - form submitted and saved to database
      // Note: Email sending happens on the backend
      // If emails aren't being received, check backend SMTP configuration
      setIsSubmitted(true)
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        subject: '',
        message: ''
      })
      
      // Only log in development mode (not in production)
      if (import.meta.env.DEV) {
        console.log('✅ Contact form submitted successfully:', {
          success: data.success,
          message: data.message
        })
      }
      
      // Reset submission status after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false)
      }, 5000)

    } catch (err) {
      // Only log errors in development
      if (import.meta.env.DEV) {
        console.error('Error submitting form:', err)
      }
      setError('Network error. Please check your connection and try again.')
    } finally {
      setIsLoading(false)
    }
  }

  const contactInfo = [
    {
      icon: <FaPhone />,
      title: 'Phone',
      details: [
        '+91 98493 31975',
        '+91 70134 04083'
      ]
    },
    {
      icon: <FaEnvelope />,
      title: 'Email',
      details: [
        'srilalithenterprises99@gmail.com',
        'vmodugula0@gmail.com'
      ]
    },
    {
      icon: <FaMapMarkerAlt />,
      title: 'Address',
      details: [
        'D. No. 76-16-36, Urmila Nagar, Bhavanipuram,',
        'Vijayawada, Andhra Pradesh 520012'
      ]
    },
    {
      icon: <FaClock />,
      title: 'Business Hours',
      details: [
        'Monday - Saturday: 9:00 AM - 6:00 PM'
      ]
    }
  ]

  return (
    <div className="contact-page">
      {/* Contact Form and Info */}
      <section className="contact-form-section">
        <div className="container">
        <div className="contact-hero-content">
              <h1>Contact Us</h1>
              <p>Get in touch with us for all your packaging needs</p>
            </div>
          <div className="grid grid-2">
            {/* Contact Form */}
            <div className="contact-form-section">
              <h2>Send us a Message</h2>
              <p>Fill out the form below and we'll get back to you as soon as possible.</p>
              
              {isSubmitted && (
                <div className="success-message">
                  <FaCheckCircle />
                  <div>
                    <span>Thank you! Your message has been sent successfully. We will get back to you soon!</span>
                    <p className="success-note">Note: Your submission has been saved. If you don't receive a confirmation email, please check your spam folder or contact us directly.</p>
                  </div>
                </div>
              )}
              
              {error && (
                <div className="error-message" style={{
                  background: '#fee',
                  color: '#c33',
                  padding: '15px',
                  borderRadius: '5px',
                  marginBottom: '20px',
                  border: '1px solid #fcc'
                }}>
                  <span>{error}</span>
                </div>
              )}
              
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">Full Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email Address *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="phone">Phone Number *</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="company">Company Name</label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                
                <div className="form-group">
                  <label htmlFor="subject">Mail Subject *</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="message">Mail Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="6"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>
                
                <button type="submit" className="btn" disabled={isLoading}>
                  {isLoading ? (
                    <>Sending...</>
                  ) : (
                    <>
                      <FaPaperPlane /> Send Message
                    </>
                  )}
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="contact-info-section">
              <h2>Get in Touch</h2>
              <p>We're here to help with all your packaging requirements.</p>
              
              <div className="contact-info-grid">
                {contactInfo.map((info, index) => (
                  <div key={index} className="contact-info-item">
                    <div className="info-icon">{info.icon}</div>
                    <div className="info-content">
                      <h3>{info.title}</h3>
                      {info.details.map((detail, detailIndex) => (
                        <p key={detailIndex}>{detail}</p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="section map-section">
        <div className="container">
          <h2 className="section-title">Find Us</h2>
          <p className="section-subtitle">
            Visit our facility or get in touch for a consultation
          </p>
          <div className="map-container">
            <div className="map-placeholder">
              <div>
                <FaMapMarkerAlt />
                <h3>Our Location</h3>
              </div>
              <div>
                <p>D. No. 76-16-36, Urmila Nagar, Bhavanipuram, Vijayawada, Andhra Pradesh 520012</p>
                <p>We're located in the heart of Vijayawada's industrial district, easily accessible by road and public transport.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section faq-section">
        <div className="container">
          <div className="faq-header">
            <span className="faq-label">FAQs</span>
          </div>
          <h2 className="faq-main-title">
            Frequently Asked <span className="faq-title-red">Questions</span>
          </h2>
          <div className="faq-accordion">
            {[
              {
                question: 'What types of tapes do you manufacture or supply?',
                answer: 'We offer a wide range of industrial and packaging tapes, including: BOPP Packing Tapes (Brown, Transparent, Colored, Printed), Masking Tapes, Double-Sided Tapes, Electrical Insulation Tapes, Specialty Industrial Tapes (Foam, Filament, Aluminum Foil, etc.)'
              },
              {
                question: 'What are the standard sizes available?',
                answer: 'We provide tapes in various standard sizes including widths from 12mm to 72mm and lengths from 30 meters to 100 meters. Custom sizes are also available based on your specific requirements.'
              },
              {
                question: 'Can you customize tapes with our logo or branding?',
                answer: 'Yes, we offer custom printing services for BOPP tapes. You can have your company logo, brand name, or any custom design printed on the tapes. Minimum order quantities apply for custom printing.'
              },
              {
                question: 'What adhesive types do you use?',
                answer: 'We use various adhesive types including acrylic, rubber-based, and hot melt adhesives. The adhesive type depends on the application requirements - we can recommend the best option for your specific needs.'
              },
              {
                question: 'Are your tapes suitable for cold storage or freezer use?',
                answer: 'Yes, we offer specialized tapes designed for cold storage and freezer applications. These tapes maintain their adhesive properties even in extreme cold temperatures and are ideal for frozen food packaging and cold storage facilities.'
              }
            ].map((faq, index) => (
              <div key={index} className={`faq-accordion-item ${openFaqIndex === index ? 'active' : ''}`}>
                <button
                  className="faq-question"
                  onClick={() => setOpenFaqIndex(openFaqIndex === index ? -1 : index)}
                  aria-expanded={openFaqIndex === index}
                >
                  <span className="faq-number">{index + 1}.</span>
                  <span className="faq-question-text">{faq.question}</span>
                  <span className="faq-chevron">
                    {openFaqIndex === index ? <FaChevronUp /> : <FaChevronDown />}
                  </span>
                </button>
                {openFaqIndex === index && (
                  <div className="faq-answer">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Start Your Project?</h2>
            <p>
              Let's discuss how we can help you with your packaging needs. Contact us today for a free consultation.
            </p>
            <div className="cta-buttons">
              <a href="tel:+919849331975" className="btn">Call Now</a>
              <a href="mailto:srilalithenterprises99@gmail.com" className="btn btn-secondary">Email Us</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact 