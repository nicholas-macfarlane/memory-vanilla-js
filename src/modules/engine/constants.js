//shorthanding functions, awful I know
export const create = (tag) => {
    return document.createElement(tag);
}
export const get = (id) => {
    return document.getElementById(id);
} 
export const append = (element)=> {
    document.body.appendChild(element);
}
export const set = (element, attribute, value)=> {
    element.setAttribute(attribute, value);
}


