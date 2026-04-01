let time = 1500;
let timer;

function updateDisplay() {
  let minutes = Math.floor(time / 60);
  let seconds = time % 60;
  document.getElementById("timer").textContent =
    minutes + ":" + (seconds < 10 ? "0" : "") + seconds;
}

function startTimer() {
  timer = setInterval(() => {
    if (time > 0) {
      time--;
      updateDisplay();
    } else {
      clearInterval(timer);
      addSession();
    }
  }, 1000);
}

function resetTimer() {
  clearInterval(timer);
  time = 1500;
  updateDisplay();
}

function addSession() {
  let li = document.createElement("li");
  li.textContent = "Completed 25 min session";
  document.getElementById("sessions").appendChild(li);
}

updateDisplay();
