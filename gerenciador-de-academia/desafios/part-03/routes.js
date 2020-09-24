const express = require('express')
const teacher = require('./teacher')
const routes = express.Router()

routes.get("/", (req, res) => {
    return res.redirect("/teacher")
})

routes.get("/teacher", (req, res) => {
    return res.render("teachers/teacher.html")
})

routes.get("/create", (req, res) => {
    return res.render("teachers/create-teacher.html")
})

routes.get("/students", (req, res) => {
    return res.render("students/students.html")
})

//POST ROUTS
routes.post("/teacher", teacher.post)






module.exports = routes