const names = []

const name = document.getElementById('field')
const result = document.getElementById('result')

const form = document.getElementById('form')
form.addEventListener('submit', event => {
    event.preventDefault()

    name.className = ''
    result.innerHTML = ''

    if (!name.value) {
        name.className = 'negative'
        result.innerHTML = '<p class="negative">Informe um nome!</p>'
        name.focus()
        return
    }

    names.push((name.value).toUpperCase())
    name.value = ''
})

function checkArray(array) {
    name.className = ''
    result.innerHTML = ''

    if (array.length === 0) {
        name.className = 'negative'
        result.innerHTML = '<p class="negative">Insira um nome antes de ordená-lo!</p>'
        name.focus()
        return
    }
}

function printNames(array) {
    array.forEach(namesInOrder => result.innerHTML += `<p>${namesInOrder}</p>`)
}

const registrationOrder = document.getElementById('registration-order')
registrationOrder.addEventListener('click', () => {
    checkArray(names)

    printNames(names)
})

const reverseOrder = document.getElementById('reverse-order')
reverseOrder.addEventListener('click', () => {
    checkArray(names)

    names.reverse()
    printNames(names)
})

const alphabeticalOrder = document.getElementById('alphabetical-order')
alphabeticalOrder.addEventListener('click', () => {
    checkArray(names)

    names.sort()
    printNames(names)
})