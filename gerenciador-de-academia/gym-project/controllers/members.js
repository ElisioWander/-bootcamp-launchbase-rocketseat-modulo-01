const fs = require('fs')
const data = require('../data.json')
const { age, date } = require('../utils')
const Intl = require('intl')

exports.index = function (req, res) {
    return res.render("members/index.html", { members: data.members })
}
exports.create = function (req, res) {
    return res.render("members/create.html")
}
exports.show = function(req, res) {
    const { id } = req.params

    const foundMember = data.members.find(function(member) {
        return member.id == id
    })

    if (!foundMember) return res.send("Member not found!")

    const member = {
        //espalhar os elementos que já estão dentro do foundMember que não serão alterados
        ...foundMember,
        age: age(foundMember.birth),
        services: foundMember.services.split(","), //split vai colocar cada elemento dentro de uma posição, mesmo que esses elementos não estejam dentro de um array.
        created_at: new Intl.DateTimeFormat('pt-BR').format(foundMember.created_at),
    }

    return res.render('members/show', { member })
}
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
    const id = Number(data.members.length +1)

    //enviar os dados do body para dentro do array no data.json
    data.members.push({ 
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

        return res.redirect("/members")
    })

    
}
exports.edit = function(req, res) {
    const { id } = req.params

    const foundMember = data.members.find(function(member) {
        return member.id == id
    })

    if(!foundMember) return res.send("Member not found!")

    const member = {
        ...foundMember,
        birth: date(foundMember.birth)
    }

    return res.render("members/edit", { member })
}
exports.put = function(req, res) {
    const { id } = req.body

    let index = 0

    const foundMember = data.members.find(function(member, foundIndex) {
        if(id == member.id) {
            index = foundIndex
            return true
        }
    })

    if(!foundMember) return res.send("member not found!")

    const member = {
        ...foundMember,
        ...req.body,
        birth: Date.parse(req.body.birth),
        id: Number(req.body.id)
    }

    data.members[index] = member

    fs.writeFileSync("data.json", JSON.stringify(data, null, 2), function(err) {
        if(err) return res.send("write error!")
    })

    return res.redirect(`/members/${id}`)
}
exports.delete = function(req, res) {
    const { id } = req.body

    const filteredMembers = data.members.filter(function(member) {
        return member.id != id
    })

    data.members = filteredMembers

    fs.writeFile("data.json", JSON.stringify(data, null, 2), function(err) {
        if(err) return res.send("Writefile error!")

        return res.redirect("/members")
    })
}
