let seconds = document.querySelector("#seconds")
let miliSeconds = document.querySelector("#miliseconds")
let minute = document.querySelector("#minute")
let start = document.querySelector("#start")
let stop = document.querySelector("#stop")
let reset = document.querySelector("#reset")

// time value

let secondsValue = 1000
let miliSecondsValue = 100
let minuteValue = 60000

//  updating value 

let secondsTime = 0
let miliSecondsTime = 0
let minuteTime = 0

// clear time function
let clearTime;


// button function

start.addEventListener('click', ()=> {

    // updating function

    let secondsFunction = setInterval(() => {
        secondsTime++
        seconds.innerHTML = secondsTime
    }, secondsValue);

    
    let miliSecondsFunction = setInterval(() => {
            miliSecondsTime++
            miliSeconds.innerHTML = miliSecondsTime
        }, miliSecondsValue);

    let minuteFunction = setInterval(() => {
            minuteTime++
            minute.innerHTML = minuteTime
            secondsTime=0
        }, minuteValue);

    clearTime = ()=> {
        clearInterval(secondsFunction)
        clearInterval(miliSecondsFunction)
        clearInterval(minuteFunction)
    }
})  

stop.addEventListener('click', ()=> clearTime())