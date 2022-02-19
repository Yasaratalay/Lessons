// ********************* DOM OBJECT PART 1 **********************

// let value;

// value = document;
// value = document.all;
// value = document.all.length;
// value = document.all[0];
// value = document.all[document.all.length - 1];

// const element = document.all; // HTML collection
// // for (let i = 0; i < element.length; i++) {
// //     console.log(element[i]);
// // }


// // element.forEach(function(element){
// //     console.log(element);
// // });

// // const collections = Array.from(document.all);

// // collections.forEach(function(collection){
// //     console.log(collection);
// // });

// value = document.all[7];
// value = document.body;
// value = document.head;
// value = document.location;
// value = document.location.hostname;
// value = document.location.port;

// value = document.URL;

// value = document.characterSet;


// console.log(value);


// ********************* DOM OBJECT PART 2 **********************

// let value;

// value = document;

// value = document.scripts;
// value = document.scripts.length;
// value = document.scripts[0];

// // Link

// value = document.links;
// value = document.links[document.links.length - 1];
// // value = document.links[document.links.length-1].getAttribute("class");
// // value = document.links[document.links.length-1].getAttribute("href");
// //  value = document.links[document.links.length-1].className;


// // Formlar

// value = document.forms;
// value = document.forms.length;
// value = document.forms[0];
// value = document.forms["form"];
// // value = document.forms[0].id;


// console.log(value);

// ************ ELEMENT SEÇME ******************

// let element;

// // *** ID'e göre seçme

// element = document.getElementById("yasar");
// element = document.getElementById("baris");

// // *** Class'a göre seçme

// element = document.getElementsByClassName("remove")[0];
// element = document.getElementsByClassName("C");

// // *** Element Tag'e göre seçme

// element = document.getElementsByTagName("div");

// // Query Selector - Css Selector - Tek bir element döner. İlk gördüğünü alır.

// element = document.querySelector("#yasar");
// element = document.querySelector("#baris");

// element = document.querySelector(".has");
// element = document.querySelector("li");

// // Query Selector - Css Selector - Tüm elementleri döner
// element = document.querySelectorAll("li"); // Node List


// element.forEach(function(el){
//     console.log(el);
// });


// console.log(element);

// *********** Elementleri seçme ve style özelliklerini değiştirme **********

// const element = document.querySelector("#still");


// Element Özellikleri

// console.log(element.id);
// console.log(element.className);
// console.log(element.textContent);
// console.log(element.innerHTML);
// console.log(element.href);
// console.log(element.style);

// ************** Style ve Element özelliklerini değiştirme ************

// element.className = "btn btn-dark";
// element.style.color = "#000";
// element.style.marginLeft = "20px";
// element.href = "https://www.google.com/";
// element.target = "_blank";

// element.textContent = "Yaşar";
// element.innerHTML = "<span style='color:red'>Silin</span>"

// Class'ı has olan tüm li'lere style ekledik.
// const elements = document.querySelectorAll(".has");
// elements.forEach(function(el){
//     el.style.color = "red";
//     el.style.background = "#eee";
// });

// Sayfadaki ilk li etiketini alır.
// let element2 = document.querySelectorAll("li:first-child");

// // Sayfadaki 2. li etiketini alır.
// element2 = document.querySelector("li:nth-child(2)");
// // Sayfadaki 3. li etiketini alır.
// element2 = document.querySelector("li:nth-child(3)");
// // Sayfadaki indexi tek olan li etiketleri gelir. 1. 3. 5. li gibi.
// element2 = document.querySelectorAll("li:nth-child(odd)");
// // Sayfadaki indexi çift olan li etiketleri gelir. 2. 4. li gibi.
// element2 = document.querySelectorAll("li:nth-child(even)");

// // Sayfadaki indexi 2.ve 4.olan yani çift olan li'lere style özelliği ekledi.
// element2.forEach(function (el) {
//     el.style.background = "#ccc";
//     el.style.color = "red";
// })

// console.log(element2);

//  console.log(element);


// *********** Dom Elementleri üzerinde gezinme **********

// let value;

// const todoList = document.querySelector(".list-group");
// const todo = document.querySelector(".list-group-item:nth-child(2)");
// const cardRow = document.querySelector(".card.row");

// value = todoList;
// value = todo;
// value = cardRow;

// // Child Nodes - Tüm Text Dahil

// value = todoList.childNodes;
// value = todoList.childNodes[0];

// // Child Nodes - Sadece Elementler

// value = todoList.children; // Tüm elemanlar
// value = todoList.children[0]; // İndexe göre eleman alma
// value = todoList.children[todoList.children.length - 1]; // Son elemanı alma
// value = todoList.children[2].textContent = "Değişti";


// value = cardRow;
// value = cardRow.children;
// value = cardRow.children[2].children[1].textContent = "Yaşar Atalay";


// value = todoList;
// value = todoList.children[0];
// value = todoList.firstElementChild;
// value = todoList.lastElementChild;

// value = todoList.children.length; // eleman sayısı
// value = todoList.childElementCount; // eleman sayısı

// value = cardRow;

// value = cardRow.parentElement;
// value = cardRow.parentElement.parentElement;

// // Element kardeşlerini bulma

// value = todo;
// value = todo.previousElementSibling; // Bir önceki elemente gitmeye yarar.
// value = todo.nextElementSibling; // Bir sonraki elemente gitti.
// value = todo.nextElementSibling.nextElementSibling;

// value = todo.previousElementSibling.previousElementSibling;

// console.log(value);


// *********** Dinamik Element Oluşturma  **************************

// Yeni Element Oluşturma
//<a id="clear-todos" class="btn btn-dark" href="#">Tüm Taskları Temizleyin</a>

// const newLink = document.createElement("a"); // A elementini oluşturduk.
// const cardBody = document.getElementsByClassName("card-body")[1]; // Bulunduğu yerin class'ını aldık

// newLink.id = "clear-todos"; // A etiketine ID ekledik.
// newLink.className = "btn btn-danger"; // A etikeine class ekledik.
// newLink.href = "https://www.google.com.tr"; // Link etiketi ekledik.
// newLink.target = "_blank"; // Yeni sekmede açılmasını sağladık.

// newLink.appendChild(document.createTextNode("Farklı Sayfaya Git.")); // Elementin en sonuna text ekledik.

// cardBody.appendChild(newLink);

// // // Text Content

// // // newLink.textContent = "Farklı Sayfaya Git!"; // Text ekledik. Ama sağlıklı yöntem değil.
// // // cardBody.textContent = "asdasda"; // card-body içindeki her şeyi siler yerine bunu yazar. Tercih edilmeyen riskli bir yöntem.

// // // Text Node --- Sayfanın başına, elementin başına, sonuna, ortasına istediğimiz yere ekleyebiliriz. Daha sağlıklı yöntem.

// // const text = document.createTextNode("Naber"); // Bir text notu oluşturduk.
// // cardBody.appendChild(text); // appenChild en son elementten sonra bir tane daha element ekler.
// // console.log(cardBody);


// console.log(newLink);

// ************* Dinamik Element Silme ***************

// const todoList = document.querySelector("ul.list-group"); // ul lerden class'ı list-group olanı seçtik.
// const todos = document.querySelectorAll("li.list-group-item"); // li'lerin altındaki tüm list-group-item olanları seçtik. Hepsini alır.

// // Remove Metodu

// // todos[0].remove(); // li etiketlerinden indexi 0 olanı sildi. Yani 1.yi

// // Remove Child

// // todoList.removeChild(todoList.lastElementChild); // Son elemanı siler
// todoList.removeChild(todos[3]);



// console.log(todos);
// console.log(todoList);

// *************** Dinamik Element Değiştirme *******************
{
    /* <h5 class="card-title" id="tasks-title">Todolar</h5> */
}
// Replace 

// İki tane card-body olduğu için All kullandık.
// const cardBody = document.querySelectorAll(".card-body")[1]; // 1. indexteki olanı aldık
// const newElement = document.createElement("h3"); // Yeni bir element oluşturduk

// newElement.className = "card-title";
// newElement.id = "tasks-title";
// newElement.textContent = "Yeni Todolar";

// // Eski Elementi Seçme. (Değiştirilecek olan)

// const oldElement = document.querySelector("#tasks-title"); // değişecek olan element seçildi.

// cardBody.replaceChild(newElement,oldElement); // Eski element olan oldElement'i newElement ile değiştirdi.

// console.log(newElement);


// ****************** Dinamik Attribute Değiştirme,Silme,Ekleme *********************

const todoInput = document.getElementById("todo");
let element;


element = todoInput;
element = todoInput.classList;

// todoInput.classList.add("newClass"); // Yeni bir class ekledik.
// todoInput.classList.add("newClass2");
// todoInput.classList.remove("form-control"); // form-control class'ını sildik.



element = todoInput;
element = todoInput.placeholder;
element = todoInput.getAttribute("placeholder"); // placeholder içine yazılanı getirdi.

todoInput.setAttribute("placeholder","Naber"); // placeholder içinde yazan değeri değiştirdik.
todoInput.setAttribute("title","Input"); // Yeni bir attribute ekledik.
todoInput.removeAttribute("name"); // name olan attribute kaldırıldı


element = todoInput;
// element = todoInput.hasAttribute("required"); // Böyle bir attribute var mı diye baktı. Varsa true yoksa false döner.


console.log(element);