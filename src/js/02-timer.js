import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import notiflix from 'notiflix';

const refs = {
    dateTimeInput: document.querySelector('#datetime-picker'),
    startBtn: document.querySelector('[data-start]'),
    tDays: document.querySelector('[data-days]'),
    tHours: document.querySelector('[data-hours]'),
    tMinutes: document.querySelector('[data-minutes]'),
    tSeconds: document.querySelector('[data-seconds]')
}

refs.startBtn.disabled = true;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    dataCheck(selectedDates);
  },
};

flatpickr(refs.dateTimeInput, options);

notiflix.Report.init({
titleFontSize: '20px',
messageFontSize: '16px',
cssAnimationDuration: 660,
cssAnimationStyle: 'zoom',
});

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = addLeadingZero(Math.floor(ms / day)); 
  const hours = addLeadingZero(Math.floor((ms % day) / hour));
  const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
  const seconds = addLeadingZero(Math.floor((((ms % day) % hour) % minute) / second));

  return { days, hours, minutes, seconds };
}

function dataCheck(selectedDates) {
  const selectedDate = selectedDates[0].getTime();
  const currentDate = new Date().getTime();
  // console.log(currentDate);
  // console.log(selectedDate);

  if (selectedDate < currentDate) {
    notiflix.Report.warning(
      'Sorry, your date & time is wrong',
      'Please, choose a date in the future',
      'OK :)'
    );
    return;  
  } 
      notiflix.Report.success(
      'Okey! Lets`s go ',
      'Click on button `START`',
      'OK :)'
      );
  refs.startBtn.disabled = false;

  refs.startBtn.addEventListener('click', () => {
  let timeLeft = selectedDate - currentDate;
  let timerId;    
  timerId = setInterval(() => {
        timeLeft -= 1000;
    if (timeLeft > 0) {
      renderTimer(convertMs(timeLeft));
      refs.startBtn.disabled = true;
    } else {
      clearInterval(timerId);
}
  }, 1000);
});
};
  
const renderTimer = ({ days, hours, minutes, seconds }) => {
  refs.tDays.textContent = `${days}`;
  refs.tHours.textContent = `${hours}`;
  refs.tMinutes.textContent = `${minutes}`;
  refs.tSeconds.textContent = `${seconds}`;
};