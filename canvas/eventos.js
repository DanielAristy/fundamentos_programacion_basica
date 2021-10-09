/**Dibujando linear a travez de eventos de teclado */
const teclas = {
    UP: 38,
    DOWN: 40,
    LEFT: 37,
    RIGHT: 39 
};

document.addEventListener("keydown", dibujarFigura);
const cuadrado = document.getElementById("canvasFlechas");
const lienzo = cuadrado.getContext("2d");
var x = 250;
var y = 250;

dibujarLinea("red", 249, 249, 251, 251, lienzo);

function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal, lienzo){
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.lineWidth = 3;
    lienzo.moveTo(xinicial, yinicial);
    lienzo.lineTo(xfinal, yfinal);
    lienzo.stroke();
    lienzo.closePath();
}
function dibujarFigura(event){
    var color = "blue";
    var movimiento = 5;
    switch(event.keyCode){
        case teclas.LEFT:
            dibujarLinea(color,x, y, x - movimiento, y, lienzo);
            x = x - movimiento;
            break;
        case teclas.UP:
            dibujarLinea(color,x, y, x, y - movimiento, lienzo);
            y = y - movimiento;
            break;
        case teclas.RIGHT:
            dibujarLinea(color,x, y, x + movimiento, y, lienzo);
            x = x + movimiento;
            break;
        case teclas.DOWN:
            dibujarLinea(color,x, y, x, y + movimiento, lienzo);
            y = y + movimiento;
            break;
    }
}