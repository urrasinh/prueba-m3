import Aguila from './Aguila.js'
import Leon from './Leon.js'
import Lobo from './Lobo.js'
import Oso from './Oso.js'
import Serpiente from './Serpiente.js'

(async () => {
    const url = "http://127.0.0.1:3002/animales.json"
    const getAnimales = async (url) => {
        const respuesta = await fetch(url)
        const resultado = await respuesta.json()
        return resultado
    }

    const animales = await getAnimales(url)
    console.log(animales)

    document.querySelector('#btnRegistrar').addEventListener('click', () => {
        const nombre = document.querySelector('#animal')
        const anios = document.querySelector('#edad')
        const comentarios = document.querySelector('#comentarios')
        const card = document.querySelector('#preview')

        let animalNuevo;
        const buscarAnimal = animales.animales.find((animal) => animal.name === nombre.value)
        if (nombre.value === "Leon") {
            animalNuevo = new Leon(nombre.value,
                 anios.value, buscarAnimal.imagen, comentarios.value, buscarAnimal.sonido)
        }
        else if (nombre.value === "Lobo") {
            animalNuevo = new Lobo(
                nombre.value,
                anios.value,
                comentarios.value
            )
        }
        else if (nombre.value === "Aguila") {
            animalNuevo = new Aguila(
                nombre.value,
                anios.value,
                comentarios.value
            )
        }
        else if (nombre.value === "Oso") {
            animalNuevo = new Oso(
                nombre.value,
                anios.value,
                comentarios.value
            )
        }
        else {
            animalNuevo = new Serpiente(
                nombre.value,
                anios.value,
                comentarios.value
            )
        }
        console.log(animalNuevo)
    })
})()
