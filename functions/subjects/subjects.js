const Models = require('../../models/index');

module.exports = {
    CreateSubject: (req, res) => {
        try {
            Models.subjects.create({
                    subjectName: req.body.subjectName
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
    GetSubject: (req, res) => {
        try {
            Models.subjects.findOne({
                    where: { id: req.params.id }
                })
                .then(subject => { return res.send(subject) })
        } catch (error) {
            return res.sendStatus(500)
        }
    },
    UpdateSubject: (req, res) => {
        try {
            Models.subjects.update({ subjectName: req.body.subjectName }, {
                    where: { id: req.params.id }
                })
                .then(subject => { return res.send(subject) })
        } catch (error) {
            return res.sendStatus(500)
        }
    },
    DeleteSubject: (req, res) => {
        try {
            Models.subjects.destroy({
                    where: { id: req.params.id }
                })
                .then(() => { return res.sendStatus(200) })
        } catch (error) {
            return res.sendStatus(500)
        }
    }
}