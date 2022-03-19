import Animales  from './Animales.js'
import  Aguila  from './Aguila.js'
import  Leon  from './Leon.js'
import  Lobo  from './Lobo.js'
import  Oso  from './Oso.js'
import Serpiente from './Serpiente.js'



const url = "http://127.0.0.1:3000/animales.json"
const getAnimales = async (url) => {
    const respuesta = await fetch(url)
    const resultado = await respuesta.json()
    return resultado
}

getAnimales(url).then((values) => {

})