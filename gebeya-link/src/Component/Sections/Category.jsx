import React, { useState, useEffect } from 'react';
import './Category.css';
import prod1 from '../../images/product/p1.png';
import prod2 from '../../images/product/p10.png';
import prod3 from '../../images/product/p3.png';
import prod4 from '../../images/product/p4.png';
import prod5 from '../../images/product/p5.png';
import prod6 from '../../images/product/p6.png';
import prod7 from '../../images/product/p7.png';
import prod8 from '../../images/product/p8.png';

const CategoryCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerSlide, setItemsPerSlide] = useState(5);
  const [wishlist, setWishlist] = useState([]);
  const [compare, setCompare] = useState([]);

  // Sample enhanced category data
  const categories = [
    {
      id: 1,
      name: 'Fresh Fruit',
      image: prod1,
      price: 129.99,
      oldPrice: 159.99,
      rating: 4.5,
      reviews: 128,
      isHot: true,
      isNew: false
    },
    {
      id: 2,
      name: 'Fresh Vegetables',
      image: prod2,
      price: 89.99,
      oldPrice: 119.99,
      rating: 4.2,
      reviews: 86,
      isHot: false,
      isNew: true
    },
    {
      id: 3,
      name: 'Grain & Cereals',
      image: prod3,
      price: 699.99,
      oldPrice: 899.99,
      rating: 4.8,
      reviews: 215,
      isHot: true,
      isNew: false
    },
    {
      id: 4,
      name: 'Pulse & Lentils',
      image: prod4,
      price: 49.99,
      oldPrice: null,
      rating: 4.3,
      reviews: 64,
      isHot: false,
      isNew: true
    },
    {
      id: 5,
      name: 'Seasonal & Exotic Fruits',
      image: prod5,
      price: 79.99,
      oldPrice: 99.99,
      rating: 4.1,
      reviews: 93,
      isHot: true,
      isNew: false
    },
    {
      id: 6,
      name: 'Organic Fruits',
      image: prod6,
      price: 249.99,
      oldPrice: 299.99,
      rating: 4.6,
      reviews: 42,
      isHot: false,
      isNew: false
    },
    {
      id: 7,
      name: 'Dry Fruits & Nuts', 
      image:prod7,
      price: 199.99,
      oldPrice: null,
      rating: 4.9,
      reviews: 156,
      isHot: true,
      isNew: true
    }
  ];

  // Handle responsive items per slide
  useEffect(() => {
    const handleResize = () => {
      // if (window.innerWidth >= 1200) {
    
      // // } else if (window.innerWidth >= 1200) {
      // //   setItemsPerSlide(5);
      // // } else if (window.innerWidth >= 992) {
      // //   setItemsPerSlide(6);
      // // } else if (window.innerWidth >= 768) {
      // //   setItemsPerSlide(4);
      // // } 
      // // else if (window.innerWidth >= 468) {
      // //   setItemsPerSlide(6);
      // // }else {
      //   // setItemsPerSlide(3);
      // }
      setItemsPerSlide(7);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleWishlist = (id) => {
    setWishlist(prev => 
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  const toggleCompare = (id) => {
    setCompare(prev => 
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  const addToCart = (id) => {
    console.log(`Added product ${id} to cart`);
  };

  const nextSlide = () => {
    setCurrentIndex(prev => (prev + 1) % categories.length);
  };

  const prevSlide = () => {
    setCurrentIndex(prev => (prev - 1 + categories.length) % categories.length);
  };

  // Get visible items based on current index
  const getVisibleItems = () => {
    const visibleItems = [];
    for (let i = 0; i < itemsPerSlide; i++) {
      const index = (currentIndex + i) % categories.length;
      visibleItems.push(categories[index]);
    }
    return visibleItems;
  };

  // SVG Icons
  const ChevronLeft = () => (
    <svg width="90" height="90" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="10" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="15 18 9 12 15 6"></polyline>
    </svg>
  );

  const ChevronRight = () => (
    <svg width="70" height="70" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="10" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="9 18 15 12 9 6"></polyline>
    </svg>
  );

  const HeartOutline = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
    </svg>
  );

  const HeartFilled = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="#ff4d4d" stroke="#ff4d4d" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
    </svg>
  );

  const BarChart = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="12" y1="20" x2="12" y2="10"></line>
      <line x1="18" y1="20" x2="18" y2="4"></line>
      <line x1="6" y1="20" x2="6" y2="16"></line>
    </svg>
  );

  const ShoppingCart = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="9" cy="21" r="1"></circle>
      <circle cx="20" cy="21" r="1"></circle>
      <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
    </svg>
  );

  const Star = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="#ffc107" stroke="#ffc107" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
    </svg>
  );

  const Fire = () => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="#ff4d4d" stroke="#ff4d4d" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"></path>
    </svg>
  );

  return (
    <div className="container-fluid px-4 py-5">
      <div className="container ">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h2 className="mb-0 font-weight-bold">Featured Categories</h2>
          <div className="d-flex">
           
            
          </div>
        </div>

        <div className="category-carousel-container">
          <div className="category-carousel-track d-flex align-items-center position-relative ">
          <button 
              className="btn btn1 btn-circle position-absolute  "
              onClick={prevSlide} 
              style={{ zIndex: '5', left: '0%' }}
            >
              <ChevronLeft />
            </button>
            {getVisibleItems().map((product) => (
              <div key={product.id} className="category-carousel-item ">
                <div className="card product-card h-100 border-0 overflow-hidden the-card ">
                  <div className="card-img-container position-relative h-100">
                    <img 
                      src={product.image} 
                      className="card-img-top" 
                      alt={product.name}
                      loading="lazy"
                    />
                    {product.isHot && (
                      <div className="product-badge hot">
                        <Fire /> Hot
                      </div>
                    )}
                    {product.isNew && (
                      <div className="product-badge new">
                        New
                      </div>
                    )}
                    <div className="product-actions">
                      <button 
                        className={`action-btn wishlist ${wishlist.includes(product.id) ? 'active' : ''}`}
                        onClick={() => toggleWishlist(product.id)}
                      >
                        {wishlist.includes(product.id) ? <HeartFilled /> : <HeartOutline />}
                      </button>
                      <button 
                        className={`action-btn compare ${compare.includes(product.id) ? 'active' : ''}`}
                        onClick={() => toggleCompare(product.id)}
                      >
                        <BarChart />
                      </button>
                    </div>
                  </div>
                  <div className="card-body px-3 pb-3 pt-2">
                    <div className="d-flex justify-content-between align-items-start mb-1">
                      <h4 className="card-title mb-0 font-weight-bold txt">{product.name}</h4>
                      <div className="d-flex align-items-center">
                        <Star />
                        <span className="text-dark">{product.rating}</span>
                        <span className="text-muted ml-1">({product.reviews})</span>
                      </div>
                    </div>
                    <div className="price-container mb-2">
                      <span className="current-price">${product.price.toFixed(2)}</span>
                      {product.oldPrice && (
                        <span className="old-price ml-2">${product.oldPrice.toFixed(2)}</span>
                      )}
                    </div>
                    <button 
                      className="btn btn-dark btn-block rounded-pill py-2"
                      onClick={() => addToCart(product.id)}
                    >
                      <ShoppingCart /> Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
            <button 
              className="btn btn2 position-absolute btn-circle z-3 mr-2 right-0"
              onClick={nextSlide} style={{ right: '0%' ,zIndex: '5'}}
            >
              <ChevronRight />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryCarousel;