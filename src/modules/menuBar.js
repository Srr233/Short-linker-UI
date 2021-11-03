const menuBar = document.querySelector('.menu-button');

menuBar.addEventListener('click', () => {
    const span = menuBar.querySelector('span');

    if (span.classList.contains('openedMenuBar')) {
        span.classList.remove('openedMenuBar');
        span.style.setProperty('--close-right', 'rotate(0deg)');
        span.style.setProperty('--close-left', 'rotate(0deg)');
        span.style.setProperty('--top-up', '-.8rem');
        span.style.setProperty('--top-down', '.8rem');
    } else {
        span.classList.add('openedMenuBar');
        span.style.setProperty('--close-right', 'rotate(0deg)');
        span.style.setProperty('--close-left', 'rotate(-50deg)');
        span.style.setProperty('--top-up', 0);
        span.style.setProperty('--top-down', 0);
    }
});

// --close-right 0 deg
// --close-left -50 deg
// --top-up: 0;
// --top-down: 0;