const wrapper = document.querySelector(".wrapper");
const text = document.querySelector("p");

let color = prompt("matn rangini kiriting!");
let bgColor = prompt("orqa fonni rangini kiriting!");

console.log(color, bgColor);

wrapper.setAttribute("style", `background-color: ${bgColor}`);
text.setAttribute("style", `Color: ${color}`);
