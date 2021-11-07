const [login_form, register_form] = [document.querySelector('.login'), document.querySelector('.register')];
const [button_login, button_register] = [document.querySelector('.switch-login'), document.querySelector('.switch-register')];
const nameOfForm = document.querySelector('.name-of-form');

button_login.addEventListener('click', () => {
    nameOfForm.textContent = 'Login';
    register_form.classList.add('displayNone');
    login_form.classList.remove('displayNone');
});

button_register.addEventListener('click', () => {
    nameOfForm.textContent = 'Register';
    login_form.classList.add('displayNone');
    register_form.classList.remove('displayNone');
});