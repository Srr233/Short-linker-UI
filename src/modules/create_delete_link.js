import {open_log_in} from "./openLogin";

const data = {
    login: 'login',
    link: 'link'
}
const remote = 'http://localhost:3000';

const request = async (path, data, method) => {
    return await fetch(remote + path, {
        method,
        headers: {
            'Content-Type': 'application/json',
            'authorization': localStorage.getItem('token')
        },
        body: JSON.stringify(data)
    })
}
const create_link = async (login, link) => {
    const response = await request('/create', {login, link}, 'POST');
    if (response.status === 401) {
        open_log_in();
    } else {
        return await response.json()
    }
}

const delete_link = async (login, link) => {
    const response = await request('/delete', {login, link}, 'POST');
    if (response.status === 401) {
        open_log_in();
    } else {
        return response.statusText;
    }
}
export {
    create_link,
    delete_link
}