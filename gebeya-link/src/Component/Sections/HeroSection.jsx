import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import home1 from "../../images/banner/slider-1.jpg";
import home2 from "../../images/banner/slider-2.jpg";
import home3 from "../../images/banner/slider-3.jpg";
import minibanner1 from "../../images/mini-banner-1.jpg";
import minibanner2 from "../../images/mini-banner-2.jpg";

import './HeroSection.css';

const HeroSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const banners = [
    {
      id: 1,
      image: home1,
      badge: "Opening Sale Discount 50%",
      title: "SuperMarket Daily ",
      span:'Fresh Grocery',
      description: "Introduced a new model for online grocery shopping and convenient home delivery.",
      buttonText: "Shop Now"
    },
    {
      id: 2,
      image: home2,
      badge: "Limited Time Offer",
      title: "Fresh Organic Vegetables",
      description: "Get the freshest organic vegetables delivered to your doorstep.",
      buttonText: "Explore Now"
    },
    {
      id: 3,
      image: home3,
      badge: "Free Shipping",
      title: "Orders Over $100",
      description: "Free shipping on all orders over $100. First-time customers only.",
      buttonText: "Start Shopping"
    }
  ];

  const miniBanners = [
    {
      id: 1,
      image: minibanner1,
      badge: "Special Deal",
      title: "Dairy Products",
      description: "Fresh dairy products with 20% off this week.",
      buttonText: "Buy Now"
    },
    {
      id: 2,
      image: minibanner2,
      badge: "New Arrivals",
      title: "Bakery Items",
      description: "Freshly baked goods delivered daily.",
      buttonText: "View All"
    }
  ];

  const nextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % banners.length);
  };

  const prevSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + banners.length) % banners.length);
  };

  return (
    <section className="hero-section">
      <div className="container hero-container">
        {/* Main Carousel Banner (8 columns) */}
        <div className="main-banner">
          <div className="carousel">
            {banners.map((banner, index) => (
              <div 
                key={banner.id}
                className={`carousel-slide ${index === activeIndex ? 'active' : ''}`}
                style={{ backgroundImage: `url(${banner.image})` }}
              >
                <div className="banner-content">
                    <div className="">
                        <span className="badge">{banner.badge}</span>
                    </div>
                  <h2>{banner.title} <span className='span-title'>{banner.span}</span></h2>
                  <p>{banner.description}</p>
                  <div className="">
                    <Link to="#!" className="btn">{banner.buttonText}</Link>
                  </div>
                 
                </div>
              </div>
            ))}
            
            <button className="carousel-control prev" onClick={prevSlide}>
              &lt;
            </button>
            <button className="carousel-control next" onClick={nextSlide}>
              &gt;
            </button>
          </div>
        </div>

        {/* Mini Banners (4 columns) */}
        <div className="mini-banners">
          {miniBanners.map((banner) => (
            <div 
              key={banner.id}
              className="mini-banner"
              style={{ backgroundImage: `url(${banner.image})` }}
            >
              <div className="banner-content">
                <div className="">
                   <span className="badge">{banner.badge}</span>
                </div>
                <h3>{banner.title}</h3>
                <p>{banner.description}</p>
                <div className="">
                  <Link to="#!" className="btn-mini">{banner.buttonText}</Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;