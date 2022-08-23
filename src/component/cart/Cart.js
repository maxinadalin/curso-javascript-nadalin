import { obtenerProductosSessionStorage } from "../../lib/storage.js";

export const containerBuyCart = document.querySelector('.cart-items')
export const priceTotal = document.querySelector('.price-total')
export const amountProduct = document.querySelector('.count-product')

let totalCard = 0;
let countProduct = 0;

export function leerSessionStorage() {
    let productosLS;
    productosLS = obtenerProductosSessionStorage();
    productosLS.forEach(product => {
        const {
            image,
            title,
            price,
            amount,
            id
        } = product;
        const row = document.createElement('div');
        row.classList.add('item');
        row.innerHTML = `
            <img src="${image}" alt="">
            <div class="item-content">
                <h5>${title}</h5>
                <h5 class="cart-price">${price}$</h5>
                <h6>Amount: ${amount}</h6>
            </div>
            <span class="delete-product" data-id="${id}">X</span>
        `;

        containerBuyCart.appendChild(row);

        priceTotal.innerHTML = totalCard;

        amountProduct.innerHTML = countProduct;
    });
}