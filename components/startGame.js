function buildGameScreen(){
    return `
    <div> 
        <h1>Enter a four digit number:</h1>

        <div class="form">` + 
            `<input type='text' id='guessField' maxlength="4" class='guessField'>
            <br><input type='submit' value='Submit guess' class='guessSubmit startPlay'>
            <div class="errorMessage"></div>
        </div>

        <div class="wrapper">
            <div class="guessUntilNow"><p>guess until now:</p><p class="guessCounter"></p></div>

            <div class="guessesList">
                <div class="table-row">
                    <div class="table-cell"></div>
                    <div class="table-cell">Your guess</div>
                    <div class="table-cell">Bulls</div>
                    <div class="table-cell">Cows</div>
                </div>
            </div>
        </div>
    `
}