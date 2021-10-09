/**TODO
 * 1. Dibujar vacas, cerdos y pollos Aleatoriamente ✔
 * 2. Un cerdo se mueva por teclado
 */

const vp = document.getElementById("villaplatzi");
const papel = vp.getContext("2d");
const vaca = {
    url: "https://static.platzi.com/media/files/uso-y-carga-de-imagenes-en-canvas/vaca.png",
    load: false
}

const pollo = {
    url: "https://static.platzi.com/media/files/uso-y-carga-de-imagenes-en-canvas/pollo.png",
    load: false
}

const cerdo = {
    url: "https://static.platzi.com/media/files/uso-y-carga-de-imagenes-en-canvas/cerdo.png",
    load: false
}

const fondo = {
    url: "https://static.platzi.com/media/files/uso-y-carga-de-imagenes-en-canvas/tile.png",
    load: false
}

//Objetos
fondo.imagen = new Image();
fondo.imagen.src = fondo.url;
fondo.imagen.addEventListener("load", cargarFondo);

vaca.imagen = new Image();
vaca.imagen.src = vaca.url;
vaca.imagen.addEventListener("load", dibujarVacas);

pollo.imagen = new Image();
pollo.imagen.src = pollo.url;
pollo.imagen.addEventListener("load", dibujarPollos);

cerdo.imagen = new Image();
cerdo.imagen.src = cerdo.url;
cerdo.imagen.addEventListener("load", dibujarCerdos);

//Métodos
function aleatorio(min,max){
    return  Math.floor(Math.random()*(max - min + 1 )) + min;
}
var cantidad = aleatorio(5, 25)
function dibujar(){
    if(fondo.load){
        papel.drawImage(fondo.imagen,0,0); 
    }
    if(vaca.load){
        for (let index = 0; index < cantidad; index++) {
            var x = aleatorio(0,7) * 60
            var y = aleatorio(0,7) * 60
            papel.drawImage(vaca.imagen,x,y); 
        } 
    }
    if(pollo.load){
        for (let index = 0; index < cantidad; index++) {
            var x = aleatorio(0,7) * 60
            var y = aleatorio(0,7) * 60
            papel.drawImage(pollo.imagen,x,y); 
        } 
    }
    if(cerdo.load){
        for (let index = 0; index < cantidad; index++) {
            var x = aleatorio(0,7) * 60
            var y = aleatorio(0,7) * 60
            papel.drawImage(cerdo.imagen,x,y); 
        } 
    }
}

function cargarFondo(){
    fondo.load = true;
    dibujar();
} 

function dibujarVacas(){ 
   vaca.load = true;
   dibujar();
}
function dibujarPollos(){ 
    pollo.load = true;
    dibujar();
}

function dibujarCerdos(){ 
    cerdo.load = true;
    dibujar();
} 