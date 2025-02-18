var firstName;  // Se le declara un valor undefined
firstName = 'Francisco'; // Se le asigna un valor
console.log(firstName); // Francisco

var lastName = 'Salinas'; // declarar / asignar
lastName = 'Mendoza'; // re-asignar
console.log(lastName); // Mendoza

var secondName = 'Gerardo'; // declarar / asignar
var secondName = 'Eduardo'; // re-asignar
console.log(secondName); // Eduardo


// let y const son block scope, no se pueden re-declarar

// let
let fruit1 = 'Apple'; // declarar / asignar
fruit1 = 'Kiwi'; // re-asignar
// let fruit1='Banana'; // re-declarar. NO se puede re-declarar una variable con let
console.log(fruit1); // Kiwi

// const
const animal = 'Dog'; // declarar / asignar
// animal = 'Cat'; // re-asignar. NO se puede re-asignar una variable con const
// const animal = 'Snake' // re-declarar. NO se puede re-declarar una variable con const
console.log(animal); // Dog


// No estamos reasignando ni redeclarando, la referencia existe sobre el valor 
// que es un arreglo, y en un arreglo pueden cambiar los valores
const vehicle = [];
vehicle.push('Car'); // se puede modificar un array o un objeto que es const 
console.log(vehicle); // [ 'Car' ]
vehicle.pop();
console.log(vehicle); // []
