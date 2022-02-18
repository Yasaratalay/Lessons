// Fonksiyon Tanımlama

// function merhaba() {
//     console.log("Merhaba Dünya");
// }

// merhaba(); // Fonksiyon Çağırma ( Function Call )

//Parametre vererek function çağırma
// function merhaba(name,age) {
//     if(typeof name === "undefined") name = "İsim bulunamadı.";
//     if(typeof age === "undefined") age = "Yaş bulunamadı.";
//     console.log(`İsim:${name} Yaş:${age}`);
// }

// merhaba("Yaşar",25); // Fonksiyon Çağırma ( Function Call )
// merhaba();


//Sabit parametre atadık. Boş gelirse bu değerler gelir.
// function merhaba(name="İsim Yok",age="Yaş yok") {
//     console.log(`İsim:${name} Yaş:${age}`);
// }

// merhaba("Yaşar",25); // Fonksiyon Çağırma ( Function Call )
// merhaba("Ali");


// ****** Return mutlaka fuctionlarda olmalı. Yoksa dışarıya değer göndermez !! ********
// function KareAl(x) {
//     return x * x;

//     console.log("Naber"); // Yukarda return olduğu için bu satır çalışmaz. Yukarısı sonlandırıldı çünkü.
// }

// function cube(x) {
//     return x * x * x;
// }

// let a = cube(KareAl(12));

// console.log(a);


// function Merhaba(){
//     return "Merhaba";
// }
// console.log(Merhaba());

// ********************* Function Expression ******************

// const merhaba = function (name) {
//     console.log("Merhaba" +" "+ name);
// }

// merhaba("Yaşar");

// ******************* Immediately Invoked Function Expression *************
// Kısa Dı (IIFE) - Tanımlandığı yerde çalışan fonksiyon demek.

// (function (name) {
//     console.log("Merhaba" + name);
// })("Yaşar");

// ********************* Obje

const database = {
    host: "localhost",
    add: function () {
        console.log("Eklendi");
    },
    get: function () {
        console.log("Elde edildi");
    },
    update: function (id) {
        console.log(`Id:${id} Güncellendi.`);
    },
    delete: function (id) {
        console.log(`Id:${id} Silindi.`);
    }
}


console.log(database.host);

database.add();
database.delete(10);