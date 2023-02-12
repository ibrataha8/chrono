var start = document.querySelector("#start");
let stop = document.querySelector("#stop");
let reset = document.querySelector("#reset");
let test = document.querySelector("#test");
let hour = (minute = second = msecond = 0);
let timer = null;
let [h, m, s, ms] = [...document.querySelectorAll(".tim span")];
function updateTime(h, hv, m, mv, s, sv, ms, msv) {
  h.textContent = hv;
  m.textContent = mv;
  s.textContent = sv;
  ms.textContent = msv;
}
start.addEventListener("click", () => {
  start.disabled = true;

  timer = setInterval(() => {
    msecond++;
    if (msecond == 60) {
      msecond = 0;
      second++;
    } else if (second == 60) {
      second = 0;
      minute++;
    } else if (minute == 60) {
      minute = 0;
      hour++;
    }
    updateTime(h, hour, m, minute, s, second, ms, msecond);
    // console.log({ hour, minute, second, msecond });
  }, 1);
});

stop.addEventListener("click", () => {
  clearInterval(timer);

  start.disabled = false;
  timer = null;
});

reset.addEventListener("click", () => {
  updateTime(h, 0, m, 0, s, 0, ms, 0);
  start.disabled = false;
  hour = minute = second = msecond = 0;
});
