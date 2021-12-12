import {flipCard} from "../actions/flipCard.js"

export const setCLickEvents = (card, index)=> {
    card.onclick = ()=> {
        flipCard(index);
    }
}