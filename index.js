var startPlay = document.querySelector('.startPlay');
startPlay.addEventListener('click', startGame);

function startGame() {
    var token;
    fetch('https://ply-bulls-and-cows.herokuapp.com/game')
        .then(function (res) {
            return res.json()
                .then(function (res) {
                    token = res.token;
                })
        })
    document.querySelector('.body').innerHTML = "";
    document.querySelector('.body').innerHTML = buildGameScreen();

    var guessCounter = document.querySelector('.guessCounter');
    var guessesList = document.querySelector('.guessesList');
    var guessSubmit = document.querySelector('.guessSubmit');
    var guessField = document.querySelector('.guessField');
    guessField.focus();

    guessSubmit.addEventListener('click', checkCurrentGuess);

    function checkCurrentGuess() {
        if (checkCurrentInput(guessField)) {
            appState.userGuess = convertToValidNumber(guessField);
            sendGuess(token, guessCounter, guessesList);
        }
    }
}

