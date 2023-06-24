function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, '0')}`;
}

const startButton = document.querySelector('[data-start]');
const stopButton = document.querySelector('[data-stop]');
const bodyElement = document.body;

let intervalId = null;

function startColorSwitching() {
  intervalId = setInterval(() => {
    const randomColor = getRandomHexColor();
    bodyElement.style.backgroundColor = randomColor;
  }, 1000);

  startButton.disabled = true;
  stopButton.disabled = false;
}

function stopColorSwitching() {
  clearInterval(intervalId);
  intervalId = null;

  startButton.disabled = false;
  stopButton.disabled = true;
}

startButton.addEventListener('click', startColorSwitching);
stopButton.addEventListener('click', stopColorSwitching);
