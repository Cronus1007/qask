const router = require('express').Router();

const tutors = require('../../../functions/tutors/tutors')

router.post('/create', (req, res) => tutors.CreateTutor(req, res));
router.delete('/delete', (req, res) => tutors.DeleteTutor(req, res))
router.get('/read', (req, res) => tutors.GetTutor(req, res))
router.put('/update', (req, res) => tutors.UpdateTutor(req, res))
module.exports = router