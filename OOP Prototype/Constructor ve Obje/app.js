//  console.log(this);

// const emp1 = { // Object Literal
//     name: "Yaşar",
//     age: 25,
//     salary: 5000,
//     showInfos: function () {
//         console.log("Bilgiler Gösteriliyor");
//     }
// }
// const emp2 = {
//     name: "Tayfun",
//     age: 28,
//     salary: 10000
// }


// // emp1.year = 2022;
// // emp1.showInfos();
// console.log(emp1);

function Employee(name, age, salary) { // Yapıcı Fonksiyon - Constructor
    this.name = name;
    this.age = age;
    this.salary = salary;

    this.showInfo = function () {
        console.log(this.name, this.age, this.salary);
    };
}

const emp1 = new Employee("Yaşar", 26, 5000);
const emp2 = new Employee("Tayfun", 26, 10000);

emp1.showInfo();
emp2.showInfo();