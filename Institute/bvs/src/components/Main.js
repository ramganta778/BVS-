// // src/components/Home.js
// import React, { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
// import logo from './Images/Logo.png'; // Update with the actual path to your logo image
// import '@fortawesome/fontawesome-free/css/all.min.css'; // Import Font Awesome

// function Home() {
//   const [videos, setVideos] = useState([]);
//   const [displayText, setDisplayText] = useState('BVS');

//   // Fetch videos from the backend
//   useEffect(() => {
//     const fetchVideos = async () => {
//       try {
//         const response = await fetch('http://localhost:5000/videos'); // Fetch S3 videos from backend
//         const data = await response.json();
//         setVideos(data.videos); // Assuming `data.videos` contains video URLs
//       } catch (error) {
//         console.error('Error fetching videos:', error);
//       }
//     };

//     fetchVideos();
//   }, []);

//   // Change display text after 2 seconds
//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setDisplayText('BUSINESS VICTORY SOLUTIONS');
//     }, 2000);

//     return () => clearTimeout(timer); // Cleanup on unmount
//   }, []);

//   return (
//     <div className="home-container">
//       {/* Logo */}
//       <div className="logo-container">
//         <img
//           title="BUSINESS VICTORY SOLUTIONS"
//           src={logo}
//           alt="Institute Logo"
//           className="logo"
//         />
//       </div>

//       {/* Welcome Message */}
//       <h1 className="welcome-message">{displayText}</h1>


//       <h1 className="demo-title">Demo Class</h1>
//       {/* Video Section (Display only the first video) */}
//       <div className="video-grid">
//         {videos.length > 0 && (
//           <div className="video-card">
//             <video
//               className="demo-video"
//               controls
//               width="320"
//               height="240"
//             >
//               <source src={videos[0]} type="video/mp4" />
//               Your browser does not support the video tag.
//             </video>
//           </div>
//         )}
//       </div>
//       <br></br>

//       {/* Signup Button */}
//       <div className="signup-container">
//         <Link to="/https://www.bvs.comsignup" className="signup-button">Enroll Now</Link>
//       </div>
//       <br></br>

//       {/* Social Media Icons */}
//       <div className="social-icons">
//         <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
//           <i className="fab fa-facebook-f"></i>
//         </a>
//         <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
//           <i className="fab fa-twitter"></i>
//         </a>
//         <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
//           <i className="fab fa-instagram"></i>
//         </a>
//         <a href="https://wa.me/YOUR_PHONE_NUMBER" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
//           <i className="fab fa-whatsapp"></i>
//         </a>
//       </div>
//     </div>
//   );
// }

// export default Home;



// src/components/Home.js
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import logo from './Images/Logo.png'; // Update with the actual path to your logo image
import '@fortawesome/fontawesome-free/css/all.min.css'; // Import Font Awesome

function Home() {
  const [videos, setVideos] = useState([]);
  const [displayText, setDisplayText] = useState('BVS');

  // Fetch videos from the backend
  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await fetch('http://localhost:5000/videos'); // Fetch S3 videos from backend
        const data = await response.json();
        setVideos(data.videos); // Assuming `data.videos` contains video URLs
      } catch (error) {
        console.error('Error fetching videos:', error);
      }
    };

    fetchVideos();
  }, []);

  // Change display text after 2 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setDisplayText('BUSINESS VICTORY SOLUTIONS');
    }, 2000);

    return () => clearTimeout(timer); // Cleanup on unmount
  }, []);

  return (
    <div className="home-container">
      {/* Logo */}
      <div className="logo-container">
        <img
          title="BUSINESS VICTORY SOLUTIONS"
          src={logo}
          alt="Institute Logo"
          className="logo"
        />
      </div>

      {/* Welcome Message */}
      <h1 className="welcome-message">{displayText}</h1>

      <h1 className="demo-title">Demo Class</h1>
      {/* Video Section (Display only the first video) */}
      <div className="video-grid">
        {videos.length > 0 && (
          <div className="video-card">
            <video
              className="demo-video"
              controls
              width="320"
              height="240"
            >
              <source src={videos[0]} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        )}
      </div>
      <br />

      {/* Signup Button */}
      <div className="signup-container">
        <Link to="/https://www.bvs.comsignup" className="signup-button">
          Enroll Now
        </Link>
      </div>
      <br />

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

      <br />

      {/* Copyright Section */}
      <div className="copyright">
        <p>&copy; {new Date().getFullYear()} BUSINESS VICTORY SOLUTIONS. All rights reserved. By 🔔</p>
      </div>
    </div>
  );
}

export default Home;
