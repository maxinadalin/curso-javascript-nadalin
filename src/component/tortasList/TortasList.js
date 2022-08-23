import { containerBuyCart, priceTotal, amountProduct } from "../cart/Cart.js";
import { obtenerProductosSessionStorage } from "../../lib/storage.js";

export const allTortasContainer = document.querySelector('.products');
let totalCard = 0
let countProduct = 0
let buyThings = []

export function addProduct(e) {
    e.preventDefault();
    if (e.target.classList.contains('btn-add-cart')) {
        const selectProduct = e.target.parentElement;
        readTheContent(selectProduct);
        obtenerProductosSessionStorage();
        sessionStorage.setItem('compratortas', JSON.stringify(buyThings))
    }
}

export function deleteProduct(e) {
    if (e.target.classList.contains('delete-product')) {
        const deleteId = e.target.getAttribute('data-id');

        buyThings.forEach(value => {
            if (value.id == deleteId) {
                let priceReduce = parseFloat(value.price) * parseFloat(value.amount);
                totalCard = totalCard - priceReduce;
                totalCard = totalCard.toFixed(2);
                sessionStorage.removeItem('compratortas', buyThings[deleteId]);
            }
        });
        buyThings = buyThings.filter(product => product.id !== deleteId);
        sessionStorage.setItem('compratortas', JSON.stringify(buyThings))

        countProduct--;
    }
    //FIX: El contador se quedaba con "1" aunque ubiera 0 productos
    if (buyThings.length === 0) {
        priceTotal.innerHTML = 0;
        amountProduct.innerHTML = 0;
    }
    loadHtml();
}

export function readTheContent(product) {
    const infoProduct = {
        image: product.querySelector('div img').src,
        title: product.querySelector('.title').textContent,
        price: product.querySelector('div p span').textContent,
        id: product.querySelector('a').getAttribute('data-id'),
        amount: 1
    }

    totalCard = parseFloat(totalCard) + parseFloat(infoProduct.price);
    totalCard = totalCard.toFixed(2);

    const exist = buyThings.some(product => product.id === infoProduct.id);
    if (exist) {
        const pro = buyThings.map(product => {
            if (product.id === infoProduct.id) {
                product.amount++;
                return product;
            } else {
                return product
            }
        });
        buyThings = [...pro];
    } else {
        buyThings = [...buyThings, infoProduct]
        countProduct++;
    }
    loadHtml();
    //console.log(infoProduct);
}

export function loadHtml() {
    clearHtml();
    buyThings.forEach(product => {
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

export function clearHtml() {
    containerBuyCart.innerHTML = '';
}