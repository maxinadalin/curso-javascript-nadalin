import { containerBuyCart, leerSessionStorage } from '../component/cart/Cart.js'
import { allTortasContainer, addProduct, deleteProduct } from '../component/tortasList/TortasList.js'
import { siguienteTortas, siguienteABebidas } from '../component/buttons/SigTortas.js'

document.addEventListener("DOMContentLoaded", leerSessionStorage)
allTortasContainer.addEventListener('click', addProduct)
containerBuyCart.addEventListener('click', deleteProduct)
siguienteTortas.addEventListener("click", siguienteABebidas)
siguienteTortas.addEventListener("enter", siguienteABebidas)