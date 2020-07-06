const router = require('express').Router();
const students = require('../../../functions/students/students')

router.post('/create', (req, res) => students.CreateStudent(req, res))

module.exports = router