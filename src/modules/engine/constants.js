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
//links
export const codePen = ()=> "https://codepen.io/nmacfarlane/full/abOrWRy";
export const gitHub = ()=> "https://github.com/nicholas-macfarlane/memory-vanilla-js";
