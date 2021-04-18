
const refs = {
    timerId: document.querySelector('#timer-1'),
    days: document.querySelector('#timer-1 [data-value="days"]'),
    hours: document.querySelector('#timer-1 [data-value="hours"]'),
    mins: document.querySelector('#timer-1 [data-value="mins"]'),
    secs: document.querySelector('#timer-1 [data-value="secs"]'),
}

// class CountdownTimer  {
//     constructor (selector, targetDate) {
        
//     }
// }


setInterval(() => {
    const currentTime = Date.now();
    const targetDate = new Date('14:22:00 June 10, 2021');
    const time = targetDate - currentTime;
    
    const days = pad(Math.floor(time / (1000 * 60 * 60 * 24)));
    const hours = pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
    const mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
    const secs = pad(Math.floor((time % (1000 * 60)) / 1000));
    
    
    refs.days.textContent=days;
    refs.hours.textContent=hours;
    refs.mins.textContent=mins;
    refs.secs.textContent=secs;
}, 1000);

function pad(value) {
    return String(value).padStart(2, '0')
};

// new CountdownTimer({
//     selector: '#timer-1',
//     targetDate: new Date('14:22:00 June 10, 2021'),
//   });

