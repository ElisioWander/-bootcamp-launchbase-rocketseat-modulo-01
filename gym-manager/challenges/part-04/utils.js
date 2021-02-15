module.exports = {
    age: function(timestamp) {
        const today = new Date
        const birthDate = new Date(timestamp)

        let age = today.getFullYear() - birthDate.getFullYear()

        const month = today.getMonth() - birthDate.getMonth()

        if (month < 0 || month == 0 && today.getDate() - birthDate.getDate()) {
            age = age -1
        }

        return age
    },
    date: function(timestamp) {
        const date = new Date(timestamp)

        const year = date.getUTCFullYear()
        const month = `0${date.getUTCMonth() + 1}`.slice(-2)
        const day = `0${date.getUTCDate()}`.slice(-2)

        return {
            day,
            month,
            year,
            iso:`${year}-${month}-${day}`
        }
    },
    graduation: function(school) {
        console.log(school)

        let graduation

        switch (school) {
            case 'highschool':
                graduation = "Ensino Médio Completo"

                return graduation
                break
            case 'higher':
                graduation = "Ensino Superior Completo"

                return graduation
                break
            case 'master':
                graduation = "Mestrado"
                
                return graduation
                break
            case 'doctorate':
                graduation = 'Doutorado'

                return graduation
                break
            default:
                console.log('No option selected!')
                break
        }

        console.log(graduation)
    }
}