// const object = new Object(); // Object Literal
// const object2 = new Object();
// object.name = "Yaşar";
// console.log(object);

function Employee(name, age) {
    this.name = name;
    this.age = age;
    this.showInfos = function () {
        console.log("Bilgiler Gösteriliyor");
    }
    this.toString = function () {
        console.log("To string employee objesi");
    }
}

const emp1 = new Employee("Yaşar", 26);
console.log(emp1);

console.log(emp1.toString());