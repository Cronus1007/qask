const Models = require('../../models/index');

module.exports = {
    CreateQuestion: (req, res) => {
        // try {
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
            // } catch (error) {
            //     return res.send({
            //         message: "failed"
            //     })
            // }
    }
}