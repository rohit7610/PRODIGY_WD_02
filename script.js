let startTime = 0;
let elapsedTime = 0;
let timerInterval = null;

const display = document.getElementById("display");

const startButton = document.getElementById("startBtn");
const pauseButton = document.getElementById("pauseBtn");
const lapButton = document.getElementById("lapBtn");
const resetButton = document.getElementById("resetBtn");

const laps = document.getElementById("laps");

function updateDisplay() {

    const currentTime = Date.now();

    elapsedTime = currentTime - startTime;

    let milliseconds = elapsedTime % 1000;

    let totalSeconds = Math.floor(elapsedTime / 1000);

    let seconds = totalSeconds % 60;

    let minutes = Math.floor(totalSeconds / 60);

    display.textContent =
        `${String(minutes).padStart(2, "0")}:` +
        `${String(seconds).padStart(2, "0")}:` +
        `${String(milliseconds).padStart(3, "0")}`;
}
startBtn.addEventListener("click", () => {

    if (timerInterval !== null) {
        return;
    }

    startTime = Date.now() - elapsedTime;

    timerInterval = setInterval(updateDisplay, 10);

});
pauseBtn.addEventListener("click", () => {

    clearInterval(timerInterval);

    timerInterval = null;

});
resetBtn.addEventListener("click", () => {

    clearInterval(timerInterval);

    timerInterval = null;

    startTime = 0;
    elapsedTime = 0;

    display.textContent = "00:00:00";

    laps.innerHTML = "";

});
lapBtn.addEventListener("click", () => {

    if (elapsedTime === 0) {
        return;
    }

    const lapItem = document.createElement("li");

    const lapNumber = laps.children.length + 1;

    lapItem.innerHTML = `
        <span>Lap ${lapNumber}</span>
        <span>${display.textContent}</span>
    `;

    laps.appendChild(lapItem);

});