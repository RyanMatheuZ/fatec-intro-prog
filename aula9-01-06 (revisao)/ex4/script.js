import AllStudents from './Student.js'
import Person from './Person.js'

const allStudents = new AllStudents()

const result = document.getElementById('result')
const name = document.getElementById('field1')
const grade = document.getElementById('field2')

const form = document.getElementById('form')
form.addEventListener('submit', event => {
    event.preventDefault()

    name.className = ''
    grade.className = ''
    result.innerHTML = ''

    if (!name.value) {
        name.className = 'negative'
        result.innerHTML = '<p class="negative">Informe um nome!'
        name.focus()
    } else if (!grade.value) {
        grade.className = 'negative'
        result.innerHTML = '<p class="negative">Informe uma nota!'
        grade.focus()
    } else if (grade.value < 0 || grade.value > 10) {
        grade.className = 'negative'
        result.innerHTML = '<p class="negative">Somente notas de 0 até 10 são válidas!'
        grade.focus()
    } else {
        allStudents.students.push(new Person(name.value, parseInt(grade.value)))
        console.log(allStudents.students)

        name.value = ''
        grade.value = ''
    }
})

const highestGradeButton = document.getElementById('highest-grade-button')
highestGradeButton.addEventListener('click', () => {
    const allGrades = []

    for (let item of allStudents.students) {
        allGrades.push(item.grade)
    }

    if (allGrades.length === 0) {
        name.className = 'negative'
        grade.className = 'negative'
        result.innerHTML = '<p class="negative">Insira alunos, antes de conferir!</p>'
        grade.focus()
        return
    }

    const highestGrade = Math.max(...allGrades)
    result.innerHTML = `<p>A maior nota é ${highestGrade}</p>`
})

const lowestGradeButton = document.getElementById('lowest-grade-button')
lowestGradeButton.addEventListener('click', () => {
    const allGrades = []

    for (let item of allStudents.students) {
        allGrades.push(item.grade)
    }

    if (allGrades.length === 0) {
        name.className = 'negative'
        grade.className = 'negative'
        result.innerHTML = '<p class="negative">Insira alunos, antes de conferir!</p>'
        grade.focus()
        return
    }

    const lowestGrade = Math.min(...allGrades)
    result.innerHTML = `<p>A menor nota é ${lowestGrade}</p>`
})

const averageButton = document.getElementById('average-button')
averageButton.addEventListener('click', () => {
    const allGrades = []

    for (let item of allStudents.students) {
        allGrades.push(item.grade)
    }

    let gradesSum = 0
    for (let i = 0; i < allGrades.length; i++) {
        gradesSum += allGrades[i]
    }

    if (allGrades.length === 0) {
        name.className = 'negative'
        grade.className = 'negative'
        result.innerHTML = '<p class="negative">Insira alunos, antes de conferir!</p>'
        grade.focus()
        return
    }

    const average = gradesSum / allGrades.length
    result.innerHTML = `<p>A média de notas da turma é ${average}</p>`
})