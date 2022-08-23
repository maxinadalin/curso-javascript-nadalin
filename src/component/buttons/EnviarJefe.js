import { nombreUserJefe, passUserJefe, wrongData } from "../input/jefeForm.js";
import { jefeLogin } from "../../data/constants.js";

export const ingresarJefe = document.querySelector("#enviarjefe")

export function inicioJefe(){
    if (nombreUserJefe.value !== jefeLogin.user) {
        wrongData.style.color ="red"
    }
    else if (passUserJefe.value !== jefeLogin.password) {
        wrongData.style.color = "red"
    }
    else {
        location.href = "./dueño.html"
    }
    
}