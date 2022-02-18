let value;

const programmer = {
    name: "Yaşar",
    firstname: "Atalay",
    department: "Sejour",
    salery: 9000,
    langs: ["Delphi", "Css", "Html"],

    address: {
        city: "Antalya",
        street: "Kültür/Kepez"
    },

    work: function () {
        console.log("Promramcı Çalışıyor...");
    }
}

value = programmer;

value = programmer.department; // Genel kullanım.
value = programmer["department"];

value = programmer.langs;
value = programmer.address.city;

programmer.work();

const programmers = [
    {name: "Yaşar",age:25},
    {name: "Barış",age:30}

];

value = programmers[0].name;

console.log(value);