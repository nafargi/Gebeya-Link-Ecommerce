import React from 'react';
import nafargiImage from '../../images/about/nafi.jpg';
// import yordanosImage from '../../images/about/yordi.jpg';
import fatiyaImage from '../../images/about/feti.jpg';
import lemaImage from '../../images/about/lema.jpg';
import tilahunImage from '../../images/about/tile.jpg';
// import { Container, Row, Col, Card } from 'react-bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';

import './TeamSection.css'; // Custom CSS for additional styling

const TeamSection = () => {
  const teamMembers = [
    {
      name: "Nafargi Damena",
      role: "Chief Executive Officer (CEO)",
      quote: "At Gebeya Link, our mission is simple — to build a digital marketplace that truly serves our people. We are committed to making quality products accessible, affordable, and just a click away.",
      image: nafargiImage
    },
    // {
    //   name: "Yordanos Solomon",
    //   role: "Chief Information Officer (CIO)",
    //   quote: "Innovation drives us. I believe in creating smart, scalable solutions that help our customers and partners stay ahead in a fast-changing digital world.",
    //   image: yordanosImage
    // },
    {
      name: "Fatiya Abdurahim",
      role: "Chief Operating Officer (COO)",
      quote: "Great service is at the heart of everything we do. I am passionate about building operations that ensure every order, every delivery, and every interaction is smooth and satisfying.",
      image: fatiyaImage
    },
    {
      name: "Lema Tefera",
      role: "Chief Technology Officer (CTO)",
      quote: "Technology is the engine behind Gebeya Link. We strive to deliver a seamless, secure, and powerful platform that our customers can trust every day.",
      image: lemaImage
    },
    {
      name: "Tilahun Beza",
      role: "Head of Human Resources",
      quote: "People are our greatest asset. At Gebeya Link, we are building a culture of collaboration, growth, and excellence, where every team member feels valued and empowered.",
      image: tilahunImage
    }
  ];

  return (
    <section className="team-section">
    <div className="team-header">
      <h2>Meet the Leadership Team</h2>
      <p className="team-subheader">
        At Gebeya Link, our leadership team is passionate about connecting communities, 
        empowering local businesses, and delivering an exceptional online shopping experience.
      </p>
    </div>
    
    <div className="team-grid">
      {teamMembers.map((member, index) => (
        <div key={index} className="team-card">
          <div className="team-image-container">
            <div className="color-overlay"></div>
            <img 
              src={member.image} 
              alt={member.name}
              className="team-image"
            />
          </div>
          <div className="team-content">
            <h3>{member.name}</h3>
            <p className="team-role">{member.role}</p>
            <p className="team-quote">"{member.quote}"</p>
          </div>
        </div>
      ))}
    </div>
  </section>
  );
};

export default TeamSection;