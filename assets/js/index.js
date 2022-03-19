import Aguila from './Aguila.js'
import Leon from './Leon.js'
import Lobo from './Lobo.js'
import Oso from './Oso.js'
import Serpiente from './Serpiente.js'

(async () => {
    const url = "http://127.0.0.1:3000/animales.json"
    const getAnimales = async (url) => {
        const respuesta = await fetch(url)
        const resultado = await respuesta.json()
        return resultado
    }

    const animales = await getAnimales(url)
    console.log(animales)

    document.querySelector('#btnRegistrar').addEventListener('click', () => {
        let nombre = document.querySelector('#animal')
        let anios = document.querySelector('#edad')
        let comentario = document.querySelector('#comentario')
        let card = document.querySelector('#preview')
    })
})()


