const { age, date, graduation } = require('../../lib/utils')
const Teacher = require('../model/Teacher')

module.exports = {
    index(req, res) {
        let { filter, page, limit } = req.query

        page = page || 1
        limit = limit || 2
        let offset = limit * (page - 1)

        const params = {
            page,
            filter,
            limit,
            offset,
            callback(teachers) {
                const pagination = {
                    total: Math.ceil(teachers[0].total / limit),
                    page
                }

                for(let teacher of teachers) {
                    teacher.subjects_taught = teacher.subjects_taught.split(",")
                }

                return res.render("teachers/index.html", { teachers, filter, pagination })
            }
        }

        Teacher.paginate(params)
    },
    create(req, res) {
        return res.render("teachers/create-teacher.html")
    },
    post(req, res) {
        const keys = Object.keys(req.body)

        for (key of keys) {
            if (req.body[key] == "") {
                return res.send("Please, fill all fileds")
            }
        }

        Teacher.create(req.body, function(teacher) {
            return res.redirect(`/teachers/${teacher.id}`)
        })
    },
    show(req, res) {
        Teacher.find(req.params.id, function(teacher) {
            if(!teacher) return res.send("teacher not found!")

            teacher.age = age(teacher.birth_date)
            teacher.created_at = date(teacher.created_at).format
            teacher.subjects_taught = teacher.subjects_taught.split(",")
            teacher.education_level = graduation(teacher.education_level)
            
            return res.render("teachers/show", { teacher })
        })
    },
    edit(req, res) {
        Teacher.find(req.params.id, function(teacher) {
            teacher.birth_date = date(teacher.birth_date).iso

            return res.render("teachers/edit", { teacher })
        })
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

        Teacher.update(req.body, function() {
            return res.redirect(`/teachers/${req.body.id}`)
        })
    },
    delete(req, res) {
        Teacher.delete(req.body.id, function() {
            return res.redirect("/teachers")
        })
    }
}