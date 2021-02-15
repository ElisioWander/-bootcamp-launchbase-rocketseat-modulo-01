module.exports = {
    age(timestamp) {
        const today = new Date
        const birthDate = new Date(timestamp)

        let age = today.getFullYear() - birthDate.getFullYear()

        const month = today.getMonth() - birthDate.getMonth()

        if (month < 0 || month == 0 && today.getDate() - birthDate.getDate()) {
            age = age -1
        }

        return age
    },
    date(timestamp) {
        const date = new Date(timestamp)

        const year = date.getUTCFullYear()
        const month = `0${date.getUTCMonth() + 1}`.slice(-2)
        const day = `0${date.getUTCDate()}`.slice(-2)

        return {
            day,
            month,
            year,
            iso:`${year}-${month}-${day}`,
            birthDay: `${day}/${month}`
        }
    },
    graduation(education_level) {
        let graduation

        switch (education_level) {
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
    },
    grade(school) {
        let grade

        switch (school) {
            case '5EF':
                grade = '5º ano ensino fundamental'

                return grade
                break;
            case '6EF':
                grade = '6º ano ensino fundamental'

                return grade
                break
            case '7EF':
                grade = '7º ano ensino fundamental'

                return grade
                break
            case '8EF':
                grade = '8º ano ensino fundamental'

                return grade
                break
            case '9EF':
                grade = '9º ano ensino fundamental'

                return grade
                break
            case '1EM':
                grade = '1º ano ensino médio'

                return grade
                break
            case '2EM':
                grade = '2º ano ensino médio'

                return grade
                break
            case '3EM':
                grade = '3º ano ensino médio'

                return grade
                break
            default:
                break;
        }
    }
}