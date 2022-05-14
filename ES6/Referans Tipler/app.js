// Referans veri tipleri = Bellekteki yere göre karşılaştırma yapar
// Primiti veri tipleri = Değere göre karşılaştırma yapar

// let a = "Yaşar";
// let b = "Yaşar";

// if (a===b){
//     console.log("Eşit");
// }

// let a1 = [1, 2, 3, 4, 5];
// let a2 = [1, 2, 3, 4, 5];

// if (a1 === a2) {
//     console.log("Eşit");
// }

// const p1 = {
//     name: "Yaşar",
//     age: 26
// }
// const p2 = {
//     name: "Yaşar",
//     age: 26
// }

// if (p1 === p2) {
//     console.log("Eşit");
// }

const cities = new Map();

const key = [1, 2, 3];
cities.set("Antalya", 7);
cities.set("Ankara", 6);
cities.set([1, 2, 3], "Array");
cities.set(key, "Array")

//console.log(cities.get("Ankara")); // bu bilgi gelir
//console.log(cities.get([1, 2, 3])); // değer gelmez bellekte aynı yeri tutmuyor
console.log(cities.get(key)); // Veri gelir