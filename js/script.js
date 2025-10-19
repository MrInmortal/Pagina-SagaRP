document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    // Toggle para menú hamburguesa
    if (hamburger) {
        hamburger.addEventListener('click', function() {
            navMenu.classList.toggle('active');
        });
    }

    // Cerrar menú al hacer clic en un enlace (en móvil)
    navLinks.forEach(link => {
        // Excluimos los enlaces de dropdown para que no cierren el menú
        if (!link.parentElement.classList.contains('dropdown')) {
            link.addEventListener('click', function() {
                if (window.innerWidth <= 992) {
                    navMenu.classList.remove('active');
                }
            });
        }
    });

    // Lógica para desplegables en móvil
    const dropdowns = document.querySelectorAll('.dropdown > .nav-link');
    dropdowns.forEach(dropdownLink => {
        dropdownLink.addEventListener('click', function(e) {
            if (window.innerWidth <= 992) {
                // Prevenir navegación para abrir el submenú
                e.preventDefault();
                const parentDropdown = this.parentElement;
                
                // Toggle para el dropdown actual
                parentDropdown.classList.toggle('active');
                const content = parentDropdown.querySelector('.dropdown-content');
                if (content) {
                    content.style.display = parentDropdown.classList.contains('active') ? 'block' : 'none';
                }
                
                // Cerrar otros desplegables abiertos
                document.querySelectorAll('.dropdown').forEach(otherDropdown => {
                    if (otherDropdown !== parentDropdown) {
                        otherDropdown.classList.remove('active');
                        const otherContent = otherDropdown.querySelector('.dropdown-content');
                        if (otherContent) {
                            otherContent.style.display = 'none';
                        }
                    }
                });
            }
        });
    });
});