import { ventacajas } from "../../data/constants.js"
import { Nmenor } from "../input/Nmenor.js"




export const consultar2 = document.querySelector("#Consulta2")


export function cons2(){
    let final = document.querySelector("#Nmenor").value
function cons3(final){
  let f = 0
          let resultado = new Array();
          
          for (let i = 0; i < ventacajas.length; i++) {
              if (ventacajas[f]< final) {
                  resultado[i] = ventacajas[f];
              }  
              f = f + 1
          }
      
          return resultado;
         
}
let numeros = cons3(final);
let numeross =  numeros.join(" \n- ")
document.querySelector("#MNmenor").value ="Las cajas que vendieron por un valor menor a " + final+ " son: \n- " + numeross
document.querySelector("#MNmenor").style.fontSize = "20px"
}