function fruits() {
    // un bloque es lo que este dentro de un { } ej. if, for, while, etc.
    if (true) {
        var fruit1='Apple';  //  function scope
        let fruit2='Kiwi';  // block scope
        const fruit3='Banana'; // block scope
    }
    
    // var si permite acceder a la variable fruit1
    console.log(fruit1); // Apple
    console.log(fruit2); // ReferenceError: fruit2 is not defined
    console.log(fruit3); // ReferenceError: fruit3 is not defined   

}

fruits();