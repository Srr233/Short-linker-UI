import { show_statistic } from "./show_statistic";

const listOfLinks = document.querySelector('.listOfLinks');

const remote = 'http://localhost:3000';

const add_link = (short_link) => {
    const fullLink = remote + '/' + short_link;
    const div_link_wrapper = document.createElement('div');
    const span_link = document.createElement('span');
    const div = document.createElement('div');
    const button_statistic = document.createElement('button');
    const button_data_delete = document.createElement('button');

    div_link_wrapper.classList.add('link_wrapper');
    span_link.classList.add('link');
    button_statistic.addEventListener('click', show_statistic);
    button_data_delete.dataset.delete = short_link;

    div_link_wrapper.insertAdjacentElement('beforeend', span_link);
    div_link_wrapper.insertAdjacentElement('beforeend', div);
    div.insertAdjacentElement('beforeend', button_statistic);
    div.insertAdjacentElement('beforeend', button_data_delete);

    span_link.textContent = fullLink;
    button_statistic.textContent = 'statistic';
    button_data_delete.textContent = 'delete';

    listOfLinks.insertAdjacentElement('beforeend', div_link_wrapper);
}

export default add_link;