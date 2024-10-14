// models/Student.js
const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
    },
    isAdmitted: {
        type: Boolean,
        default: false,
    },
    fullName: { type: String, required: true },
    password: { type: String, required: true },
});

const Student = mongoose.model('Student', studentSchema);
module.exports = Student;
