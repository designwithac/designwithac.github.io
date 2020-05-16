//get elements
let timerEl = document.getElementById('timer');
let startEl = document.getElementById('start');
let stopEl = document.getElementById('stop');
let resetEl = document.getElementById('reset');
let lapseEl = document.getElementById('lapse');
let lapseUl = document.getElementById('lapse-ul');

//declare global variables
let timer; //to get interval and clear interval
let sec = 0;
let min = 0;
let hr = 0;
let lapseTime;

//add event listeners
startEl.addEventListener("click", function(){
    timer = setInterval(handleTimer, 1000); 
    startEl.disabled = true;
    startEl.style.cursor = "not-allowed";
});

stopEl.addEventListener("click", function(){
    timer = clearInterval(timer); 
    startEl.disabled = false;
    startEl.style.cursor = "pointer";
});

resetEl.addEventListener("click", function(){
    timer = clearInterval(timer); 
    startEl.disabled = false;
    startEl.style.cursor = "pointer";
    resetTimer();
});

lapseEl.addEventListener('click', addTimerLapse);

// timer = setInterval(handleTimer, 1000);


//add functions
function handleTimer(){
    //increase secont by each second
    sec++;

    //check sec upto 60
    if(sec == 60){
        sec = 0;
        min++;
    }
    if(min == 60){
        min = 0;
        hr++;
    }

    //test the timer
    // console.log(hr+":"+min+":"+sec);

    // display to the document
    renderTimer();
}

function renderTimer(){
    let betterSec = sec;
    let betterMin = min;
    let betterHr = hr;
    if(sec < 10){
        betterSec = "0"+sec;
    }
    if(min < 10){
        betterMin = "0"+min;
    }
    if(hr < 10){
        betterHr = "0"+hr;
    }
    lapseTime = betterHr+":"+betterMin+":"+betterSec;
    timerEl.innerText =   lapseTime;  
}

function resetTimer(){
    sec = 0;
    min = 0;
    hr = 0;
    timerEl.innerText = "00:00:00";
    lapseUl.innerHTML = '';
}

function addTimerLapse(){

    //crete a list element
    let li = document.createElement('li');
    if(lapseTime === undefined){
        lapseTime = "00:00:00";
    }
    li.innerText = lapseTime;
    lapseUl.appendChild(li);
}
