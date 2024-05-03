/*let rotation = 0;*/

function updateTime() {

let today = new Date();

let hoursElem = document.getElementById("chasm-layer1");
let minutesElem = document.getElementById("chasm-layer2");
let secondsElem = document.getElementById("chasm-layer3");
let millisecondsElem = document.getElementById("chasm-layer4");

let thisHour = today.getHours();
let thisMinute = today.getMinutes();
let thisSecond = today.getSeconds();
let thisMillisecond = today.getMilliseconds();

/*let rotationIncrement = (360 / 60) * (1 / 1000); 
rotation += rotationIncrement;*/

let mappedMillisecond = map(thisMillisecond, 0, 999, 0, 360);
console.log(mappedMillisecond);
millisecondsElem.style.transform = "rotate(" + mappedMillisecond + "deg)";

let mappedSecond = map(thisSecond, 0, 59, 0, 360);
console.log(mappedSecond);
secondsElem.style.transform = "rotate(" + mappedSecond + "deg)";

let mappedMinute = map(thisMinute, 0, 59, 0, 360);
console.log(mappedMinute);
minutesElem.style.transform = "rotate(" + mappedMinute + "deg)";

let mappedHour = map(thisHour, 0, 23, 0, 360);
console.log(mappedHour);
hoursElem.style.transform = "rotate(" + mappedHour + "deg)";
}

setInterval(updateTime, 1);

function map(value, low1, high1, low2, high2){
  
    return low2 + (high2 - low2) * (value - low1) / (high1 - low1);
  
  }