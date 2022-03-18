class Animales {
    constructor(nombre, edad, img, comentarios, sonido) {
        this._nombre = nombre
        this._edad = edad
        this._img = img
        this._comentarios = comentarios
        this._sonido = sonido

        this.getNombre = () => _nombre
        this.getEdad = () => _edad
        this.getImg = () => _img
        this.getSonido = () => _sonido
        
        this.setComentarios = (comentarios) => (_comentarios = comentarios)

    }
    get _nombre() {
        return this.getNombre()
    }
    get _edad() {
        return this.getEdad()
    }
    get _img() {
        return this.getImg()
    }
    get _sonido() {
        return this.getSonido()
    }
    set _comentarios(comentarios) {
        return this.getComentarios(comentarios)
    }
}

export default Animales