const router = require('express').Router();

const questions = require('../../../functions/asking_questions/asking_questions')

router.post('/create', (req, res) => questions.CreateQuestion(req, res));

module.exports = router