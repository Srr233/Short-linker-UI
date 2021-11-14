const [baseFunctional, sign] = [document.querySelector('.baseFunctional'), document.querySelector('.sign')]

export default () => {
    if (baseFunctional.classList.contains('displayNone')) {
        baseFunctional.classList.remove('displayNone');
        sign.classList.add('displayNone');
    }
}