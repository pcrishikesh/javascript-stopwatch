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

var secondsTime = 0
var miliSecondsTime = 0
var minuteTime = 0

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


function resetValue() {
    secondsTime = 0
    miliSecondsTime = 0
    minuteTime = 0 
}

reset.addEventListener('click', ()=> {
    clearTime()
    console.log('hi');
})