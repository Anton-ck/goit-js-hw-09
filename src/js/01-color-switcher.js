const startBtn = document.querySelector('[data-start]');
const stopBtn = document.querySelector('[data-stop]');
let timerId = null;
stopBtn.disabled = true;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

startBtn.addEventListener('click', () => { 
    timerId = setInterval(() => {
    document.body.style.backgroundColor = getRandomHexColor();
        startBtn.disabled = true;
        stopBtn.disabled = false;
}, 1000);  
});

stopBtn.addEventListener('click', () => { 
    startBtn.disabled = false;
    stopBtn.disabled = true;
    clearInterval(timerId);
})