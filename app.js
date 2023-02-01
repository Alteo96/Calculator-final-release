const buttons = document.querySelectorAll('button')
const display = document.querySelector('.display')

let calculation = []

function calculate (buttons) {
    const value = buttons.textContent
    console.log(calculation.length)
    
    if (value === 'Clear') {
        calculation = [0]
    }
    if (calculation.length >= 12) {
        return
    }
    if (value == '=') {
        calculation = [eval(calculation.join(''))]

    } else if (value !== 'Clear') {
        if (calculation.length === 1 && calculation[0] === 0) {
            calculation = []
        }
        calculation.push(value)
    }
    display.textContent = calculation.join('')
}

buttons.forEach(buttons => {
    buttons.addEventListener('click', () => calculate(buttons))
})





















// const button = document.querySelectorAll('button')
// const display = document.querySelector('.display')


// function show (button) {
//     const value = button.textContent
//     display.textContent = value
// }

// button.forEach(button => {
//     button.addEventListener('click', () => show(button))
// })





