import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Profile from './components/Profile';
import Classes from './components/Classes';
import About from './components/About';
import Courses from './components/Courses';
import Feedback from './components/Feedback';
import EnrollForm from './components/Singup'; // Corrected import for Signup component
import StudentLogin from './components/StudentLogin'; // Import the StudentLogin component
import AdminLogin from './components/AdminLogin'; // Import the AdminLogin component
import AdminDashboard from './components/AdminDashboard';
import Main from './components/Main'
import './App.css'; // Import App.css for global styling
import VideoUpload from './components/VideoUpload';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
        <Route path="/" element={<Main />} />
          <Route path="/https://www.bvs.comhome" element={<Home />} />
          <Route path="/https://www.bvs.comprofile" element={<Profile />} />
          <Route path="/https://www.bvs.comclasses" element={<Classes />} />
          <Route path="/https://www.bvs.comabout" element={<About />} />
          <Route path="/https://www.bvs.comcourses" element={<Courses />} />
          <Route path="/https://www.bvs.comfeedback" element={<Feedback />} />
          <Route path="/https://www.bvs.comsignup" element={<EnrollForm />} /> {/* Add the Signup route */}
          <Route path="/https://www.bvs.comstudent-login" element={<StudentLogin />} /> {/* Add the Student Login route */}
          <Route path="/https://www.bvs.comadmin-login" element={<AdminLogin />} /> {/* Add the Admin Login route */}
          <Route path="/https://www.bvs.comadmin-dashboard" element={<AdminDashboard />} />
          <Route path="/https://www.bvs.comvideo-upload" element={<VideoUpload></VideoUpload>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;


