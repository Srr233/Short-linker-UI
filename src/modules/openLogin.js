
const open_log_in = () => {
    const [sign, register, baseFunctional, statistic_wrapper] = [
        document.querySelector('.sign'),
        document.querySelector('.register'),
        document.querySelector('.baseFunctional'),
        document.querySelector('.statistic-wrapper')
    ];
    alert('You have to sign in');
    sign.classList.remove('displayNone');
    register.classList.add('displayNone');
    baseFunctional.classList.add('displayNone');
    statistic_wrapper.classList.add('displayNone');
}


export {
    open_log_in,
}