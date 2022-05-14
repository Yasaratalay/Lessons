// Sets = Kümeler
// Bir değeri sadece bir defa taşır. birden fazla taşıyamaz.

const mySet = new Set();

mySet.add(100);
mySet.add(100); // Bunu yazmaz
mySet.add(3.14);
mySet.add("Yaşar");
mySet.add(true);
mySet.add([1, 2, 3]);
mySet.add({
    a: 10,
    b: 20
});

const mySet2 = new Set([100, 3.4, "Yaşar"]);

// console.log(mySet);
// console.log(mySet2);

// Size
// console.log(mySet.size);

// Delete Method
// mySet.delete("Yaşar");

// console.log(mySet);

// Has Method
// console.log(mySet.has("Yaşar")); // İçinde böyle bir değer var mı bakar
// console.log(mySet.has(3.14));
// console.log(mySet.has([1,2,3])); // Bu şekilde değer olsa bile false değer verir.


// ForEach
// mySet.forEach(function (value) {
//     console.log(value);
// })

// For Of
// for (let value of mySet) {
//     console.log(value);
// }

// Setlerden Array oluşturma
// const array = Array.from(mySet);

// console.log(array);