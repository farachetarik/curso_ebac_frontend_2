document.getElementById('produtos-boo').addEventListener('click', function(event) {
    event.preventDefault();
    document.querySelector('#lojinha').scrollIntoView({ behavior: 'smooth' });
});

document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', function() {
        const productName = this.getAttribute('data-product-name');
        alert(`Item ${productName} foi adicionado ao carrinho`);
    });
});