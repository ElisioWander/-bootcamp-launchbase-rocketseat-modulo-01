const express = require("express")
const nunjucks = require("nunjucks")
const videos = require("./data")

const server = express()

server.set("view engine", "html")

nunjucks.configure("views", {
    express: server,
    autoescape: false,
    noCache: true
})

server.use(express.static("public"))

server.get("/", (req, res) => {
    const about = {
        avatar_url: 'https://avatars1.githubusercontent.com/u/27742439?s=460&u=89474e52344ce457de62e25a70512d42042303d9&v=4',
        name: "Elisio Wander",
        role: "Estudante de programação",
        description: 'Iniciando nos estudos de Desenvolvimento Web atravéz do curso louchbase da <a href="https://rocketseat.com.br" target="_blank">Rocketseat</a>, focado nas seguintes tecnologias: HTML, CSS, JavaScript e Node.js.',
        link: [
            {name: "github", url: "https://github.com/ElisioWander"},
            {name: "twitter", url: "https://twitter.com/Elisio741"},
            {name: "linkedin", url: "https://www.linkedin.com/in/elisio-wander-b88b69136/"}
        ]
    }

    return res.render("about", { about })
})

server.get("/portifolio", (req, res) => {
    return res.render("portifolio", { items: videos })
})

server.get("/video", (req, res) => {
    const id = req.query.id

    const video = videos.find(function(video) {
        return video.id == id
    })

    if (!video) {
        res.send("Video not found")
    }

    return res.render("video", { item: video })
})

server.listen(5000, function() {

})