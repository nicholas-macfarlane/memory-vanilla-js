import {style} from "../style/style.js";

export const setAttributes = (value, index, card) => {
    const set = (card, attribute, value) => {
        card.setAttribute(attribute, value);
    }
    Object.assign(card.style, {
        color: style.colors.black,
        backgroundColor: style.colors.black,
    });
    card.innerHTML = value;
    set(card, "id", `${index}`);
    set(card, "matched", "false");
    set(card, "flipped", "false");
    set(card, "character", `${value}`);
}