let value;

const firstName = "Yaşar";
const lastName = "Atalay";

const langs = "Java,Delphi,React";

value = firstName + lastName;
value = firstName + " " + lastName;

value = "Yaşar Atalay ";
value += "ÜÜÜ";

value = firstName.length;
value = firstName.concat(" ",lastName," ","Caz"); // firstName + " " + lastName; gibi kullanım
value = firstName.toLowerCase(); // tüm karakterleri küçük karakter yaptı
value = firstName.toUpperCase(); // hepsini büyük karakter yaptı

value = firstName[0]; //0.indexteki karakteri verir.
value = firstName[2]; //2.indexteki karakteri verir

value = firstName[firstName.length-1]; // stringin son elemanını alır

// Index Of

// Büyük küçük harfe duyarlıdır. Yoksa -1 verir Unutma!
value = firstName.indexOf("ş"); // Ş karakterinin kaçıncı indexte olduğunu söyler. 
value = firstName.indexOf("Y"); // y karakterinin kaçıncı indexte olduğunu söyler. 

// Char At

value = firstName.charAt(0); // 0. Indexte hangi karakter varsa onu verir
value = firstName.charAt(firstName.length-1); // Son karakteri verir.

// Split
// Virgüller ile ayrılmış elemanları tek tek alabiliriz aşağıdaki gibi.

value = langs.split(",");

// Replace - Değiştirmeye yarar

value = langs.replace("Delphi","CSS"); // Delphi'yi CSS olarak değiştirdi.

// Includes - Sorgulamaya yarar

value = langs.includes("Delphi"); // string içinde Delphi varsa True döner.
value = langs.includes("Yaşar"); // String içinde Yaşar olmadığı için False döner.


console.log(value);