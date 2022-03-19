class Animal {
    constructor(nombre, edad, img, comentarios, sonido) {
        this._nombre = nombre
        this._edad = edad
        this._img = img
        this._comentarios = comentarios
        this._sonido = sonido
    }
    get nombre() {
        return this._nombre
    }
    get edad() {
        return this._edad
    }
    get img() {
        return this._img
    }
    get sonido() {
        return this._sonido
    }
    set comentarios(comentarios) {
        this._comentarios = comentarios
    }
}

class Leon extends Animal{
  grunir() {
    console.log(this.sonido)
  }
}

class Lobo extends Animal{
  aullar() {
    console.log(this.sonido)
  }
}

const animal = new Leon('Leon Canito', 2, 'Leon.jpg', 'algun comentario', 'SonidoDelLeon.mp3')

animal.grunir()

const animal2 = new Lobo('Lobo Canito', 2, 'Lobo.jpg', 'algun comentario', 'SonidoDelLobo.mp3')

animal2.aullar()