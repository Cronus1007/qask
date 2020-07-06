const Models = require('../../models/index');

module.exports = {
    CreateClass: (req, res) => {
        try {
            Models.classes.create({
                    class: req.body.class
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