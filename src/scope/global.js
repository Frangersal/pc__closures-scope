// Variables

var a; // declarando
var b = 'b'; // declaramos y asignamos
b = 'bb'; // reasignando
var a = 'aa'; // redeclarando

// Global Scope
var fruit = 'Apple'; // Global Scope
console.log(fruit); 

function bestFruit() {
  console.log(fruit); 
}

bestFruit(); // Apple


// se puede creara una variable global es cuando no tenemos cuidado a la hora de declarar
// cuando no declaramos la variable y simplemente la asignamos, se crea una variable global


function countries() {
  country = 'Colombia'; // Global porque no se declaró con var
  console.log(country);
}

countries(); // Colombia
console.log(country); // Colombia