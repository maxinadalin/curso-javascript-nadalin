import { lblcajas } from "../input/LblCajas.js"
import { ventacajas } from "../../data/constants.js"

export const consultar1 = document.querySelector("#Consulta1")

export function todas(){
    const cajas = ventacajas.slice();
    let cajass = cajas.join(" \n- ")
    lblcajas.value = "El numero de ventas realizadas por cajas de hoy fueron:\n- " + cajass
    lblcajas.style.fontSize = "20px"
}