// let number1, number2;

// arr = [100, 200, 300, 400];

// number1 = arr[0];
// number2 = arr[1];

// Destructing
// [number1, number2] = arr; // = [100, 200, 300, 400]; gibi.

// const [number1,number2] = arr; 

// console.log(number1, number2);

// Obje Destructing

// const numbers = {
//     a: 10,
//     b: 20,
//     c: 30
// };

// const {a:n1,b:n2,c:n3} = numbers;

// console.log(n1,n2,n3); 

// Function Destructing

// const getLangs = () => ["Pyton", "Java", "Delphi"];

// const [lang1, lang2, lang3] = getLangs();

// console.log(lang1,lang2,lang3);


// Obje

const person = {
    name: "Yaşar",
    year: 1996,
    salery: 5000,
    showInfos: () => console.log("Bilgiler:")
}

const {name:isim,year:yil,salery:maas,showInfos:bilgileriGoster} = person;

console.log(isim,yil,maas);

bilgileriGoster();