
import { getHoverColor } from "./getHoverColor.js"
import { getHoverOutColor } from "./getHoverOutColor.js"

export const setHoverEvents = (card, index) => {
    card.onmouseover = ()=> {
        getHoverColor(index);
    } 
    card.onmouseout = ()=> {
        getHoverOutColor(index);
    }
}