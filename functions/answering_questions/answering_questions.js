const Models = require('../../models/index');

module.exports = {
    CreateAnswer: (req, res) => {
        try {
            Models.answering_questions.create({
                stepOne: req.body.stepOne,
                stepTwo: req.body.stepTwo,
                stepThree: req.body.stepThree,
                TutorId: req.body.TutorId,
                quesName: req.body.quesName,
                explanation: req.body.explanation,
                example: req.body.example,
                files: req.body.files,
                audio: req.body.audio
            }).then(u => {
                res.send({
                    message: "success",
                    data: u.id
                })
            })
        } catch (error) {
            res.send({
                message: "failed"
            })
        }
    }
}