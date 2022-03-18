import Animales from "./Animales.js"

class Aguila extends Animales {
    constructor(nombre, edad, img, comentarios, sonido, chillar) {
        super(nombre, edad, img, comentarios, sonido)
        this._chillar = chillar
    }
    get chillar(){
        return this._chillar
    }
    Sonido() {
       // const sonido = this.getSonido()
        //this.setSonido()
    }
}

