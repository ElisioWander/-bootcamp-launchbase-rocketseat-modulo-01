//Crie um programa que armazena um array de usuários "objetos", cada usuário tem um nome e suas tecnologias (novo array), por exemplo:

//Percorra a lista de usuários com uma estrutura de repetição imprimindo em tela as informações dos usuários:

//Carlos trabalha com HTML, CSS
//Jarmine trabalha com JavaScript, CSS
//Tuane trabalha com HTML, Node.js

const users = [
    {
        name: 'Carlos',
        technology: ['HTML', 'CSS']
    },
    {
        name: 'Jarmine',
        technology: ['JavaScript', 'CSS']
    },
    {
        name: 'Tuane',
        technology: ['HTML', 'Node.js']
    }
    
]

// for (let user = 0; user < users.length; user++) {

//     let technology = ""
//     for (let tech = 0; tech < users[user].technology.length; tech++) {
//         if (tech == 0) {
//             technology = users[user].technology[tech]
//         } else {
//             technology = technology + ", " + users[user].technology[tech]
//         }
//     }

//     console.log(`${users[user].name} works with ${technology} `)
// }

//BETTER WAY
for (let user of users) {
    console.log(`${user.name} works with ${user.technology.join(", ")} `)
}


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// Baseado no desafio anterior, utilize a mesma lista de usuários construída.

// Crie uma função que recebe os dados de um objeto de usuário e retorna SE o usuário trabalha com CSS ou não. Essa função deve retornar um boolean true/false.

// Por exemplo:

// function checaSeUsuarioUsaCSS(usuario) {
//   // Percorra o array de tecnologias do usuário até encontrar se ele trabalha com CSS
//   // SE encontrar, retorne true da função, caso contrário retorne false
// }

const users = [
    {
        name: 'Carlos',
        technology: ['HTML', 'CSS']
    },
    {
        name: 'Jarmine',
        technology: ['JavaScript', 'CSS']
    },
    {
        name: 'Tuane',
        technology: ['HTML', 'Node.js']
    }
    
]

function checkUseCSS(user) {
    for (technology of user.technology) {
        const foundTechnologyCSS = technology == 'CSS'
        
        if (foundTechnologyCSS) return 'trabalha com CSS'
    }
    return false
}

for (user of users) {
    const useTechnologyCSS = checkUseCSS(user)

    if (useTechnologyCSS) {
        console.log(`The user ${user.name} ${useTechnologyCSS} `)
    }
}

