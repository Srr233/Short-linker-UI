const [send_login, send_register] = [document.querySelector('.send_login'), document.querySelector('.send_register')];
const [login_form, register_form] = [document.querySelector('.login'), document.querySelector('.register')];

const options = {
    login: '',
    password: '',
    email: ''
}
const auth_service_URL = 'http://localhost:3000/users/login';
const createRequest = async (optionsToSend, method) => {
    const respond = await fetch(auth_service_URL, {
        method,
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(optionsToSend)
    });
    return respond;
}

const handlerSend = (element_form) => {
    return e => {
        let isOkData = true;
        element_form.querySelectorAll('input').forEach(i => {
            if (!i.value) isOkData = false;
            options[i.name] = i.value;
        });
        if (!isOkData) {
            alert('Incorrect data');
            return;
        }
        createRequest(options, 'POST')
        .then(resp => resp.json())
        .then(data => console.log(data));
        e.preventDefault();
    }
}
send_login.addEventListener('click', handlerSend(login_form));
send_register.addEventListener('click', handlerSend(register_form));