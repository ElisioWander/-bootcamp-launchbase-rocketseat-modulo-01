const { grade, date } = require('../../lib/utils')

module.exports = {
    index(req, res) {
        return res.render("students/index.html")
    },
    create(req, res) {
        return res.render("students/create-student.html")
    },
    post(req, res) {
        const keys = Object.keys(req.body)

        for(key of keys) {
            if(req.body[key] == "") {
                return res.send("Please fill all fields!")
            }
        }

        let { avatar, name, email, birth, school, hour  } = req.body

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

        for(key of keys) {
            if(req.body[key] == "") {
                return res.send("Please fill all fields!")
            }
        }

        let { avatar, name, email, birth, school, hour  } = req.body

        return
    },
    delete(req, res) {
        return
    }
}