//Programa para calcular a média de notas da turma

const studentsClassA = [
    {
        name: "John",
        grade: 3.2
    },
    {
        name: "Jessica",
        grade: 4.0
    },
    {
        name: "Maria",
        grade: 4.0
    },
    {
        name: "Matheus",
        grade: 3
    },
    {
        name: "Pedro",
        grade: 5
    }

]

const studentsClassB = [
    {
        name: "Erica",
        grade: 7.5
    },
    {
        name: "Tom",
        grade: 2
    },
    {
        name: "Bia",
        grade: 4.5
    },
    {
        name: "Jess",
        grade: 10
    }
]

//calcula a nota dos estudantes da classe e divide pela quantidade de estudantes para obter a média
function calcAverage(students) {
    let soma = 0

    for (i = 0; i < students.length; i++) {
        soma = soma + students[i].grade
    }
    let average = soma / students.length
    return average
}

//envia uma mensagem para informar a média da classe
function sendMessage(average, classAB) {
    if (average < 5) {
        console.log(`The ${classAB} average is ${average}. They need to study more! `)
    } else {
        console.log(`Congratulations, the ${classAB} average is ${average} `)
    }
}


//está função deve marcar o aluno como reprovado
function markAsDisapproved(student) {
    student.reproved = false

    const studentDisapproved = student.grade < 5

    if (studentDisapproved) {
        student.reproved = true
    }


}

//Esta função deve enviar uma mensagem que o aluno "tal" foi reprovado
function sendDisapprovedMessage(student) {
    if (student.reproved) {
        console.log(`${student.name} was reproved `)
    }
}

//Esta função deve mostrar os alunos reprovados
function studentReproved(students) {
    for (let student of students) {
        markAsDisapproved(student)
        sendDisapprovedMessage(student)
    }
}

//chamadas
const averageClassA = calcAverage(studentsClassA)
const averageClassB = calcAverage(studentsClassB)

sendMessage(averageClassA, "classA")
sendMessage(averageClassB, "classB")

studentReproved(studentsClassA)
studentReproved(studentsClassB)


