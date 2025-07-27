// Aquí puedes agregar funcionalidades interactivas, como animaciones, validación de formularios, etc.
// Por ejemplo, un simple alert al hacer clic en un botón de compra:
const botonesComprar = document.querySelectorAll('.comprar-button');

botonesComprar.forEach(boton => {
    boton.addEventListener('click', (event) => {
        event.preventDefault(); // Evita que el enlace redirija a otra página
        alert('¡Producto agregado al carrito!');
    });
});
document.addEventListener("DOMContentLoaded", function() {
    const elementosAnimados = document.querySelectorAll('.modelo, .caracteristica-item, .testimonio');

    function mostrarElemento(elemento) {
        elemento.classList.add('mostrar');
    }

    function revisarElementos() {
        elementosAnimados.forEach(elemento => {
            if (elemento.getBoundingClientRect().top < window.innerHeight * 0.8) {
                mostrarElemento(elemento);
            }
        });
    }

    // Ejecutar la función al cargar la página y al hacer scroll
    window.addEventListener('load', revisarElementos);
    window.addEventListener('scroll', revisarElementos);
});
document.addEventListener("DOMContentLoaded", function() {
    const enlacesMenu = document.querySelectorAll('nav a[href^="#"]');

    enlacesMenu.forEach(enlace => {
        enlace.addEventListener('click', function(evento) {
            evento.preventDefault();

            const destino = document.querySelector(this.getAttribute('href'));

            destino.scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});
document.addEventListener("DOMContentLoaded", function() {
    let ultimoScroll = 0;
    const header = document.querySelector('header');

    window.addEventListener('scroll', function() {
        let scrollActual = window.pageYOffset || document.documentElement.scrollTop;

        if (scrollActual > ultimoScroll) {
            // Scroll hacia abajo
            header.classList.add('ocultar');
        } else {
            // Scroll hacia arriba
            header.classList.remove('ocultar');
        }

        ultimoScroll = scrollActual;
    });
});

