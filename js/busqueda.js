document.addEventListener("DOMContentLoaded", () => {
        document.querySelector("form").addEventListener("submit", (event) => {
            event.preventDefault();
            const query = document.querySelector(".form-control").value.toLowerCase().trim();
            if (query) {
                if (window.location.pathname.includes("index.html")){
                    window.location.href = `html/productos.html?search=${encodeURIComponent(query)}`;
                } else {
                    window.location.href = `../html/productos.html?search=${encodeURIComponent(query)}`;
                }
            } else {
                if (window.location.pathname.includes("index.html")){
                    window.location.href = "html/productos.html"; // muestra todo
                } else {
                    window.location.href = `../html/productos.html`;
                }
            }
        });
    });