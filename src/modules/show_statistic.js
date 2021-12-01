import auth_service_URL from '../generic data/origin';
import { open_log_in } from './openLogin';


const show_statistic = async ({ target }) => {
    const [statistic_wrapper, name_statistic, clicks] = [document.querySelector('.statistic-wrapper'), document.querySelector('.statistic__name'), document.querySelector('.statistic__clicks')];
    const link_element = target.parentElement.parentElement.children[0];
    const response = await fetch(auth_service_URL + 'statistic', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'authorization': localStorage.getItem('token')
        },
        body: JSON.stringify({
            login: localStorage.getItem('login'),
            link: link_element.textContent.split('/').slice(-1)[0]
        })
    });
    if (response.status === 200) {
        const link = await response.json();
    
        name_statistic.textContent = link_element.textContent;
        clicks.textContent = link.statistic.clicks;
        statistic_wrapper.classList.remove('displayNone');
    } else if (response.status === 401) {
        open_log_in();
    } else {
        alert('Something went wrong');
    }
}
export {
    show_statistic
}