import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
// all modules
import Notiflix from 'notiflix';

const chosenDate = document.querySelector('#datetime-picker');
const btn = document.querySelector('[data-start]');
const daysSpan = document.querySelector('[data-days]');
const hoursSpan = document.querySelector('[data-hours]');
const minutesSpan = document.querySelector('[data-minutes]');
const secondsSpan = document.querySelector('[data-seconds]');

btn.setAttribute('disabled', true);

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    const selectedDate = selectedDates[0];
    console.log(selectedDates[0]);
    const dateNow = new Date();

    if (selectedDate < dateNow) {
      Notiflix.Notify.failure('Please choose a date in the future');
      return;
    }
    btn.removeAttribute('disabled');
    let difference = selectedDate - dateNow;

    console.log(dateNow);
    console.log(difference);

    const handleClick = () => {
      function convertMs(ms) {
        const second = 1000;
        const minute = second * 60;
        const hour = minute * 60;
        const day = hour * 24;

        const days = Math.floor(ms / day);
        const hours = Math.floor((ms % day) / hour);
        const minutes = Math.floor(((ms % day) % hour) / minute);
        const seconds = Math.floor((((ms % day) % hour) % minute) / second);

        return { days, hours, minutes, seconds };
      }

      function addLeadingZero(value) {
        return value.toString().padStart(2, '0');
      }

      let timerId = null;

      timerId = setInterval(() => {
        let newTimer = convertMs(difference);

        difference -= 1000;

        daysSpan.textContent = addLeadingZero(newTimer.days);
        hoursSpan.textContent = addLeadingZero(newTimer.hours);
        minutesSpan.textContent = addLeadingZero(newTimer.minutes);
        secondsSpan.textContent = addLeadingZero(newTimer.seconds);

        if (difference <= 0) {
          clearInterval(timerId);
        }
      }, 1000);
    };

    btn.addEventListener('click', handleClick);
  },
};

flatpickr(chosenDate, options);
