const router = require('express').Router();

const ratings = require('../../../functions/tutor_ratings/tutor_ratings')

router.post('/create', (req, res) => ratings.CreateRating(req, res));
router.delete('/delete', (req, res) => ratings.DeleteRating(req, res))
router.get('/read', (req, res) => ratings.GetRating(req, res))
router.put('/update', (req, res) => ratings.UpdateRating(req, res))
module.exports = router