const { get } = require('browser-sync')
const express = require('express')
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

routes.get("/members", (req, res) => {
    return res.send("members")
})


routes.post("/instructors", (req, res) => {
    const keys = Object.keys(req.body)

    for (let key of keys) {
        if (req.body[key] == "") {
            return res.send("please, fill all fields")
        }
    }

    return res.send(req.body)
})



module.exports = routes