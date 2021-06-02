// Utilizando Programação Funcional, como ordenar alfabeticamente os alunos pelo nome e depois mapear retornando apenas nome e curso?

const students = [
    {
        id: 123456,
        name: 'Fulano de Tal',
        gender: 'm',
        course: 'Sistemas para Internet'
    },

    {
        id: 654321,
        name: 'Ciclano da Silva',
        gender: 'm',
        course: 'Sistemas para Internet'
    },

    {
        id: 7995218,
        name: 'Ana Joana da Cunha Silva e Silva',
        gender: 'f',
        course: 'Análise e Desenvolvimento de Sistemas'
    },

    {
        id: 0321654,
        name: 'Beltrano dos Santos',
        gender: 'm',
        course: 'Análise e Desenvolvimento de Sistemas'
    },

    {
        id: 9754812,
        name: 'Maria Antonieta de Las Nieves',
        gender: 'f',
        course: 'Sistemas para Internet'
    },

    {
        id: 8574126,
        name: 'Asdrubal de Albuquerque',
        gender: 'm',
        course: 'Análise e Desenvolvimento de Sistemas'
    },

    {
        id: 5974125,
        name: 'Cidcléia Cavalcante Pinto',
        gender: 'f',
        course: 'Sistemas para Internet'
    }
]

const alphabeticalNameAndCourse = el => `Nome: ${el.name}. Curso: ${el.course}`

console.log(students
    .map(alphabeticalNameAndCourse)
    .sort()
)