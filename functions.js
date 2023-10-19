const math= {};

//define la funcion sumar
function add(a,b) {
    return a + b;
}

//define la funcion restar
function substract(a,b) {
    return a - b;
}

//defie la funcion multiplicar 
function multiply(a,b) {
    return a * b;
}

// define la funcion dividir
function divide(a,b) {
    if(b == 0){
        return "Error, no se puede dividir ente 0"
    }else{
    return a / b;
    }
}

exports.add = add; 
exports.substract = substract; 
exports.multiply = multiply;
exports.divide = divide; 

