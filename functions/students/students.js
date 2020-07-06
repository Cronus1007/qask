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
    }
}