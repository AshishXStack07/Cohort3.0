/* const btn = document.querySelector("button")
const div = document.querySelector("div")
const main = document.querySelector("main")
const body = document.body

btn.addEventListener("click", (events) => {
    console.log("Button triggered");
}, { capture: true })

div.addEventListener("click", (events) => {
    console.log("div triggered");
}, { capture: true })


body.addEventListener("click", (events) => {
    console.log("Body triggered");
}, { capture: true })


main.addEventListener("click", (events) => {
    console.log("main triggered");
}, { capture: true }) */

// (form bydefault reload karta hai webpage)

const form = document.querySelector("form");
const users = document.querySelector(".users")

form.addEventListener("submit", (events) => {
  events.preventDefault();
  console.log(events.target[0].value);
  console.log(events.target[1].value);
   

  users.innerHTML += `<div class ="users">
    <div class="user_card">
        <div class ="img_box">
            <img src="https://images.unsplash.com/photo-1763310100020-87988ddf2a27?q=80&w=709&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="image here"/>
        </div>
        <div class ="text">
            <h3>Name</h3>
            <p>Email</p>
        </div>
    </div>
</div>`

  // other way to get value is giving id or class to particulat tag
    form.reset();
});

// Defensive listener: only attach if element exists to avoid "div" errors
const div = document.querySelector("div");
if (div) {
    div.addEventListener("click", (events) => {
        console.log("div triggered");
    }, { capture: true });
}

