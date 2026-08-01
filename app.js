document.addEventListener('DOMContentLoaded', () => {
    initNav();
});

/* ── Mobile Navigation ──────────────────────────────────────────────────── */
function initNav() {
    const burger = document.getElementById('navBurger');
    const menu = document.getElementById('navMenu');
    if (!burger || !menu) return;

    burger.addEventListener('click', () => {
        burger.classList.toggle('active');
        menu.classList.toggle('open');
    });

    menu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            burger.classList.remove('active');
            menu.classList.remove('open');
        });
    });
}
