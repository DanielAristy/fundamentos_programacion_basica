const numeros = 100;
var divisible = false;

for (var i = 1; i <= numeros; i++) {
    divisible = false;
    if (esDivisible(i,3)) {
        mensaje("Fizz ");
        divisible = true;
    }

    if (esDivisible(i,5)) {
        mensaje("Buzz");
        divisible = true;
    }

    if (!esDivisible(i,3) && !esDivisible(i,5)) {
        mensaje(i);
    }
    
    mensaje("<br/>");
}

function mensaje(mensaje){
    return document.write(mensaje);    
} 

function esDivisible(num, divisor){
   return (num % divisor == 0) ? true : false;
}