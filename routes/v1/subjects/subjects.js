const router = require('express').Router();

const subjects = require('../../../functions/subjects/subjects')

router.post('/create', (req, res) => subjects.CreateSubject(req, res));
router.delete('/delete', (req, res) => subjects.DeleteSubject(req, res))
router.get('/read', (req, res) => subjects.GetSubject(req, res))
router.put('/update', (req, res) => subjects.UpdateSubject(req, res))
module.exports = router