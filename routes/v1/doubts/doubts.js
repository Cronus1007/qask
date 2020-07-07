const router = require('express').Router();

const doubts = require('../../../functions/doubts/doubts')

router.post('/create', (req, res) => doubts.CreateDoubt(req, res));
router.get('/read/:id', (req, res) => doubts.GetDoubt(req, res))
router.put('/update/:id', (req, res) => doubts.UpdateDoubt(req, res))
router.delete('/delete/:id', (req, res) => doubts.DeleteDoubt(req, res))
module.exports = router