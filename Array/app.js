let value;

const numbers = [43, 56, 33, 23, 44, 35, 5];

// const numbers2 = new Array(1, 2, 3, 4, 5, 6, 7);

const langs = ["Pyhton", "Delphi", "React", "JavaScript"];

const a = ["Merhaba", 22, null, undefined, 3.14];

value = numbers.length;

value = numbers[0];
value = numbers[2];
value = numbers[numbers.length - 1];

// Herhangi bir indexteki değeri değiştirme

numbers[2] = 1000;
value = numbers;

// Index Of

value = numbers.indexOf(1000);

// Array sonuna değer ekleme

numbers.push(2000);
value = numbers;

// Array başına değer ekleem

numbers.unshift(1);
value = numbers;

// Array sonundan değer silme

numbers.pop();
value = numbers;

// Array başından bir değer silme

numbers.shift();
value = numbers;

// Array başından istediğimiz kadar index silme

numbers.splice(0, 3);
value = numbers;

// Array tam tersine çevirme

numbers.reverse();
value = numbers;

// Array sıralama yapma

value = numbers.sort(); // İlk rakamına bakar. 23 44 ise 2 ve 4 e bakar. ilk karaktere göre

value = numbers.sort(function (x, y) { // Küçükten büyüğe doğru sıralama
    return x - y;
});

value = numbers.sort(function (x, y) { // Büyükten küçüğe doğru sıralama
    return y - x;
});



console.log(value);