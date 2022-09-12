
 let productoLS;
 let interes = parseInt();
function obtenerPrecioTarjetaLocalStorage() {
   
    //Comprobar si hay algo en LS
    if (localStorage.getItem('totalpagartortas') === null) {
        productoLS = [];
       
    } else {
        productoLS = JSON.parse(localStorage.getItem('totalpagartortas'));

       let Monto = document.querySelector("#validationDefaultMonto")
       interes = parseInt(productoLS * 0.25)
       Monto.value ="$" + (interes + parseInt(productoLS));  
    }
}

const Pagorealizado = () => {
    Swal.fire(
        'SU PAGO HA SIDO REALIZADO CON EXITO',
        'GRACIAS POR SU COMPRA!',
        'success'
      )
}

document.querySelector("#Paga").addEventListener("click",Pagorealizado)