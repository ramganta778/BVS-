
// // s3 lo video upload cheyataneke
// // src/components/VideoUpload.js

import React, { useState } from 'react';
import axios from 'axios';

const VideoUpload = () => {
  const [file, setFile] = useState(null);
  const [title, setTitle] = useState('');
  const [isUploading, setIsUploading] = useState(false); // Track upload state

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsUploading(true); // Disable button during upload
    const formData = new FormData();
    formData.append('video', file);
    formData.append('title', title);

    try {
      await axios.post('http://localhost:5000/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      alert('Video uploaded successfully!');
      setFile(null);
      setTitle('');
    } catch (error) {
      console.error('Error uploading video:', error);
      alert('Error uploading video');
    } finally {
      setIsUploading(false); // Re-enable button after upload
    }
  };

  const styles = {
    container: {
      padding: '20px',
      maxWidth: '600px',
      margin: 'auto',
      backgroundColor: '#f0f0f0',
      borderRadius: '8px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      fontFamily: 'Arial, sans-serif',
    },
    heading: {
      textAlign: 'center',
      marginBottom: '20px',
      color: '#333',
    },
    form: {
      display: 'flex',
      flexDirection: 'column',
      gap: '15px',
    },
    inputGroup: {
      display: 'flex',
      flexDirection: 'column',
    },
    label: {
      marginBottom: '5px',
      fontWeight: 'bold',
    },
    input: {
      padding: '8px',
      borderRadius: '4px',
      border: '1px solid #ccc',
    },
    button: {
      padding: '10px 15px',
      backgroundColor: isUploading ? '#aaa' : '#4CAF50', // Change color when disabled
      color: '#fff',
      border: 'none',
      borderRadius: '4px',
      cursor: isUploading ? 'not-allowed' : 'pointer',
      fontWeight: 'bold',
    },
    buttonHover: {
      backgroundColor: '#45a049',
    },
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Upload Video</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        <div style={styles.inputGroup}>
          <label htmlFor="title" style={styles.label}>
            Video Title:
          </label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={handleTitleChange}
            required
            style={styles.input}
          />
        </div>
        <div style={styles.inputGroup}>
          <label htmlFor="video" style={styles.label}>
            Select Video:
          </label>
          <input
            type="file"
            id="video"
            accept="video/*"
            onChange={handleFileChange}
            required
            style={styles.input}
          />
        </div>
        <button
          type="submit"
          style={styles.button}
          onMouseOver={(e) =>
            !isUploading &&
            (e.target.style.backgroundColor = styles.buttonHover.backgroundColor)
          }
          onMouseOut={(e) =>
            !isUploading &&
            (e.target.style.backgroundColor = styles.button.backgroundColor)
          }
          disabled={isUploading} // Disable button while uploading
        >
          {isUploading ? 'Uploading...' : 'Upload Video'}
        </button>
      </form>
        {/* Copyright Section */}
        <div className="copyright">
        <p>&copy; {new Date().getFullYear()} BUSINESS VICTORY SOLUTIONS. All rights reserved.By 🔔</p>
      </div>
    </div>
  );
};

export default VideoUpload;
