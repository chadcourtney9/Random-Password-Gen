const LowerCaseBoxEl = document.getElementById('LowerCaseBox')
const UpperCaseBoxEl = document.getElementById('UpperCaseBox')
const NumericBoxEl = document.getElementById('NumericBox')
const SCBoxEl = document.getElementById('SCBox')

const userSelect = {
    lowercase: getLowerCase,
    uppercase: getUpperCase,
    numbers: getNumericChar,
    symbols: getSpecialChar,
}
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
    const UpperCaseBox = LowerCaseBoxEl.checked
    const NumericBox = NumericBoxEl.checked
    const SCBox = SCBoxEl.checked
    const password = generatePassword(character)
})

function syncCharacterAmount(e) {
    const value = e.target.value
    userLength.value = value
    userSlider.value = value
}

function generatePassword(UpperCaseBox, NumericBox, SCBox) {
    let charCodes = getLowerCase
    if (SCBox) charCodes = charCodes.concat(getSpecialChar)
    if (UpperCaseBox) charCodes = charCodes.concat(getUpperCase)
    if (NumericBox) charCodes = charCodes.concat(getNumericChar)

    const passwordChars = []
    for (let = 0; i < userLength; i++) {
        const character = charCodes[Math.floor(Math.random() * charCodes.length)]
        passwordChars.push(String.fromCharCode(charCodes))
    }
    return passwordChars.join('')
}

//97-122 ascii
var getLowerCase = function () {
    return getCharFromRange(122, 97)
}

//65-90 ascii
var getUpperCase = function () {
    return getCharFromRange(90, 65)
}
//48-57 ascii
var getNumericChar = function () {
    return getCharFromRange(57, 48)
}
//all the ascii ranges for special characters
var specialCharRanges = [{
    max: 47,
    min: 33
}, {
    max: 64,
    min: 58
}, {
    max: 96,
    min: 91
}, {
    max: 126,
    min: 123
}
]
// function to pull random characters within those ranges
function getSpecialChar() {
    var x = Math.floor(Math.random() * specialCharRanges.length)
    return getCharFromRange(specialCharRanges[x].max, specialCharRanges[x].min)
}

function getCharFromRange(max, min) {
    return String.fromCharCode(Math.floor(Math.random() * (max - min + 1) + min))
}

console.log(
    getSpecialChar()
)
