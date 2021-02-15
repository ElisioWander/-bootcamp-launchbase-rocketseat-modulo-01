const { grade, date } = require('../../lib/utils')
const Student = require('../model/Student')

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
            callback(students) {
                if(!students[0]) {
                    return res.render("students/not-found.html")
                }

                const pagination = {
                    total: Math.ceil(students[0].total / limit),
                    page
                }

                for(let student of students) {
                    student.school_level = grade(student.school_level)
                }

                return res.render("students/index.html", { students, filter, pagination })
            }
        }

        Student.paginate(params)
    },
    create(req, res) {
        Student.teachersSelectOptions(function(options) {
            return res.render("students/create-student.html", { teacherOptions: options })
        })
    },
    post(req, res) {
        const keys = Object.keys(req.body)

        for(key of keys) {
            if(req.body[key] == "") {
                return res.send("Please fill all fields!")
            }
        }

        Student.create(req.body, function(student) {
            return res.redirect(`/students/${student.id}`)
        })
    },
    show(req, res) {
        Student.find(req.params.id, function(student) {
            if(!student) return res.send("Student not found!")

            student.birthday = date(student.birthday).birthDay
            student.school_level = grade(student.school_level)

            return res.render("students/show", { student })
        })
    },
    edit(req, res) {
        Student.find(req.params.id, function(student) {
            student.birthday = date(student.birthday).iso

            Student.teachersSelectOptions(function(options) {
                return res.render("students/edit", { student, teacherOptions: options })
            })
        })
    },
    update(req, res) {
        const keys = Object.keys(req.body)

        for(key of keys) {
            if(req.body[key] == "") {
                return res.send("Please fill all fields!")
            }
        }

        Student.update(req.body, function() {
            return res.redirect(`/students/${req.body.id}`)
        })
    },
    delete(req, res) {
        Student.delete(req.body.id, function() {
            return res.redirect("/students")
        })
    }
}