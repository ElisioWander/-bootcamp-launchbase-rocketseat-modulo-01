//Program to check retirement age at which one (men or women) can retire.
//It is a fictional program

const name = "John"
const age = 60
const sex = 'M'
const contribution = 35

//REQUIREMENTS
//men time contribution 35 years
//women time contribution 30 years
//contribution + age = 95 to men and 85 to women

const retirement = age + contribution
console.log(`Your contribution time plus age is: ${retirement} `)

//conditions
const menRetirement = sex == 'M' && contribution >= 35 && retirement >= 95
const womenRetirement = sex == 'F' && contribution >= 30 && retirement >= 85

//response
if (menRetirement || womenRetirement) {
    console.log(`${name}, you can retire! `)
} else {
    console.log(`${name}, you can't retire! `)
}

