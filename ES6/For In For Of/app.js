// For In ve For Of arasındaki fark:
// For in index(key) değerini verir. yani 0 1 2 3 4. Yaşar = 0 1 2 3 4
// For of value yani değerini verir. y a ş a r gibi. Yaşar = y a ş a r not: objelerde kullanılamaz.

const person = {
    name: "Yaşar",
    age: 25,
    salary: 5000
}

const langs = ["Pyhton", "Delphi", "C#"];
const name = "Yaşar";

// *** For In
// Obje üzerinde gezinme 
// for(let prop in person){
//     console.log(prop,person[prop]);
// }

// Array in indexleri üzerinde geziniyoruz
// for (let index in langs) {
//     console.log(index,langs[index]);
// }

// String
// for(let index in name){
//     console.log(index,name[index]);
// }

// *** For Of
// Not: Objelerin üzerinde gezilemez. Sadece arraye benzeyen veriler üzerinde gezilir.

// Object
// Bu şekilde kullanım olamaz. Çünkü bu bir obje.
// for(let value of person){
//     console.log(value);
// }

// Array
// for(let value of langs){
//     console.log(value);
// }

// String

// for (let karakter of name) {
//     console.log(karakter);
// }