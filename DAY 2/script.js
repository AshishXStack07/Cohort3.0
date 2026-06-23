/* const h1 = document.querySelector("h1");

console.log(h1);

document.querySelector("h1").textContent = "Welcome";

const body = document.body;
h1.style.color = "red"
h1.style.fontSize = "50px"
h1.style.fontStyle = "italic" */


const bulb = document.querySelector(".bulb");

const btn = document.querySelector("button");
btn.addEventListener('click',() => {
  const isLit = bulb.classList.toggle("liteup");
  btn.textContent = isLit ? "Off" : "On";
});















/* 
if(flag){
     bulb.style.backgroundColor = "yellow";
    btn.textContent = "Of";
    flag = false;
   }else{
     bulb.style.backgroundColor = "transparent";
    btn.textContent = "On";
    flag = true;
   }

 */






















