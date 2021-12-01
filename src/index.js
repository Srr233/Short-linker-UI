import {openCloseBar} from './modules/menuBar';
import './modules/switch_auth';
import {handlerLogin, handlerRegister} from './modules/send_auth';
import { create_link, delete_link } from './modules/create_delete_link';
import add_link from './modules/addNewLinkDOM';
import delete_link_DOM from './modules/deleteLinkDOM';
import { show_statistic } from './modules/show_statistic';

const [send_login, send_register] = [document.querySelector('.send_login'), document.querySelector('.send_register')];
const listOfLinks = document.querySelector('.listOfLinks');
const inputLink = document.querySelector('.createLink_input');
const close_statistic_button = document.querySelector('.statistic__close-button');

function start () {
    //open close menu
    const menuBar = document.querySelector('.menu-button');
    const nav = document.querySelector('nav');
    menuBar.addEventListener('click', openCloseBar(nav, menuBar));

    //send register / login
    send_login.addEventListener('click', handlerLogin);
    send_register.addEventListener('click', handlerRegister);

    //create a new link
    inputLink.addEventListener('click', async ({ target }) => {
        const isButton = target.tagName === 'BUTTON';

        if (isButton) {
            const link = inputLink.querySelector('input').value;
            const json = await create_link(localStorage.getItem('login'), link);
            add_link(json.short);
        }
    });

    // delete link
    listOfLinks.addEventListener('click', async ({ target }) => {
        const deletionLink = target.dataset.delete;

        if (deletionLink) {
            const json = await delete_link(localStorage.getItem('login'), deletionLink);
            delete_link_DOM(deletionLink);
        }
    });

    //close statistic
    close_statistic_button.addEventListener('click', ({ target }) => target.parentElement.classList.add('displayNone'));

}
start();