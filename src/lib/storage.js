//Comprobar que hay elementos en el LS
export function obtenerProductosLocalStorage() {
    let productoLS;
  

    //Comprobar si hay algo en LS
    if (localStorage.getItem('compratortas') === null) {
        productoLS = [];
       
    } else {
        productoLS = JSON.parse(localStorage.getItem('compratortas'));
       
    }
    return productoLS;
   
}
