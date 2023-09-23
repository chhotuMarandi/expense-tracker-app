const type = document.getElementById("type");

const myDate = document.getElementById('dateInput');

let nameInput = document.getElementById('nameInput').value;

console.log(newInput)



myDate.addEventListener("change",function(){
 let dateEntered =(myDate.value);
 console.log(dateEntered);
})

type.addEventListener("click",function(){
let typeEntered= type.value;
console.log(typeEntered)
})