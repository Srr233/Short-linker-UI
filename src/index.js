import {openCloseBar} from './modules/menuBar';
import switch_auth from './modules/switch_auth';
import {handlerLogin, handlerRegister} from './modules/send_auth';

const [send_login, send_register] = [document.querySelector('.send_login'), document.querySelector('.send_register')];


function start () {
    //open close menu
    const menuBar = document.querySelector('.menu-button');
    const nav = document.querySelector('nav');
    menuBar.addEventListener('click', openCloseBar(nav, menuBar));

    //send data
    send_login.addEventListener('click', handlerLogin);
    send_register.addEventListener('click', handlerRegister);

}
start();