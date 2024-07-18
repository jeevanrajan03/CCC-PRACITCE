// Import the Mongoose library
const mongoose = require('mongoose');

// Define the schema for a student
const studentSchema = new mongoose.Schema({
    // The name of the student, which is a required string
    name: { type: String, required: true },
    // The branch the student belongs to, which is a required string
    branch: { type: String, required: true },
    // The age of the student, which is a required number
    age: { type: Number, required: true },
    // The marks of the student, which is a required number
    marks: { type: Number, required: true }
});

// Export the model based on the schema, naming it "Student"
module.exports = mongoose.model('Student', studentSchema);
