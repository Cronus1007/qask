const Models = require('../../models/index');

module.exports = {
    CreateDoubt: (req, res) => {
        try {
            Models.Doubts.create({
                QuesId: req.body.QuesId,
                doubt: req.body.doubt,
                doubtImage: req.body.doubtImage,
                answer: req.body.answer,
                answerImage: req.body.answerImage
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
    GetDoubt: (req, res) => {
        try {
            Models.Doubts.findOne({
                    where: { id: req.params.id }
                })
                .then(doubt => { return res.send(doubt) })
        } catch (error) {
            return res.sendStatus(500)
        }
    },
    UpdateDoubt: (req, res) => {
        try {
            Models.Doubts.update({
                    QuesId: req.body.QuesId,
                    doubt: req.body.doubt,
                    doubtImage: req.body.doubtImage,
                    answer: req.body.answer,
                    answerImage: req.body.answerImage
                }, {
                    where: { id: req.params.id }
                })
                .then(doubt => {
                    return res.send(doubt)
                })
        } catch (error) {
            return res.sendStatus(500)
        }
    },
    DeleteDoubt: (req, res) => {
        try {
            Models.Doubts.destroy({
                    where: { id: req.params.id }
                })
                .then(() => {
                    return res.sendStatus(200)
                })
        } catch (error) {
            return res.sendStatus(500)
        }
    }
}