const [baseFunctional, sign] = [document.querySelector('.baseFunctional'), document.querySelector('.sign')]

export default () => {
    if (sign.classList.contains('displayNone')) {
        sign.classList.remove('displayNone');
        baseFunctional.classList.add('displayNone');
    }
}