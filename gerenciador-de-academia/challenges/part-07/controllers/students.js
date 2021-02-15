const data = require('../data.json')
const fs = require('fs')
const { grade, date } = require('../utils')

exports.index = (req, res) => {
    const students = data.students.map((student) => {
        const newStudent = {
            ...student,
            school: grade(student.school)
        }

        return newStudent
    })

    return res.render("students/index.html", { students })
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
    const { id } = req.params

    const foundStudent = data.students.find((student) => {
        return student.id == id
    })

    if(!foundStudent) return res.send("Student not found!")

    const student = {
        ...foundStudent,
        birth: date(foundStudent.birth).birthDay,
        school: grade(foundStudent.school)
    }

    return res.render("students/show", { student })
}

exports.edit = (req, res) => {
    const { id } = req.params

    const foundStudent = data.students.find((student) => {
        return student.id == id
    })

    if(!foundStudent) return res.send("student not found!")

    const student = {
        ...foundStudent,
        birth: date(foundStudent.birth).iso
    }

    return res.render("students/edit", { student })
}

exports.update = (req, res) => {
    const { id } = req.body

    let index = 0

    const foundStudent = data.students.find((student, foundIndex) => {
        if(student.id == id) {
            index = foundIndex
            return true
        }
    })

    if(!foundStudent) return res.send("student not found!")

    const student = {
        ...foundStudent,
        ...req.body
    }

    data.students[index] = student

    fs.writeFile("data.json", JSON.stringify(data, null, 2), function(err) {
        if(err) return res.send("Write file error!")
    })


    return res.redirect(`/students/${ id }`)
}

exports.delete = (req, res) => {
    const { id } = req.body

    const filteredStudents = data.students.filter((student) => {
        return student.id != id
    })

    data.students = filteredStudents

    fs.writeFile("data.json", JSON.stringify(data, null, 2), (err) => {
        if(err) return res.send("Write file error!")
    })

    return res.redirect("/students")
}