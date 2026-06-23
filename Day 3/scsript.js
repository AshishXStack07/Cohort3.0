/* Attributes and properties 

- SetAttribute, GetAttribute, removeAttribute, Hasattribute
withdata -> name

Attribute vs properties

Attrtibute is reserved keyword and cannot be changed ex- id,class,alt,src,type (static)
whereas properties is value that we update it or modifies over time




input.value(Property,current state) vs input.getattribute("value")



 */



/* const h1 = document.querySelector("#id1");
let res = h1.getAttribute("class");

h1.setAttribute("width", "100px");

console.log(h1.getAttribute("width"));

h1.removeAttribute("class");

console.log(h1.hasAttribute("width"));


console.log(res);



const userCard = document.querySelector("#usercard");

console.log(userCard.getAttribute("data-user-id"));
// changing user id

userCard.dataset.userId = "123";

console.log(userCard.getAttribute("data-user-id"));
 */
 ///////////////////////////////////////////////////
const inp = document.querySelector("input");

const btn = document.querySelector("button");

console.log(inp.value);


btn.addEventListener("click", () =>{
    console.log(inp.value);// live value
    console.log(inp.getAttribute("value"));// get attribute static 

    
})

/////////////////////////////////////////////////////





const main = document.querySelector("main");

const span = document.createElement("span");
let footer  = document.createElement('footer')
 

 span.textContent = "hey i am dynamically changed"

console.log('footer');
main.appendChild(footer);
main.appendChild(span);

//insted of using twicw we can use main.append(footer, span);multiple elements ko insert kar skata hai


main.removeChild(span);






































