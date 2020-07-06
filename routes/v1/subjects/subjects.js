const router = require('express').Router();

const subjects = require('../../../functions/subjects/subjects')

router.post('/create', (req, res) => subjects.CreateSubject(req, res));

module.exports = router