function recordHandle() {
    if (!localStorage.getItem('record')) {
        updadeRecord();
    }
    if (Number(localStorage.getItem('record') > appState.guessCount)) {
        updadeRecord();
    }
    var record = document.querySelector('.record');
    record.textContent = localStorage.getItem('record');
}
function updadeRecord() {
    localStorage.setItem('record', appState.guessCount.toString());
}