const Student = require('../Model/student');

// Function to create a new student
const createStudent = async (req, res) => {
    try {
        // Destructure the request body to get student details
        const { name, branch, age, marks } = req.body;

        // Create a new student object using the Student model
        const obj = new Student({ name, branch, age, marks });

        // Save the student object to the database
        await obj.save();

        // Send a success response
        res.status(201).json(obj);
    } catch (error) {
        // Handle any errors by sending a server error response
        res.status(500).json({ message: 'Server error' });
        console.log(error);
    }
};


const getStudent = async (req, res) => {
    try {
        const data = await Student.find()
        if (!data) {
            res.status('401').json({ "message": "Data not Found" })
        }
        else {
            res.status(200).json(data);
            console.log(data)
        }
    }
    catch (error) {
        console.log(error)
    }
}
// Export the createStudent function
module.exports = { createStudent, getStudent };

