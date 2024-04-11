const digitalClockTime = document.querySelector(".digitalClockTime");

const analogbtn = document.querySelector(".analogbutton");
const digitalbtn = document.querySelector(".digitalbutton");
const analogClock = document.querySelector(".analogClock");
const digitalClock = document.querySelector(".digitalClock");

const secondsHand = document.querySelector(".seconds");
const minutesHand = document.querySelector(".minutes");
const hoursHand = document.querySelector(".hours");

analogbtn.addEventListener("click", () => {
  analogClock.classList.remove("hidden");
  digitalClock.classList.add("hidden");
});
digitalbtn.addEventListener("click", () => {
  analogClock.classList.add("hidden");
  digitalClock.classList.remove("hidden");
});

let d = new Date();
let seconds = d.getSeconds();
let minutes = d.getMinutes();
let hours = d.getHours();

const secondsToDegrees = (x) => {
  return 180 + x * 6;
};
const minutesToDegrees = (x) => {
  return 180 + x * 6;
};
const hoursToDegrees = (x, mins) => {
  if (x > 12) {
    x = x - 12;
  }
  return 180 + x * 30 + mins * 0.5;
};

secondsHand.style.transform = `rotate(${secondsToDegrees(seconds)}deg)`;
minutesHand.style.transform = `rotate(${minutesToDegrees(minutes)}deg)`;
hoursHand.style.transform = `rotate(${hoursToDegrees(hours, minutes)}deg)`;

const changeTime = () => {
  if (seconds === 59) {
    minutes = minutes + 1;
    seconds = 0;
  } else {
    seconds = seconds + 1;
  }
  if (minutes === 60) {
    hours = hours + 1;
    minutes = 0;
  }
  if (hours === 24) {
    hours = 0;
  }
};

const format = (x) => {
  string = x.toString();
  if (string.length === 1) {
    string = "0" + string;
  }
  return string;
};

setInterval(() => {
  changeTime();
  digitalClockTime.innerHTML =
    format(hours) + ":" + format(minutes) + ":" + format(seconds);
  secondsHand.style.transform = `rotate(${secondsToDegrees(seconds)}deg)`;
  minutesHand.style.transform = `rotate(${minutesToDegrees(minutes)}deg)`;
}, 1000);
setInterval(() => {
  hoursHand.style.transform = `rotate(${hoursToDegrees(hours, minutes)}deg)`;
}, 60000);
