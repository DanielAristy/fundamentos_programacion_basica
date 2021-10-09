class Animal{
    constructor(nombre,tipo){
        this.nombre = nombre;
        this.tipo = tipo;
    }

    come(){
        return this.nombre + " esta comiendo "; 
    }
}

class Pakiman extends Animal{
    constructor(nombre, tipo){
        super(nombre, tipo);
    }
    comiendo(){
        return this.come() + "hierba";
    }
}

var paki = new Pakiman("Cauchin", "Tierra");
console.log(paki.comiendo());
console.log(paki);