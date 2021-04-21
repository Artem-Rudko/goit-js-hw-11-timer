class CountdownTimer  {
    constructor ({selector, targetDate = 0}) {
        this.targetDate = targetDate;
        this.days = document.querySelector(selector + ' [data-value="days"]'),
        this.hours = document.querySelector(selector +' [data-value="hours"]'),
        this.mins = document.querySelector(selector +' [data-value="mins"]'),
        this.secs = document.querySelector(selector +' [data-value="secs"]'),
        this.intervalId = null;       
    };

    intervalId = setInterval(() => {
        const currentTime = Date.now();
        const time = this.targetDate - currentTime;

        if (time <= 0) {
            clearInterval(this.intervalId);
            this.targetDate = 0;
            return
        }

        const days = this.pad(Math.floor(time / (1000 * 60 * 60 * 24)));
        const hours = this.pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
        const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
        const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));
     
        this.days.textContent = days;
        this.hours.textContent = hours;
        this.mins.textContent = mins;
        this.secs.textContent = secs;
        
    }, 1000);
    
    pad(value) {
        return String(value).padStart(2, '0')
    };
}

new CountdownTimer({
    selector: '#timer-1',
    targetDate: new Date('14:22:00 June 10, 2021'),
});