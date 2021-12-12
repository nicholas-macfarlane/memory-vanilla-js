import {get} from "../engine/constants.js"
import {style} from "../style/style.js"

export const getHoverColor = (index) => {
    const card = get(index);
    if (card.getAttribute("matched") === "true") {
        card.style.color = style.colors.black;
    } else if (card.getAttribute("flipped") === "true") {
        card.style.color = style.colors.green;
    } else {
        card.style.backgroundColor = style.colors.grey;
        card.style.color = style.colors.grey;
    }
}