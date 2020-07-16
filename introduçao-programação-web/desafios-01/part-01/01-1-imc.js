//Calcule the IMC and check if someone are overweight

const name = "Michael"
const weight = 80.5
const height = 1.70

const imc = weight / (height * height)

let message = ""

if (imc >= 30) {
    message = `${name}, your IMC is ${imc}. You are overweight! `
} else {
    message = `${name}, your IMC is ${imc}. Congratulations, you're not overweight! `
}

console.log(message)