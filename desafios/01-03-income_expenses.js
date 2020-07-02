// Crie um programa que calcula a soma de receitas e despesas de usuários e no fim retorna o saldo (receitas - despesas).

const users =[
    {
        name: 'Salvio',
        income: [115.3, 48.7, 98.3, 14.5],
        expenses: [85.3, 13.5, 19.9]
    },
    {
        name: 'Marcio',
        income: [24.6, 214.3, 45.3],
        expenses: [185.3, 12.1, 120.0]
    },
    {
        name: 'Lucia',
        income: [9.8, 120.3, 340.2, 45.3],
        expenses: [450.2, 29.9]
    }
]

// Percorra o array de usuários e para cada usuário chame uma função chamada calculaSaldo que recebe como parâmetro as receitas e despesas do usuário:

// A função calculaSaldo deve utilizar a função somaNumeros para calcular a soma de receitas e despesas e no fim retornar o saldo do usuário, ou seja receitas - despesas.

//No fim exiba todos usuários em telas, seu respectivo saldo e SE o saldo é POSITIVO ou NEGATIVO:

//função que vai ser chamada para calcular o saldo de cada usuário
function calcBalance(income, expenses) {
    const sumIncome = sumNumbers(income)
    const sumExpenses = sumNumbers(expenses)

    return sumIncome - sumExpenses
}

//função que recebe como parâmetro um array de números
//e retorna a soma desses números
function sumNumbers(numbers) {
    let sum = 0

    for (let number of numbers) {
        sum = sum + number
    }
    return sum
    
}

//percorrer o array de usuários
for (let user of users) {
    const balance = calcBalance(user.income, user.expenses)

   const positiveBalance = balance >= 0

   let positiveOrNegative

   if (positiveBalance) {
       positiveOrNegative = 'POSITIVE'
   } else {
       positiveOrNegative = 'NEGATIVE'
   }

   console.log(`${user.name} has ${positiveOrNegative} balance of: ${balance.toFixed(2)} `)
    
}


