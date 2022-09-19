let firstNumber = ''
let operation = ''
let currentNumber = ''
let memorisedNumber = ''
let displayedString = ''
let display = document.getElementById('display')

function setInput(input){
    switch (input) {
        case '-':
        case '+':
        case '*':
        case '/':
            if (firstNumber === '') {
                firstNumber = currentNumber
                currentNumber = ''
                operation = input
            }
            break
        case '=':
            let result = calculate(firstNumber, currentNumber, operation)
            resetNumbers()
            currentNumber = result
            break
        case 'C':
            resetNumbers()
            break
        case 'M':
            if (memorisedNumber === ''){
                memorisedNumber = currentNumber
            }
            else currentNumber = memorisedNumber
            break
        default:
            currentNumber = String(currentNumber) + input
    }
    updateScreen(currentNumber || input)
}

function resetNumbers(){
    firstNumber = ''
    currentNumber = ''
    operation = ''
}

function updateScreen(output)
{
    display.innerHTML = output
}

function calculate(firstNumber, secondNumber, operation){
    firstNumber = Number(firstNumber)
    secondNumber = Number(secondNumber)
    switch (operation){
        case '-': return firstNumber - secondNumber
        case '+': return firstNumber + secondNumber
        case '*': return firstNumber * secondNumber
        case '/':
            if (isFinite(firstNumber / secondNumber)){
                return firstNumber / secondNumber
            }
            else {
                alert('На ноль делить нельзя!')
                resetNumbers()
                return ''
            }
    }
}

