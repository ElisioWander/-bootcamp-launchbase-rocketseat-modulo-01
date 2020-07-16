// create a program that stores Rocketseat company data within a object called "company"


const company = {
    name: "Rocketseat",
    color: "purple",
    focus: "Programming",
    address: {
        street: "Rua Guilherme Gembala",
        number: 260
    }
}

console.log(`The company ${company.name} are located in ${company.address.street}, ${company.address.number} `)