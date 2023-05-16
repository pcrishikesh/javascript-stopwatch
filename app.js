let seconds = document.querySelector("#seconds")
let miliseconds = document.querySelector("#miliseconds")
let start = document.querySelector("#start")
let stop = document.querySelector("#stop")
let reset = document.querySelector("#reset")


function updateTime() {
    let time = 0
    setInterval(() => {
        time++
        seconds.innerHTML = time
    }, 1000);
}



start.addEventListener('click', ()=> {
    updateTime()

})  
