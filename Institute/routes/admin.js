// routes/admin.js
const express = require('express');
const Student = require('../models/Student'); // Import the Student model
const router = express.Router();

// Get all registered students
router.get('/students', async (req, res) => {
    try {
        const students = await Student.find();
        res.json(students);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving students' });
    }
});

// Admit a student
router.put('/admit/:email', async (req, res) => {
    try {
        const { email } = req.params;
        const student = await Student.findOneAndUpdate(
            { email },
            { isAdmitted: true },
            { new: true }
        );
        if (!student) return res.status(404).json({ message: 'Student not found' });
        res.json(student);
    } catch (error) {
        res.status(500).json({ message: 'Error admitting student' });
    }
});

// Remove a student (set isAdmitted to false)
router.put('/remove/:email', async (req, res) => {
    try {
        const { email } = req.params;
        const student = await Student.findOneAndUpdate(
            { email },
            { isAdmitted: false },
            { new: true }
        );
        if (!student) return res.status(404).json({ message: 'Student not found' });
        res.json(student);
    } catch (error) {
        res.status(500).json({ message: 'Error removing student' });
    }
});


module.exports = router;
