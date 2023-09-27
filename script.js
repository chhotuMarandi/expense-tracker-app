const type = document.getElementById("type");

const myDate = document.getElementById('dateInput');

const nameInput = document.getElementById('nameInput');

const amountInput = document.getElementById("amountInput");

const button = document.getElementById("addButton");



button.addEventListener("click",()=>{
 console.log(nameInput.value);
 console.log(amountInput.value)
})


myDate.addEventListener("change",()=>{
 let dateEntered =(myDate.value);
 console.log(dateEntered);
})

type.addEventListener("click",()=>{
let typeEntered= type.value;
console.log(typeEntered)
})