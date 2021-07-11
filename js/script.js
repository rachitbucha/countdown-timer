const newYear = new Date("01 Jan 2022").getTime();
const x = setInterval(() => {
    const now = new Date().getTime();
    const t = newYear - now;
    const days = Math.floor(t / (1000 * 60 * 60 * 24));
    const hours = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((t % (1000 * 60)) / 1000);
    document.getElementById('days').innerHTML = days;
    document.getElementById('hours').innerHTML = hours;
    document.getElementById('mins').innerHTML = minutes;
    document.getElementById('seconds').innerHTML = seconds;
    console.log(days, hours, minutes, seconds);
}, 1000);