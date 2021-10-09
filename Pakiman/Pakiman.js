class Animal{
    constructor(nombre,tipo){
        this.nombre = nombre;
        this.tipo = tipo;
    }

    come(){
        return "Esta comiendo el animal " + this.nombre
    }
}

class Pakiman extends Animal{
    constructor(nombre, tipo){
        super(nombre, tipo);
    }
    comiendo(){
        return this.nombre + " esta comiendo hierba";
    }
}

var paki = new Pakiman("Cauchin", "Tierra");
console.log(paki.come());
console.log(paki.comiendo());
console.log(paki);