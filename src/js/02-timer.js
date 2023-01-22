import flatpickr from "flatpickr";    

// console.log(flatpickr);
import "flatpickr/dist/flatpickr.min.css";



const btnStartTimer = document.querySelector('[data-start]');
const inputTimer = document.getElementById('datetime-picker');  

// console.log(inputTimer);

const refs = {                                       
    dataDay: document.querySelector('[data-days]'),
    dataHours:  document.querySelector('[data-hours]'),
    dataMinutes: document.querySelector('[data-minutes]'),
    dataSeconds: document.querySelector('[data-seconds]'),
}


const date = new Date();
// console.log(date);
btnStartTimer.disabled = true;   /// неактивная кнопка
const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  // selectedDates: true,
  onClose(selectedDates) {             /// обрана дата
    console.log(selectedDates[0]);             
    
    if(selectedDates[0] - new Date()  < 0)     
        {
      window.alert('Please choose a date in the future');   
              } else {
        btnStartTimer.disabled = false;       /// неактивна кнопка
        console.log(date.getTime());
        console.log(selectedDates[0].getTime());
               
      }
    },
  };
    
const  flPik = flatpickr("#datetime-picker", options);    
console.log(flPik.selectedDates[0].getTime());

    btnStartTimer.addEventListener('click', dataTimer)    
function dataTimer () {
  btnStartTimer.disabled = true; 
  tumerId = setInterval( () => {              
 let currentTime = Date.now();                   
let diff = flPik.selectedDates[0] - currentTime;   
if (diff < 0) {                   
  console.log('Конец АКЦИИ!!!')     
  clearInterval(tumerId);            /// та пепериваємо setInterval
  return;                       
};

console.log(diff);
let countTime = convertMs(diff);   
// console.log(date.getTime());
        // console.log(selectedDates[0].getTime());
// console.log(countTime);

refs.dataDay.textContent =  countTime.days;       
refs.dataHours.textContent = countTime.hours;
refs.dataMinutes.textContent = countTime.minutes;
refs.dataSeconds.textContent = countTime.seconds;
}, 1000);

};

function pad (value) {                 
  return String(value).padStart(2, '0');
}

  function convertMs(ms) {                     
    // Number of milliseconds per unit of time
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
  
    // Remaining days
    const days = pad(Math.floor(ms / day));
    // Remaining hours
    const hours = pad(Math.floor((ms % day) / hour));
    // Remaining minutes
    const minutes = pad(Math.floor(((ms % day) % hour) / minute));
    // Remaining seconds
    const seconds = pad(Math.floor((((ms % day) % hour) % minute) / second));
  
    return { days, hours, minutes, seconds };
  }
