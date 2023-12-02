
// Set the target date and time for the countdown (YYYY-MM-DDTHH:mm:ss)
const targetDate = new Date('2023-12-31T23:59:59').getTime();

function updateCountdown() {
    const currentDate = new Date().getTime();
    const timeDifference = targetDate - currentDate;

    if (timeDifference > 0) {
        const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

        document.getElementById('days').innerHTML = days;
        document.getElementById('hours').innerHTML = hours;
        document.getElementById('minutes').innerHTML = minutes;
        document.getElementById('seconds').innerHTML = seconds;
    } else {
        // If the target date has passed
        document.getElementById('countdown').innerHTML = 'Countdown expired';
    }
}

// Update the countdown every second
setInterval(updateCountdown, 1000);