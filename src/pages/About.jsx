import React from 'react'
import { useNavigate } from 'react-router-dom'
import { FaUsers, FaAward, FaHandshake, FaLightbulb, FaChartLine, FaGlobe } from 'react-icons/fa'
import ImageGallery from '../components/ImageGallery'
import './About.css'

// Import product images
import packagingProducts from '../assets/packaging products.jpg'
import boppTransparent from '../assets/BOPP Tape (Transparent).png'

//Import Leadership team images
import mvr from '../assets/Leadership Team Images/M V Rao.jpeg'
import balakrishna from '../assets/Leadership Team Images/Balakrishna.jpeg' 

const About = () => {
  const navigate = useNavigate()

  const values = [
    {
      icon: <FaHandshake />,
      title: 'Integrity',
      description: 'We conduct business with honesty, transparency, and ethical practices'
    },
    {
      icon: <FaLightbulb />,
      title: 'Innovation',
      description: 'Constantly evolving and adopting new technologies and methods'
    },
    {
      icon: <FaUsers />,
      title: 'Customer Focus',
      description: 'Our customers are at the heart of everything we do'
    },
    {
      icon: <FaAward />,
      title: 'Quality',
      description: 'Uncompromising commitment to delivering excellence'
    }
  ]

  const achievements = [
    {
      number: '500+',
      label: 'Happy Clients',
      icon: <FaUsers />
    },
    {
      number: '1000+',
      label: 'Projects Completed',
      icon: <FaChartLine />
    },
    {
      number: '5+',
      label: 'Years Experience',
      icon: <FaAward />
    },
    {
      number: '50+',
      label: 'Team Members',
      icon: <FaGlobe />
    }
  ]

  const team = [
    {
      name: 'M V Rao',
      position: 'Founder & CEO',
      image: mvr,
      description: 'Experienced leader in the BOPP tape and packaging industry'
    },
    {
      name: 'M V Rao',
      position: 'Operations Director',
      image: mvr,
      description: 'Expert in BOPP tape manufacturing and quality management'
    },
    
    {
      name: 'A. Balakrishna',
      position: 'Quality Assurance Head',
      image: balakrishna,
      description: 'Specialized in industrial tape solutions and applications'
    }
  ]

  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="container">
          <div className="about-hero-content">
            <h1>About Sri Lalith Enterprises</h1>
            <p>Leading the way in innovative BOPP tapes and packaging solutions since 2019</p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="section">
        <div className="container">
          <div className="grid grid-2">
            <div className="company-story">
              <h2>Our Story</h2>
              <p>
                Founded in 2019, Sri Lalith Enterprises began as a small family business with a vision 
                to revolutionize the BOPP tape and packaging industry in India. What started with a single machine 
                and a handful of employees has grown into one of the most trusted names in industrial tapes and packaging solutions.
              </p>
              <p>
                Over the years, we have expanded our operations across multiple states, serving clients 
                from various industries including manufacturing, logistics, automotive, and electronics. 
                Our commitment to quality, innovation, and customer satisfaction has been the cornerstone 
                of our success.
              </p>
              <p>
                Today, we are proud to have served over 500 clients and completed more than 1000 projects, 
                each one a testament to our dedication to excellence and our ability to adapt to the 
                ever-changing needs of our customers in the industrial tape sector.
              </p>
            </div>
            <div className="company-image">
              <img 
                src={packagingProducts} 
                alt="BOPP Tape Manufacturing Facility"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Facility Image Gallery */}
      <section className="section facility-gallery">
        <div className="container">
          <h2 className="section-title">Facility Gallery</h2>
          <p className="section-subtitle">
            Click on any image to view it in full size and explore our facility in detail
          </p>
          <ImageGallery />
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section mission-vision">
        <div className="container">
          <div className="grid grid-2">
            <div className="mission-card card">
              <h3>Our Mission</h3>
              <p>
                To provide innovative, sustainable, and cost-effective BOPP tape and packaging solutions that help 
                our clients secure their products, enhance their operational efficiency, and achieve their 
                business objectives while contributing to environmental conservation.
              </p>
            </div>
            <div className="vision-card card">
              <h3>Our Vision</h3>
              <p>
                To be the leading BOPP tape and industrial packaging solutions provider in India, recognized for our innovation, 
                quality, and commitment to sustainability, while creating value for all our stakeholders 
                and contributing to a greener future.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">Our Core Values</h2>
          <p className="section-subtitle">
            The principles that guide everything we do
          </p>
          <div className="grid grid-5">
            {values.map((value, index) => (
              <div key={index} className="value-card card">
                <div className="value-icon">{value.icon}</div>
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="section achievements">
        <div className="container">
          <h2 className="section-title">Our Achievements</h2>
          <div className="grid grid-5">
            {achievements.map((achievement, index) => (
              <div key={index} className="achievement-card">
                <div className="achievement-icon">{achievement.icon}</div>
                <h3>{achievement.number}</h3>
                <p>{achievement.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section leadership-team-section">
        <div className="container">
          <h2 className="section-title">Our Leadership Team</h2>
          <p className="section-subtitle">
            Meet the experts who drive our success
          </p>
          <div className="grid grid-4">
            {team.map((member, index) => (
              <div key={index} className="team-card card">
                <div className="team-image">
                  <img src={member.image} alt={member.name} />
                </div>
                <h3>{member.name}</h3>
                <span className="position">{member.position}</span>
                <p>{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section why-choose-us">
        <div className="container">
          <h2 className="section-title">Why Choose Sri Lalith Enterprises?</h2>
          <div className="grid grid-2">
            <div className="why-content">
              <div className="why-item">
                <h4>Industry Expertise</h4>
                <p>5+ years of specialized experience in BOPP tape manufacturing and industrial packaging solutions.</p>
              </div>
              <div className="why-item">
                <h4>Quality Assurance</h4>
                <p>ISO certified processes with rigorous quality control at every stage of production.</p>
              </div>
              <div className="why-item">
                <h4>Custom Solutions</h4>
                <p>Tailored BOPP tape solutions designed to meet your specific application requirements.</p>
              </div>
              <div className="why-item">
                <h4>Reliable Service</h4>
                <p>Consistent delivery, technical support, and after-sales service you can depend on.</p>
              </div>
            </div>
            <div className="why-image">
              <img 
                src={boppTransparent} 
                alt="Quality BOPP Tapes"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Partner With Us?</h2>
            <p>
              Join hundreds of satisfied clients who trust Sri Lalith Enterprises for their BOPP tape and packaging needs.
            </p>
            <button className="btn" onClick={() => navigate('/contact')}>Contact Us Today</button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About 