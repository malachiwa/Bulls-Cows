function sendGuess(token, guessCounter, guessesList) {
    var payload = {
        "guess": appState.userGuess
    };
    fetch('https://ply-bulls-and-cows.herokuapp.com/game/'+token,
        {
            method: "POST",
            headers: new Headers({
                'Content-Type': 'application/json'
            }),
            body: JSON.stringify(payload)
        })
        .then(function (res) { return res.json(); })
        .then(function (payload) {
            if (payload.bulls < 4) {
                appState.guessCount++;
                guessCounter.textContent = appState.guessCount;
                guessesList.innerHTML += addLine(payload.bulls, payload.cows);
                guessField.value = '';
                guessField.focus();
            }
            else {
                endGameDisplay();
            }
        });
}