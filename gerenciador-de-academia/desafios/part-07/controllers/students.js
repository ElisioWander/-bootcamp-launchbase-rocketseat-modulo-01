const data = require('../data.json')
const fs = require('fs')

exports.index = (req, res) => {
    return res.render("students/index.html")
}

exports.create = (req, res) => {
    return res.render("students/create-student.html")
}

exports.post = (req, res) => {
    const keys = Object.keys(req.body)

    for(key of keys) {
        if(req.body[key] == "") {
            return res.send("Please fill all fields!")
        }
    }

    let { avatar, name, email, birth, school, hour  } = req.body

    birth = Date.parse(birth)
    const id = Number(data.students.length + 1)

    data.students.push({
        id,
        avatar,
        name,
        email,
        birth,
        school,
        hour
    })

    fs.writeFile("data.json", JSON.stringify(data, null, 2), function(err) {
        if(err) return res.send("Write file error!")
    })

    return res.redirect("/students")
}

exports.show = (req, res) => {
    return res.render("students/show.html")
}