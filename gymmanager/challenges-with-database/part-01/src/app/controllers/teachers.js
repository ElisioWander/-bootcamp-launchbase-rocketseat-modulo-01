const { age, date, graduation } = require('../../lib/utils')

module.exports = {
    index(req, res) {
        return res.render("teachers/index.html")
    },
    create(req, res) {
        return res.render("teachers/create-teacher.html")
    },
    post(req, res) {
        const keys = Object.keys(req.body)

        //validação dos campos
        //fazer com que todos os campos sejam preenchidos
        for (key of keys) {
            if (req.body[key] == "") {
                return res.send("Please, fill all fileds")
            }
        }

        //desetruturação de dados
        let { avatar, name, birth, school, classType, works } = req.body

        return
    },
    show(req, res) {
        return
    },
    edit(req, res) {
        return
    },
    update(req, res) {
        const keys = Object.keys(req.body)

        //validação dos campos
        //fazer com que todos os campos sejam preenchidos
        for (key of keys) {
            if (req.body[key] == "") {
                return res.send("Please, fill all fileds")
            }
        }

        return
    },
    delete(req, res) {
        return
    }
}