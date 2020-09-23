const fs = require('fs')
const data = require('./data.json')

exports.post = (req, res) => {

    //captura apenas as chaves da requisição
    const keys = Object.keys(req.body)

    //validação dos campos
    //fazer com que todos os campos sejam preenchidos
    for (key of keys) {
        if (req.body[key] == "") {
            return res.send("Please, fill all fileds")
        }
    }

    let { avatar, name, birth, school, classType, works } = req.body

    data.teacher.push({ 
        avatar,
        name,
        birth,
        school,
        classType,
        works
     })

    fs.writeFile("data.json", JSON.stringify(data, null, 2), function(err) {
        if (err) return res.send("Write file error")
    })

    return res.redirect("/teacher")
}