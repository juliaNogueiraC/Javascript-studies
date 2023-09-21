/*
two steps:
1; declarion var, let, const
2. assigment =
*/

let age = 12; // p string ""
let name = "peter";
let student = false;

//para printar no console:
console.log(age);

console.log("age");

console.log("hi my name is " + name + " ,i am " + age + " old");
console.log("hi my name is ",  name, "i am ", age, "old");
console.log(student);

age = age +1;

console.log(age);
// se for let. ele soma, se for string, ele concatena!


// para pegar um texto do html, ou  seja pra aparecer na tela e nao so no console, cria um id e faz isso:
document.getElementById("idAqui").innerHTML = "texto " + name;