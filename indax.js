const btnStart = document.querySelector(".btn--start");
const btnPuase = document.querySelector(".btn--puase");
const timerEl = document.querySelector(".section_timer_date");
const holding = document.querySelector(".date_time_and_timer_time");
const mainTime = document.querySelector(".section_timer_time");

//MAIN TIME OF THE SITE
const MainTimeOfTheSite = setInterval(function () {
  const now = new Date();
  const options = {
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    day: "numeric",
    month: "long",
    year: "numeric",
    weekday: "long",
  };

  const local = navigator.language;
  console.log(local);

  mainTime.textContent = new Intl.DateTimeFormat(local, options).format(now);
}, 1000);
////////////// TIME
setInterval(function () {
  today = new Date();
  year = today.getFullYear();
  mes = today.getMonth() + 1;
  dia = today.getDate();
  timeOnly =
    `${today.getHours()}`.padStart(2, 0) +
    ":" +
    ` ${today.getMinutes()}`.padStart(2, 0) +
    ":" +
    ` ${today.getSeconds()}`.padStart(2, 0);
  newnew = mes + "/" + dia + "/" + year;
  everything = mes + "/" + dia + "/" + year + " " + timeOnly;
}, 1000);
///////////// TIEMR

let timer;
let startTimer = 1;
let min, sec;
let timerCount = 0;
let timeSet = new Date().toLocaleDateString();
let pause = 1;

// btn

btnStart.addEventListener("click", function (e) {
  e.preventDefault();
  clearInterval(startTimer);
  // insert the date omly if......
  if (timeSet == newnew) {
    const Html = `<div class="date_time_and_timer_time">${newnew}</div> `;
    holding.insertAdjacentHTML("beforebegin", Html);
    timeSet = -1;
  }
  if (startTimer == 1) {
    startTimer = setInterval(function () {
      min = `${Math.trunc(timerCount / 60)}`.padStart(2, 0);
      sec = `${timerCount % 60}`.padStart(2, 0);
      timerEl.textContent = ` ${min} : ${sec}`;
      timerCount++;
    }, 1000);
    if (pause == 1) {
      const partHtml = `<div class="date_time_and_timer_time"> ${timeOnly}  &#8592;start time</div> `;
      holding.insertAdjacentHTML("afterend", partHtml);
    }
  } else {
    clearInterval(startTimer);
    timerEl.textContent = ` ${min} : ${sec}`;
    startTimer = 1;
    pause = -1;
  }
});

// stop and reset

btnPuase.addEventListener("click", function (e) {
  e.preventDefault();
  timerCount = 0;
  clearInterval(startTimer);
  const partHtml = `<div class="date_time_and_timer_time">${min}:${sec} &#8592;timer/end time	&#8594;  ${timeOnly}</div> `;
  holding.insertAdjacentHTML("afterend", partHtml);
  timerEl.textContent = `00:00`;
  pause = 1;
  startTimer = 1;
});
