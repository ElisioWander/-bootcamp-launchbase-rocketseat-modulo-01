const express = require("express")
const nunjucks = require("nunjucks")

const server = express()

server.set("view engine", "html")

server.use(express.static("public"))

nunjucks.configure("views", {
    express: server
})


server.get("/", (req, res) => {
    return res.render("portifolio")
})

server.get("/about", (req, res) => {
    return res.render("about")
})

server.use(function(req, res) {
    res.status(404).render("partials/not-found");
})

server.listen(5000, () => {

})