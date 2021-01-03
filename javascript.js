
const UpperCaseBoxEl = document.getElementById('UpperCaseBox')
const NumericBoxEl = document.getElementById('NumericBox')
const SCBoxEl = document.getElementById('SCBox')
const form = document.getElementById('PasswordGenForm')
const passDisplay = document.getElementById('passwordDisplay')

//giving constants to slider and number
const userLength = document.getElementById
    ('charAmountNumber')
const userSlider = document.getElementById
    ('charAmountSlider')

//linking slider and number range
userLength.addEventListener('input', syncCharacterAmount)
userSlider.addEventListener('input', syncCharacterAmount)

//ascii ranges min to max
const upperCharCodes = arraymintomax(65, 90)
const lowerCharCodes = arraymintomax(97, 122)
const numericCharCodes = arraymintomax(48, 57)
const symbolCharCodes = arraymintomax(33, 47).concat(
    arraymintomax(58, 64)
).concat(
    arraymintomax(91, 96)
).concat(
    arraymintomax(123, 126)
)

form.addEventListener('submit', e => {
    e.preventDefault()
    const characterAmount = userLength.value
    const upperCaseBox = UpperCaseBoxEl.checked
    const NumericBox = NumericBoxEl.checked
    const SCBox = SCBoxEl.checked
    const password = generatePassword(characterAmount, SCBox, NumericBox, upperCaseBox)
    passDisplay.innerText = password
})

// generating password, if boxes checked include those
function generatePassword(characterAmount, upperCaseBox, NumericBox, SCBox) {
    let charCodes = lowerCharCodes
    if (upperCaseBox) charCodes = charCodes.concat(upperCharCodes)
    if (SCBox) charCodes = charCodes.concat(symbolCharCodes)
    if (NumericBox) charCodes = charCodes.concat(numericCharCodes)

    const passChars = []
    for (let i = 0; i < characterAmount; i++) {
        const characterCode = charCodes[Math.floor(Math.random() * charCodes.length)]
        passChars.push(String.fromCharCode(characterCode))
    }
    return passChars.join('')
}

function arraymintomax(low, high) {
    const array = []
    for (let i = low; i <= high; i++) {
        array.push(i)
    }
    return array
}
//to sync slider and number amount 
function syncCharacterAmount(e) {
    const value = e.target.value
    userLength.value = value
    userSlider.value = value
}
