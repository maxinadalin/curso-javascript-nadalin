export function cons3(final,ventacajas){
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