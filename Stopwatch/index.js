const display = document.getElementById("display")
let timer = null;
let startTimes = 0;
let elapseTime = 0;
let isRunning = false;

function start(){
    if(!isRunning){
        startTimes = Date.now()-elapseTime;
        timer = setInterval(update, 10);
        isRunning = true;
    }
}

function stop(){
    if(isRunning){
        clearInterval(timer);
        elapseTime = Date.now()- startTimes;
        isRunning = false;
    }
}


function reset(){
    clearInterval(timer);
    startTimes = 0
    elapseTime = 0;
    isRunning = false;
    display.textContent = "00:00:00"
}

function update(){
    const currentTime = Date.now();
    elapseTime = currentTime - startTimes;

    let hours = Math.floor(elapseTime / (1000 * 60 * 60));
    let minute = Math.floor(elapseTime / (1000 * 60)%60)
    let seconds = Math.floor(elapseTime/ 1000 % 60);
    let milliseconds = Math.floor(elapseTime % 1000 / 10);

    hours = hours.toString().padStart(2, "0")
    minute = minute.toString().padStart(2, "0")
    seconds = seconds.toString().padStart(2, "0")
    milliseconds = milliseconds.toString().padStart(2, "0");

    display.textContent = `${hours}:${minute}:${seconds}:${milliseconds}`
}