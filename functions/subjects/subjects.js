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
    }
}