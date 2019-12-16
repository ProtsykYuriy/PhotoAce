const buyBtnMain = document.querySelector('#buyu-btn-main');
const mainItem = document.querySelector('#main-item');
buyBtnMain.addEventListener('click', itemAddToCart);
const shoppingCartMain = document.querySelector('#shopping-cart-main')

function itemAddToCart(){
    shoppingCartMain.appendChild(mainItem);
}
