// Mapler - Key(Anahtar) - Value(Değer)


// let myMap = new Map(); // Oluşturma

// console.log(typeof myMap);

// const key1 = "Yaşar";
// const key2 = {
//     a: 10,
//     b: 20
// };
// const key3 = () => 2;

// // Set
// myMap.set(key1, "String Değer");
// myMap.set(key2, "Object Literal Değer");
// myMap.set(key3, "Function Değer");

// Get
// console.log(myMap.get(key1));
// console.log(myMap.get(key2));
// console.log(myMap.get(key3));

// console.log(myMap);

// Map Boyutu

// console.log(myMap.size); // Kaç eleman olduğunu verir.

// const cities = new Map();

// cities.set("Antalya", 7);
// cities.set("Ankara", 6);
// cities.set("İzmir", 34);

// ForEach

// cities.forEach(function(value,key){
//     console.log(key,value);
// })

// For Of

// for(let [key,value] of cities){ // Destructing
//     console.log(key,value);
// }

// Map Keys
// for(let key of cities.keys()){
//     console.log(key);
// }

// Map Value
// for (let value of cities.values()) {
//     console.log(value);
// }

// *** Bir tane Array den bir tane Map oluşturma ***

// const array = [
//     ["key1", "value1"],
//     ["key2", "value2"]
// ];

// const lastMap = new Map(array);

// console.log(lastMap);

// *** Bir tane Mapten bir tane Array oluşturma ***

const cities = new Map();

cities.set("Antalya", 7);
cities.set("Ankara", 6);
cities.set("İzmir", 34);

const array = Array.from(cities);
// [["Antalya",7]["Ankara",6]["İzmir",34]]
console.log(array);