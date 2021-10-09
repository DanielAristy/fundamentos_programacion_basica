class Animal{
    constructor(nombre,tipo){
        this.nombre = nombre;
        this.tipo = tipo;
    }

    come(){
        return "Esta comiendo el animal " + this.nombre
    }
}