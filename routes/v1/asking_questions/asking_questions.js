const router = require('express').Router();

const questions = require('../../../functions/asking_questions/asking_questions')

router.post('/create', (req, res) => questions.CreateQuestion(req, res));
router.get('/read', (req, res) => questions.GetQusetion(req, res))
router.put('/update', (req, res) => questions.UpdateQuestion(req, res))
router.delete('/delete', (req, res) => questions.DeleteQuestion(req, res))

module.exports = router