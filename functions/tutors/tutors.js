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
    },
    GetTutor: (req, res) => {
        try {
            Models.tutors.findOne({
                    where: { id: req.params.id }
                })
                .then(tutor => { return res.send(tutor) })
        } catch (error) {
            return res.sendStatus(500)
        }
    },
    UpdateTutor: (req, res) => {
        try {
            Models.tutors.update({
                    name: req.body.name,
                    email: req.body.email,
                    profilePic: req.body.profilePic,
                    subjects: req.body.subjects,
                    grade: req.body.grade,
                    password: req.body.password
                }, {
                    where: { id: req.params.id }
                })
                .then(tutor => { return res.send(tutor) })
        } catch (error) {
            return res.sendStatus(500)
        }
    },
    DeleteTutor: (req, res) => {
        try {
            Models.tutors.destroy({
                    where: { id: req.params.id }
                })
                .then(() => { return res.sendStatus(200) })
        } catch (error) {
            return res.sendStatus(500)
        }
    }
}