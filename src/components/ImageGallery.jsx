import React, { useState } from 'react'
import { FaTimes, FaChevronLeft, FaChevronRight, FaExpand } from 'react-icons/fa'
import './ImageGallery.css'

// Import all images from the facility gallery folder
import img1 from '../assets/facility gallery/95 rs pic 1.png'
import img2 from '../assets/facility gallery/95 rs pic 2.png'
import img3 from '../assets/facility gallery/Hand grade Film.png'
import img4 from '../assets/facility gallery/Army wonder 555.png'
import img5 from '../assets/facility gallery/yellow tape.jpeg'
import img6 from '../assets/facility gallery/Blue tape.jpeg'
import img7 from '../assets/facility gallery/Maroon tape.jpeg'
import img8 from '../assets/facility gallery/Orange tape.jpeg'
import img9 from '../assets/facility gallery/red tape.jpeg'
import img10 from '../assets/facility gallery/White Colour pp strap.png'
import img11 from '../assets/facility gallery/PP straps pic 1.png'
import img12 from '../assets/facility gallery/PP straps pic 2.png'
import img13 from '../assets/facility gallery/Film pic 2.png'
import img14 from '../assets/facility gallery/white big tape.jpeg'
import img15 from '../assets/facility gallery/Film pic 1.png'
import img16 from '../assets/facility gallery/Tape.png'
import img17 from '../assets/facility gallery/white thin tape.jpeg'
import img18 from '../assets/facility gallery/Tapes.png'
import img19 from '../assets/facility gallery/Clear Transparent tape.png'
import img20 from '../assets/facility gallery/PP strap  colours.png'
import img21 from '../assets/facility gallery/Tapes  all colours.png'
import img22 from '../assets/facility gallery/Brown tape.png'


const ImageGallery = () => {
  const [selectedImage, setSelectedImage] = useState(null)
  const [lightboxIndex, setLightboxIndex] = useState(0)

  const images = [
    { src: img1, alt: '95 Rs Product 1', title: 'Product Range' },
    { src: img2, alt: '95 Rs Product 2', title: 'Product Range' },
    { src: img3, alt: 'Hand Grade Film', title: 'Hand Grade Film' },
    { src: img4, alt: 'Army Wonder 555', title: 'Specialty Tape' },
    { src: img5, alt: 'Yellow BOPP Tape', title: 'Yellow Tape' },
    { src: img6, alt: 'Blue BOPP Tape', title: 'Blue Tape' },
    { src: img7, alt: 'Maroon BOPP Tape', title: 'Maroon Tape' },
    { src: img8, alt: 'Orange BOPP Tape', title: 'Orange Tape' },
    { src: img9, alt: 'Red BOPP Tape', title: 'Red Tape' },
    { src: img10, alt: 'White Colour PP Strap', title: 'White PP Strap' },
    { src: img11, alt: 'PP Straps Product 1', title: 'PP Straps' },
    { src: img12, alt: 'PP Straps Product 2', title: 'PP Straps' },
    { src: img13, alt: 'Stretch Film Product 2', title: 'Stretch Film' },
    { src: img14, alt: 'White Big Tape', title: 'White Tape' },
    { src: img15, alt: 'Stretch Film Product 1', title: 'Stretch Film' },
    { src: img16, alt: 'BOPP Tape Product', title: 'BOPP Tape' },
    { src: img17, alt: 'White Thin Tape', title: 'White Thin Tape' },
    { src: img18, alt: 'BOPP Tapes Collection', title: 'Tape Collection' },
    { src: img19, alt: 'Clear Transparent BOPP Tape', title: 'Transparent Tape' },
    { src: img20, alt: 'PP Strap Colours', title: 'PP Strap Colours' },
    { src: img21, alt: 'BOPP Tapes All Colours', title: 'Coloured Tapes' },
    { src: img22, alt: 'Brown BOPP Tape', title: 'Brown Tape' },
  ]

  const openLightbox = (index) => {
    setSelectedImage(images[index])
    setLightboxIndex(index)
  }

  const closeLightbox = () => {
    setSelectedImage(null)
  }

  const nextImage = () => {
    const nextIndex = (lightboxIndex + 1) % images.length
    setSelectedImage(images[nextIndex])
    setLightboxIndex(nextIndex)
  }

  const prevImage = () => {
    const prevIndex = (lightboxIndex - 1 + images.length) % images.length
    setSelectedImage(images[prevIndex])
    setLightboxIndex(prevIndex)
  }

  // Keyboard navigation
  React.useEffect(() => {
    const handleKeyPress = (e) => {
      if (!selectedImage) return
      
      if (e.key === 'Escape') {
        closeLightbox()
      } else if (e.key === 'ArrowLeft') {
        prevImage()
      } else if (e.key === 'ArrowRight') {
        nextImage()
      }
    }

    window.addEventListener('keydown', handleKeyPress)
    return () => window.removeEventListener('keydown', handleKeyPress)
  }, [selectedImage, lightboxIndex])

  return (
    <div className="image-gallery">
      <div className="gallery-grid">
        {images.map((image, index) => (
          <div 
            key={index} 
            className="gallery-item"
            onClick={() => openLightbox(index)}
          >
            <img 
              src={image.src} 
              alt={image.alt}
              loading="lazy"
            />
            <div className="gallery-overlay">
              <div className="gallery-overlay-content">
                <h3>{image.title}</h3>
                <FaExpand className="expand-icon" />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div className="lightbox" onClick={closeLightbox}>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <button className="lightbox-close" onClick={closeLightbox}>
              <FaTimes />
            </button>
            
            <button className="lightbox-nav prev" onClick={prevImage}>
              <FaChevronLeft />
            </button>
            
            <button className="lightbox-nav next" onClick={nextImage}>
              <FaChevronRight />
            </button>
            
            <div className="lightbox-image-container">
              <img 
                src={selectedImage.src} 
                alt={selectedImage.alt}
              />
              <div className="lightbox-caption">
                <h3>{selectedImage.title}</h3>
                <p>{selectedImage.alt}</p>
              </div>
            </div>
            
            <div className="lightbox-counter">
              {lightboxIndex + 1} / {images.length}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default ImageGallery 