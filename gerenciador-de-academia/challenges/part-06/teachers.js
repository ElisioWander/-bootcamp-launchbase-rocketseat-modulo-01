const fs = require('fs')
const data = require('./data.json')
const { age, date, graduation } = require('./utils')
const Intl = require('intl')

exports.index = (req, res) => {
    let teachers = data.teachers.map((teacher) => {
        const newTeacher = {
            ...teacher,
            works: teacher.works.split(",")
        }
        return newTeacher
    })

    return res.render("teachers/index.html", { teachers })
}

exports.create = (req, res) => {
    return res.render("teachers/create-teacher.html")
}

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
    const id = Number(data.teachers.length +1)

    //enviar os dados desestruturados para dentro do arquivo data.json
    data.teachers.push({ 
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

    return res.redirect("/teachers")
}

exports.show = (req, res) => {
    const { id } = req.params

    const foundTeacher = data.teachers.find(function(teacher) {
        return teacher.id == id
    })

    if(!foundTeacher) return res.send("Teacher not found!")

    const teacher = {
        ...foundTeacher,
        age: age(foundTeacher.birth),
        works: foundTeacher.works.split(","),
        created_at: new Intl.DateTimeFormat('pt-BR').format(foundTeacher.created_at),
        school: graduation(foundTeacher.school)
    }

    return res.render('teachers/show', { teacher })
}

exports.edit = (req, res) => {
    const { id } = req.params

    const foundTeacher = data.teachers.find(function(teacher) {
        return teacher.id == id
    })

    if(!foundTeacher) return res.send("Teacher not found!")

    const teacher = {
        ...foundTeacher,
        birth: date(foundTeacher.birth).iso,
    }

    return res.render("teachers/edit", { teacher })
}

exports.update = (req, res) => {
    const { id } = req.body

    let index = 0

    const foundTeacher = data.teachers.find(function(teacher, foundIndex) {
        if(id == teacher.id) {
            index = foundIndex
            return true
        }
    })

    if(!foundTeacher) return res.send("Teacher not found!")

    const teacher = {
        ...foundTeacher,
        ...req.body,
        birth: Date.parse(req.body.birth),
        id: Number(req.body.id)
    }

    data.teachers[index] = teacher

    fs.writeFile("data.json", JSON.stringify(data, null, 2), function(err) {
        if(err) return res.send("Write file error!")
    })

    return res.redirect(`/teachers/${ id }`)
}

exports.delete = (req, res) => {
    const { id } = req.body

    const filteredTeachers = data.teachers.filter(function(teacher) {
        return teacher.id != id
    })

    data.teachers = filteredTeachers

    fs.writeFile("data.json", JSON.stringify(data, null, 2), function(err) {
        if(err) res.send("Write file error!")
    })

    return res.redirect("/teachers")
}