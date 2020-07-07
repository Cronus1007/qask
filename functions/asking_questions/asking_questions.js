const Models = require('../../models/index');

module.exports = {
    CreateQuestion: (req, res) => {
        try {
            Models.asking_questions.create({
                SubjectId: req.body.SubjectId,
                notes: req.body.notes,
                link: req.body.link,
                StudentId: req.body.StudentId,
                quesName: req.body.quesName,
                description: req.body.description,
                audio: req.body.audio,
                image: req.body.image,
                ClassId: req.body.ClassId,
                AnswerId: req.body.AnswerId
            }).then(u => {
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
    GetQusetion: (req, res) => {
        try {
            Models.asking_questions.findOne({
                    where: {
                        id: req.params.id
                    }
                })
                .then(question => { return res.send(question) })
        } catch (error) {
            return res.sendStatus(500)
        }
    },
    UpdateQuestion: (req, res) => {
        try {
            Models.asking_questions.update({
                    SubjectId: req.body.SubjectId,
                    notes: req.body.notes,
                    link: req.body.link,
                    StudentId: req.body.StudentId,
                    quesName: req.body.quesName,
                    description: req.body.description,
                    audio: req.body.audio,
                    image: req.body.image,
                    ClassId: req.body.ClassId,
                    AnswerId: req.body.AnswerId
                }, { where: { id: req.params.id } })
                .then(question => { return res.send(question) })
        } catch (error) {
            return res.sendStatus(500)
        }
    },
    DeleteQuestion: (req, res) => {
        try {
            Models.asking_questions.destroy({
                    where: { id: req.params.id }
                })
                .then(() => { return res.sendStatus(200) })
        } catch (error) {
            return res.sendStatus(500)
        }
    }
}