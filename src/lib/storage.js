//Comprobar que hay elementos en el LS
export function obtenerProductosSessionStorage() {
    let productoLS;

    //Comprobar si hay algo en LS
    if (sessionStorage.getItem('compratortas') === null) {
        productoLS = [];
    } else {
        productoLS = JSON.parse(sessionStorage.getItem('compratortas'));
    }
    return productoLS;
}