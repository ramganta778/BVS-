import React from 'react';
import TopNav from './TopNav';
import logo from './Images/Logo.png'; // Update with the actual path to your logo image



function Course() {
  return (
    <div className="course-container">
      {/* Logo at the top */}
      <div className="logo-container">
        <img title='BUSINESS VICTORY SOLUTIONS' src={logo} alt="Institute Logo" className="logo" />
      </div>

      <TopNav></TopNav>
      {/* Header Section */}
      <header className="header-section">
        <h1 className="course-title">Full Stack Course with Live Projects</h1>
        <p className="course-subheading">
          Master Full Stack Development & Get Hands-On Experience with Real Projects
        </p>
      </header>

      {/* Course Icons Grid */}
      <section className="icons-grid">
        <div className="icon-card">React.js</div>
        <div className="icon-card">Node.js</div>
        <div className="icon-card">HTML & CSS</div>
        <div className="icon-card">Express.js</div>
        <div className="icon-card">MongoDB</div>
        <div className="icon-card">MySQL</div>
        <div className="icon-card">JavaScript</div>
        <div className="icon-card">Git & GitHub</div>
      </section>

      {/* Feature Highlights Section */}
      <section className="feature-highlights">
        <div className="feature-item">Live Project</div>
        <div className="feature-item">Internship Certificate</div>
        <div className="feature-item">Open to Non-IT Students</div>
      </section>

      {/* Course Details Section */}
      <section className="course-details">
        <div className="card">React JS & React Native</div>
        <div className="card">HTML & CSS</div>
        <div className="card">MongoDB, MySQL</div>
        <div className="card">Express.js, Node.js</div>
      </section>

      {/* Floating Enroll Button */}
      {/* <div className="enroll-button">Enroll Now</div> */}
        {/* Copyright Section */}
        <div className="copyright">
        <p>&copy; {new Date().getFullYear()} BUSINESS VICTORY SOLUTIONS. All rights reserved.By 🔔</p>
      </div>
    </div>
  );
}

export default Course;
