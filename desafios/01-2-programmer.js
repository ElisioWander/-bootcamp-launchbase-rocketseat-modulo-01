// create a program that stores a programmer's data such as name, age and technology that he works.
// a programmer can works with several technologies so store this technologies in an array
// the technologies must also be objects containing name and specialty

const programmer = {
    name: "John",
    age: 23,
    technology: [
        {
            name: "C++",
            specialty:"Desktop"
        },
        {
            name: 'Python',
            specialty: 'Data Science'
        },
        {
            name: 'JavaScript',
            specialty: 'Web/Mobile'
        }
    ]
}

console.log(`User ${programmer.name} is ${programmer.age} years old and use ${programmer.technology[0].name} technology with expertise in ${programmer.technology[0].specialty} `)