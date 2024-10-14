// // src/components/Home.js
// import React, { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
// import logo from './Images/Logo.png'; // Update with the actual path to your logo image
// import TopNav from './TopNav'; // Import TopNav

// function Home() {
//   const [displayText, setDisplayText] = useState('BVS');

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setDisplayText('BUSINESS VICTORY SOLUTIONS');
//     }, 2000); // Change text after 2 seconds

//     return () => clearTimeout(timer); // Cleanup on component unmount
//   }, []);

//   return (
//     <div className="home-container">
//       {/* Logo at the top */}
//       <div className="logo-container">
//         <img title='BUSINESS VICTORY SOLUTIONS' src={logo} alt="Institute Logo" className="logo" />
//       </div>

//       {/* Top Navigation */}
//       <TopNav />  {/* Use TopNav here */}

//       {/* Welcome Message */}
//       <h1 className="welcome-message">{displayText}</h1>

//       {/* Signup Button */}
//       <div className="signup-container">
//         <Link to="/signup" className="signup-button">Signup</Link>
//       </div>

//       {/* Social Media Icons */}
//       <div className="social-icons">
//         <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
//         <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
//         <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
//       </div>
//     </div>
//   );
// }

// export default Home;



// src/components/Home.js
import React, { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
import logo from './Images/Logo.png'; // Update with the actual path to your logo image
import imageBetween from './Images/courses .jpg'; // Import the new image here
import TopNav from './TopNav'; // Import TopNav
import '@fortawesome/fontawesome-free/css/all.min.css'; // Import Font Awesome

function Home() {
  const [displayText, setDisplayText] = useState('BVS');

  useEffect(() => {
    const timer = setTimeout(() => {
      setDisplayText('BUSINESS VICTORY SOLUTIONS');
    }, 2000); // Change text after 2 seconds

    return () => clearTimeout(timer); // Cleanup on component unmount
  }, []);

  return (
    <div className="home-container">
      {/* Logo at the top */}
      <div className="logo-container">
        <img title='BUSINESS VICTORY SOLUTIONS' src={logo} alt="Institute Logo" className="logo" />
      </div>

      {/* Top Navigation */}
      <TopNav /> 

      {/* Welcome Message */}
      <h1 className="welcome-message">{displayText}</h1>

      {/* Image between welcome message and signup button */}
      <div className="image-container">
        <img src={imageBetween} alt="Description of the image" className="between-image" />
      </div>

      {/* Signup Button */}
      <div className="signup-container">
        <br></br>
        {/* <Link to="/Signup" className="signup-button">Enroll Now</Link> */}
      </div>

      {/* Social Media Icons */}
      <div className="social-icons">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
          <i className="fab fa-facebook-f"></i>
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
          <i className="fab fa-twitter"></i>
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
          <i className="fab fa-instagram"></i>
        </a>
         <a href="https://wa.me/YOUR_PHONE_NUMBER" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
    <i className="fab fa-whatsapp"></i>
  </a>
      </div>
        {/* Copyright Section */}
        <div className="copyright">
        <p>&copy; {new Date().getFullYear()} BUSINESS VICTORY SOLUTIONS. All rights reserved.By 🔔</p>
      </div>
    </div>
  );
}

export default Home;
