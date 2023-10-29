/*document.addEventListener('DOMContentLoaded', function() {
    const products = document.querySelectorAll('.product');
    const cart = JSON.parse(localStorage.getItem('cart')) || [];

    products.forEach(product => {
        const addToCartButton = product.querySelector('.add-to-cart');
        const productName = product.dataset.name;

        addToCartButton.addEventListener('click', function() {
            cart.push(productName);
            localStorage.setItem('cart', JSON.stringify(cart));
            alert(`Đã thêm ${productName} vào giỏ hàng!`);
        });
    });
});
function displayData() {
    const savedData = localStorage.getItem('cart');
    const outputElement = document.getElementById('output');

    if (savedData != null) {
        outputElement.textContent = `Giỏ hàng có: ${productName}`;
    } else {
        outputElement.textContent = 'Chưa có gì trong giỏ hàng.';
    }
}
displayData();*/
let x = 0;
function bPlus(){
    x = x + 1;
    document.getElementById("p5").innerHTML= x;
}
function bMinus(){
    x = x - 1;
    document.getElementById("p5").innerHTML= x;
}


