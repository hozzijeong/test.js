const body = document.querySelector("body");

const RANDOM_NUM = 3;

function paintBg(number){
    const image = new Image();
    image.src = `bg/${number+1}.jpg`;
    image.classList.add("bgImage");
    body.prepend(image);
}

function getRandom(){
    const ranNum = Math.floor(Math.random() * RANDOM_NUM);
    return ranNum;
}

function init(){
    paintBg(getRandom());
}

init();