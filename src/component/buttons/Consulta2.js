import { ventacajas } from "../../data/constants.js"
import { Nmenor } from "../input/Nmenor.js"

export const consultar2 = document.querySelector("#Consulta2")

export function cons2(){
    let final = Nmenor.value
    let numeros = ventacajas;
    let numeross =  numeros.join(" \n- ")
    Nmenor.value ="Las cajas que vendieron por un valor menor a " + final+ " son: \n- " + numeross
    Nmenor.style.fontSize = "20px"
}