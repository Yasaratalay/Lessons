// ************ While döngüleri **************

// i = 0;

// while (i < 10) {
//     console.log(i);

//     i++;
// }


// let i = 10;

// while (i > 0) {
//     console.log(i);

//     i--;
// }

// Break ve Continue

let i = 0;

// while (i < 10) {
//     console.log(i);
//     if (i == 5) {
//         break; // i = 5 olduğu zaman while sonlandırılır
//     }
//     i++;
// }

// while (i < 10) {
//     if (i == 3 || i == 5) {
//         i++;
//         continue;
//     }
//     console.log(i);

//     i++;
// }

// *************** Do while döngüleri ******************

// let i = 0;

// do {
//     console.log(i);
//     i++;
// } while (i < 10);

// ************ For Döngüleri *****************

// const langs = ["Delphi", "JavaScript", "React"];

// let index = 0;

// while (index < langs.length) {
//     console.log(langs[index]);

//     index++;
//}

// for (let index = 0; index < langs.length; index++) {
//     console.log(langs[index]);
// }


// langs.forEach(function (lang, index) {
//     console.log(lang, index); // array içindekileri ve indexlerini yazdırdı.
// });


// const users = [
//     {name:"Yaşar",age:25},
//     {name:"Barış",age:30},
//     {name:"Tayfun",age:27}
// ];

// //users içindeki bilgileri aldık.
// const names = users.map(function(user){
//     return user.name;
// });

// const ages = users.map(function(user){
//     return user.age;
// });

// console.log(names);
// console.log(ages);


// const user = {
//     name:"Yaşar",
//     age:26
// };

// for(let key in user){
//     console.log(key,user[key]);
// }