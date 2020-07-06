const router = require('express').Router();

const answers = require('../../../functions/answering_questions/answering_questions');

router.post('/create', (req, res) => answers.CreateAnswer(req, res));

module.exports = router