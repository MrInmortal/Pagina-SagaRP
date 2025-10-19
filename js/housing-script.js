// SCRIPT PARA ANIMACIONES DE SCROLL
const scrollObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            const delay = index * 100; // 100ms de diferencia entre cada elemento
            entry.target.style.transitionDelay = `${delay}ms`;
            entry.target.classList.add('is-visible');
            scrollObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.gallery-item').forEach((element) => {
    scrollObserver.observe(element);
});