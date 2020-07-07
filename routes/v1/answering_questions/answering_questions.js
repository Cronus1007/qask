const router = require('express').Router();

const answers = require('../../../functions/answering_questions/answering_questions');

router.post('/create', (req, res) => answers.CreateAnswer(req, res));
router.get('/read/:id', (req, res) => answers.GetAnswer(req, res))
router.put('/update/:id', (req, res) => answers.UpdateAnswer(req, res))
router.delete('/delete/:id', (req, res) => answers.DeleteAnswer(req, res))

module.exports = router