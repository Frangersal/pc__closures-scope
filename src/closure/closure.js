function greeting() {
    let username = 'Francisco';
    function displayUsername() {
        console.log('Hello ' + username);
    }
    return displayUsername;
}

const g = greeting();

console.log(g); // [Function: displayUsername] la definicion de la funcion
console.log(g()); // Hello Francisco