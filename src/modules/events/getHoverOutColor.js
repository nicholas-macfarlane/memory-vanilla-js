import {get} from "../engine/constants.js"
import {style} from "../style/style.js"

export const getHoverOutColor = (index) => {
    const card = get(index);
    if (card.getAttribute("matched") === "true)") {
        card.style.color = style.colors.green;
    } else if (card.getAttribute("flipped") === "true") {
        card.style.color = style.colors.green;
    } else {
        card.style.backgroundColor = style.colors.black;
        card.style.color = style.colors.black;
    }
}