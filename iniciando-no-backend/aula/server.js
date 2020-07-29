const express = require("express")
const server = express()

server.get("/", (req, res) => {
    return res.send("Hello!")
})

server.listen(5000, function() {
    console.log("Server is runing")
})