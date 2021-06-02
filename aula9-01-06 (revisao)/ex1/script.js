const numbers = []

const form = document.getElementById('form')
form.addEventListener('submit', event => {
    event.preventDefault()

    const number1 = document.getElementById('field1')
    const number2 = document.getElementById('field2')
    const number3 = document.getElementById('field3')
    const number4 = document.getElementById('field4')
    const number5 = document.getElementById('field5')

    const result = document.getElementById('result')

    number1.className = ''
    number2.className = ''
    number3.className = ''
    number4.className = ''
    number5.className = ''
    result.innerHTML = ''

    if (!number1.value) {
        number1.className = 'negative'
        result.innerHTML = '<p class="negative">Informe um valor no primeiro campo!</p>'
        number1.focus()
    } else if (!number2.value) {
        number2.className = 'negative'
        result.innerHTML = '<p class="negative">Informe um valor no segundo campo!</p>'
        number2.focus()
    } else if (!number3.value) {
        number3.className = 'negative'
        result.innerHTML = '<p class="negative">Informe um valor no terceiro campo!</p>'
        number3.focus()
    } else if (!number4.value) {
        number4.className = 'negative'
        result.innerHTML = '<p class="negative">Informe um valor no quarto campo!</p>'
        number4.focus()
    } else if (!number5.value) {
        number5.className = 'negative'
        result.innerHTML = '<p class="negative">Informe um valor no quinto campo!</p>'
        number5.focus()
    } else {
        numbers.push(number1.value)
        numbers.push(number2.value)
        numbers.push(number3.value)
        numbers.push(number4.value)
        numbers.push(number5.value)

        const bigger = Math.max(...numbers)
        const smaller = Math.min(...numbers)

        result.innerHTML = `<p>Maior: ${bigger} <br> Menor: ${smaller}</p>`
    }
})