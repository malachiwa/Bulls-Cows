function endGameDisplay() {
    appState.guessCount++;
    document.querySelector('.body').innerHTML = `
    <div id="endGame"> 
        <h1>Congratulations!<br> You got it right!</h1>
        <div class="wrapper">
            <div class="wrapperLeft">
                <h3>The number was <p class="userRightGuess"></p></h3>
                <h3>You're done after <p class="sumOfGuess"></p> guesses</h3>
            </div>
            <div class="wrapperRight">
                <h3>Your record is <p class="record"></p> guesses</h3>
            </div>
        </div>
    </div>
    `
    var resetButton = document.createElement('button');
    resetButton.textContent = 'Start new game';
    document.getElementById("endGame").appendChild(resetButton);
    resetButton.addEventListener('click', startGame);
    resetButton.className = 'startPlay';
    var userRightGuess = document.querySelector('.userRightGuess');
    userRightGuess.textContent = appState.userGuess;
    var sumOfGuess = document.querySelector('.sumOfGuess');
    sumOfGuess.textContent = appState.guessCount;
    recordHandle();
    appState.guessCount = 0;
}