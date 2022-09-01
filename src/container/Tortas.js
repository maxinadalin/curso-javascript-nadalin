import { containerBuyCart, leerSessionStorage } from '../component/cart/Cart.js'
import { allTortasContainer, addProduct, deleteProduct } from '../component/tortasList/TortasList.js'
import { siguienteBebidas, siguienteAPago } from '../component/buttons/SigBebidas.js'


document.addEventListener("DOMContentLoaded", leerSessionStorage)
allTortasContainer.addEventListener('click', addProduct)
containerBuyCart.addEventListener('click', deleteProduct)
siguienteBebidas.addEventListener("click",siguienteAPago)
siguienteBebidas.addEventListener("enter",siguienteAPago)