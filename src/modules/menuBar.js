const menuBar = document.querySelector('.menu-button');
const nav = document.querySelector('nav');

menuBar.addEventListener('click', () => {
    const span = menuBar.querySelector('span');

    if (span.classList.contains('openedMenuBar')) {
        nav.classList.remove('openBurgerNav');
        span.classList.remove('openedMenuBar');
        span.style.setProperty('--close-right', 'rotate(0deg)');
        span.style.setProperty('--close-left', 'rotate(0deg)');
        span.style.setProperty('--top-up', '-.8rem');
        span.style.setProperty('--top-down', '.8rem');
    } else {
        nav.classList.add('openBurgerNav');
        span.classList.add('openedMenuBar');
        span.style.setProperty('--close-right', 'rotate(0deg)');
        span.style.setProperty('--close-left', 'rotate(-50deg)');
        span.style.setProperty('--top-up', 0);
        span.style.setProperty('--top-down', 0);
    }
});