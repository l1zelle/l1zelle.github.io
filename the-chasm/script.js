let intro = document.querySelector('.intro');

document.addEventListener('DOMContentLoaded', (e)=>{
    setTimeout(()=>{
        intro.classList.add('display-none');
    }, 2000);
})

let colors = ["#DD512C", "#931818", "#A54317", "#D80000", "#F21616"];

    function getRandomColor() {
        return colors[Math.floor(Math.random() * colors.length)];
    }

    function changeBackgroundColor() {
        let newColor = getRandomColor();
        document.body.style.backgroundColor = newColor;
    }

    changeBackgroundColor();
    setInterval(changeBackgroundColor, 1000);

function updateTime() {

let today = new Date();

let hoursElem = document.getElementById("chasm-layer1");
let minutesElem = document.getElementById("chasm-layer2");
let secondsElem = document.getElementById("chasm-layer3");
let millisecondsElem = document.getElementById("chasm-layer4");

let thisHour = today.getHours();
let thisMinute = today.getMinutes();
let thisSecond = today.getSeconds();
let thisMillisecond = thisSecond * 1000;


let mappedMillisecond = map(thisMillisecond, 0, 59000, 0, 360);
console.log("mapped:" + mappedMillisecond);
console.log(thisMillisecond);
millisecondsElem.style.transform = "rotate(" + mappedMillisecond + "deg)";

let mappedSecond = map(thisSecond, 0, 59, 0, 360);
console.log(mappedSecond);
console.log(thisSecond);
secondsElem.style.transform = "rotate(" + mappedSecond + "deg)";

let mappedMinute = map(thisMinute, 0, 59, 0, 360);
console.log(mappedMinute);
minutesElem.style.transform = "rotate(" + mappedMinute + "deg)";

let mappedHour = map(thisHour, 0, 23, 0, 360);
console.log(mappedHour);
hoursElem.style.transform = "rotate(" + mappedHour + "deg)";

if (thisMillisecond === 0) {
    millisecondsElem.style.transform = "rotate(360deg)"
}



}

setInterval(updateTime, 1000);

function map(value, low1, high1, low2, high2){
  
    return low2 + (high2 - low2) * (value - low1) / (high1 - low1);
  
  }