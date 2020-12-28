const clockContainer = document.querySelector(".js-clock"),
     clockTitle = clockContainer.querySelector(".js-title");

function getTime(){
    const date = new Date();
    const minuite = date.getMinutes();
    const hours = date.getHours();
    const seconds = date.getSeconds();
    clockTitle.innerText = `${hours < 10 ? `0${hours}`: hours}:${minuite < 10 ? `0${minuite}` : minuite}:${seconds <10 ? `0${seconds}`:seconds}`
}


function init(){
    getTime();
    setInterval(getTime,1000);
}


init();
