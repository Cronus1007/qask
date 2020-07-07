const router = require('express').Router();
const students = require('../../../functions/students/students')

router.post('/create', (req, res) => students.CreateStudent(req, res))
router.get('/read/:id', (req, res) => students.GetStudent(req, res))
router.put('/update/:id', (req, res) => students.UpdateStudent(req, res))
router.delete('/delete/:id', (req, res) => students.DeleteStudent(req, res))
module.exports = router