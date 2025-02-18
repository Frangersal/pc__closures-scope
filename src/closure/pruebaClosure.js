function sumWithClosure(firstNum) {
    function suma(secondNum) {
        if (secondNum == undefined) {
            secondNum = 0;
        } 
        return firstNum + secondNum;
    }
    return suma;

}
let resultado = sumWithClosure(90)();
console.log(resultado);