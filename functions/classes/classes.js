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
    },
    GetClass: (req, res) => {
        try {
            Models.classes.findOne({
                where: { id: req.params.id }
            }).then(classes => {
                return res.send({
                    classes
                })
            })
        } catch (error) {
            return res.sendStatus(500)
        }
    },
    UpdateClass: (req, res) => {
        try {
            Models.classes.update({
                    class: req.body.class
                }, { where: { id: req.params.id } })
                .then(classes => { return res.send(classes) })
        } catch (error) {
            return res.sendStatus(500)
        }
    },
    DeleteClass: (req, res) => {
        try {
            Models.classes.destroy({
                    where: { id: req.params.id }
                })
                .then(() => { return res.sendStatus(200) })
        } catch (error) {
            return res.sendStatus(500)
        }
    }
}