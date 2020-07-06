const router = require('express').Router();

const tutors = require('../../../functions/tutors/tutors')

router.post('/create', (req, res) => tutors.CreateTutor(req, res));

module.exports = router