// src/components/AdminLogin.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Ensure react-router-dom is installed
import Swal from 'sweetalert2';
import logo from './Images/Logo.png'; // Update with the actual path to your logo image


const AdminLogin = () => {
    const [formData, setFormData] = useState({ email: '', password: '' });
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();

    // Static admin credentials
    const adminCredentials = {
        email: 'bvs@gmail.com',
        password: 'Bvs123',
    };

    const validateForm = () => {
        let formErrors = {};
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!formData.email.trim()) {
            formErrors.email = 'Email is required';
        } else if (!emailPattern.test(formData.email)) {
            formErrors.email = 'Invalid email format';
        }
        if (!formData.password) {
            formErrors.password = 'Password is required';
        }

        return formErrors;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validateForm();
        setErrors(validationErrors);

        if (Object.keys(validationErrors).length === 0) {
            if (
                formData.email === adminCredentials.email &&
                formData.password === adminCredentials.password
            ) {
                Swal.fire('Success', 'Login successful!', 'success').then(() => {
                    navigate('/https://www.bvs.comadmin-dashboard');
                });
            } else {
                Swal.fire('Error', 'Invalid credentials!', 'error');
            }
        }
    };

    return (
        <div id="admin-login-page">
              {/* Logo at the top */}
      <div className="logo-container">
        <img title='BUSINESS VICTORY SOLUTIONS' src={logo} alt="Institute Logo" className="logo" />
      </div>
            <div className="form-container">
                <h2 className="form-title">Admin Login</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label className="form-label">Email:</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="form-input"
                        />
                        {errors.email && <p className="form-error">{errors.email}</p>}
                    </div>
                    <div className="form-group">
                        <label className="form-label">Password:</label>
                        <input
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            className="form-input"
                        />
                        {errors.password && <p className="form-error">{errors.password}</p>}
                    </div>
                    <button type="submit" className="form-button">Login</button>
                </form>
                <button onClick={() => alert('Redirecting to Forgot Password...')} className="form-link">
                    Forgot Password?
                </button>
            </div>
     
        </div>
    );
};

export default AdminLogin;
