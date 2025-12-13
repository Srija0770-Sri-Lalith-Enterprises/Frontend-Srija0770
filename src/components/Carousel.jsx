import React, { useState, useEffect } from 'react'
import { FaChevronLeft, FaChevronRight, FaPlay, FaPause } from 'react-icons/fa'
import './Carousel.css'

// Import all images from the images folder
import img1 from '../assets/images/1.jpeg'
import img2 from '../assets/images/2.jpeg'
import img3 from '../assets/images/3.jpeg'
import img4 from '../assets/images/4.jpeg'
import img5 from '../assets/images/5.jpeg'
import img6 from '../assets/images/6.jpeg'
import img7 from '../assets/images/7.jpeg'
import img8 from '../assets/images/8.jpeg'
import img9 from '../assets/images/9.jpeg'

const Carousel = ({ autoPlay = true, interval = 9000, showControls = true }) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPlaying, setIsPlaying] = useState(autoPlay)

  const images = [
    { 
      src: img1, 
      alt: 'BOPP Tape Manufacturing Facility',
      title: 'State-of-the-Art Manufacturing',
      subtitle: 'Advanced machinery for premium BOPP tape production'
    },
    { 
      src: img2, 
      alt: 'Quality Control Process',
      title: 'Quality Assurance',
      subtitle: 'Rigorous testing and quality control at every step'
    },
    { 
      src: img3, 
      alt: 'Packaging Solutions',
      title: 'Comprehensive Packaging',
      subtitle: 'Complete packaging solutions for all industries'
    },
    { 
      src: img4, 
      alt: 'Industrial Tape Production',
      title: 'Industrial Excellence',
      subtitle: 'Specialized tapes for demanding applications'
    },
    { 
      src: img5, 
      alt: 'Custom BOPP Tape Solutions',
      title: 'Custom Solutions',
      subtitle: 'Tailored BOPP tape solutions for your needs'
    },
    { 
      src: img6, 
      alt: 'Aluminium Tape Manufacturing',
      title: 'Aluminium Tapes',
      subtitle: 'Premium aluminium foil tapes for heat resistance'
    },
    { 
      src: img7, 
      alt: 'Packaging Equipment',
      title: 'Modern Equipment',
      subtitle: 'Latest technology for efficient production'
    },
    { 
      src: img8, 
      alt: 'Product Testing Lab',
      title: 'Testing & Validation',
      subtitle: 'Comprehensive testing in our state-of-the-art lab'
    },
    { 
      src: img9, 
      alt: 'Warehouse and Distribution',
      title: 'Global Distribution',
      subtitle: 'Efficient logistics and nationwide delivery'
    },
  ]

  // Calculate how many cards to show based on screen size
  const getCardsToShow = () => {
    if (window.innerWidth >= 1200) return 4 // Desktop: 4 cards
    if (window.innerWidth >= 1024) return 3 // Desktop: 3 cards
    if (window.innerWidth >= 768) return 2  // Tablet: 2 cards
    if (window.innerWidth >= 480) return 1
    return 1 // Mobile: 1 card
  }

  const [cardsToShow, setCardsToShow] = useState(getCardsToShow())

  // Update cards to show on window resize
  useEffect(() => {
    const handleResize = () => {
      setCardsToShow(getCardsToShow())
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const maxIndex = images.length - cardsToShow

  // Ensure currentIndex is always valid when cardsToShow changes
  useEffect(() => {
    if (currentIndex > maxIndex) {
      setCurrentIndex(0)
    }
  }, [cardsToShow, maxIndex])

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex >= maxIndex ? 0 : prevIndex + 1))
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex <= 0 ? maxIndex : prevIndex - 1))
  }

  const goToSlide = (index) => {
    setCurrentIndex(Math.min(index, maxIndex))
  }

  // Keyboard navigation
  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.key === 'ArrowLeft') {
        prevSlide()
      } else if (e.key === 'ArrowRight') {
        nextSlide()
      } else if (e.key === ' ') {
        e.preventDefault()
      }
    }
    window.addEventListener('keydown', handleKeyPress)
    return () => window.removeEventListener('keydown', handleKeyPress)
  }, [])

  useEffect(() => {
    let intervalId
    if (autoPlay) {
      intervalId = setInterval(() => {
        nextSlide()
      }, interval)
    }
    return () => {
      if (intervalId) {
        clearInterval(intervalId)
      }
    }
  }, [autoPlay, interval, maxIndex])

  // Only render the visible cards
  const visibleCards = images.slice(currentIndex, currentIndex + cardsToShow)

  return (
    <div className="carousel-container">
      <div className="carousel-wrapper">
        <div className="carousel-slides">
          {visibleCards.map((image, index) => (
            <div key={currentIndex + index} className="carousel-card">
              <div className="card-image">
                <img 
                  src={image.src} 
                  alt={image.alt}
                  loading="eager"
                />
              </div>
              <div className="card-text-overlay" aria-hidden="true"></div>
              <div className="card-content">
                <h3>{image.title}</h3>
                <p>{image.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
        
      </div>
      {showControls && (
          <>
            <button 
              className="carousel-arrow left" 
              onClick={prevSlide} 
              aria-label="Previous slide"
            >
              <FaChevronLeft />
            </button>
            <button 
              className="carousel-arrow right" 
              onClick={nextSlide} 
              aria-label="Next slide"
            >
              <FaChevronRight />
            </button>
          </>
        )}
    </div>
  )
}

export default Carousel 