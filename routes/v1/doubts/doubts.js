const router = require('express').Router();

const doubts = require('../../../functions/doubts/doubts')

router.post('/create', (req, res) => doubts.CreateDoubt(req, res));

module.exports = router