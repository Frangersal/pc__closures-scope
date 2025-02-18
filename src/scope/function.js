function greeting() {
    // Las variables declaradas dentro de una función solo pueden ser accedidas dentro de ella
    // y en funciones anidadas
    let userName='Francisco'
    console.log(userName);

    // En el if siendo que esta anidada en la función, puede acceder a la variable userName
    if (userName === 'Francisco') {
        console.log(`Bienvenido ${userName}!`);
    }
}

greeting();

// El alcance de la variable userName es solo dentro de la función greeting
console.log(userName); 