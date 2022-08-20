let Chocotorta = parseInt(200)
let Tiramisú = parseInt(300)
let Selva = parseInt(250)
let Lemon = parseInt(350)
let coco = parseInt(400)
let cafegrande = parseInt(150)
let cafechico = parseInt(100)
let cortado = parseInt(140)
let submarino = parseInt(200)
let te = parseInt(150)
let licuado = parseInt(250)
let agua = parseInt(130)
let gaseosa = parseInt(180)
let ventacajas = [400, 600, 1300, 1600, 1800, 2300]
let sumatotal = parseInt()
let b = 0
let i = 0
let f = 0
let v = 0
let cja = ""
let cantidad1 = 0
let cantidad2 = 0
let entrar = "jefe"
let minmax = []
let totalgeneralgaseosa = parseInt() // variable que va a contenter la operacion que se realice dependiendo la opcion que elija el usuario
let totalgeneral = parseInt() // variable que va a contenter la operacion que se realice dependiendo la opcion que elija el usuario
let data = ""
let data2 = "";
let paginas = 0
let nombre = ""

const tortas = [Chocotorta, Tiramisú, Selva, Lemon, coco] // array que contiene las tortas
const liquidos = [cafegrande, cafechico, submarino, cortado, te, licuado, agua, gaseosa] // array que contiene las bebidas


/*validacion();

function validacion() {
    let validacion = prompt("1 - Si desea realizar un pedido\n2 - Desea cerrar la aplicacion")
    if (validacion === "1") {
        nombre = prompt("Ingrese su Nombre")

    } else if (validacion === "2") {
        window.close()
    }
}
    let nombre2 = document.querySelector(".h1principal");
    nombre2.innerText = "BIENVENIDOS " + nombre + " A PASTELERIA EL AMIGO";
    document.querySelector(".h1principal").style.fontSize = "40px";
    document.querySelector(".h1principal").style.textTransform = "uppercase";*/


const choco = (chocotorta, cantidad1) => (chocotorta * cantidad1) // desarrollo esta operacion para que la misma despues pueda ser llamada dentro de uuna funcion y asi poder guardarla dentro de una variable para poder ser llamada mas tarde cuando se necesite 
const tira = (Tiramisú, cantidad1) => (Tiramisú * cantidad1)
const selv = (Selva, cantidad1) => (Selva * cantidad1)
const lem = (Lemon, cantidad1) => (Lemon * cantidad1)
const coc = (coco, cantidad1) => (coco * cantidad1)



function algo() {
    totalgeneral = 0
    //genero variable b para asi poder darle el indice sobre el cual va a ir recorriendo el vector

    if (document.querySelector("#choco").checked == true) {
        data = document.querySelector("#choco").value
        i = 0
        totalgeneral = choco(tortas[i], cantidad1)

    }
    if (document.querySelector("#tira").checked == true) {
        data = document.querySelector("#tira").value
        i = 1
        totalgeneral = tira(tortas[i], cantidad1)

    }
    if (document.querySelector("#selva").checked == true) {
        data = document.querySelector("#selva").value
        i = 2
        totalgeneral = selv(tortas[i], cantidad1)

    }
    1
    if (document.querySelector("#lemon").checked == true) {
        data = document.querySelector("#lemon").value
        i = 3
        totalgeneral = lem(tortas[i], cantidad1)

    }
    if (document.querySelector("#coco").checked == true) {
        data = document.querySelector("#coco").value
        i = 4
        totalgeneral = coc(tortas[i], cantidad1)

    }

}

function capturar() {
    cantidad1 = document.getElementById("cantidad").value
    document.querySelector("#mostrar").value = "Ustéd ha seleccionado " + data + "\n\n-Precio por unidad:" + " " + tortas[i] + " " + "pesos\n\n-Cantidad:" + " " + cantidad1 + " " + "unidades\n\n-Total a Pagar: $" + tortas[i] * cantidad1 + " " + "pesos"
    document.querySelector("#mostrar").style.fontSize = "30px"
    document.querySelector("#mostrar").style.textAlign = "center"

}





const Cafegrande = (cafegrande, cantidad2) => (cafegrande * cantidad2) // desarrollo esta operacion para que la misma despues pueda ser llamada dentro de uuna funcion y asi poder guardarla dentro de una variable para poder ser llamada mas tarde cuando se necesite 
const Cafechico = (cafechico, cantidad2) => (cafechico * cantidad2)
const Submarino = (submarino, cantidad2) => (submarino * cantidad2)
const Te = (te, cantidad2) => (te * cantidad2)
const Cortado = (cortado, cantidad2) => (cortado * cantidad2)
const Agua = (agua, cantidad2) => (agua * cantidad2)
const Gaseosa = (gaseosa, cantidad2) => (gaseosa * cantidad2)
const Licuado = (licuado, cantidad2) => (licuado * cantidad2)

function gass() {

    if (document.querySelector("#grande").checked == true) {
        data2 = document.querySelector("#grande").value
        totalgeneralgaseosa = Cafegrande(liquidos[b], cantidad2)
        b = 0
    }
    if (document.querySelector("#chico").checked == true) {
        data2 = document.querySelector("#chico").value
        totalgeneralgaseosa = Cafechico(liquidos[b], cantidad2)
        b = 1
    }
    if (document.querySelector("#sub").checked == true) {
        data2 = document.querySelector("#sub").value
        totalgeneralgaseosa = Submarino(liquidos[b], cantidad2)
        b = 2
    }

    if (document.querySelector("#cortado").checked == true) {
        data2 = document.querySelector("#cortado").value
        totalgeneralgaseosa = Cortado(liquidos[b], cantidad2)
        b = 3

    }
    if (document.querySelector("#te").checked == true) {
        data2 = document.querySelector("#te").value
        totalgeneralgaseosa = Te(liquidos[b], cantidad2)
        b = 4

    }
    if (document.querySelector("#licuado").checked == true) {
        data2 = document.querySelector("#licuado").value
        totalgeneralgaseosa = Licuado(liquidos[b], cantidad2)
        b = 5
    }
    if (document.querySelector("#agua").checked == true) {
        data2 = document.querySelector("#agua").value
        totalgeneralgaseosa = Agua(liquidos[b], cantidad2)
        b = 6
    }
    if (document.querySelector("#gaseosa").checked == true) {
        data2 = document.querySelector("#gaseosa").value
        totalgeneralgaseosa = Gaseosa(liquidos[b], cantidad2)
        b = 7
    }


}

function capturar2() {
    cantidad2 = document.getElementById("cantidad2").value
    document.querySelector("#mostrar2").value = "Ustéd ha seleccionado " + data2 + "\n\n-Precio por unidad:" + " " + liquidos[b] + " " + "pesos\n\n-Cantidad:" + " " + cantidad2 + " " + "unidades\n\n-Total a Pagar: $" + liquidos[b] * cantidad2 + " " + "pesos"
    document.querySelector("#mostrar2").style.fontSize = "30px"
    document.querySelector("#mostrar2").style.textAlign = "center"

}


function ir() {
    let data3 = "";
    if (document.querySelector("#pedido").checked == true) {
        validacion();

    }
    if (document.querySelector("#irpago").checked == true) {
        location.href = "pages/pago.html"
    }
}
//------------------------PAGO--------------------------------//



function checked1(){
   if (document.querySelector("#efectivo").checked == true) {
   document.querySelector("#nom").disabled = true;
   } else
   {
    document.querySelectorall("#cancelado").disabled = false;
   }
}




sumatotal = sumatotal + (totalgeneral + totalgeneralgaseosa)


const debito = x => x * 0.02
const credito = x => x * 0.1
const cheque = x => x * 0.15
const pagare = x => x * 0.21
const totalcompleto = (a, b) => (a + b)

function metododepago(metodopago) { //realizamos el metodo de pago por el cual utilizamos funciones flechas para determinar la operacion a realizar
    switch (metodopago) {
        case "1":
            finalcaja = finalcaja + sumatotal
            return "Su total a pagar es" + " " + sumatotal + " " + " pesos"
        case "2":
            finalcaja = totalcompleto(sumatotal, debito(sumatotal))
            return "Su total a pagar es" + " " + totalcompleto(sumatotal, debito(sumatotal)) + " " + " pesos"
        case "3":
            finalcaja = totalcompleto(sumatotal, credito(sumatotal))
            return "Su total a pagar es" + " " + totalcompleto(sumatotal, credito(sumatotal)) + " " + " pesos"
        case "4":
            finalcaja = totalcompleto(sumatotal, cheque(sumatotal))
            return "Su total a pagar es" + " " + totalcompleto(sumatotal, cheque(sumatotal)) + " " + " pesos"
        case "5":
            finalcaja = totalcompleto(sumatotal, pagare(sumatotal))
            return "Su total a pagar es" + " " + totalcompleto(sumatotal, pagare(sumatotal)) + " " + " pesos"

        default:
            break;
    }
}


/*---------------------------------------------------------------*/
//----------------------------inicio------------------------------

let usuario = "admin"
let password = "admin"

let ingresar = document.querySelector("#enviar")
ingresar.addEventListener("click",inicio);


function inicio(){
if (document.querySelector(".nombreuser").value !== usuario) {
    document.querySelector(".strong").style.color ="red"
}
else if (document.querySelector(".passuser").value !== password) {
    document.querySelector(".strong").style.color = "red"
}
else{
    location.href = "./pages/index.html"
}

}

//---------------------------------DUEÑO---------------------//

 
   



function todas(){
const cajas = ventacajas.slice();
 let cajass = cajas.join(" \n- ")
document.querySelector("#lblcajas").value = "El numero de ventas realizadas por cajas de hoy fueron:\n- " + cajass
document.querySelector("#lblcajas").style.fontSize = "20px"
}
let consultar1 = document.querySelector("#Consulta1")
consultar1.addEventListener("click",todas);
consultar1.addEventListener("enter",todas);


let consultar2 = document.querySelector("#Consulta2")
consultar2.addEventListener("click",cons2)
consultar2.addEventListener("enter",cons2)

function cons2(){
    let final = document.querySelector("#Nmenor").value
function cons3(final){
    f = 0
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


/*
//metodo con el create para poder crear elementos en el html!
//esta en comentarios debido que lo realice para poder aplicar al desafio
//CREAR NODOS
const cambio = document.createElement('div');
cambio.innerHTML = "<h2></h2>"
//Seleccionar elemento padre
const elementoPadre = document.querySelector('.h1principal');
// elementoPadre.appendChild(cambio);
elementoPadre.append(cambio);*/


/*
//metodo para poder modificar un dato de algun elemento en el html
let cambiar = document.querySelector(".seltorta");
cambiar.innerText = "SELECCIONE UNA DE NUESTRAS EXQUISITAS TORTAS! GRACIAS ";
*/