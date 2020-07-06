const router = require('express').Router();

const classes = require('../../../functions/classes/classes')

router.post('/create', (req, res) => classes.CreateClass(req, res));

module.exports = router