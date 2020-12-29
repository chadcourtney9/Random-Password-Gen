

const userSelect = {
    lowercase: getLowerCase,
    uppercase: getUpperCase,
    numbers: getNumericChar,
    symbols: getSpecialChar,
}

const userLength = document.getElementById
    ('charAmountNumber')
const userSlider = document.getElementById
    ('charAmountSlider')

userLength.addEventListener('input', syncCharacterAmount)
userSlider.addEventListener('input', syncCharacterAmount)

function syncCharacterAmount(e) {
    const value = e.target.value
    userLength.value = value
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


// if 
// call a string
// loop concat string