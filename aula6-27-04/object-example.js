// Objeto literal
let person = {
    name: 'Ryan',
    gender: 'm',
    student: true,
    age: 17,
    greet() {
        return `Olá, eu sou o ${this.name}!`
    }
}

console.log(person.greet())