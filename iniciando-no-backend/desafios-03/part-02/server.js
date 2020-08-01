const express = require("express")
const nunjucks = require("nunjucks")
const courses = require("./data")

const server = express()

server.set("view engine", "html")

server.use(express.static("public"))

nunjucks.configure("views", {
    express: server,
    autoescape: false
})


server.get("/", (req, res) => {
    return res.render("portifolio", { items: courses })
})

server.get("/about", (req, res) => {
    const data = {
        image: "/assets/rocket.jpg",
        name: '<a href="https://rocketseat.com.br" target="_blank">Rocketseat</a>',
        description: ' "Mais do que uma plataforma de educação em tecnologia, somos uma comunidade incrível de programadores em busca do próximo nível" ',
        title: "Principais tecnologias",
        technology: [
            {name: "JavaScript", url: "https://www.javascript.com/"},
            {name: "Node.js", url: "https://nodejs.org/en/"},
            {name: "React.js", url: "https://pt-br.reactjs.org/"},
            {name: "React Native", url: "https://reactnative.dev/"}
        ],
        link: [
            {name: "github", url: "https://github.com/rocketseat"},
            {name: "twitter", url: "https://www.instagram.com/rocketseat_oficial/?hl=pt-br"},
            {name: "linkedin", url: "https://pt-br.facebook.com/rocketseat/"}
        ]
    }

    return res.render("about", { data })
})

server.use(function(req, res) {
    res.status(404).render("partials/not-found");
})

server.listen(5000, () => {

})