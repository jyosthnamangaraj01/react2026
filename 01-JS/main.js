import age from "./import.js";
// console.log(age(2006));

let btn = document.getElementById("btn")
btn.addEventListener("click", getOutput);
function getOutput(){
    let my_age = age(2006);
    alert(`My current age is: ${my_age}`);
}
// Window.getOutput() = getOutput; //bypass method