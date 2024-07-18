const express = require("express");
const Student = require('../Control/StudentControl');
const router = express.Router(); // Corrected to express.Router()

// Define the POST route to add a new student
router.post("/add-student", Student.createStudent);
router.get("/get-student", Student.getStudent);
// Export the router
module.exports = router;