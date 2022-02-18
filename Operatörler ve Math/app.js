let value;

const value1 = 10;
const value2 = 4;

// Aritmetik Operatörler

// value = value1 + value2;
// value = value1 - value2;
// value = value1 * value2;
// value = value1 / value2;
// value = value1 % value2;

value = Math.PI;
value = Math.E;
value = Math.round(3, 76); // sayıyı yukarı yuvarlar
value = Math.round(3.5);
value = Math.round(3.2); // sayıyı aşağı yuvarlar

value = Math.ceil(3.2); // yukarı yuvarlar
value = Math.ceil(3.7);

value = Math.floor(3.8); // Aşağı yuvarlar
value = Math.floor(3.2); // Aşağı yuvarlar

value = Math.sqrt(16); // Karakökünü alır
value = Math.sqrt(31);

value = Math.abs(-10); // Mutlak değerini alır

value = Math.pow(8, 3); //8'in 3.kuvvetini alır. Yani karesini alır
value = Math.pow(4, 2); //4'in 2.kuvvetini alır. Yani karesini alır

value = Math.max(10, -1, 100, 32); // En yüksek sayıyı verir
value = Math.min(10, -1, 100, 32); // En küçük sayıyı verir

value = Math.random(); // rastgele sayi üretir. 0 ve 1 arası üretir
value = Math.random() * 20; // 0 ile 20 değerler arasında sayı üretir.
value = Math.random() * 20 + 1; // 1 ile 21 değerler arasında sayı üretir.



console.log(value);