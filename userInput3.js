// how to accept user input

// easy way with window prompt
/*
let name = window.prompt("your name?")
console.logo(name);


//difficult way html textbox
let name;
document.getElementById("myButton").onclick = function(){
  //quando clicar o botão
  
  name = document.getElementById("myText").value;
  // esse pega o nome digitado no input do html
  console.log(name);
  // document.getElementById("myLabel").innerHTML = "hi" + name;
  // ele muda o nome da legenda da caixa quando inserimos um nome
  
}

*/
//convert string to other type
let age = window.prompt ("old are u?");
age = number(age);
console.log(typeof age);
age += 1;
//

let x;
x = number("3.12");
console.log(x, typeof x);