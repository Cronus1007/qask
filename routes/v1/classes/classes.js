const router = require('express').Router();

const classes = require('../../../functions/classes/classes')

router.post('/create', (req, res) => classes.CreateClass(req, res));

router.post('/create', (req, res) => classes.CreateClass(req, res));
router.get('/read', (req, res) => classes.GetClass(req, res))
router.put('/update', (req, res) => classes.UpdateClass(req, res))
router.delete('/delete', (req, res) => classes.DeleteClass(req, res))

module.exports = router