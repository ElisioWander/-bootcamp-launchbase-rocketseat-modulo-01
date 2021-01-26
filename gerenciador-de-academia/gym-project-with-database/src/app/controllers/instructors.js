const { age, date } = require('../../lib/utils')
const db = require('../../config/db')

module.exports = {
    index(req, res) {
        db.query(`SELECT * FROM instructors`, function(err, results) {
            if(err) res.send("Database error!")

            console.log(results.rows)

            return res.render("instructors/index.html", { instructors: results.rows })
        })

    },
    create(req, res) {
        return res.render("instructors/create.html")
    },
    post(req, res) {
        const keys = Object.keys(req.body)

        for (let key of keys) {
            if (req.body[key] == "") {
                return res.send("please, fill all fields")
            }
        }
        
        const query = `
            INSERT INTO instructors (
                name,
                avatar_url,
                gender,
                services,
                birth,
                created_at
            ) VALUES ($1, $2, $3, $4, $5, $6)
            RETURNING id
        `

        const { name, avatar_url, gender, services, birth } = req.body

        const values = [
            name,
            avatar_url,
            gender,
            services,
            date(birth).iso,
            date(Date.now()).iso
        ]

        db.query(query, values, function(err, results) {
            if(err) return res.send("Database error!")

            return res.redirect(`/instructors/${results.rows[0].id}`)
        })
        
    },
    show(req, res) {
        return
    },
    edit(req, res) {
        return
    },
    put(req, res) {
        const keys = Object.keys(req.body)

        for (let key of keys) {
            if (req.body[key] == "") {
                return res.send("please, fill all fields")
            }
        }
        
        return
    },
    delete(req, res) {
        return
    }
}

