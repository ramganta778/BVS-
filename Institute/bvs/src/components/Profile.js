import React from 'react';
import TopNav from './TopNav';

function Profile() {
  // Inline styles for the container and heading
  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    backgroundColor: '#f4f4f4', // Light background color
  };

  const headingStyle = {
    fontSize: '2rem',
    color: '#333', // Dark text color
    margin: '20px 0',
  };

  return (
    <div style={containerStyle}>
      <TopNav />
      <h1 style={headingStyle}>Profile</h1>
    </div>
  );
}

export default Profile;
