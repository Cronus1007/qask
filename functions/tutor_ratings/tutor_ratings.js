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
    }
}