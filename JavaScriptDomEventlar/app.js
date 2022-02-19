// const filterInput = document.getElementById("filter");
// const todoForm = document.getElementById("todo-form");

// // Submit olduğunda event çalışacak. Butona tıklayınca.
// todoForm.addEventListener("submit",submitForm);

// function submitForm(e){
//     console.log("Submit Event çalıştı");

//     e.preventDefault(); // sayfanın yenilenmesini engeller.
// }

// Input'a focus olma.

// filterInput.onfocus = function(){
//     console.log("Naber");
// }

// filterInput.addEventListener("focus",function(e){
//     console.log(e);
//     console.log(e.type);
//     console.log(e.target);
//     console.log(e.target.placeholder);
//     console.log(e.target.className);
// });

// ************** KLAVYE *****************
// Klavye Eventları

// Keypress

// document.addEventListener("keypress",run);

// function run(e){
//     // console.log(e.which); // Hangi tuşa bastık karakterin sayısını verir 
//     console.log(e.key);
// }

// Keydown

// document.addEventListener("keydown",run);

// function run(e){
//     console.log(e.key);
// }

// Keyup

// document.addEventListener("keyup", run);

// function run(e) {
//     console.log(e.key);
// }

// ********* ÖRNEKLER ***********

// const todoHeader = document.querySelector(".card-header");
// const todoInput = document.querySelector("#todo");

// todoInput.addEventListener("keyup", changeText);

// function changeText(e) {
//     todoHeader.textContent = e.target.value;
//     console.log(e.target.value); // Input alanından değer almak için.
// };

// **************** MOUSE EVENTLARI ******************

// const cardBody = document.querySelectorAll(".card-body")[1];
// const title = document.querySelector("#tasks-title");

// Click Event

// title.addEventListener("click", run);

// function run(e) {
//     console.log(e.type);
// }

// Double Click

// title.addEventListener("dblclick",run);

// function run(e){
//     console.log(e.type);
// }

// Mouse Down

// title.addEventListener("mousedown",run);

// function run(e){
//     console.log(e.type);
// }

// Mouse Over

// title.addEventListener("mouseover",run);

// function run(e){
//     console.log(e.type);
// }

// **************** Input Eventları **********************

const filter = document.getElementById("filter");

// document.addEventListener("DOMContentLoaded", load); // Sayfa yüklenmesi bittikten sonra

// function load(e) {
//     console.log("Sayfa yüklendi");
// }

// Focus
// filter.addEventListener("focus", run);

// Blur
// filter.addEventListener("blur", run);

// Paste
// filter.addEventListener("paste",run); // Kopyala yapıştır yaptığımızda paste event çalışır

// Copy
// filter.addEventListener("copy",run); // input içindeki değeri kopyalarsak çalışır

// Cut (Kes)
// filter.addEventListener("cut",run); // input içindeki değeri kesersek çalışır

// Select
// filter.addEventListener("select",run); // input içindeki değeri mouse ile seçtiğimizde çalışır

// function run(e) {
//     console.log(e.type);
// }

// ******************* Event Capturing ve Bubbling Olayları **********************

// Event Bubbling

// document.querySelector(".container").addEventListener("click",function(){
//     console.log("Div Container");
// });

// document.querySelector(".card.row").addEventListener("click",function(){
//     console.log("Card Row");
// });

// document.querySelectorAll(".card-body")[1].addEventListener("click",function(){
//     console.log("Card Body");
// });

// Event Capturing veya Delegation

const cardBody = document.querySelectorAll(".card-body")[1];

cardBody.addEventListener("click", run);

function run(e) {
    if (e.target.className === "fa fa-remove") {
        console.log("Silme işlemi");
    }
    if (e.target.id === "filter") {
        console.log("Filtreleme işlemi");
    }
    if (e.target.id === "clear-todos") {
        console.log("Tüm Todo lar temizlendi");
    }
    // console.log(e.target);
};