import{listaBebidas} from "../../data/bebidas.js"
import {listaTortas} from "../../data/tortas.js"

document.querySelector("#ConsultarJson").addEventListener("click",cargarJasonBebidas)
document.querySelector("#ConsultarJsonTortas").addEventListener("click",cargarJasontortas)


function cargarJasonBebidas() {
    let i = 0
    for (let index = 0; index < listaBebidas.length; index++) {
        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify({
                titulo: 'listado bebidas',
                Bebida:listaBebidas[i].torta,
                precio: listaBebidas[i].precio,
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
        .then((response) => response.json())
        .then((data) => console.log(data))
        i = i + 1
    }
   
} 

function cargarJasontortas() {
    let i = 0
    for (let index = 0; index < listaTortas.length; index++) {
        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify({
                titulo:'listado tortas' ,
                Torta: listaTortas[i].torta,
                precio: listaTortas[i].precio,
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
        .then((response) => response.json())
        .then((data) => console.log(data))
        i = i + 1
    }
   
} 
   



