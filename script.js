
//selectors
const charRange = document.getElementById("charRange");
const charRangeNumber = document.getElementById("charRangeNumber");
const includeNumbersElem = document.getElementById("includeNumbers");
const includeUpperCaseElem = document.getElementById("includeUpperCase");
const includeSymbolsElem = document.getElementById("includeSymbols");
const displayPassword = document.getElementById("pass");


// Character Arrays for Password Gen
const upperCaseArray = genArray(65,90);
const lowerCaseArray = genArray(97,122);
const numberArray = genArray(48,57);
const symbolArray = genArray(33,47).concat(genArray(58,64)).concat(genArray(91,96)).concat(genArray(123,126));

//connect range to number
charRange.addEventListener("input",syncChar);
charRangeNumber.addEventListener("input", syncChar);

function syncChar(event){
    const val = event.target.value;
    charRangeNumber.value = val;
    charRange.value = val;
}

const form = document.getElementById("genForm");

form.addEventListener("submit",(event)=>{
    event.preventDefault();

    const charCount = charRangeNumber.value;
    const includeNumbers = includeNumbersElem.checked;
    const includeSymbols = includeSymbolsElem.checked;
    const includeUpperCase = includeUpperCaseElem.checked;
    const password = generate(charCount,includeNumbers,includeSymbols,includeUpperCase);
    displayPassword.innerHTML = password;

})

function generate(charCount,includeNumbers,includeSymbols,includeUpperCase){
    let charCodes = lowerCaseArray;

    if(includeNumbers)
    {
       charCodes = charCodes.concat(numberArray);
    }
    if(includeSymbols){
       charCodes = charCodes.concat(symbolArray);
    }
    if(includeUpperCase){
       charCodes = charCodes.concat(upperCaseArray);
    }

    const passwordCharacters = [];

    for(let i = 0 ; i <charCount; i++){
        const characterCode = charCodes[Math.floor(Math.random()*charCodes.length)];
        passwordCharacters.push(String.fromCharCode(characterCode));
    }

    return passwordCharacters.join('');
}

function genArray(low,high){

    let array = [];
    for(let i = low; i <= high; i++){
        array.push(i);
    }

    return array;
}