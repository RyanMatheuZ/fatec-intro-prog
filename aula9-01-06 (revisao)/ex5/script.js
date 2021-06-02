const form = document.getElementById('form')
form.addEventListener('submit', event => {
    event.preventDefault()

    const date = document.getElementById('datepicker')
    const result = document.getElementById('result')

    date.className = ''
    result.innerHTML = ''

    if (!date.value) {
        date.className = 'negative'
        result.innerHTML = '<p class="negative">Escolha uma data antes de prosseguir!</p>'
        return
    }

    const separateDates = date.value.split(' ')

    let dayOfTheWeek
    let month
    let dayByNumber = separateDates[2]
    let year = separateDates[3]
    
    if (separateDates[0] === 'Sun') {
        dayOfTheWeek = 'Domingo'
    } else if (separateDates[0] === 'Mon') {
        dayOfTheWeek = 'Segunda-Feira'
    } else if (separateDates[0] === 'Tue') {
        dayOfTheWeek = 'Terça-Feira'
    } else if (separateDates[0] === 'Wed') {
        dayOfTheWeek = 'Quarta-Feira'
    } else if (separateDates[0] === 'Thu') {
        dayOfTheWeek = 'Quinta-Feira'
    } else if (separateDates[0] === 'Fri') {
        dayOfTheWeek = 'Sexta-Feira'
    } else if (separateDates[0] === 'Sat') {
        dayOfTheWeek = 'Sábado'
    }

    if (separateDates[1] === 'Jan') {
        month = 'Janeiro'
    } else if (separateDates[1] === 'Feb') {
        month = 'Fevereiro'
    } else if (separateDates[1] === 'Mar') {
        month = 'Março'
    } else if (separateDates[1] === 'Apr') {
        month = 'Abril'
    } else if (separateDates[1] === 'Mai') {
        month = 'Maio'
    } else if (separateDates[1] === 'Jun') {
        month = 'Junho'
    } else if (separateDates[1] === 'Jul') {
        month = 'Julho'
    } else if (separateDates[1] === 'Aug') {
        month = 'Agosto'
    } else if (separateDates[1] === 'Sep') {
        month = 'Setembro'
    } else if (separateDates[1] === 'Oct') {
        month = 'Outubro'
    } else if (separateDates[1] === 'Nov') {
        month = 'Novembro'
    } else if (separateDates[1] === 'Dec') {
        month = 'Dezembro'
    }

    result.innerHTML = `<p>${dayOfTheWeek} <br> ${dayByNumber} / ${month} / ${year}</p>`
})