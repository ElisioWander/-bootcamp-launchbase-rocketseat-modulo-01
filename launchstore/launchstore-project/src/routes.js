const express = require('express')

const routes = express.Router()

/*GET ROUTES*/
routes.get("/", (req, res) => {
    return res.send("ok")
})

module.exports = routes