const express = require('express')
const teachers = require('./teachers')
const routes = express.Router()

routes.get("/", (req, res) => {
    return res.redirect("/teachers")
})


routes.get("/teachers", teachers.index)
routes.get("/teachers/create", teachers.create)
routes.get("/teachers/:id", teachers.show)
routes.get("/teachers/:id/edit", teachers.edit)
routes.post("/teachers", teachers.post)
routes.put("/teachers", teachers.update)






module.exports = routes