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

    //desetruturação de dados
    let { avatar, name, birth, school, classType, works } = req.body

    birth = Date.parse(birth)
    const created_at = Date.now()
    const id = Number(data.teacher.length +1)

    //enviar os dados desestruturados para dentro do arquivo data.json
    data.teacher.push({ 
        id,
        avatar,
        name,
        birth,
        school,
        classType,
        works,
        created_at
    })

    fs.writeFile("data.json", JSON.stringify(data, null, 2), function(err) {
        if (err) return res.send("Write file error")
    })

    return res.redirect("/teacher")
}