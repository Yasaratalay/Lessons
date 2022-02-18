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

let element;

// *** ID'e göre seçme

element = document.getElementById("yasar");
element = document.getElementById("baris");

// *** Class'a göre seçme

element = document.getElementsByClassName("remove")[0];
element = document.getElementsByClassName("C");

// *** Element Tag'e göre seçme

element = document.getElementsByTagName("div");

// Query Selector - Css Selector - Tek bir element döner. İlk gördüğünü alır.

element = document.querySelector("#yasar");
element = document.querySelector("#baris");

element = document.querySelector(".has");
element = document.querySelector("li");

// Query Selector - Css Selector - Tüm elementleri döner
element = document.querySelectorAll("li"); // Node List


element.forEach(function(el){
    console.log(el);
});


console.log(element);