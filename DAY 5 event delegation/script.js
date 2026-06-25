/* console.log("hello");


const five = document.querySelector("#five");


five.addEventListener("click", (event)=>{
    console.log(event.target);
});

 */

/* const main = document.querySelector("main")

main.addEventListener("click", (e) =>{
    console.log(e.target);
    
}); */

const main = document.querySelector("main");

const box = document.querySelector(".box");

const btn = document.querySelector("button");
const timer = document.querySelector("#timer");
const overlay = document.querySelector("#overlay")
const score = document.querySelector("#score")

let time = 0;
let interval;
let stopTimeout;
let scoreCount = 0;

function randomColor() {
  const hue = Math.random() * 360;
  return `hsl(${hue}, 85%, 55%)`;
}

function moveBox() {
  const rY = Math.random() * 90;
  const rX = Math.random() * 85;

  box.style.top = `${rY}%`;
  box.style.left = `${rX}%`;
}

btn.addEventListener("click", () => {
  clearInterval(interval);
  clearTimeout(stopTimeout);
  overlay.classList.remove("show");

  time = 0;
  timer.textContent = time;
  box.style.display = "block";
  box.style.backgroundColor = randomColor();
  moveBox();

  interval = setInterval(() => {
    time++;
    timer.textContent = time;
    box.style.backgroundColor = randomColor();
    moveBox();
  }, 1000);

  stopTimeout = setTimeout(() => {
    clearInterval(interval);
    overlay.classList.add("show");
  }, 10000);
});

box.addEventListener("click", ()=>{
  scoreCount += 1;
  score.textContent = scoreCount
})