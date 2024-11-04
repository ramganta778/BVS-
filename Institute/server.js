// // this code is video uploading and getting video from s3 bucket

// const AWS = require('aws-sdk');
// const express = require('express');
// const cors = require('cors');
// const multer = require('multer');
// const path = require('path');
// require('dotenv').config(); // Load environment variables from .env file

// // Configure AWS SDK
// AWS.config.update({
//   accessKeyId: process.env.AWS_ACCESS_KEY_ID,
//   secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
//   region: 'eu-north-1',
// });

// const s3 = new AWS.S3();
// const BUCKET_NAME = 'ibommamovies';

// const app = express();
// app.use(cors());

// // Configure multer for file uploads
// const storage = multer.memoryStorage(); // Store files in memory
// const upload = multer({ storage: storage });

// // Function to get video URLs from S3
// const getS3Videos = async () => {
//   try {
//     const params = {
//       Bucket: BUCKET_NAME,
//     };

//     const data = await s3.listObjectsV2(params).promise();
//     const videoUrls = data.Contents.map((file) => {
//       return s3.getSignedUrl('getObject', {
//         Bucket: BUCKET_NAME,
//         Key: file.Key,
//         Expires: 60 * 60, // 1 hour
//       });
//     });

//     return videoUrls;
//   } catch (error) {
//     console.error('Error fetching S3 videos:', error);
//     throw error;
//   }
// };

// // Route to fetch video URLs
// app.get('/videos', async (req, res) => {
//   try {
//     const videoUrls = await getS3Videos();
//     res.json({ videos: videoUrls });
//   } catch (error) {
//     res.status(500).json({ message: 'Error fetching videos' });
//   }
// });

// // Route to upload videos
// app.post('/upload', upload.single('video'), async (req, res) => {
//   const { title } = req.body;
//   const file = req.file;

//   if (!file) {
//     return res.status(400).json({ message: 'No file uploaded' });
//   }

//   const params = {
//     Bucket: BUCKET_NAME,
//     Key: `${title}-${Date.now()}${path.extname(file.originalname)}`, // Create a unique filename
//     Body: file.buffer,
//     ContentType: file.mimetype,
//   };

//   try {
//     await s3.upload(params).promise();
//     res.status(200).json({ message: 'File uploaded successfully!' });
//   } catch (error) {
//     console.error('Error uploading video:', error);
//     res.status(500).json({ message: 'Error uploading video' });
//   }
// });

// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });












// // server.js
// const express = require('express');
// const mongoose = require('mongoose');
// const bodyParser = require('body-parser');
// const cors = require('cors');

// // Initialize Express app
// const app = express();
// const PORT = process.env.PORT || 5000;

// // Middleware
// app.use(cors());
// app.use(bodyParser.json());

// // Connect to MongoDB
// mongoose.connect('mongodb+srv://ramganta778:balaji@cluster0.vhgpcgw.mongodb.net/amazon?retryWrites=true&w=majority', {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
// })
// .then(() => {
//     console.log('Connected to MongoDB');
// })
// .catch(err => {
//     console.error('MongoDB connection error:', err);
// });

// // Define a schema for student
// const studentSchema = new mongoose.Schema({
//     fullName: { type: String, required: true },
//     email: { type: String, required: true, unique: true },
//     password: { type: String, required: true },
// });

// // Create a model for the student
// const Student = mongoose.model('Student', studentSchema);

// // Signup route
// app.post('/api/users/signup', async (req, res) => {
//     try {
//         const { fullName, email, password } = req.body;
//         const newStudent = new Student({ fullName, email, password });
//         await newStudent.save();
//         res.status(201).json({ message: 'Student registered successfully!' });
//     } catch (error) {
//         console.error('Signup error:', error);
//         res.status(400).json({ message: 'Error registering student', error: error.message });
//     }
// });

// // Login route
// app.post('/api/users/login', async (req, res) => {
//     const { email, password } = req.body;
//     try {
//         const student = await Student.findOne({ email });
//         if (!student || student.password !== password) {
//             return res.status(401).json({ message: 'Invalid email or password.' });
//         }
//         res.status(200).json({ message: 'Login successful', student });
//     } catch (error) {
//         console.error('Login error:', error);
//         res.status(500).json({ message: 'Error logging in', error: error.message });
//     }
// });

// // Start the server
// app.listen(PORT, () => {
//     console.log(`Server is running on http://localhost:${PORT}`);
// });


















// const express = require('express');
// const mongoose = require('mongoose');
// const bodyParser = require('body-parser');
// const cors = require('cors');
// const AWS = require('aws-sdk');
// const multer = require('multer');
// const adminRoutes = require('./routes/admin'); // Import admin routes
// const user = require('./models/Student')
// const path = require('path');
// require('dotenv').config(); // Load environment variables from .env file

// // Initialize Express app
// const app = express();
// const PORT = process.env.PORT || 5000;

// // Middleware
// app.use(cors());
// app.use(bodyParser.json());

// // Connect to MongoDB
// mongoose.connect('mongodb+srv://ramganta778:balaji@cluster0.vhgpcgw.mongodb.net/amazon?retryWrites=true&w=majority', {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
// })
// .then(() => {
//     console.log('Connected to MongoDB');
// })
// .catch(err => {
//     console.error('MongoDB connection error:', err);
// });

// // Define a schema for student
// const studentSchema = new mongoose.Schema({
//     fullName: { type: String, required: true },
//     email: { type: String, required: true, unique: true },
//     password: { type: String, required: true },
// });

// // Create a model for the student
// const Student = mongoose.model('Student', studentSchema);

// // AWS S3 configuration
// AWS.config.update({
//   accessKeyId: process.env.AWS_ACCESS_KEY_ID,
//   secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
//   region: 'eu-north-1',
// });

// const s3 = new AWS.S3();
// const BUCKET_NAME = 'ibommamovies';

// // Configure multer for file uploads
// const storage = multer.memoryStorage(); // Store files in memory
// const upload = multer({ storage: storage });

// // Function to get video URLs from S3
// const getS3Videos = async () => {
//   try {
//     const params = {
//       Bucket: BUCKET_NAME,
//     };

//     const data = await s3.listObjectsV2(params).promise();
//     const videoUrls = data.Contents.map((file) => {
//       return s3.getSignedUrl('getObject', {
//         Bucket: BUCKET_NAME,
//         Key: file.Key,
//         Expires: 60 * 60, // 1 hour
//       });
//     });

//     return videoUrls;
//   } catch (error) {
//     console.error('Error fetching S3 videos:', error);
//     throw error;
//   }
// };

// // Route to fetch video URLs
// app.get('/videos', async (req, res) => {
//   try {
//     const videoUrls = await getS3Videos();
//     res.json({ videos: videoUrls });
//   } catch (error) {
//     res.status(500).json({ message: 'Error fetching videos' });
//   }
// });

// // Route to upload videos
// app.post('/upload', upload.single('video'), async (req, res) => {
//   const { title } = req.body;
//   const file = req.file;

//   if (!file) {
//     return res.status(400).json({ message: 'No file uploaded' });
//   }

//   const params = {
//     Bucket: BUCKET_NAME,
//     Key: `${title}-${Date.now()}${path.extname(file.originalname)}`, // Create a unique filename
//     Body: file.buffer,
//     ContentType: file.mimetype,
//   };

//   try {
//     await s3.upload(params).promise();
//     res.status(200).json({ message: 'File uploaded successfully!' });
//   } catch (error) {
//     console.error('Error uploading video:', error);
//     res.status(500).json({ message: 'Error uploading video' });
//   }
// });

// // Signup route
// app.post('/api/users/signup', async (req, res) => {
//     try {
//         const { fullName, email, password } = req.body;
//         const newStudent = new Student({ fullName, email, password });
//         await newStudent.save();
//         res.status(201).json({ message: 'Student registered successfully!' });
//     } catch (error) {
//         console.error('Signup error:', error);
//         res.status(400).json({ message: 'Error registering student', error: error.message });
//     }
// });

// // Login route
// app.post('/api/users/login', async (req, res) => {
//     const { email, password } = req.body;
//     try {
//         const student = await Student.findOne({ email });
//         if (!student || student.password !== password) {
//             return res.status(401).json({ message: 'Invalid email or password.' });
//         }
//         res.status(200).json({ message: 'Login successful', student });
//     } catch (error) {
//         console.error('Login error:', error);
//         res.status(500).json({ message: 'Error logging in', error: error.message });
//     }
// });

// // MongoDB connection
// mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
//     .then(() => console.log('MongoDB connected'))
//     .catch(err => console.error('MongoDB connection error:', err));

// // Use admin routes
// app.use('/api/admin', adminRoutes);


// // Start the server
// app.listen(PORT, () => {
//     console.log(`Server is running on http://localhost:${PORT}`);
// });









const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const AWS = require('aws-sdk');
const multer = require('multer');
const adminRoutes = require('./routes/admin'); // Import admin routes
const Student = require('./models/Student'); // Correctly import the Student model
const path = require('path');
require('dotenv').config(); // Load environment variables from .env file

// Initialize Express app
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect('mongodb+srv://ramganta778:balaji@cluster0.vhgpcgw.mongodb.net/amazon?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => {
    console.log('Connected to MongoDB');
})
.catch(err => {
    console.error('MongoDB connection error:', err);
});

// AWS S3 configuration
AWS.config.update({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: 'eu-north-1',
});

const s3 = new AWS.S3();
const BUCKET_NAME = 'ibommamovies';

// Configure multer for file uploads
const storage = multer.memoryStorage(); // Store files in memory
const upload = multer({ storage: storage });

// Function to get video URLs from S3
const getS3Videos = async () => {
  try {
    const params = {
      Bucket: BUCKET_NAME,
    };

    const data = await s3.listObjectsV2(params).promise();
    const videoUrls = data.Contents.map((file) => {
      return s3.getSignedUrl('getObject', {
        Bucket: BUCKET_NAME,
        Key: file.Key,
        Expires: 60 * 60, // 1 hour
      });
    });

    return videoUrls;
  } catch (error) {
    console.error('Error fetching S3 videos:', error);
    throw error;
  }
};

// Route to fetch video URLs
app.get('/videos', async (req, res) => {
  try {
    const videoUrls = await getS3Videos();
    res.json({ videos: videoUrls });
  } catch (error) {
    res.status(500).json({ message: 'Error fetching videos' });
  }
});

// Route to upload videos
app.post('/upload', upload.single('video'), async (req, res) => {
  const { title } = req.body;
  const file = req.file;

  if (!file) {
    return res.status(400).json({ message: 'No file uploaded' });
  }

  const params = {
    Bucket: BUCKET_NAME,
    Key: `${title}-${Date.now()}${path.extname(file.originalname)}`, // Create a unique filename
    Body: file.buffer,
    ContentType: file.mimetype,
  };

  try {
    await s3.upload(params).promise();
    res.status(200).json({ message: 'File uploaded successfully!' });
  } catch (error) {
    console.error('Error uploading video:', error);
    res.status(500).json({ message: 'Error uploading video' });
  }
});

// Signup route
app.post('/api/users/signup', async (req, res) => {
    try {
        const { fullName, email, password } = req.body;
        const newStudent = new Student({ fullName, email, password });
        await newStudent.save();
        res.status(201).json({ message: 'Student registered successfully!' });
    } catch (error) {
        console.error('Signup error:', error);
        res.status(400).json({ message: 'Error registering student', error: error.message });
    }
});

// Login route
app.post('/api/users/login', async (req, res) => {
    const { email, password } = req.body;
    try {
        const student = await Student.findOne({ email });
        if (!student || student.password !== password) {
            return res.status(401).json({ message: 'Invalid email or password.' });
        }
        res.status(200).json({ message: 'Login successful', student });
    } catch (error) {
        console.error('Login error:', error);
        res.status(500).json({ message: 'Error logging in', error: error.message });
    }
});

// Use admin routes
app.use('/api/admin', adminRoutes);

// Start the server
const host = "0.0.0.0";
app.listen(PORT,host , () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});















// // admit page


// // server.js
// const express = require('express');
// const mongoose = require('mongoose');
// const cors = require('cors');
// const adminRoutes = require('./routes/admin'); // Import admin routes
// const user = require('./models/Student')
// require('dotenv').config();

// const app = express();
// const PORT = process.env.PORT || 5000;

// app.use(cors());
// app.use(express.json()); // Enable JSON body parsing

// // MongoDB connection
// mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
//     .then(() => console.log('MongoDB connected'))
//     .catch(err => console.error('MongoDB connection error:', err));

// // Use admin routes
// app.use('/api/admin', adminRoutes);

// // Other code...

// // Start the server
// app.listen(PORT, () => {
//     console.log(`Server is running on http://localhost:${PORT}`);
// });
