const HOURHAND = document.querySelector("#hour");
const MINUTEHAND = document.querySelector("#minute");
const SECONDHAND = document.querySelector("#second");

var date = new Date();
let hr = date.getHours();
let min = date.getMinutes();
let sec = date.getSeconds();

let hrPosition = (hr*360/12) + (min*(360/60)/12);
let minPosition = (min*360/60) + (sec*(360/60)/60);
let secPosition = sec*360/60;


function runTheClock() {
  
  hrPosition = hrPosition + (3/360);
  minPosition = minPosition + (6/60);
  secPosition = secPosition + 6;
 
  HOURHAND.style.transform = "rotate(" + hrPosition + "deg)";
  MINUTEHAND.style.transform = "rotate(" + minPosition + "deg)";
  SECONDHAND.style.transform = "rotate(" + secPosition + "deg)";
}

runTheClock();
var interval = setInterval(runTheClock, 1000);

function moveHands() {
    with (new Date) {
        h = 30 * (getHours() % 12 + getMinutes() / 60),
        m = 6 * getMinutes(),
        s = 6 * getSeconds(),
        timezone = toLocaleTimeString("en-us", {
            timeZoneName: "short"
        }).split(" ")[2];
        var time = ("0" + getHours()).slice(-2) + ":" + ("0" + getMinutes()).slice(-2) + ":" + ("0" + getSeconds()).slice(-2) + " " + timezone;
        document.getElementById("title").innerHTML = time,
        setTimeout(moveHands, 1e3)
    }
}
moveHands();