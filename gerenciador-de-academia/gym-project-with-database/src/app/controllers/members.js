const { date, bloodType } = require('../../lib/utils')


module.exports = {
    index(req, res) {
        return res.render("members/index.html")
    },
    create(req, res) {
        return res.render("members/create.html")
    },
    post(req, res) {
        const keys = Object.keys(req.body)

        for (let key of keys) {
            if (req.body[key] == "") {
                return res.send("please, fill all fields")
            }
        }

        return
    },
    edit(req, res) {
        return
    },
    show(req, res) {
        return
    },
    put(req, res) {
        const keys = Object.keys(req.body)

        for (let key of keys) {
            if (req.body[key] == "") {
                return res.send("please, fill all fields")
            }
        }

        return
    },
    delete(req, res) {
        return
    }
}
