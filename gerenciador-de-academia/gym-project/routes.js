const { get } = require('browser-sync')
const express = require('express')
const instructors = require('./instructors')

const routes = express.Router()

routes.get("/", (req, res) => {
    return res.redirect("/instructors")
})

routes.get("/instructors", (req, res) => {
    return res.render("instructors/index.html")
})

routes.get("/instructors/create", (req, res) => {
    return res.render("instructors/create.html")
})

routes.post("/instructors", instructors.post)



module.exports = routes