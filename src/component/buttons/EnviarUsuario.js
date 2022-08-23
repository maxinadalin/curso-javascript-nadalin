import { nombreUser, passUser, wrongData } from "../input/usuarioForm.js";
import { userLogin } from "../../data/constants.js";

export const ingresar = document.querySelector("#enviar")

export function inicio(){
if (nombreUser.value !== userLogin.user) {
    wrongData.style.color = "red"
}
else if (passUser.value !== userLogin.password) {
    wrongData.style.color = "red"
}
else{
    location.href = "./pages/tortas.html"
}

}