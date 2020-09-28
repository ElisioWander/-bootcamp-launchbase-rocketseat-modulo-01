const fs = require('fs')
const data = require('./data.json')

/*SHOW*/
exports.show = function(req, res) {
    const { id } = req.params

    const foundInstructor = data.instructors.find(function(instructor) {
        return instructor.id == id
    })

    if (!foundInstructor) return res.send("Instructor not found!")

    return res.send(foundInstructor)
}

/*CREATE*/
exports.post = function(req, res) {
    const keys = Object.keys(req.body)

    for (let key of keys) {
        if (req.body[key] == "") {
            return res.send("please, fill all fields")
        }
    }
    
    let { avatar_url, name, birth, gender, services } = req.body

    birth = Date.parse(birth)
    const created_at = Date.now()
    const id = Number(data.instructors.length +1)

    //enviar os dados do body para dentro do array no data.json
    data.instructors.push({ 
        id,
        avatar_url,
        name,
        birth,
        gender,
        services,
        created_at
     })

    fs.writeFile("data.json", JSON.stringify(data, null, 2), function(err) {
        if (err) return res.send("Write file error")

        return res.redirect("/instructors")
    })
}