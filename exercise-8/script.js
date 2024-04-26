function updateTime() {

let today = new Date();

let secondsElem = document.getElementById("clouds");

let thisHour = today.getHours();
let thisMinute = today.getMinutes();
let thisSecond = today.getSeconds();

let mappedSecond = map(thisSecond, 0, 59, 0, 100);
console.log(mappedSecond);
secondsElem.style.left = mappedSecond + "%";

if(thisSecond < 10) {
    thisSecond = "0" + thisSecond;
}
if(thisMinute < 10) {
    thisMinute = "0" + thisMinute;
}
if(thisHour < 10) {
    thisHour = "0" + thisHour;
}
if(thisHour > 12) {
    thisHour = thisHour - 12;
}

let timeElem = document.getElementById("time");
timeElem.innerHTML = thisHour + ":" + thisMinute + ":" + thisSecond;


let thisMonth = today.getMonth();
let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
let thisDate = today.getDate();
let thisWeekday = today.getDay();
let thisYear = today.getFullYear();

let dateElem = document.getElementById("date");
dateElem.innerHTML = months[thisMonth] + " " + thisDate + ", " + thisYear;

}

setInterval(updateTime, 1000);


function map(value, low1, high1, low2, high2){
  
    return low2 + (high2 - low2) * (value - low1) / (high1 - low1);
  
  }