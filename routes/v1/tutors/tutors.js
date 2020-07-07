const router = require('express').Router();

const tutors = require('../../../functions/tutors/tutors')

router.post('/create', (req, res) => tutors.CreateTutor(req, res));
router.delete('/delete/:id', (req, res) => tutors.DeleteTutor(req, res))
router.get('/read/:id', (req, res) => tutors.GetTutor(req, res))
router.put('/update/:id', (req, res) => tutors.UpdateTutor(req, res))
module.exports = router