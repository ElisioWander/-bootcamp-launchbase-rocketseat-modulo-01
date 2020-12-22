const express = require('express')
const teachers = require('./teachers')
const routes = express.Router()

routes.get("/", (req, res) => {
    return res.redirect("/teachers")
})


routes.get("/teachers", teachers.index)
routes.get("/create", teachers.create)
routes.get("/teachers/:id", teachers.show)
routes.post("/teachers", teachers.post)






module.exports = routes