let value;

const now = new Date(); // Şu anki zamanı almamızı sağlar.

const date1 = new Date("8-15-1996");

const date2 = new Date("August 15 1996");
 
const date3 = new Date("8/15/1996");

value = date1;

value = date1.getMonth();
value = date1.getDate();
value = date1.getDay();

value = date1.getHours();
value = date1.getMinutes();
value = date1.getSeconds();
value = date1.getMilliseconds();

date1.setMonth(1);
date1.setDate(10);
date1.setFullYear(2000);
date1.setHours(0);
date1.setMinutes(15);
date1.setSeconds(30);

value = date1;


console.log(value);