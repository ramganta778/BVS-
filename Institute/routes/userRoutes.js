// const express = require('express');
// const User = require('../models/User');
// const router = express.Router();
// const bcrypt = require('bcrypt');

// // Register a new user
// router.post('/register', async (req, res) => {
//     const { email, password } = req.body;

//     // Check if the user already exists
//     const existingUser = await User.findOne({ email });
//     if (existingUser) {
//         return res.status(400).json({ message: 'User already exists' });
//     }

//     // Hash the password
//     const hashedPassword = await bcrypt.hash(password, 10);

//     // Create a new user
//     const user = new User({ email, password: hashedPassword });

//     try {
//         await user.save();
//         res.status(201).json({ message: 'User registered successfully' });
//     } catch (error) {
//         res.status(500).json({ message: 'Server error' });
//     }
// });

// // Login a user
// router.post('/login', async (req, res) => {
//     const { email, password } = req.body;

//     const user = await User.findOne({ email });
//     if (!user) {
//         return res.status(400).json({ message: 'Invalid credentials' });
//     }

//     // Check password
//     const isMatch = await bcrypt.compare(password, user.password);
//     if (!isMatch) {
//         return res.status(400).json({ message: 'Invalid credentials' });
//     }

//     res.status(200).json({ message: 'Login successful' });
// });

// module.exports = router;

const express = require('express');
const User = require('../models/User');
const router = express.Router();
const bcrypt = require('bcrypt');

// Register a new user
router.post('/register', async (req, res) => {
    const { email, password } = req.body;

    // Check if the user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
        return res.status(400).json({ message: 'User already exists' });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user
    const user = new User({ email, password: hashedPassword });

    try {
        await user.save();
        res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
        console.error('Registration error:', error);
        res.status(500).json({ message: 'Server error' });
    }
});

module.exports = router;
