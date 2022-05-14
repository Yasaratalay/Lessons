// Spread Operator

// const langs = ["Yaşar", "Lale", "Tayfun","Mustafa"];

// console.log(langs[0], langs[1], langs[2]);

// spread operator kullanımı

// console.log(...langs); // console.log(langs[0], langs[1], langs[2]); kullanımı gibi ama kısa hali.

// const langs2 = ["Barış","Ali",langs[0], langs[1], langs[2]];
// const langs2 = ["Barış","Ali",...langs]; // const langs2 = ["Barış","Ali",langs[0], langs[1], langs[2]]; kısaltılmış hali.

// console.log(langs2);


// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// const [a,b,...numbers2] = numbers; // 1 2 alır geri kalanını numbers2 diye bir arraya atar

// console.log(a,b);

// console.log(numbers2); // 1 2 haric kalanını alır

// const addNumbers = (a,b,c) => {
//     console.log(a+b+c);
// }
// const numbers = [100,200,300];

// //addNumbers(numbers[0],numbers[1],numbers[2]);
// addNumbers(...numbers); // addNumbers(numbers[0],numbers[1],numbers[2]); bunun kısa hali