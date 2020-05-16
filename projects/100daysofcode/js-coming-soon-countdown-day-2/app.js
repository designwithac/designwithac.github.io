// get display elements
const daysEl = document.querySelector(".time__value--d");
const hoursEl = document.querySelector(".time__value--h");
const minutesEl = document.querySelector(".time__value--m");
const secondsEl = document.querySelector(".time__value--s");

//set the date for ending date
let finalDateTime = new Date("Jul 26, 2020 23:59:59").getTime();
let days;
let hours;
let minutes;
let seconds;

//update the countdown value every seconds
let timer = setInterval(calculateCountdown, 1000);

function calculateCountdown() {

    //get todays date and time
    let currentTime = new Date().getTime();

    //date difference
    let dateDifference = finalDateTime - currentTime;

    //calculate days hours min and seconds
    days = Math.floor(dateDifference / (1000 * 60 * 60 * 24));
    hours = Math.floor((dateDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    minutes = Math.floor((dateDifference % (1000 * 60 * 60)) / (1000 * 60));
    seconds = Math.floor((dateDifference % (1000 * 60 )) / 1000);

    // console.log(days, hours, minutes, seconds);

    //display the data in dom
    renderTimer();

    if(dateDifference < 0){
        clearInterval(timer);
        console.log("expired")
    }
}

renderTimer = () => {
    let formattedDays = days;
    let formattedHours = hours;
    let formattedMinutes = minutes;
    let formattedSeconds = seconds;

    if(seconds < 10){
        formattedSeconds = "0"+seconds;
    }
    if(minutes < 10){
        formattedMinutes = "0"+minutes;
    }
    if(hours < 10){
        formattedHours = "0"+hours;
    }
    if(days < 10){
        formattedDays = "00"+days;
    }
    if(days > 10 && days < 100){
        formattedDays = "0"+days;
    }
    

    daysEl.innerHTML = formattedDays;
    hoursEl.innerHTML = formattedHours;
    minutesEl.innerHTML = formattedMinutes;
    secondsEl.innerHTML = formattedSeconds;
}