const Models = require('../../models/index');

module.exports = {
    CreateTutor: (req, res) => {
        try {
            Models.tutors.create({
                    name: req.body.name,
                    email: req.body.email,
                    profilePic: req.body.profilePic,
                    subjects: req.body.subjects,
                    grade: req.body.grade,
                    password: req.body.password
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