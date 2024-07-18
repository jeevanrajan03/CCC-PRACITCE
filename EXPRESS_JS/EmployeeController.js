const Employee = require('../EXPRESS_JS/Employee')
const createEmployee = async (req, res) => {
    try {
        const { name, age, gender, salary } = req.body
        const obj = new Employee({ name, age, gender, salary })
        await obj.save()
        res.status(201).json(obj)
    }
    catch (error) {
        res.status(500).json()
        console.log(error)
    }
}

const getEmployees = async (req, res) => {
    try {
        const data = await Employee.find();
        if (!data) res.status(500).json({ "message": "no documents were found!" })
        else res.status(200).json(data);
    }
    catch (error) { console.log(error) }
}

const getEmployee = async (req, res) => {
    try {
        const { id } = req.params;
        const data = await Employee.findById(id);
        if (!data) res.status(500).json({ "message": "no documents were found!" })
        else res.status(200).json(data);
    }
    catch (error) { console.log(error) }
}

const deleteEmployee = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedEmployee = await Employee.findByIdAndDelete(id);
        if (!deletedEmployee) {
            return res.status(404).json({ error: 'Employee not found' });
        }
        res.json({ message: 'Employee deleted successfully', deletedEmployee });
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
        console.error(error);
    }
}

const updateEmployee = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, age, gender, salary } = req.body;

        const updatedEmployee = await Employee.findByIdAndUpdate(id, { name, age, gender, salary }, { new: true });

        if (!updatedEmployee) {
            return res.status(404).json({ error: 'Employee not found' });
        }

        res.json({ message: 'Employee updated successfully', updatedEmployee });
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
        console.error(error);
    }
}

module.exports = { createEmployee, deleteEmployee, updateEmployee, getEmployees, getEmployee };
