const Models = require('../../models/index');

module.exports = {
    CreateRating: (req, res) => {
        try {
            Models.tutor_ratings.create({
                    TutorId: req.body.TutorId,
                    StudentId: req.body.StudentId,
                    Comments: req.body.Comments,
                    rating: req.body.rating
                })
                .then(u => {
                    return res.send({
                        message: "success",
                        data: u.id
                    })
                })
        } catch (error) {
            return res.send({
                message: "failed"
            })
        }
    },
    GetRating: (req, res) => {
        try {
            Models.tutor_ratings.findOne({
                    where: { id: req.params.id }
                })
                .then(rating => { return res.send(rating) })
        } catch (error) {
            return res.sendStatus(500)
        }
    },
    UpdateRating: (req, res) => {
        try {
            Models.tutor_ratings.update({
                TutorId: req.body.TutorId,
                StudentId: req.body.StudentId,
                Comments: req.body.Comments,
                rating: req.body.rating
            }, {
                where: { id: req.params.id }
            })
        } catch (error) {
            return res.sendStatus(500)
        }
    },
    DeleteRating: (req, res) => {
        try {
            Models.tutor_ratings.destroy({
                    where: { id: req.params.id },
                    truncate: { cascade: true }
                })
                .then(() => { return res.sendStatus(200) })
        } catch (error) {
            return res.sendStatus(500)
        }
    }
}