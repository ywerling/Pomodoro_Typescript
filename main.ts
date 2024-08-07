// Constants
const PINK = "#e2979c";
const RED = "#e7305b";
const GREEN = "#9bdeac";
const YELLOW = "#f7f5dd";
const FONT_NAME = "Courier";
const WORK_MIN = 25;
const SHORT_BREAK_MIN = 5;
const LONG_BREAK_MIN = 20;

// Global variables
let pomodoroCounter = 0;
let timerId: number | undefined;

// Timer reset function
function resetTimer() {
    clearTimeout(timerId);
    pomodoroCounter = 0;
    (document.getElementById('timer-text') as HTMLElement).textContent = "00:00:00";
    (document.getElementById('counter-label') as HTMLElement).textContent = "0";
}

// Timer mechanism
function startTimer() {
    countDown(5);
}

// Countdown mechanism
function countDown(counter: number) {
    const timerText = document.getElementById('timer-text') as HTMLElement;
    timerText.textContent = formatTime(counter);

    if (counter > 0) {
        timerId = window.setTimeout(() => countDown(counter - 1), 1000);
    }
}

// Format time for display
function formatTime(seconds: number): string {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
}

// UI setup
document.body.style.backgroundColor = YELLOW;
document.body.style.fontFamily = FONT_NAME;
document.body.style.textAlign = "center";

const title = document.createElement('h1');
title.textContent = "Pomodoro Timer";
document.body.appendChild(title);

const timerLabel = document.createElement('div');
timerLabel.id = "timer-label";
timerLabel.textContent = "Timer";
timerLabel.style.color = GREEN;
timerLabel.style.fontSize = "48px";
timerLabel.style.marginBottom = "20px";
document.body.appendChild(timerLabel);

const canvas = document.createElement('div');
canvas.style.width = "200px";
canvas.style.height = "225px";
canvas.style.backgroundColor = YELLOW;
canvas.style.display = "inline-block";
canvas.style.position = "relative";
canvas.style.marginBottom = "20px";
document.body.appendChild(canvas);

const tomatoImg = document.createElement('img');
tomatoImg.src = "tomato.png";
tomatoImg.style.position = "absolute";
tomatoImg.style.left = "50%";
tomatoImg.style.top = "50%";
tomatoImg.style.transform = "translate(-50%, -50%)";
canvas.appendChild(tomatoImg);

const timerText = document.createElement('div');
timerText.id = "timer-text";
timerText.textContent = "00:00:00";
timerText.style.color = "white";
timerText.style.fontSize = "32px";
timerText.style.fontWeight = "bold";
timerText.style.position = "absolute";
timerText.style.left = "50%";
timerText.style.top = "65%";
timerText.style.transform = "translate(-50%, -50%)";
canvas.appendChild(timerText);

const startButton = document.createElement('button');
startButton.textContent = "Start";
startButton.onclick = startTimer;
document.body.appendChild(startButton);

const resetButton = document.createElement('button');
resetButton.textContent = "Reset";
resetButton.onclick = resetTimer;
document.body.appendChild(resetButton);

const counterLabel = document.createElement('div');
counterLabel.id = "counter-label";
counterLabel.textContent = "0";
counterLabel.style.color = GREEN;
counterLabel.style.fontSize = "24px";
counterLabel.style.marginTop = "20px";
document.body.appendChild(counterLabel);

const checkMarks = document.createElement('div');
checkMarks.textContent = "✓";
checkMarks.style.color = GREEN;
checkMarks.style.fontSize = "24px";
checkMarks.style.marginTop = "20px";
document.body.appendChild(checkMarks);
