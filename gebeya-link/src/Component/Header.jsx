import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Grocerylogo from "../images/Grocerylogo.png";
import menubanner from "../images/menu-banner.jpg";
import productimage1 from '../images/product-img-1.jpg';
import productimage2 from '../images/product-img-2.jpg';
import productimage3 from '../images/product-img-3.jpg';
import productimage4 from '../images/product-img-4.jpg';
import productimage5 from '../images/product-img-5.jpg';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeMegaMenu, setActiveMegaMenu] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleMegaMenu = (menu) => {
    setActiveMegaMenu(activeMegaMenu === menu ? null : menu);
  };

  const closeAllMenus = () => {
    setIsOpen(false);
    setActiveMegaMenu(null);
  };

  return (
    <>
      {/* Top Announcement Bar */}
      <div className="bg-primary text-white py-2">
        <div className="container">
          <div className="d-flex justify-content-between align-items-center">
            <span className="small">Super Value Deals - Save more with coupons</span>
            <div className="d-none d-lg-none d-md-flex gap-3">
              <Link to="/ShopWishList" className="text-white position-relative">
                <i className="bi bi-heart-fill"></i>
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                  5
                </span>
              </Link>
              <Link to="#!" className="text-white" data-bs-toggle="modal" data-bs-target="#userModal">
                <i className="bi bi-person-fill"></i>
              </Link>
              <Link className="text-white position-relative" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight">
                <i className="bi bi-cart-fill"></i>
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                  1
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header - Sticky on Scroll */}
      <header className={`sticky-top  bg-gray-100 transition-all ${isScrolled ? 'py-2' : 'py-3'}`}>
        <div className="container">
          <div className="d-flex align-items-center justify-content-between">
            {/* Logo */}
            <Link className="navbar-brand" to="/">
              <img src={Grocerylogo} alt="Grocery Store" style={{ height: isScrolled ? '80px' : '70px', transition: 'height 0.5s' }} />
            </Link>

            {/* Search Bar - Desktop */}
            <div className="d-none d-lg-block flex-grow-1 mx-4">
              <div className="input-group">
                <input
                  type="search"
                  className="form-control border-end-0"
                  placeholder="Search for products..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button className="btn btn-primary btn-mobile" type="button">
                  <i className="bi bi-search"></i>
                </button>
              </div>
            </div>

            {/* Action Icons - Desktop */}
            <div className="d-none d-lg-flex gap-4 ">
              <Link to="/ShopWishList" className="text-dark position-relative">
                <i className="bi bi-heart fs-5"></i>
                <span className="position-absolute  start-100 translate-middle badge rounded-pill bg-danger">
                  5
                </span>
              </Link>
              <Link to="#!" className="text-dark" data-bs-toggle="modal" data-bs-target="#userModal">
                <i className="bi bi-person fs-5"></i>
              </Link>
              <Link className="text-dark position-relative" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight">
                <i className="bi bi-cart3 fs-5"></i>
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                  1
                </span>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="navbar-toggler d-lg-none border-0"
              type="button"
              onClick={toggleMenu}
              aria-label="Toggle navigation"
            >
              <div className={`hamburger ${isOpen ? 'open' : ''}`}>
                <span></span>
                <span></span>
                <span></span>
              </div>
            </button>
          </div>

          {/* Search Bar - Mobile */}
          <div className="d-lg-none mt-3">
            <div className="input-group">
              <input
                type="search"
                className="form-control border-end-0"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button className="btn btn-primary" type="button">
                <i className="bi bi-search"></i>
              </button>
            </div>
          </div>
        </div>

        {/* Main Navigation */}
        <nav className={`navbar bg-cusotm  navbar-expand-lg ${isScrolled ? 'py-1' : 'py-2'}`}>
          <div className="container">
            <div className="collapse navbar-collapse" id="mainNav">
              <ul className="navbar-nav mx-auto">
                {/* All Departments Dropdown */}
                <li className="nav-item dropdown">
                      <Link
                        className="nav-link dropdown-toggle"
                        to="#"
                        onClick={() => toggleMegaMenu('departments')}
                      >
                        <i className="bi bi-grid me-1"></i> All Departments
                      </Link>

                      <div
                        className={`dropdown-menu ${activeMegaMenu === 'departments' ? 'show' : ''}`}
                        style={{ minWidth: '250px' }}
                      >
                        <h6 className="dropdown-header">Shop by Category</h6>
                        <Link className="dropdown-item" to="/Shop"> Fresh Vegetables
                          </Link>
                          <Link className="dropdown-item" to="/Shop">🍎 Fresh Fruits</Link>
                          <Link className="dropdown-item" to="/Shop">🥦 Fresh Vegetables </Link>
                          <Link className="dropdown-item" to="/Shop"> 🌾 Grains & Cereals</Link>
                          <Link className="dropdown-item" to="/Shop">🫘 Pulses & Lentils </Link>
                          <Link className="dropdown-item" to="/Shop">🥜 Dry Fruits & Nuts </Link>
                          <Link className="dropdown-item" to="/Shop">🌿 Organic & Farm-Fresh  </Link>
                          <Link className="dropdown-item" to="/Shop">🎯 Seasonal & Promotions</Link>

                          
                      </div>
                </li>



                {/* Home Link */}
                <li className="nav-item">
                  <Link className="nav-link" to="/" onClick={closeAllMenus}>Home</Link>
                </li>

                {/* About Dropdown */}
                <li className="nav-item dropdown">
                  <Link 
                    className="nav-link dropdown-toggle" 
                    to="#" 
                    onClick={() => toggleMegaMenu('about')}
                  >
                    About
                  </Link>
                  <div className={`dropdown-menu ${activeMegaMenu === 'about' ? 'show' : ''}`}>
                    <Link className="dropdown-item" to="/Blog" onClick={closeAllMenus}>Blog</Link>
                    <Link className="dropdown-item" to="/BlogCategory" onClick={closeAllMenus}>Blog Category</Link>
                    <Link className="dropdown-item" to="/AboutUs" onClick={closeAllMenus}>About us</Link>
                    <Link className="dropdown-item" to="/Contact" onClick={closeAllMenus}>Contact</Link>
                  </div>
                </li>

                {/* Shop Dropdown */}
                <li className="nav-item dropdown">
                  <Link 
                    className="nav-link dropdown-toggle" 
                    to="#" 
                    onClick={() => toggleMegaMenu('shop')}
                  >
                    Shop
                  </Link>
                  <div className={`dropdown-menu ${activeMegaMenu === 'shop' ? 'show' : ''}`}>
                    <Link className="dropdown-item" to="/Shop" onClick={closeAllMenus}>Shop</Link>
                    <Link className="dropdown-item" to="/ShopWishList" onClick={closeAllMenus}>Shop Wishlist</Link>
                    <Link className="dropdown-item" to="/ShopCart" onClick={closeAllMenus}>Shop Cart</Link>
                    <Link className="dropdown-item" to="/ShopCheckOut" onClick={closeAllMenus}>Shop Checkout</Link>
                  </div>
                </li>

                {/* Stores Dropdown */}
                <li className="nav-item dropdown">
                  <Link 
                    className="nav-link dropdown-toggle" 
                    to="#" 
                    onClick={() => toggleMegaMenu('stores')}
                  >
                    Stores
                  </Link>
                  <div className={`dropdown-menu ${activeMegaMenu === 'stores' ? 'show' : ''}`}>
                    <Link className="dropdown-item" to="/StoreList" onClick={closeAllMenus}>Store List</Link>
                    <Link className="dropdown-item" to="/SingleShop" onClick={closeAllMenus}>Single Store</Link>
                  </div>
                </li>

                {/* All Services Mega Menu */}
                <li className="nav-item dropdown megamenu-li">
                  <Link 
                    className="nav-link dropdown-toggle" 
                    to="#" 
                    onClick={() => toggleMegaMenu('services')}
                  >
                    All Services
                  </Link>
                  <div className={`dropdown-menu megamenu border-top ${activeMegaMenu === 'services' ? 'show' : ''}`}>
                    <div className="row">
                      <div className="col-sm-6 col-lg-3 border-right mb-4">
                        <div>
                          <h6 className="text-primary ps-3">Fresh Fruits</h6>
                          <Link className="dropdown-item" to="/Shop"> Fresh Vegetables
                          </Link>
                          <Link className="dropdown-item" to="/Shop">Grains & Cereals</Link>
                          <Link className="dropdown-item" to="/Shop"> Pulses & Lentils</Link>
                          <Link className="dropdown-item" to="/Shop">Dry Fruits & Nuts</Link>
                          <Link className="dropdown-item" to="/Shop">Organic & Exotic Produce </Link>
                          <Link className="dropdown-item" to="/Shop">Seasonal & Regional Specials </Link>
                          
                        </div>
                      </div>
                      <div className="col-sm-6 col-lg-3 border-right mb-4">
                        <div>
                          <h6 className="text-primary ps-3">Breakfast & Instant Food</h6>
                          <Link className="dropdown-item" to="/Shop">Breakfast Cereal</Link>
                          <Link className="dropdown-item" to="/Shop">Noodles, Pasta & Soup</Link>
                          <Link className="dropdown-item" to="/Shop">Frozen Veg Snacks</Link>
                          <Link className="dropdown-item" to="/Shop">Frozen Non-Veg Snacks</Link>
                          <Link className="dropdown-item" to="/Shop">Vermicelli</Link>
                          <Link className="dropdown-item" to="/Shop">Instant Mixes</Link>
                          <Link className="dropdown-item" to="/Shop">Batter</Link>
                          <Link className="dropdown-item" to="/Shop">Fruit and Juices</Link>
                        </div>
                      </div>
                      <div className="col-sm-6 col-lg-3 mb-4">
                        <div>
                          <h6 className="text-primary ps-3">Cold Drinks & Juices</h6>
                          <Link className="dropdown-item" to="/Shop">Soft Drinks</Link>
                          <Link className="dropdown-item" to="/Shop">Fruit Juices</Link>
                          <Link className="dropdown-item" to="/Shop">Coldpress</Link>
                          <Link className="dropdown-item" to="/Shop">Water & Ice Cubes</Link>
                          <Link className="dropdown-item" to="/Shop">Soda & Mixers</Link>
                          <Link className="dropdown-item" to="/Shop">Health Drinks</Link>
                          <Link className="dropdown-item" to="/Shop">Herbal Drinks</Link>
                          <Link className="dropdown-item" to="/Shop">Milk Drinks</Link>
                        </div>
                      </div>
                      <div className="col-sm-6 col-lg-3 border-right mb-4">
                        <div className="card border-0">
                          <img
                            src={menubanner}
                            style={{ width: "90%" }}
                            alt="Special Offer"
                            className="img-fluid rounded-3"
                          />
                          <div className="position-absolute ps-6 mt-8">
                            <h5 className="mb-0">Don't miss this offer today.</h5>
                            <Link to="/Shop" className="btn btn-primary btn-sm mt-3">
                              Shop Now
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>

                {/* Account Dropdown */}
                <li className="nav-item dropdown">
                  <Link 
                    className="nav-link dropdown-toggle" 
                    to="#" 
                    onClick={() => toggleMegaMenu('account')}
                  >
                    Account
                  </Link>
                  <div className={`dropdown-menu ${activeMegaMenu === 'account' ? 'show' : ''}`}>
                    <Link className="dropdown-item" to="/MyAccountSignIn" onClick={closeAllMenus}>Sign in</Link>
                    <Link className="dropdown-item" to="/MyAccountSignUp" onClick={closeAllMenus}>Signup</Link>
                    <Link className="dropdown-item" to="/MyAccountForgetPassword" onClick={closeAllMenus}>Forgot Password</Link>
                    <Link className="dropdown-item" to="/MyAccountOrder" onClick={closeAllMenus}>Orders</Link>
                    <Link className="dropdown-item" to="/MyAccountSetting" onClick={closeAllMenus}>Settings</Link>
                    <Link className="dropdown-item" to="/MyAccountAddress" onClick={closeAllMenus}>Address</Link>
                    <Link className="dropdown-item" to="/MyAcconutPaymentMethod" onClick={closeAllMenus}>Payment Method</Link>
                    <Link className="dropdown-item" to="/MyAcconutNotification" onClick={closeAllMenus}>Notification</Link>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>

      {/* Mobile Menu */}
      <div className={`mobile-menu-overlay ${isOpen ? 'open' : ''}`} onClick={closeAllMenus}></div>
      <div className={`mobile-menu ${isOpen ? 'open' : ''}`}>
        <div className="mobile-menu-header">
          <h5>Menu</h5>
          <button className="close-menu" onClick={closeAllMenus}>
            <i className="bi bi-x-lg"></i>
          </button>
        </div>
        <div className="mobile-menu-body">
          <div className="accordion" id="mobileMenuAccordion">
            {/* Home */}
            <div className="accordion-item border-0 p-4">
              <Link className="accordion-buttn collapsed" to="/" onClick={closeAllMenus}>
                Home
              </Link>
            </div>

            {/* All Departments */}
            <div className="accordion-item">
              <h3 className="accordion-header">
                <button 
                  className="accordion-button collapsed" 
                  type="button" 
                  onClick={() => toggleMegaMenu('mobileDepartments')}
                >
                  <i className="bi bi-grid me-2"></i> All Departments
                </button>
              </h3>
              <div 
                className={`accordion-collapse collapse ${activeMegaMenu === 'mobileDepartments' ? 'show' : ''}`}
              >
                <div className="accordion-body p-0">
                  <Link className="dropdown-item ps-4 " to="/Shop" onClick={closeAllMenus}>Dairy, Bread & Eggs</Link>
                  <Link className="dropdown-item ps-4" to="/Shop" onClick={closeAllMenus}>Snacks & Munchies</Link>
                  <Link className="dropdown-item ps-4" to="/Shop" onClick={closeAllMenus}>Fruits & Vegetables</Link>
                  <Link className="dropdown-item ps-4" to="/Shop" onClick={closeAllMenus}>Cold Drinks & Juices</Link>
                  <Link className="dropdown-item ps-4" to="/Shop" onClick={closeAllMenus}>Breakfast & Instant Food</Link>
                  <Link className="dropdown-item ps-4" to="/Shop" onClick={closeAllMenus}>Bakery & Biscuits</Link>
                  <Link className="dropdown-item ps-4" to="/Shop" onClick={closeAllMenus}>Chicken, Meat & Fish</Link>
                </div>
              </div>
            </div>

            {/* About */}
            <div className="accordion-item">
              <h3 className="accordion-header">
                <button 
                  className="accordion-button collapsed" 
                  type="button" 
                  onClick={() => toggleMegaMenu('mobileAbout')}
                >
                  About
                </button>
              </h3>
              <div 
                className={`accordion-collapse collapse ${activeMegaMenu === 'mobileAbout' ? 'show' : ''}`}
              >
                <div className="accordion-body p-0">
                  <Link className="dropdown-item ps-4" to="/Blog" onClick={closeAllMenus}>Blog</Link>
                  <Link className="dropdown-item ps-4" to="/BlogCategory" onClick={closeAllMenus}>Blog Category</Link>
                  <Link className="dropdown-item ps-4" to="/AboutUs" onClick={closeAllMenus}>About us</Link>
                  <Link className="dropdown-item ps-4" to="/Contact" onClick={closeAllMenus}>Contact</Link>
                </div>
              </div>
            </div>

            {/* Shop */}
            <div className="accordion-item">
              <h3 className="accordion-header">
                <button 
                  className="accordion-button collapsed" 
                  type="button" 
                  onClick={() => toggleMegaMenu('mobileShop')}
                >
                  Shop
                </button>
              </h3>
              <div 
                className={`accordion-collapse collapse ${activeMegaMenu === 'mobileShop' ? 'show' : ''}`}
              >
                <div className="accordion-body p-0">
                  <Link className="dropdown-item ps-4" to="/Shop" onClick={closeAllMenus}>Shop</Link>
                  <Link className="dropdown-item ps-4" to="/ShopWishList" onClick={closeAllMenus}>Shop Wishlist</Link>
                  <Link className="dropdown-item ps-4" to="/ShopCart" onClick={closeAllMenus}>Shop Cart</Link>
                  <Link className="dropdown-item ps-4" to="/ShopCheckOut" onClick={closeAllMenus}>Shop Checkout</Link>
                </div>
              </div>
            </div>

            {/* Stores */}
            <div className="accordion-item">
              <h3 className="accordion-header">
                <button 
                  className="accordion-button collapsed" 
                  type="button" 
                  onClick={() => toggleMegaMenu('mobileStores')}
                >
                  Stores
                </button>
              </h3>
              <div 
                className={`accordion-collapse collapse ${activeMegaMenu === 'mobileStores' ? 'show' : ''}`}
              >
                <div className="accordion-body p-0">
                  <Link className="dropdown-item ps-4" to="/StoreList" onClick={closeAllMenus}>Store List</Link>
                  <Link className="dropdown-item ps-4" to="/SingleShop" onClick={closeAllMenus}>Single Store</Link>
                </div>
              </div>
            </div>

            {/* All Services */}
            <div className="accordion-item">
              <h3 className="accordion-header">
                <button 
                  className="accordion-button collapsed" 
                  type="button" 
                  onClick={() => toggleMegaMenu('mobileServices')}
                >
                  All Services
                </button>
              </h3>
              <div 
                className={`accordion-collapse collapse ${activeMegaMenu === 'mobileServices' ? 'show' : ''}`}
              >
                <div className="accordion-body p-0">
                  <Link className="dropdown-item ps-4" to="/Shop" onClick={closeAllMenus}>Dairy, Bread & Eggs</Link>
                  <Link className="dropdown-item ps-4" to="/Shop" onClick={closeAllMenus}>Breakfast & Instant Food</Link>
                  <Link className="dropdown-item ps-4" to="/Shop" onClick={closeAllMenus}>Cold Drinks & Juices</Link>
                </div>
              </div>
            </div>

            {/* Account */}
            <div className="accordion-item">
              <h3 className="accordion-header">
                <button 
                  className="accordion-button collapsed" 
                  type="button" 
                  onClick={() => toggleMegaMenu('mobileAccount')}
                >
                  Account
                </button>
              </h3>
              <div 
                className={`accordion-collapse collapse ${activeMegaMenu === 'mobileAccount' ? 'show' : ''}`}
              >
                <div className="accordion-body p-0">
                  <Link className="dropdown-item ps-4" to="/MyAccountSignIn" onClick={closeAllMenus}>Sign in</Link>
                  <Link className="dropdown-item ps-4" to="/MyAccountSignUp" onClick={closeAllMenus}>Signup</Link>
                  <Link className="dropdown-item ps-4" to="/MyAccountForgetPassword" onClick={closeAllMenus}>Forgot Password</Link>
                  <Link className="dropdown-item ps-4" to="/MyAccountOrder" onClick={closeAllMenus}>Orders</Link>
                  <Link className="dropdown-item ps-4" to="/MyAccountSetting" onClick={closeAllMenus}>Settings</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mobile-menu-footer">
          <div className="d-flex justify-content-around">
            <Link to="/ShopWishList" className="text-dark" onClick={closeAllMenus}>
              <i className="bi bi-heart"></i>
              <span className="ms-1">Wishlist</span>
              <span className="badge bg-danger ms-1">5</span>
            </Link>
            <Link to="#!" className="text-dark" onClick={closeAllMenus} data-bs-toggle="modal" data-bs-target="#userModal">
              <i className="bi bi-person"></i>
              <span className="ms-1">Account</span>
            </Link>
            <Link className="text-dark" onClick={closeAllMenus} data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight">
              <i className="bi bi-cart3"></i>
              <span className="ms-1">Cart</span>
              <span className="badge bg-danger ms-1">1</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Shopping Cart Offcanvas */}
      <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasRight">
        <div className="offcanvas-header border-bottom">
          <h5 className="offcanvas-title">Your Cart</h5>
          <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div className="offcanvas-body">
          <div className="alert alert-info">
            You've got FREE delivery. Start checkout now!
          </div>
          
          <div className="cart-items">
            {[productimage1, productimage2, productimage3, productimage4, productimage5].map((img, index) => (
              <div className="cart-item py-3 border-bottom" key={index}>
                <div className="row align-items-center">
                  <div className="col-3">
                    <img src={img} alt="Product" className="img-fluid rounded" />
                  </div>
                  <div className="col-5">
                    <h6 className="mb-1">Product {index + 1}</h6>
                    <small className="text-muted">${(10 + index * 5).toFixed(2)}</small>
                    <div className="mt-2">
                      <button className="btn btn-sm btn-outline-danger">
                        <i className="bi bi-trash"></i> Remove
                      </button>
                    </div>
                  </div>
                  <div className="col-4">
                    <div className="input-group input-group-sm">
                      <button className="btn btn-outline-secondary" type="button">-</button>
                      <input type="text" className="form-control text-center" value="1" readOnly />
                      <button className="btn btn-outline-secondary" type="button">+</button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="cart-total mt-3">
            <div className="d-flex justify-content-between fw-bold mb-2">
              <span>Subtotal:</span>
              <span>$120.00</span>
            </div>
            <div className="d-flex justify-content-between small text-muted mb-3">
              <span>Delivery:</span>
              <span>FREE</span>
            </div>
            <button className="btn btn-primary w-100 py-2">
              Proceed to Checkout
            </button>
          </div>
        </div>
      </div>

      {/* User Modal */}
      <div className="modal fade" id="userModal" tabIndex="-1" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header border-0">
              <h5 className="modal-title">Sign In</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <form>
                <div className="mb-3">
                  <label className="form-label">Email address</label>
                  <input type="email" className="form-control" placeholder="Enter your email" required />
                </div>
                <div className="mb-3">
                  <label className="form-label">Password</label>
                  <input type="password" className="form-control" placeholder="Enter password" required />
                </div>
                <div className="mb-3 form-check">
                  <input type="checkbox" className="form-check-input" id="rememberMe" />
                  <label className="form-check-label" htmlFor="rememberMe">Remember me</label>
                </div>
                <button type="submit" className="btn btn-primary w-100">Sign In</button>
              </form>
            </div>
            <div className="modal-footer border-0 justify-content-center">
              Don't have an account? <Link to="/MyAccountSignUp" className="ms-1">Sign up</Link>
            </div>
          </div>
        </div>
      </div>

      {/* CSS Styles */}
      <style jsx>{`
        .sticky-top {
          transition: all 0.3s ease;
          z-index: 1020;
        }
        
        .hamburger {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          width: 24px;
          height: 18px;
          cursor: pointer;
        }
        
        .hamburger span {
          display: block;
          width: 100%;
          height: 2px;
          background-color:rgb(29, 174, 0);
          transition: all 0.3s ease;
        }
        
        .hamburger.open span:nth-child(1) {
          transform: translateY(8px) rotate(45deg);
        }
        
        .hamburger.open span:nth-child(2) {
          opacity: 0;
        }
        
        .hamburger.open span:nth-child(3) {
          transform: translateY(-8px) rotate(-45deg);
        }
        
        .mobile-menu-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: rgba(0,0,0,0.5);
          z-index: 1040;
          opacity: 0;
          visibility: hidden;
          transition: all 0.3s ease;
        }
        
        .mobile-menu-overlay.open {
          opacity: 1;
          visibility: visible;
        }
        
        .mobile-menu {
          position: fixed;
          top: 0;
          right: -320px;
          width: 320px;
          height: 100%;
          background-color: white;
          z-index: 1050;
          transition: all 0.3s ease;
          box-shadow: -5px 0 15px rgba(0,0,0,0.1);
          display: flex;
          flex-direction: column;
        }
        
        .mobile-menu.open {
          right: 0;
        }
        
        .mobile-menu-header {
          padding: 15px;
          border-bottom: 1px solid #eee;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        
        .mobile-menu-body {
          padding: 15px;
          flex: 1;
          overflow-y: auto;
        }
        
        .mobile-menu-footer {
          padding: 15px;
          border-top: 1px solid #eee;
          background-color: white;
        }
        
        .dropdown-mega {
          width: 100%;
          padding: 20px;
        }
        
        .megamenu {
          width: 100%;
        }
        
        @media (max-width: 991.98px) {
          .dropdown-mega, .megamenu {
            padding: 10px;
          }
        }
        
        .cart-item {
          transition: all 0.3s ease;
        }
        
        .cart-item:hover {
          background-color: #f8f9fa;
        }
        
        .accordion-button:not(.collapsed) {
          background-color: transparent;
          box-shadow: none;
        }
        
        .accordion-button:focus {
          box-shadow: none;
          border-color: transparent;
        }
        
        .accordion-item {
          border-left: 0;
          border-right: 0;
        }
          .bg-cusotm {
            background-color:rgba(86, 252, 31, 0.14) !important;

          }
        .dropdown-item:hover {
            background-color:rgba(86, 252, 31, 0.27) !important;
            color:  rgb(48, 182, 3) !important; /* optional: change text color on hover */
          }
        // .navbar-toggler{
        //    padding: 4px;
        //    border-radius:5px;
        //    background-color:rgba(86, 252, 31, 0.27) !important;
        //    color:  rgb(67, 223, 16) !important; /* optional: change text color on hover */
        // }
        .close-menu{
            background-color:rgba(86, 252, 31, 0.27) !important;
            color:  rgb(47, 187, 0) !important; /* optional: change text color on hover */
            border:none;
        }
     

      `}</style>
    </>
  );
};

export default Header;