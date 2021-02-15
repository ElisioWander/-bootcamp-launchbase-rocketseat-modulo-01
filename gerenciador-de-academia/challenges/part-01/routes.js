const express = require('express')
const routes = express.Router()

routes.get("/", (req, res) => {
    return res.render("teachers/teachers.html")
})

routes.get("/students", (req, res) => {
    return res.render("students/students.html")
})






module.exports = routes