let seconds = document.querySelector("#seconds")
let miliSeconds = document.querySelector("#miliseconds")
let minute = document.querySelector("#minute")
let start = document.querySelector("#start")
let stop = document.querySelector("#stop")
let reset = document.querySelector("#reset")


function updateTime() {
    let secondsTime = 0
    let miliSecondsTime = 0
    minuteTime = 0

    setInterval(() => {
        secondsTime++
        seconds.innerHTML = secondsTime
    }, 1000);

    
    setInterval(() => {
        miliSecondsTime++
        miliSeconds.innerHTML = miliSecondsTime
    }, 100);

    setInterval(() => {
        minuteTime++
        minute.innerHTML = minuteTime
        secondsTime=0
    }, 60000);
    
}

start.addEventListener('click', ()=> updateTime())  
