import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { FaSearch, FaFilter, FaEye, FaDownload, FaTimes, FaArrowRight, FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import './Products.css'

// Import product images
import boppTransparent from '../assets/BOPP Tape (Transparent).png'
import aluminiumFoil from '../assets/Aluminium-foil-tape.png'
import boppBrown from '../assets/BOPP Tape (Brown).png'
import boppColour from '../assets/BOPP Tapes (Colour).jpg'
import packagingProducts from '../assets/packaging products.jpg'
import industrialTapes from '../assets/Industrial tapes.jpg'
import packagingTapes from '../assets/packaging tapes.jpg'
import ppStrap from '../assets/PP-STRAP.jpeg'
import stretchFilm from '../assets/STRETCH-FILM.jpeg'
import packagingBanner from '../assets/Packaging-Banner.jpeg'

// Import images from facility gallery
import blueTape from '../assets/facility gallery/Blue tape.jpeg'
import maroonTape from '../assets/facility gallery/Maroon tape.jpeg'
import orangeTape from '../assets/facility gallery/Orange tape.jpeg'
import redTape from '../assets/facility gallery/red tape.jpeg'
import yellowTape from '../assets/facility gallery/yellow tape.jpeg'
import tapesAllColours from '../assets/facility gallery/Tapes  all colours.png'
import tapesGeneral from '../assets/facility gallery/Tapes.png'
import tapeGeneral from '../assets/facility gallery/Tape.png'
import filmPic1 from '../assets/facility gallery/Film pic 1.png'
import filmPic2 from '../assets/facility gallery/Film pic 2.png'
import handGradeFilm from '../assets/facility gallery/Hand grade Film.png'
import ppStrapColours from '../assets/facility gallery/PP strap  colours.png'
import ppStrapsPic1 from '../assets/facility gallery/PP straps pic 1.png'
import ppStrapsPic2 from '../assets/facility gallery/PP straps pic 2.png'
import whiteColourPpStrap from '../assets/facility gallery/White Colour pp strap.png'
import whiteBigTape from '../assets/facility gallery/white big tape.jpeg'
import whiteThinTape from '../assets/facility gallery/white thin tape.jpeg'
import brownTape from '../assets/facility gallery/Brown tape.png'
import clearTransparentTape from '../assets/facility gallery/Clear Transparent tape.png'

const Products = () => {
  const navigate = useNavigate()
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedProduct, setSelectedProduct] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const categories = [
    { id: 'all', name: 'All Products' },
    { id: 'bopp', name: 'BOPP Tapes' },
    { id: 'aluminium', name: 'Aluminium Tapes' },
    { id: 'packaging', name: 'Packaging Solutions' },
    { id: 'industrial', name: 'Industrial Tapes' },
    { id: 'films', name: 'Films & Shrink' },
    { id: 'strapping', name: 'Strapping' },
    { id: 'protective', name: 'Protective Materials' }
  ]

  const products = [
    {
      id: 1,
      name: 'BOPP Transparent Tape',
      category: 'bopp',
      description: 'High-quality transparent BOPP tape for general packaging and sealing applications',
      image: boppTransparent,
      features: ['Transparent finish', 'High adhesion', 'Weather resistant', 'Easy to tear'],
      applications: ['Carton sealing', 'General packaging', 'Office use', 'Home packaging']
    },
    {
      id: 2,
      name: 'BOPP Brown Tape',
      category: 'bopp',
      description: 'Durable brown BOPP tape with excellent adhesion for heavy-duty packaging',
      image: boppBrown,
      features: ['Brown color', 'Strong adhesion', 'Moisture resistant', 'Tear resistant'],
      applications: ['Heavy cartons', 'Industrial packaging', 'Shipping boxes', 'Furniture packaging']
    },
    {
      id: 3,
      name: 'BOPP Colored Tapes',
      category: 'bopp',
      description: 'Vibrant colored BOPP tapes for branding and decorative packaging',
      image: boppColour,
      features: ['Multiple colors', 'Brand customization', 'High visibility', 'Professional finish'],
      applications: ['Brand packaging', 'Gift wrapping', 'Color coding', 'Decorative sealing']
    },
    {
      id: 4,
      name: 'Aluminium Foil Tape',
      category: 'aluminium',
      description: 'Premium aluminium foil tape for heat resistance and insulation applications',
      image: aluminiumFoil,
      features: ['Heat resistant', 'UV resistant', 'Moisture barrier', 'Excellent adhesion'],
      applications: ['HVAC systems', 'Insulation', 'Automotive', 'Electronics']
    },
    {
      id: 5,
      name: 'Packaging Solutions',
      category: 'packaging',
      description: 'Comprehensive packaging solutions for various industrial applications',
      image: packagingProducts,
      features: ['Custom solutions', 'Quality materials', 'Cost effective', 'Reliable'],
      applications: ['Manufacturing', 'Logistics', 'Retail', 'E-commerce']
    },
    {
      id: 6,
      name: 'Industrial Tapes',
      category: 'industrial',
      description: 'Specialized industrial tapes for demanding applications',
      image: industrialTapes,
      features: ['Industrial grade', 'High temperature', 'Chemical resistant', 'Long lasting'],
      applications: ['Manufacturing', 'Construction', 'Automotive', 'Aerospace']
    },
    {
      id: 7,
      name: 'Packaging Tapes',
      category: 'packaging',
      description: 'Professional packaging tapes for secure and reliable sealing',
      image: packagingTapes,
      features: ['Secure sealing', 'Tamper evident', 'Easy application', 'Cost effective'],
      applications: ['Shipping', 'Storage', 'Transportation', 'Warehousing']
    },
    {
      id: 8,
      name: 'Customised Printed Tapes',
      category: 'bopp',
      description: 'Customized BOPP tape solutions with custom printing tailored to your specific requirements',
      image: tapesAllColours,
      features: ['Custom printing', 'Brand colors', 'Special sizes', 'Bulk orders'],
      applications: ['Corporate branding', 'Special events', 'Limited editions', 'Bulk packaging']
    },
    {
      id: 9,
      name: 'Color Tapes',
      category: 'bopp',
      description: 'Wide range of colored tapes for color coding, identification, and decorative purposes',
      image: yellowTape,
      features: ['Multiple colors', 'High visibility', 'Easy identification', 'Decorative finish'],
      applications: ['Color coding', 'Inventory management', 'Gift wrapping', 'Brand identification']
    },
    {
      id: 10,
      name: 'Corrugated Rolls & Boxes',
      category: 'packaging',
      description: 'High-quality corrugated cardboard rolls and boxes for secure packaging and shipping',
      image: packagingBanner,
      features: ['Durable construction', 'Custom sizes', 'Eco-friendly', 'Cost effective'],
      applications: ['Shipping boxes', 'Storage solutions', 'Product packaging', 'Moving boxes']
    },
    {
      id: 11,
      name: 'Floor Marking Tapes',
      category: 'industrial',
      description: 'Durable floor marking tapes for safety, organization, and visual guidance in industrial settings',
      image: tapesGeneral,
      features: ['High visibility', 'Durable adhesive', 'Weather resistant', 'Easy application'],
      applications: ['Warehouse marking', 'Safety zones', 'Traffic lanes', 'Area identification']
    },
    {
      id: 12,
      name: 'Double Side Foam Tapes',
      category: 'industrial',
      description: 'Versatile double-sided foam tapes with excellent adhesion for mounting and bonding applications',
      image: whiteBigTape,
      features: ['Double-sided adhesive', 'Foam cushioning', 'Strong bond', 'Vibration dampening'],
      applications: ['Sign mounting', 'Automotive trim', 'Construction', 'Electronics assembly']
    },
    {
      id: 13,
      name: 'Bubble Rolls',
      category: 'protective',
      description: 'Protective bubble wrap rolls for cushioning fragile items during shipping and storage',
      image: packagingBanner,
      features: ['Excellent cushioning', 'Lightweight', 'Moisture resistant', 'Reusable'],
      applications: ['Fragile item packaging', 'Shipping protection', 'Storage cushioning', 'Moving supplies']
    },
    {
      id: 14,
      name: 'Stretch Films',
      category: 'films',
      description: 'High-quality stretch films for secure pallet wrapping and product bundling',
      image: stretchFilm,
      features: ['Excellent stretch', 'Puncture resistant', 'Clear visibility', 'Cost effective'],
      applications: ['Pallet wrapping', 'Product bundling', 'Load securing', 'Warehouse storage']
    },
    {
      id: 15,
      name: 'Mini Wrapping Rolls',
      category: 'films',
      description: 'Compact mini wrapping rolls perfect for small items and retail packaging',
      image: filmPic1,
      features: ['Compact size', 'Easy handling', 'Clear finish', 'Versatile'],
      applications: ['Small item wrapping', 'Retail packaging', 'Gift wrapping', 'Home use']
    },
    {
      id: 16,
      name: 'PP & PET Strapping',
      category: 'strapping',
      description: 'Strong polypropylene and PET strapping bands for securing heavy loads and packages',
      image: ppStrap,
      features: ['High tensile strength', 'Weather resistant', 'Reusable', 'Cost effective'],
      applications: ['Heavy load securing', 'Pallet bundling', 'Shipping', 'Industrial packaging']
    },
    {
      id: 17,
      name: 'LDPE Shrink Film',
      category: 'films',
      description: 'Low-density polyethylene shrink film for product protection and tamper-evident packaging',
      image: filmPic2,
      features: ['Excellent shrink', 'Tamper evident', 'Moisture barrier', 'Clear visibility'],
      applications: ['Product packaging', 'Bottle wrapping', 'Multi-pack bundling', 'Retail display']
    },
    {
      id: 18,
      name: 'PVC Shrink Film',
      category: 'films',
      description: 'Premium PVC shrink film with superior clarity and shrink properties for professional packaging',
      image: handGradeFilm,
      features: ['Superior clarity', 'High shrink ratio', 'Durable', 'Professional finish'],
      applications: ['Premium packaging', 'CD/DVD wrapping', 'Electronics', 'Food packaging']
    },
    {
      id: 19,
      name: 'Surface Protection Film',
      category: 'protective',
      description: 'Protective films for surfaces to prevent scratches, dust, and damage during manufacturing and shipping',
      image: clearTransparentTape,
      features: ['Scratch resistant', 'Easy removal', 'Clear finish', 'Adhesive free'],
      applications: ['Surface protection', 'Manufacturing', 'Shipping', 'Construction']
    },
    {
      id: 20,
      name: 'Poly Bags',
      category: 'packaging',
      description: 'Versatile polyethylene bags in various sizes for packaging, storage, and protection',
      image: packagingBanner,
      features: ['Multiple sizes', 'Moisture resistant', 'Durable', 'Cost effective'],
      applications: ['Product packaging', 'Storage', 'Shipping', 'Retail bags']
    },
    {
      id: 21,
      name: 'Masking Tapes',
      category: 'industrial',
      description: 'High-quality masking tapes in various colors for painting, labeling, and temporary bonding applications',
      image: blueTape,
      features: ['Easy removal', 'Clean edges', 'Multiple colors', 'Paint resistant'],
      applications: ['Painting projects', 'Surface protection', 'Labeling', 'Temporary bonding']
    }
  ]

  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesCategory && matchesSearch
  })

  // Get pastel background colors for cards
  const getCardBackgroundColor = (index) => {
    const colors = [
      'linear-gradient(135deg, #ffe5e5 0%, #ffcccc 100%)', // Light peach/pink
      'linear-gradient(135deg, #fff9e6 0%, #fff4cc 100%)', // Light yellow/cream
      'linear-gradient(135deg, #e6f3ff 0%, #cce6ff 100%)', // Light blue
      'linear-gradient(135deg, #e6ffe6 0%, #ccffcc 100%)', // Light green
      'linear-gradient(135deg, #f0e6ff 0%, #e0ccff 100%)', // Light purple
      'linear-gradient(135deg, #ffe6f0 0%, #ffcce0 100%)', // Light pink
    ]
    return colors[index % colors.length]
  }

  const openProductModal = (product) => {
    setSelectedProduct(product)
    setIsModalOpen(true)
    document.body.style.overflow = 'hidden' // Prevent background scrolling
  }

  const closeProductModal = () => {
    setIsModalOpen(false)
    setSelectedProduct(null)
    document.body.style.overflow = 'auto' // Restore scrolling
  }

  // Navigate to next product in modal
  const navigateToNextProduct = () => {
    if (!selectedProduct) return
    
    const currentIndex = filteredProducts.findIndex(p => p.id === selectedProduct.id)
    if (currentIndex === -1) return
    
    const nextIndex = (currentIndex + 1) % filteredProducts.length
    setSelectedProduct(filteredProducts[nextIndex])
  }

  // Navigate to previous product in modal
  const navigateToPrevProduct = () => {
    if (!selectedProduct) return
    
    const currentIndex = filteredProducts.findIndex(p => p.id === selectedProduct.id)
    if (currentIndex === -1) return
    
    const prevIndex = (currentIndex - 1 + filteredProducts.length) % filteredProducts.length
    setSelectedProduct(filteredProducts[prevIndex])
  }

  return (
    <div className="products-page">
      <section className="section">
        <div className="container">
          {/* Search and Filter */}
          <div className="search-filter">
              <div className="search-box">
                <FaSearch className="search-icon" />
                <input
                  type="text"
                  placeholder="Search products..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <div className="category-filter">
                <FaFilter className="filter-icon" />
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                >
                  {categories.map(category => (
                    <option key={category.id} value={category.id}>
                      {category.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          {/* Products Grid */}
          <div className="products-grid">
            {filteredProducts.map((product, index) => (
              <div 
                key={product.id} 
                className="product-card card"
                style={{ '--card-bg': getCardBackgroundColor(index) }}
              >
                <div className="product-image">
                  <img src={product.image} alt={product.name} />
                </div>
                <div className="product-content">
                  <h3>{product.name}</h3>
                  <p>{product.description}</p>
                </div>
                <div className="product-features">
                  <h4>Key Features:</h4>
                  <ul>
                    {product.features.map((feature, idx) => (
                      <li key={idx}> {feature}</li>
                    ))}
                  </ul>
                </div>
                
                <div className="product-applications">
                  <h4>Applications:</h4>
                  <div className="application-tags">
                    <ul>
                      {product.applications.map((app, idx) => (
                        <li key={idx}>{app}</li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                <div className="product-actions">
                  <button className="btn" onClick={() => navigate('/contact')}>Get Quote</button>
                  <button 
                    className="btn-view-details mobile-view-btn" 
                    onClick={() => openProductModal(product)}
                    aria-label="View product details"
                  >
                    <FaArrowRight />
                  </button>
                </div>
              </div>
            ))}
          </div>
          
          {filteredProducts.length === 0 && (
            <div className="no-products">
              <h3>No products found</h3>
              <p>Try adjusting your search criteria or browse all categories.</p>
            </div>
          )}
        </div>
      </section>

      {/* Product Categories Overview */}
      <section className="section categories-overview">
        <div className="container">
          <h2 className="section-title">Product Categories</h2>
          <p className="section-subtitle">
            Explore our comprehensive range of tapes and packaging solutions
          </p>
          <div className="grid grid-4">
            <div className="category-card card">
              <h3>BOPP Tapes</h3>
              <p>High-quality BOPP tapes in various colors and finishes for all packaging needs</p>
              <ul>
                <li>BOPP Self Adhesive Tapes</li>
                <li>Color Tapes</li>
                <li>Customised Printed Tapes</li>
                <li>Transparent & Brown Tapes</li>
              </ul>
            </div>
            <div className="category-card card">
              <h3>Aluminium Tapes</h3>
              <p>Premium aluminium foil tapes for heat resistance and insulation</p>
              <ul>
                <li>Aluminium Foil Tapes</li>
                <li>Heat resistant tapes</li>
                <li>UV resistant tapes</li>
                <li>Moisture barrier tapes</li>
              </ul>
            </div>
            <div className="category-card card">
              <h3>Packaging Solutions</h3>
              <p>Complete packaging solutions for various industrial applications</p>
              <ul>
                <li>Corrugated Rolls & Boxes</li>
                <li>Poly Bags</li>
                <li>Custom packaging</li>
                <li>Bulk packaging</li>
              </ul>
            </div>
            <div className="category-card card">
              <h3>Industrial Tapes</h3>
              <p>Specialized industrial tapes for demanding applications</p>
              <ul>
                <li>Floor Marking Tapes</li>
                <li>Double Side Foam Tapes</li>
                <li>High temperature tapes</li>
                <li>Chemical resistant tapes</li>
              </ul>
            </div>
            <div className="category-card card">
              <h3>Films & Shrink</h3>
              <p>Comprehensive range of films and shrink wraps for packaging</p>
              <ul>
                <li>Stretch Films</li>
                <li>LDPE Shrink Film</li>
                <li>PVC Shrink Film</li>
                <li>Mini Wrapping Rolls</li>
              </ul>
            </div>
            <div className="category-card card">
              <h3>Strapping</h3>
              <p>Strong strapping solutions for securing heavy loads</p>
              <ul>
                <li>PP & PET Strapping</li>
                <li>Heavy duty strapping</li>
                <li>Industrial strapping</li>
                <li>Reusable strapping</li>
              </ul>
            </div>
            <div className="category-card card">
              <h3>Protective Materials</h3>
              <p>Protective packaging materials for safe shipping</p>
              <ul>
                <li>Bubble Rolls</li>
                <li>Surface Protection Film</li>
                <li>Cushioning materials</li>
                <li>Protective wraps</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Need Custom Solutions?</h2>
            <p>
              We specialize in creating custom tape and packaging solutions tailored to your specific needs. 
              Contact us to discuss your requirements and get a free consultation.
            </p>
            <button className="btn" onClick={() => navigate('/contact')}>Contact Us</button>
          </div>
        </div>
      </section>

      {/* Product Detail Modal */}
      {isModalOpen && selectedProduct && filteredProducts.length > 0 && (
        <div className="product-modal-overlay" onClick={closeProductModal}>
          <div className="product-modal" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close-btn" onClick={closeProductModal} aria-label="Close modal">
              <FaTimes />
            </button>
            
            {/* Navigation Arrows */}
            {filteredProducts.length > 1 && (
              <>
                <button 
                  className="modal-nav-btn modal-nav-left" 
                  onClick={(e) => {
                    e.stopPropagation()
                    navigateToPrevProduct()
                  }}
                  aria-label="Previous product"
                >
                  <FaChevronLeft />
                </button>
                <button 
                  className="modal-nav-btn modal-nav-right" 
                  onClick={(e) => {
                    e.stopPropagation()
                    navigateToNextProduct()
                  }}
                  aria-label="Next product"
                >
                  <FaChevronRight />
                </button>
              </>
            )}

            <h2 className="modal-title">{selectedProduct.name.toUpperCase()}</h2>
            <div className="modal-content">
              <div className="modal-image">
                <img src={selectedProduct.image} alt={selectedProduct.name} />
              </div>
              <div className="modal-details">
                <div className="modal-description">
                  <h3>Description:</h3>
                  <p>{selectedProduct.description}</p>
                </div>
                <div className="modal-features">
                  <h3>Features:</h3>
                  <ul>
                    {selectedProduct.features.map((feature, idx) => (
                      <li key={idx}>{feature}</li>
                    ))}
                  </ul>
                </div>
                <div className="modal-sizes">
                  <h3>Sizes</h3>
                  <p>As per requirements can be Customised</p>
                  <button 
                    className="btn-customize" 
                    onClick={(e) => {
                      e.stopPropagation()
                      closeProductModal()
                      navigate('/contact')
                    }}
                    aria-label="Get customized quote"
                  >
                    <FaArrowRight />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Products 