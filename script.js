let timer;
let isRunning = false;
let lapCounter = 1;

function startPause() {
    if (isRunning) {
        clearInterval(timer);
        document.getElementById("startPause").innerText = "Resume";
    } else {
        timer = setInterval(updateDisplay, 1000);
        document.getElementById("startPause").innerText = "Pause";
    }
    isRunning = !isRunning;
}

function reset() {
    clearInterval(timer);
    document.getElementById("display").innerText = "00:00:00";
    document.getElementById("startPause").innerText = "Start";
    document.getElementById("lapTimes").innerHTML = "";
    isRunning = false;
    lapCounter = 1;
}

function lap() {
    const lapTime = document.getElementById("display").innerText;
    const lapItem = document.createElement("div");
    lapItem.innerText = `Lap ${lapCounter}: ${lapTime}`;
    document.getElementById("lapTimes").appendChild(lapItem);
    lapCounter++;
}

function updateDisplay() {
    const display = document.getElementById("display");
    const time = display.innerText;
    const timeArray = time.split(":");
    let hours = parseInt(timeArray[0]);
    let minutes = parseInt(timeArray[1]);
    let seconds = parseInt(timeArray[2]);

    seconds++;

    if (seconds === 60) {
        seconds = 0;
        minutes++;
        if (minutes === 60) {
            minutes = 0;
            hours++;
        }
    }

    display.innerText = formatTime(hours) + ":" + formatTime(minutes) + ":" + formatTime(seconds);
}

function formatTime(value) {
    return value < 10 ? "0" + value : value;
}
