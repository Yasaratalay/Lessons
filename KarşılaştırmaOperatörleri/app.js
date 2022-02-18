// Karşılaştırma Operatörleri

// == 
// ===
// !=
// !==
// >
// <
// >=
// <=


// console.log(2 == 2)
// console.log("js" == "java");

// console.log(2 == "2"); // True döner
// console.log(2 === "2"); // False döner. Tipleride kontrol eder

// console.log(2 != 4); // 2 4 e eşit olmadığı için true döner

// Mantıksal Bağlaçlar

// Not Operatörü

// console.log(!(2 == 2)); // True du ! ile false geldi. ! tersine çeviriyor.

// And Operatörü

// console.log((2 == 2)) || ("Ahmet" == "Ahmet");

// Or Operatörü

// console.log((4 == 2) || ("Ahmet" == "Ahmet"));

// IF bloğu

// const error = true;

// if (error == true) {
//     console.log("True dur");
// }
// else{
//     console.log("True değil");
// }

// const user = "yasar";

// if (user === "yasar") {
//     console.log("Başarılı");
// }
// else{
//     console.log("Başarılı değil");
// }

// const proccess = "3";

// if (proccess === "1") {
//     console.log("İşlem 1");
// } else if (proccess === "2") {
//     console.log("işlem 2");
// } else {
//     console.log("Böyle sayı yok");
// }

const number = 101;

// if (number === 100) {
//     console.log("100 e eşit");
// } else {
//     console.log("100 e eşit değil");
// }

// ****************** Ternary Operatör *****************
// Tek if li bloklarda böyle kullanılabilir.

// console.log(number === 100 ? "100'e Eşit." : "100'e Eşit Değil");

// Tek işlem olacağı zaman süslü parantezlere gerek yok
if (number === 10)
    console.log("Sayı 100");