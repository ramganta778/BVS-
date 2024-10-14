// src/components/About.js
import React from 'react';
import TopNav from './TopNav'; // Importing the TopNav component
import logo from './Images/Logo.png'; // Update with the actual path to your logo image

function About() {
  return (
    <div className="about-container">
          <div className="logo-container">
        <img title='BUSINESS VICTORY SOLUTIONS' src={logo} alt="Institute Logo" className="logo" />
      </div>
      {/* Logo and Navigation */}
      <TopNav />
      
      {/* About Section */}
      <div className="about-content">
        <h1 className="about-title">ABOUT <span className='two-name'>BVS</span></h1>
        
        <div className="about-info">
          <p className="about-description">
            Welcome to <strong>Business Victory Solutions</strong>! We are a leading institute committed to providing top-notch IT education, including MERN Full Stack Development and React Native courses.
          </p>
          <p className="about-description">
            Our mission is to empower individuals with the skills they need to succeed in the rapidly evolving tech industry. Our team of experienced instructors is dedicated to delivering high-quality training through interactive classes and hands-on projects.
          </p>
        </div>

        {/* Our Team Section */}
        <div className="team-section">
          <h2 className="team-title">Meet Our Team</h2>
          <div className="team-grid">
            <div className="team-member">
              <img src="https://wallpapers.com/images/hd/south-hero-in-yellow-jumper-8ze9qfhr5gcmxguy.jpg" alt="Team Member" className="team-member-image" />
              <h3 className="team-member-name">John Doe</h3>
              <p className="team-member-role">Founder & CEO</p>
            </div>
            <div className="team-member">
              <img src="https://i.pinimg.com/originals/43/ac/5d/43ac5d86d43d3e26cf566a96d0cb17b2.jpg" alt="Team Member" className="team-member-image" />
              <h3 className="team-member-name">Jane Smith</h3>
              <p className="team-member-role">Lead Instructor</p>
            </div>
            <div className="team-member">
              <img src="https://www.cinejosh.com/newsimg/newsmainimg/ram-charan-may-be-person-of-the-year-as-a-hero-and-producer_b_3012160648.jpg" alt="Team Member" className="team-member-image" />
              <h3 className="team-member-name">Michael Johnson</h3>
              <p className="team-member-role">Technical Advisor</p>
            </div>
          </div>
        </div>
      </div>
        {/* Copyright Section */}
        <div className="copyright">
        <p>&copy; {new Date().getFullYear()} BUSINESS VICTORY SOLUTIONS. All rights reserved.By 🔔</p>
      </div>
    </div>
  );
}

export default About;
