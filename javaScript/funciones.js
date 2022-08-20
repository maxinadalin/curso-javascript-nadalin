
//-------------------------INGRESO DUEÑO-------------------//
let usuariojefe = "jefe"
let passwordjefe = "jefe"

let ingresarjefe = document.querySelector("#enviarjefe")
ingresarjefe.addEventListener("click",iniciojefe);
ingresarjefe.addEventListener("enter",iniciojefe);

function iniciojefe(){
if (document.querySelector(".nombreuserjefe").value !== usuariojefe) {
    document.querySelector(".strong").style.color ="red"
}
else if (document.querySelector(".passuserjefe").value !== passwordjefe) {
    document.querySelector(".strong").style.color = "red"
}
else{
    location.href = "./dueño.html"
}

}
