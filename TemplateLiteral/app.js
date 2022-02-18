const name = "Yaşar Atalay";
const departman = "Sejour";
const salary = 9000;

// const a = "İsim: " + name + "\n" + "Departman: " + departman + "\n" + "Maaş: " + salary

// const a = `İsim:${name}\nDepartman:${departman}\nMaaş:${salary}`

// const html = "<ul>" + 
//              "<li>" + name +"</li>"+
//              "<li>" + departman +"</li>"+
//              "<li>" + salary +"</li>"+
//              "</ul>"

function a(){
    return "Merhaba";
}

const html = `
                <ul>
                <li>${name}</li>
                <li>${departman}</li>
                <li>${salary}</li>
                <li>${a()}</li>
                </ul>    
             `;


document.body.innerHTML = html;

// console.log(a);