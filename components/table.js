function addLine(bulls, cows){
    return `  <div class="table-row">
    <div class="table-cell">` +
   appState.guessCount +
   `</div>
    <div class="table-cell">` +
   appState.userGuess +
   `</div>
    <div class="table-cell">` +
   bulls +
   `</div>
    <div class="table-cell">` +
   cows +
   `</div>
  </div>`
}