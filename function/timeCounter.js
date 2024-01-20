let time = 180;
// Навешать getElementById
// const timeCounterID = document.getElementById ('idElemet');
let logTime = setInterval (updateTimeCounter, 1000);

function updateTimeCounter() {
    const minutes = Math.floor(time/60);
    let seconds = time % 60;
    seconds = seconds < 10 ? '0' + seconds: seconds;
    //Передать значение таймера
    // timeCounterID.innerHTML = `${minutes}:${seconds}`;
    time --
}

console.log (logTime)