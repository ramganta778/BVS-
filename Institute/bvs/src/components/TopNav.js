// // src/components/TopNav.js
// import React from 'react';
// import { Link } from 'react-router-dom';

// function TopNav() {
//   return (
//     <nav className="top-navigation">
//       <ul>
//         <li><Link to="/">Home</Link></li>
//         <li><Link to="/profile">Profile</Link></li>
//         <li><Link to="/classes">Classes</Link></li>
//         <li><Link to="/about">About</Link></li>
//         <li><Link to="/courses">Courses</Link></li>
//         <li><Link to="/feedback">Feedback</Link></li>
//       </ul>
//     </nav>
//   );
// }

// export default TopNav;


// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';

// function TopNav() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   return (
//     <nav className="top-navigation">
//       {/* Hamburger icon for mobile */}
//       <div className="hamburger" onClick={toggleMenu}>
//         <span className="bar"></span>
//         <span className="bar"></span>
//         <span className="bar"></span>
//       </div>

//       {/* Navigation links */}
//       <ul className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
//         <li><Link to="/">Home</Link></li>
//         <li><Link to="/profile">Profile</Link></li>
//         <li><Link to="/classes">Classes</Link></li>
//         <li><Link to="/about">About</Link></li>
//         <li><Link to="/courses">Courses</Link></li>
//         <li><Link to="/feedback">Feedback</Link></li>
//       </ul>
//     </nav>
//   );
// }

// export default TopNav;



import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function TopNav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="top-navigation">
      {/* Hamburger icon for mobile */}
      <div className="hamburger" onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>

      {/* Navigation links */}
      <ul className={`${isMenuOpen ? 'open' : ''}`}>
        <li><Link to="/"></Link></li>
        <li><Link to="/https://www.bvs.comhome">Home</Link></li>
        <li><Link to="/https://www.bvs.comclasses">Classes</Link></li>
        <li><Link to="/https://www.bvs.comabout">About</Link></li>
        <li><Link to="/https://www.bvs.comcourses">Courses</Link></li>
        <li><Link to="/https://www.bvs.comfeedback">Feedback</Link></li>
        <li><Link to="/https://www.bvs.comstudent-login">Logout</Link></li>
      </ul>
    </nav>
  );
}

export default TopNav;
