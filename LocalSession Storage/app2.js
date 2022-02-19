// *** Oturum kapatılsa tarayıcı kapatılsa bile bilgiler durur. Biz silmedikçe hep orada kalır.
// Local Storage

// SetItem

// localStorage.setItem("Hareket","burpee");
// localStorage.setItem("tekrar",50);

// GetItem

// const value = localStorage.getItem("tekrar");
// console.log(typeof value);

// Clear LocalStorage

// localStorage.clear();

// localStorage.setItem("Hareket","burpee");
// localStorage.setItem("tekrar",50);

// console.log(localStorage.getItem("sport"));

// if (localStorage.getItem("sport") === null) {
//     console.log("Sport verisi yok");
// }else{
//     console.log("Sport bilgisi bulundu.");
// }

// Local Storage - Array Yazma

// const todos = ["Todo 1", "Todo 2", "Todo 3"]; // Local Storage'e string olarak yazar. Array'e çevrilmesi gerekir.

// localStorage.setItem("todos", JSON.stringify(todos)); // String'i Array'e çevirdi.

// const value = JSON.parse(localStorage.getItem("todos")); // String değeri array haline çevirdi.
// console.log(value);

const form = document.getElementById("todo-form");
const todoInput = document.getElementById("todo");

form.addEventListener("submit", addToDo);

function addToDo(e) {

    const value = todoInput.value;

    let todos;
    if (localStorage.getItem("todos") === null) {
        todos = [];
    } else {
        todos = JSON.parse(localStorage.getItem("todos"));
    }

    todos.push(value);

    localStorage.setItem("todos", JSON.stringify(todos));

    e.preventDefault();
};