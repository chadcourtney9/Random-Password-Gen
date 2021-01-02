
const LowerCaseBoxEl = document.getElementById('LowerCaseBox')
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

form.addEventListener('submit', e => {
    e.preventDefault()
    const characterAmount = userLength.value
    const UpperCaseBox = UpperCaseBoxEl.checked
    const NumericBox = NumericBoxEl.checked
    const SCBox = SCBoxEl.checked
    const password = generatePassword(SCBox, NumericBox, UpperCaseBox, characterAmount)
    passDisplay.innerText = password
})
//ascii ranges min to max
const UPPERCASE_CHAR_CODES = arraymintomax(65, 90)
const LOWERCASE_CHAR_CODES = arraymintomax(97, 122)
const NUMBER_CHAR_CODES = arraymintomax(48, 57)
const SYMBOL_CHAR_CODES = arraymintomax(33, 47).concat(
    arraymintomax(58, 64)
).concat(
    arraymintomax(91, 96)
).concat(
    arraymintomax(123, 126)
)

// generating password, if boxes checked include those
function generatePassword(characterAmount, includeUppercase, includeNumbers, includeSymbols) {
    let charCodes = LOWERCASE_CHAR_CODES
    if (includeUppercase) charCodes = charCodes.concat(UPPERCASE_CHAR_CODES)
    if (includeSymbols) charCodes = charCodes.concat(SYMBOL_CHAR_CODES)
    if (includeNumbers) charCodes = charCodes.concat(NUMBER_CHAR_CODES)
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
