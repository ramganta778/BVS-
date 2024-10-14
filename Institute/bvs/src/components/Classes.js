// src/components/Classes.js
import React, { useEffect, useState } from 'react';
import TopNav from './TopNav'; // Import TopNav
import logo from './Images/Logo.png'; // Update with the actual path to your logo image

function Classes() {
  const [videos, setVideos] = useState([]);

  
  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await fetch('http://localhost:5000/videos'); // Fetch S3 videos from your backend
        const data = await response.json();
        setVideos(data.videos); // Assuming `data.videos` contains video URLs from your S3 bucket
      } catch (error) {
        console.error('Error fetching videos:', error);
      }
    };

    fetchVideos();
  }, []);

  return (
    <div className="classes-container">
      <div className="logo-container">
        <img title='BUSINESS VICTORY SOLUTIONS' src={logo} alt="Institute Logo" className="logo" />
      </div>
      <TopNav />

      <h1 className="classes-title">Classes</h1>

      <div className="class-content">
        {/* <h2 className="demo-title">Demo Class Videos</h2> */}
        
        <div className="video-grid">
          {videos.map((videoUrl, index) => (
            <div className="video-card" key={index}>
              <video 
                className="demo-video" 
                controls 
                width="320" 
                height="240"
              >
                <source src={videoUrl} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              {/* You can add a title or description here if available */}
              {/* <h3 className="video-title">{video.title}</h3> */}
            </div>
          ))}
        </div>

        <p className="info-text">
          Join our classes to enhance your skills! We offer a variety of courses to help you achieve your goals.
        </p>

        <h3 className="upcoming-classes-title">Upcoming Classes</h3>
        <ul className="upcoming-classes-list">
          <li>Course 1: Introduction to Programming</li>
          <li>Course 2: Web Development Basics</li>
          <li>Course 3: Data Science with Python</li>
          <li>Course 4: Full Stack Development</li>
        </ul>
      </div>
        {/* Copyright Section */}
        <div className="copyright">
        <p>&copy; {new Date().getFullYear()} BUSINESS VICTORY SOLUTIONS. All rights reserved.By 🔔</p>
      </div>
    </div>
  );
}

export default Classes;






























// // src/components/Classes.js
// import React, { useEffect, useState } from 'react';
// import TopNav from './TopNav'; // Import TopNav
// import logo from './Images/Logo.png'; // Update with the actual path to your logo image

// function Classes() {
//   const [videos, setVideos] = useState([]);

//   useEffect(() => {
//     const fetchVideos = async () => {
//       try {
//         const response = await fetch('http://localhost:5000/api/videos'); // Fetch from your backend
//         const data = await response.json();
//         setVideos(data);
//       } catch (error) {
//         console.error('Error fetching videos:', error);
//       }
//     };

//     fetchVideos();
//   }, []);

//   return (
//     <div className="classes-container">
//       <div className="logo-container">
//         <img title='BUSINESS VICTORY SOLUTIONS' src={logo} alt="Institute Logo" className="logo" />
//       </div>
//       <TopNav />

//       <h1 className="classes-title">Classes</h1>

//       <div className="class-content">
//         <h2 className="demo-title">Demo Class Videos</h2>
        
//         {videos.length === 0 ? ( // Check if there are no videos
//           <p>No videos available. Please contact admin for access.</p>
//         ) : (
//           <div className="video-grid">
//             {videos.map((video) => (
//               <div className="video-card" key={video.id}>
//                 <iframe 
//                   title={video.title} 
//                   className="demo-video" 
//                   src={`https://www.youtube.com/embed/${video.id}`} 
//                   frameBorder="0" 
//                   allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
//                   allowFullScreen 
//                 ></iframe>
//                 <h3 className="video-title">{video.title}</h3>
//               </div>
//             ))}
//           </div>
//         )}

//         <p className="info-text">
//           Join our classes to enhance your skills! We offer a variety of courses to help you achieve your goals.
//         </p>

//         <h3 className="upcoming-classes-title">Upcoming Classes</h3>
//         <ul className="upcoming-classes-list">
//           <li>Course 1: Introduction to Programming</li>
//           <li>Course 2: Web Development Basics</li>
//           <li>Course 3: Data Science with Python</li>
//           <li>Course 4: Full Stack Development</li>
//         </ul>
//       </div>
//     </div>
//   );
// }

// export default Classes;
