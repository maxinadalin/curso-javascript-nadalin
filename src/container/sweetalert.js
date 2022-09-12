
  let PrecioLS;

  

 function obtenerPreciosLocalStorage() {
  //Comprobar si hay algo en LS
  if (localStorage.getItem('totalpagartortas') === null) {
      PrecioLS = [];
     
  } else {
      PrecioLS = JSON.parse(localStorage.getItem('totalpagartortas'));
     
  }

}

let efectivo = document.querySelector('.PagaE');
efectivo.addEventListener("click",function (){
  const swalWithBootstrapButtons = Swal.mixin({
    customClass: {
      confirmButton: 'btn btn-success',
      cancelButton: 'btn btn-danger'
    },
    buttonsStyling: false
  })
  
  swalWithBootstrapButtons.fire({
    title: 'Su Monto a pagar es:',
    text: "$" + PrecioLS +"",
    icon: 'question',
    showCancelButton: true,
    confirmButtonText: 'PAGAR',
    cancelButtonText: 'CANCELAR',
    reverseButtons: true
  }).then((result) => {
    if (result.isConfirmed) {
      swalWithBootstrapButtons.fire(
        'SU BOLETA HA SIDO GENERADA CON EXITO!',
        'Por favor dirijase a la caja.',
        'exitoso'
      )
    } else if (
      /* Read more about handling dismissals below */
      result.dismiss === Swal.DismissReason.cancel
    ) {
      swalWithBootstrapButtons.fire(
        'EL PAGO HA SIDO CANCELADO',
        'Por favor corrija el error',
        'error'
      )
    }
  })
})


let Cheque = document.querySelector('.PagaC')

Cheque.addEventListener("click",function (){
  const swalWithBootstrapButtons = Swal.mixin({
    customClass: {
      confirmButton: 'btn btn-success',
      cancelButton: 'btn btn-danger'
    },
    buttonsStyling: false
  })
  
  swalWithBootstrapButtons.fire({
    title: 'Su Monto a pagar es:',
    text: "$" + PrecioLS +"",
    icon: 'question',
    showCancelButton: true,
    confirmButtonText: 'PAGAR',
    cancelButtonText: 'CANCELAR',
    reverseButtons: true
  }).then((result) => {
    if (result.isConfirmed) {
      swalWithBootstrapButtons.fire(
        'SU BOLETA HA SIDO GENERADA CON EXITO!',
        'Por favor dirijase a la caja.',
        'exitoso'
      )
    } else if (
      /* Read more about handling dismissals below */
      result.dismiss === Swal.DismissReason.cancel
    ) {
      swalWithBootstrapButtons.fire(
        'EL PAGO HA SIDO CANCELADO',
        'Por favor corrija el error',
        'error'
      )
    }
  })
})







