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
    }
}