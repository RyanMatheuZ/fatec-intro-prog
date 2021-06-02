const numbers = []

const number = document.getElementById('field')
const result = document.getElementById('result')

const form = document.getElementById('form')
form.addEventListener('submit', event => {
    event.preventDefault()

    number.className = ''
    result.innerHTML = ''

    if (!number.value) {
        number.className = 'negative'
        result.innerHTML = '<p class="negative">Informe um número!</p>'
        number.focus()
        return
    }

    numbers.push(number.value)
    result.innerHTML = '<p>Número adicionado!</p>'

    number.value = ''
})

const check = document.getElementById('check')
check.addEventListener('click', () => {
    number.value = ''
    number.className = ''
    result.innerHTML = ''

    if (numbers.length === 0) {
        number.className = 'negative'
        result.innerHTML = '<p class="negative">Insira algum número, antes de conferir!</p>'
        number.focus()
        return
    } 

    numbers.forEach(number => {
        result.innerHTML += `<p class="box-result">
            Número: ${number} <br>
            Quadrado: ${Math.pow(number, 2).toFixed(2)} <br>
            Raiz: ${Math.sqrt(number).toFixed(2)} <br>
        </p>`
    })
})