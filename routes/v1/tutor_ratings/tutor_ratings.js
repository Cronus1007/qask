const router = require('express').Router();

const ratings = require('../../../functions/tutor_ratings/tutor_ratings')

router.post('/create', (req, res) => ratings.CreateRating(req, res));

module.exports = router