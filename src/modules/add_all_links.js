import add_link from "./addNewLinkDOM"

const add_all_links = (links) => {
    if (links) {
        links.forEach(link => {
            add_link(link.short);
        });
    }
}
export {
    add_all_links
}