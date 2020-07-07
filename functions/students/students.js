const Models = require('../../models/index');

module.exports = {
    CreateStudent: (req, res) => {
        try {
            Models.Students.create({
                name: req.body.name,
                email: req.body.email,
                password: req.body.password,
                profilePic: req.body.profilePic,
                subjects: req.body.subjects,
                grade: req.body.grade
            }).then(u => {
                res.send({
                    message: "success",
                    data: u.id
                })
            })
        } catch (error) {
            res.send({ message: "failed" })
        }
    },
    GetStudent: (req, res) => {
        try {
            Models.Students.findOne({
                    where: { id: req.params.id }
                })
                .then(student => { return res.send(student) })
        } catch (error) {
            return res.sendStatus(500)
        }
    },
    UpdateStudent: (req, res) => {
        try {
            Models.Students.update({
                name: req.body.name,
                email: req.body.email,
                password: req.body.password,
                profilePic: req.body.profilePic,
                subjects: req.body.subjects,
                grade: req.body.grade
            }, {
                where: { id: req.params.id }
            })
        } catch (error) {
            return res.sendStatus(500)
        }
    },
    DeleteStudent: (req, res) => {
        try {
            Models.Students.destroy({
                    where: { id: req.params.id }
                })
                .then(() => { return res.sendStatus(200) })
        } catch (error) {
            return res.sendStatus(500)
        }
    }
}