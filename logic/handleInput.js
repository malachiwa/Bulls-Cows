function checkCurrentInput(guessField) {
    if (!guessField || !Number(guessField.value) || guessField.value.length < 4 || !areDigitsDifferent(guessField.value)) {
        addErrorMessage(guessField);
        return false;
    }
    return true;
}

function addErrorMessage(guessField){
    guessField.value = '';
    var error = document.createElement('div');
    error.className = "error"
    error.textContent = "The input must contain exactly four different digits!";
    document.querySelector(".errorMessage").appendChild(error);
    guessField.addEventListener('click', removeError);
}

function areDigitsDifferent(input) {
    var char1 = input.substring(0, 1);
    var char2 = input.substring(1, 2);
    var char3 = input.substring(2, 3);
    var char4 = input.substring(3, 4);
    if ( char1 ===char2 || char1 === char3 || char1 === char4 || char2 === char3 || char2 === char4 || char3 === char4) {
        return false;
    }
    return true;
}

function removeError() {
    var error = document.querySelector(".errorMessage");
    error.textContent = '';
}

function convertToValidNumber(input) {
    var validNumber = Number(input.value).toString();
    if (validNumber.length === 3) {
        validNumber = "0" + validNumber;
    }
    return validNumber;
}
