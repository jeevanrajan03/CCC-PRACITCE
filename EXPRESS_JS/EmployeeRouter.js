const express = require("express")
const Employee = require('../EXPRESS_JS/EmployeeController')
const router = express.Router();

router.post('/add-emp', Employee.createEmployee);
router.get('/get-emp', Employee.getEmployees);
router.get('/get-emp/:id', Employee.getEmployee);
router.delete('/delete-emp/:id', Employee.deleteEmployee);
router.put('/update-emp/:id', Employee.updateEmployee);

module.exports = router