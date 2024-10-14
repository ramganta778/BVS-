// // EnrollForm.js
// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// const EnrollForm = () => {
//     const [formData, setFormData] = useState({
//         fullName: '',
//         email: '',
//         password: '',
//         confirmPassword: '',
//     });

//     const [errors, setErrors] = useState({});
//     const navigate = useNavigate(); // For navigation

//     const validateForm = () => {
//         let formErrors = {};
//         const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

//         if (!formData.fullName.trim()) formErrors.fullName = 'Full name is required';
//         if (!formData.email.trim()) formErrors.email = 'Email is required';
//         else if (!emailPattern.test(formData.email)) formErrors.email = 'Invalid email format';
//         if (!formData.password) formErrors.password = 'Password is required';
//         else if (formData.password.length < 6) formErrors.password = 'Password must be at least 6 characters';
//         if (!formData.confirmPassword) formErrors.confirmPassword = 'Please confirm your password';
//         else if (formData.password !== formData.confirmPassword) formErrors.confirmPassword = 'Passwords do not match';

//         return formErrors;
//     };

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setFormData({ ...formData, [name]: value });
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         const validationErrors = validateForm();
//         setErrors(validationErrors);

//         if (Object.keys(validationErrors).length === 0) {
//             console.log('Form Submitted:', formData);
//         }
//     };

//     return (
//         <div id="signup-page">
//             <div className="form-container">
//                 <h2 className="form-title">Sign Up</h2>
//                 <form onSubmit={handleSubmit}>
//                     <div className="form-group">
//                         <label className="form-label">Full Name:</label>
//                         <input
//                             type="text"
//                             name="fullName"
//                             value={formData.fullName}
//                             onChange={handleChange}
//                             className="form-input"
//                         />
//                         {errors.fullName && <p className="form-error">{errors.fullName}</p>}
//                     </div>

//                     <div className="form-group">
//                         <label className="form-label">Email:</label>
//                         <input
//                             type="email"
//                             name="email"
//                             value={formData.email}
//                             onChange={handleChange}
//                             className="form-input"
//                         />
//                         {errors.email && <p className="form-error">{errors.email}</p>}
//                     </div>

//                     <div className="form-group">
//                         <label className="form-label">Password:</label>
//                         <input
//                             type="password"
//                             name="password"
//                             value={formData.password}
//                             onChange={handleChange}
//                             className="form-input"
//                         />
//                         {errors.password && <p className="form-error">{errors.password}</p>}
//                     </div>

//                     <div className="form-group">
//                         <label className="form-label">Confirm Password:</label>
//                         <input
//                             type="password"
//                             name="confirmPassword"
//                             value={formData.confirmPassword}
//                             onChange={handleChange}
//                             className="form-input"
//                         />
//                         {errors.confirmPassword && <p className="form-error">{errors.confirmPassword}</p>}
//                     </div>

//                     <button type="submit" className="form-button">Sign Up</button>
//                 </form>

//                 <button onClick={() => navigate('/student-login')} className="form-button">
//                     Student Login
//                 </button>

//                 <button onClick={() => navigate('/admin-login')} className="form-button">
//                     Admin Login
//                 </button>

//                 <button onClick={() => alert('Redirecting to Forgot Password...')} className="form-link">
//                     Forgot Password?
//                 </button>
//             </div>
//         </div>
//     );
// };

// export default EnrollForm;



// // src/components/EnrollForm.js
// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import logo from './Images/Logo.png'; // Update with the actual path to your logo image


// const EnrollForm = () => {
//     const [formData, setFormData] = useState({
//         fullName: '',
//         email: '',
//         password: '',
//         confirmPassword: '',
//     });

//     const [errors, setErrors] = useState({});
//     const navigate = useNavigate();

//     const validateForm = () => {
//         let formErrors = {};
//         const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

//         if (!formData.fullName.trim()) formErrors.fullName = 'Full name is required';
//         if (!formData.email.trim()) formErrors.email = 'Email is required';
//         else if (!emailPattern.test(formData.email)) formErrors.email = 'Invalid email format';
//         if (!formData.password) formErrors.password = 'Password is required';
//         else if (formData.password.length < 6) formErrors.password = 'Password must be at least 6 characters';
//         if (!formData.confirmPassword) formErrors.confirmPassword = 'Please confirm your password';
//         else if (formData.password !== formData.confirmPassword) formErrors.confirmPassword = 'Passwords do not match';

//         return formErrors;
//     };

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setFormData({ ...formData, [name]: value });
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         const validationErrors = validateForm();
//         setErrors(validationErrors);

//         if (Object.keys(validationErrors).length === 0) {
//             console.log('Form Submitted:', formData);
//         }
//     };

//     return (
//         <div id="signup-page">
//               {/* Logo at the top */}
//       <div className="logo-container">
//         <img title='BUSINESS VICTORY SOLUTIONS' src={logo} alt="Institute Logo" className="logo" />
//       </div>
//             <div className="content-wrapper">
//                 <div className="institute-info">
//                     <h1>Welcome to BVS Institute</h1>
//                     <p>
//                         BVS Institute offers the best training in Full Stack Development and React Native. 
//                         Join us to build live projects and gain industry-ready skills.
//                     </p>
//                 </div>

//                 <div className="form-container">
//                     <h2 className="form-title">Sign Up</h2>
//                     <form onSubmit={handleSubmit}>
//                         <div className="form-group">
//                             <label className="form-label">Full Name:</label>
//                             <input
//                                 type="text"
//                                 name="fullName"
//                                 value={formData.fullName}
//                                 onChange={handleChange}
//                                 className="form-input"
//                             />
//                             {errors.fullName && <p className="form-error">{errors.fullName}</p>}
//                         </div>

//                         <div className="form-group">
//                             <label className="form-label">Email:</label>
//                             <input
//                                 type="email"
//                                 name="email"
//                                 value={formData.email}
//                                 onChange={handleChange}
//                                 className="form-input"
//                             />
//                             {errors.email && <p className="form-error">{errors.email}</p>}
//                         </div>

//                         <div className="form-group">
//                             <label className="form-label">Password:</label>
//                             <input
//                                 type="password"
//                                 name="password"
//                                 value={formData.password}
//                                 onChange={handleChange}
//                                 className="form-input"
//                             />
//                             {errors.password && <p className="form-error">{errors.password}</p>}
//                         </div>

//                         <div className="form-group">
//                             <label className="form-label">Confirm Password:</label>
//                             <input
//                                 type="password"
//                                 name="confirmPassword"
//                                 value={formData.confirmPassword}
//                                 onChange={handleChange}
//                                 className="form-input"
//                             />
//                             {errors.confirmPassword && <p className="form-error">{errors.confirmPassword}</p>}
//                         </div>

//                         <button type="submit" className="form-button">Sign Up</button>
//                     </form>

//                     <button onClick={() => navigate('/student-login')} className="form-button">
//                         Student Login
//                     </button>

//                     <button onClick={() => navigate('/admin-login')} className="form-button">
//                         Admin Login
//                     </button>

//                     <button onClick={() => alert('Redirecting to Forgot Password...')} className="form-link">
//                         Forgot Password?
//                     </button>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default EnrollForm;



// src/components/EnrollForm.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from './Images/Logo.png'; // Update with the actual path to your logo image
import axios from 'axios'; // Import axios for making API requests

const EnrollForm = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        password: '',
        confirmPassword: '',
    });

    const [errors, setErrors] = useState({});
    const [isLogin, setIsLogin] = useState(false); // State to toggle between Signup and Login
    const navigate = useNavigate();

    const validateForm = () => {
        let formErrors = {};
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!formData.fullName.trim() && !isLogin) formErrors.fullName = 'Full name is required';
        if (!formData.email.trim()) formErrors.email = 'Email is required';
        else if (!emailPattern.test(formData.email)) formErrors.email = 'Invalid email format';
        if (!formData.password) formErrors.password = 'Password is required';
        else if (formData.password.length < 6) formErrors.password = 'Password must be at least 6 characters';
        if (!isLogin && !formData.confirmPassword) formErrors.confirmPassword = 'Please confirm your password';
        else if (!isLogin && formData.password !== formData.confirmPassword) formErrors.confirmPassword = 'Passwords do not match';

        return formErrors;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const validationErrors = validateForm();
        setErrors(validationErrors);

        if (Object.keys(validationErrors).length === 0) {
            if (isLogin) {
                // Login functionality
                try {
                    const response = await axios.post('http://localhost:5000/api/users/login', {
                        email: formData.email,
                        password: formData.password,
                    });
                    console.log('Login successful:', response.data);
                    // Redirect or perform additional actions after successful login
                } catch (error) {
                    console.error('Login error:', error);
                    setErrors({ general: 'Invalid email or password.' });
                }
            } else {
                // Signup functionality
                try {
                    const response = await axios.post('http://localhost:5000/api/users/signup', formData);
                    console.log('Signup successful:', response.data);
                    // Optionally redirect to login page or show a success message
                } catch (error) {
                    console.error('Signup error:', error);
                    setErrors({ general: error.response.data.message });
                }
            }
        }
    };

    return (
        <div id="signup-page">
            {/* Logo at the top */}
            <div className="logo-container">
                <img title='BUSINESS VICTORY SOLUTIONS' src={logo} alt="Institute Logo" className="logo" />
            </div>
            <div className="content-wrapper">
                <div className="institute-info">
                    <h1>Welcome to BVS Institute</h1>
                    <p>
                        BVS Institute offers the best training in Full Stack Development and React Native.
                        Join us to build live projects and gain industry-ready skills.
                    </p>
                </div>

                <div className="form-container">
                    <h2 className="form-title">{isLogin ? 'Student Login' : 'Sign Up'}</h2>
                    {errors.general && <p className="form-error">{errors.general}</p>}
                    <form onSubmit={handleSubmit}>
                        {!isLogin && (
                            <div className="form-group">
                                <label className="form-label">Full Name:</label>
                                <input
                                    type="text"
                                    name="fullName"
                                    value={formData.fullName}
                                    onChange={handleChange}
                                    className="form-input"
                                />
                                {errors.fullName && <p className="form-error">{errors.fullName}</p>}
                            </div>
                        )}

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

                        {!isLogin && (
                            <div className="form-group">
                                <label className="form-label">Confirm Password:</label>
                                <input
                                    type="password"
                                    name="confirmPassword"
                                    value={formData.confirmPassword}
                                    onChange={handleChange}
                                    className="form-input"
                                />
                                {errors.confirmPassword && <p className="form-error">{errors.confirmPassword}</p>}
                            </div>
                        )}

                        <button type="submit" className="form-button">{isLogin ? 'Login' : 'Sign Up'}</button>
                    </form>

                    <button onClick={() => setIsLogin(!isLogin)} className="form-link">
                        {isLogin ? 'Create an account' : 'Already have an account? Login'}
                    </button>

                    {/* Add buttons for Student and Admin Login */}
                    <div className="login-navigation">
                        <button onClick={() => navigate('/https://www.bvs.comstudent-login')} className="form-button">
                            Student Login
                        </button>
                        <button onClick={() => navigate('/https://www.bvs.comadmin-login')} className="form-button">
                            Admin Login
                        </button>
                    </div>
                </div>
            </div>
      
        </div>
    );
};

export default EnrollForm;
