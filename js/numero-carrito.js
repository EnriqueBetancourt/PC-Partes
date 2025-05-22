function actualizarNumeroCarrito() {
    const carrito = JSON.parse(localStorage.getItem("carrito")) || [];
    const contador = document.querySelector(".bi-cart3 + span");
    if (contador) {
        contador.textContent = carrito.reduce((total, p) => total + p.cantidad, 0);
    }
}

document.addEventListener("DOMContentLoaded", () => {
    actualizarNumeroCarrito();
});