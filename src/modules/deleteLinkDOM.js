const delete_link_DOM = (short_link) => {
    document.querySelector(`[data-delete="${short_link}"]`).parentElement.parentElement.remove();
}

export default delete_link_DOM;