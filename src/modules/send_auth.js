import openAuthWindow from "../helpers/openAuthWindow";
import openLinkWindow from "../helpers/openLinkWindow";
import { add_all_links } from "./add_all_links";
import auth_service_URL from '../generic data/origin';

const [login_form, register_form] = [document.querySelector('.login'), document.querySelector('.register')];

const options = {
    login: '',
    password: '',
    email: ''
}

const createRequest = async (optionsToSend, method, path) => {
    localStorage.setItem('login', optionsToSend.login);
    const link = auth_service_URL + path;
    let respond = await fetch(link, {
        method,
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(optionsToSend)
    });
    if (respond.status === 400) alert('Email is not correct');
    if (respond.status === 401) alert('Login or password is not correct');
    if (respond.status === 403) alert('Email is registered');
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
        
        createRequest(options, 'POST', login_form === element_form ? 'login' : 'register')
        .then(resp => resp.json())
        .then(data => {
            if (data.auth_token) {
                localStorage.setItem('token', data.auth_token);
                openLinkWindow();
                add_all_links(data.links);
            } else {
                openAuthWindow();
            }
        })
        e.preventDefault();
    }
}

const handlerLogin = handlerSend(login_form);
const handlerRegister = handlerSend(register_form);
export {
    handlerLogin,
    handlerRegister
}