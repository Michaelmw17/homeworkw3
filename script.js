const characterAmountRange = document.getElementById
('characterAmountRange')
const characterAmountNumber = document.getElementById
('characterAmountNumber')
const includeUppercaseElement = document.getElementById ('includeUppercase')
const includeNumbersElement = document.getElementById ('includeNumbers')
const includeSymbolsElement = document.getElementById ('includeSymbols')

const form = document.getElementById('passwordGeneratorForm') 

const UPPERCASE_CHAR_CODE = arrayFormLowToHigh (65, 90)
const LOWERCASE_CHAR_CODE = arrayFormLowToHigh (97, 122)
const NUMBER_CHAR_CODE = arrayFormLowToHigh (48, 57)
const SYMBOL_CHAR_CODE = arrayFormLowToHigh (33, 47).concat(
    arrayFormLowToHigh(58, 64)
).concat(
    arrayFormLowToHigh(91, 96)
).concat(
    arrayFormLowToHigh(123, 126)
)

characterAmountNumber.addEventListener('input', syncCharacterAmount)
characterAmountRange.addEventListener('input', syncCharacterAmount)

form.addEventListener('submit', e => {
    e.preventDefault()
    const characterAmount = characterAmountNumber.value
    const includeUppercase = includeUppercaseElement.checked
    const includeNumbers = includeNumbersElement.checked
    const includeSymbols = includeSymbolsElement.checked
    const password = generatePassword(characterAmount, includeUppercase, includeNumbers, includeSymbols)
})

function generatePassword(characterAmount, includeUppercase, includeNumbers, includeSymbols) {
    console.log(LOWERCASE_CHAR_CODE)

}

function arrayFormLowToHigh(low,high) {
    const array = []
    for (let i = low; i <= high; i++){
        array.push(i)
    }
    return array

}

function syncCharacterAmount(e) {
    const value = e.target.value
    characterAmountNumber.value = value
    characterAmountRange.value = value
}

