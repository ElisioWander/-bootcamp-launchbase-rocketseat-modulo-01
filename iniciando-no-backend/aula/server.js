const express = require("express")
const nunjucks = require("nunjucks")

const server = express()

server.set("view engine", "html")

nunjucks.configure("views", {
    express: server
})

server.use(express.static("public"))

server.get("/", (req, res) => {
    return res.render("about")
})

server.get("/portifolio", (req, res) => {
    return res.render("portifolio")
})

server.listen(5000, function() {

})