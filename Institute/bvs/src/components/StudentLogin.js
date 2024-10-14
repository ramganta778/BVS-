// // Normal code


// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom'; // Import useNavigate
// import logo from './Images/Logo.png'; // Update with the actual path to your logo image

// const StudentLogin = () => {
//     const [formData, setFormData] = useState({
//         email: '',
//         password: '',
//     });

//     const [errors, setErrors] = useState({});
//     const [loading, setLoading] = useState(false); // Loading state
//     const navigate = useNavigate(); // Initialize useNavigate

//     const validateForm = () => {
//         let formErrors = {};
//         const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

//         if (!formData.email.trim()) {
//             formErrors.email = 'Email is required';
//         } else if (!emailPattern.test(formData.email)) {
//             formErrors.email = 'Invalid email format';
//         }
//         if (!formData.password) {
//             formErrors.password = 'Password is required';
//         }

//         return formErrors;
//     };

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setFormData({
//             ...formData,
//             [name]: value,
//         });
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         const validationErrors = validateForm();
//         setErrors(validationErrors);

//         if (Object.keys(validationErrors).length === 0) {
//             setLoading(true); // Set loading to true

//             try {
//                 const response = await fetch('http://localhost:5000/api/users/login', {
//                     method: 'POST',
//                     headers: {
//                         'Content-Type': 'application/json',
//                     },
//                     body: JSON.stringify(formData),
//                 });

//                 const data = await response.json();
//                 setLoading(false); // Reset loading

//                 if (response.ok) {
//                     console.log('Login successful:', data);
//                     // console.log('Login successful:');
//                     navigate('/https://www.bvs.comhome'); // Redirect to home on successful login
//                 } else {
//                     setErrors({ general: data.message });
//                 }
//             } catch (error) {
//                 console.error('Error during login:', error);
//                 setErrors({ general: 'An error occurred. Please try again later.' });
//                 setLoading(false); // Reset loading
//             }
//         }
//     };

//     return (
//         <div id="student-login-page">
//             {/* Logo at the top */}
//             <div className="logo-container">
//                 <img title='BUSINESS VICTORY SOLUTIONS' src={logo} alt="Institute Logo" className="logo" />
//             </div>
//             <div className="institute-info">
//                 <h1>Welcome to BVS Institute</h1>
//                 <p>
//                     BVS Institute offers the best training in Full Stack Development and React Native.
//                     Join us to build live projects and gain industry-ready skills.
//                 </p>
//             </div>
//             <div className="form-container">
//                 <h2 className="form-title">Student Login</h2>
//                 {errors.general && <p className="form-error">{errors.general}</p>}
//                 <form onSubmit={handleSubmit}>
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
//                     <button type="submit" className="form-button" disabled={loading}>
//                         {loading ? 'Logging in...' : 'Login'} {/* Show loading text */}
//                     </button>
//                 </form>
//                 <button onClick={() => alert('Redirecting to Forgot Password...')} className="form-link">
//                     Forgot Password?
//                 </button>
//             </div>
//         </div>
//     );
// };

// export default StudentLogin;









// // admit logic code

// src/components/StudentLogin.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import logo from './Images/Logo.png'; // Update with the actual path to your logo image

const StudentLogin = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false); 
    const navigate = useNavigate(); 

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
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const validationErrors = validateForm();
        setErrors(validationErrors);

        if (Object.keys(validationErrors).length === 0) {
            setLoading(true); 

            try {
                const response = await fetch('http://localhost:5000/api/users/login', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(formData),
                });

                const data = await response.json();
                setLoading(false); 

                if (response.ok) {
                    console.log('Login successful:', data);
                    
                    // Check if the student is admitted
                    if (data.student.isAdmitted) {
                        navigate('/https://www.bvs.comhome'); // Redirect admitted students to classes page
                    } else {
                        setErrors({ general: 'You are not admitted yet. Please contact the admin.' });
                    }
                } else {
                    setErrors({ general: data.message });
                }
            } catch (error) {
                console.error('Error during login:', error);
                setErrors({ general: 'An error occurred. Please try again later.' });
                setLoading(false); 
            }
        }
    };

    return (
        <div id="student-login-page">
            {/* Logo at the top */}
            <div className="logo-container">
                <img title='BUSINESS VICTORY SOLUTIONS' src={logo} alt="Institute Logo" className="logo" />
            </div>
            <div className="institute-info">
                <h1>Welcome to BVS Institute</h1>
                <p>
                    BVS Institute offers the best training in Full Stack Development and React Native.
                    Join us to build live projects and gain industry-ready skills.
                </p>
            </div>
            <div className="form-container">
                <h2 className="form-title">Student Login</h2>
                {errors.general && <p className="form-error">{errors.general}</p>}
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
                    <button type="submit" className="form-button" disabled={loading}>
                        {loading ? 'Logging in...' : 'Login'}
                    </button>
                </form>
                <button onClick={() => alert('Redirecting to Forgot Password...')} className="form-link">
                    Forgot Password?
                </button>
            </div>
  
        </div>
    );
};

export default StudentLogin;
