const router = require('express').Router();

const subjects = require('../../../functions/subjects/subjects')

router.post('/create', (req, res) => subjects.CreateSubject(req, res));
router.delete('/delete/:id', (req, res) => subjects.DeleteSubject(req, res))
router.get('/read/:id', (req, res) => subjects.GetSubject(req, res))
router.put('/update/:id', (req, res) => subjects.UpdateSubject(req, res))
module.exports = router