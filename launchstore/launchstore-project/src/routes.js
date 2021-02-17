const express = require('express')

const routes = express.Router()

/*GET ROUTES*/
routes.get("/", (req, res) => {
    return res.render("layout.html")
})

module.exports = routes