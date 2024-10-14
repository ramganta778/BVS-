// // src/components/AdminDashboard.js
// import React, { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// function AdminDashboard() {
//   const [students, setStudents] = useState([]);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchStudents = async () => {
//       try {
//         const response = await fetch('http://localhost:5000/api/admin/students');
//         const data = await response.json();
//         setStudents(data);
//       } catch (error) {
//         console.error('Error fetching students:', error);
//       }
//     };

//     fetchStudents();
//   }, []);

//   const admitStudent = async (email) => {
//     try {
//       await fetch(`http://localhost:5000/api/admin/admit/${email}`, {
//         method: 'PUT',
//       });
//       setStudents(
//         students.map((student) =>
//           student.email === email ? { ...student, isAdmitted: true } : student
//         )
//       );
//     } catch (error) {
//       console.error('Error admitting student:', error);
//     }
//   };

//   const styles = {
//     dashboard: {
//       padding: '20px',
//       maxWidth: '800px',
//       margin: 'auto',
//       fontFamily: 'Arial, sans-serif',
//       backgroundColor: '#f5f5f5',
//       borderRadius: '8px',
//       boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
//     },
//     header: {
//       display: 'flex',
//       justifyContent: 'space-between',
//       alignItems: 'center',
//       marginBottom: '20px',
//     },
//     uploadButton: {
//       padding: '10px 20px',
//       backgroundColor: '#4CAF50',
//       color: 'white',
//       border: 'none',
//       borderRadius: '4px',
//       cursor: 'pointer',
//     },
//     studentList: {
//       listStyleType: 'none',
//       padding: 0,
//     },
//     studentItem: {
//       margin: '10px 0',
//       padding: '10px',
//       backgroundColor: '#fff',
//       borderRadius: '4px',
//       boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
//       display: 'flex',
//       justifyContent: 'space-between',
//       alignItems: 'center',
//     },
//     admitButton: {
//       padding: '5px 10px',
//       backgroundColor: '#2196F3',
//       color: 'white',
//       border: 'none',
//       borderRadius: '4px',
//       cursor: 'pointer',
//     },
//     admittedText: {
//       color: 'green',
//     },
//     notAdmittedText: {
//       color: 'red',
//     },
//   };

//   return (
//     <div style={styles.dashboard}>
//       <div style={styles.header}>
//         <h1>Admin Dashboard</h1>
//         <button
//           style={styles.uploadButton}
//           onClick={() => navigate('/https://www.bvs.comvideo-upload')}
//         >
//           Upload Video
//         </button>
//       </div>

//       <h2>Registered Students</h2>
//       <ul style={styles.studentList}>
//         {students.map((student) => (
//           <li key={student.email} style={styles.studentItem}>
//             <span>
//               {student.email} -{' '}
//               <span
//                 style={
//                   student.isAdmitted
//                     ? styles.admittedText
//                     : styles.notAdmittedText
//                 }
//               >
//                 {student.isAdmitted ? 'Admitted' : 'Not Admitted'}
//               </span>
//             </span>
//             {!student.isAdmitted && (
//               <button
//                 style={styles.admitButton}
//                 onClick={() => admitStudent(student.email)}
//               >
//                 Admit
//               </button>
//             )}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default AdminDashboard;




import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function AdminDashboard() {
  const [students, setStudents] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/admin/students');
        const data = await response.json();
        setStudents(data);
      } catch (error) {
        console.error('Error fetching students:', error);
      }
    };

    fetchStudents();
  }, []);

  const admitStudent = async (email) => {
    try {
      await fetch(`http://localhost:5000/api/admin/admit/${email}`, { method: 'PUT' });
      setStudents(
        students.map((student) =>
          student.email === email ? { ...student, isAdmitted: true } : student
        )
      );
    } catch (error) {
      console.error('Error admitting student:', error);
    }
  };

  const removeStudent = async (email) => {
    try {
      await fetch(`http://localhost:5000/api/admin/remove/${email}`, { method: 'PUT' });

      setStudents(
        students.map((student) =>
          student.email === email ? { ...student, isAdmitted: false } : student
        )
      );

      // If the removed student is currently logged in, log them out
      const loggedInEmail = localStorage.getItem('loggedInStudentEmail');
      if (loggedInEmail === email) {
        localStorage.removeItem('loggedInStudentEmail'); // Clear login data
        navigate('/login'); // Redirect to login page
      }
    } catch (error) {
      console.error('Error removing student:', error);
    }
  };

  const styles = {
    dashboard: {
      padding: '20px',
      maxWidth: '800px',
      margin: 'auto',
      fontFamily: 'Arial, sans-serif',
      backgroundColor: '#f5f5f5',
      borderRadius: '8px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    },
    header: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: '20px',
    },
    uploadButton: {
      padding: '10px 20px',
      backgroundColor: '#4CAF50',
      color: 'white',
      border: 'none',
      borderRadius: '4px',
      cursor: 'pointer',
    },
    studentList: {
      listStyleType: 'none',
      padding: 0,
    },
    studentItem: {
      margin: '10px 0',
      padding: '10px',
      backgroundColor: '#fff',
      borderRadius: '4px',
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    admitButton: {
      padding: '5px 10px',
      backgroundColor: '#2196F3',
      color: 'white',
      border: 'none',
      borderRadius: '4px',
      cursor: 'pointer',
      marginLeft: '10px',
    },
    removeButton: {
      padding: '5px 10px',
      backgroundColor: '#f44336',
      color: 'white',
      border: 'none',
      borderRadius: '4px',
      cursor: 'pointer',
      marginLeft: '10px',
    },
    admittedText: {
      color: 'green',
    },
    notAdmittedText: {
      color: 'red',
    },
  };

  return (
    <div style={styles.dashboard}>
      <div style={styles.header}>
        <h1>Admin Dashboard</h1>
        <button
          style={styles.uploadButton}
          onClick={() => navigate('/https://www.bvs.comvideo-upload')}
        >
          Upload Video
        </button>
      </div>

      <h2>Registered Students</h2>
      <ul style={styles.studentList}>
        {students.map((student) => (
          <li key={student.email} style={styles.studentItem}>
            <span>
              {student.email} -{' '}
              <span
                style={
                  student.isAdmitted ? styles.admittedText : styles.notAdmittedText
                }
              >
                {student.isAdmitted ? 'Admitted' : 'Not Admitted'}
              </span>
            </span>

            {!student.isAdmitted && (
              <button
                style={styles.admitButton}
                onClick={() => admitStudent(student.email)}
              >
                Admit
              </button>
            )}

            {student.isAdmitted && (
              <button
                style={styles.removeButton}
                onClick={() => removeStudent(student.email)}
              >
                Remove
              </button>
            )}
          </li>
        ))}
      </ul>
        {/* Copyright Section */}
        <div className="copyright">
        <p>&copy; {new Date().getFullYear()} BUSINESS VICTORY SOLUTIONS. All rights reserved.By 🔔</p>
      </div>
    </div>
  );
}

export default AdminDashboard;
