import {append, create, get} from "../engine/constants.js";
import { setCLickEvents } from "../events/setClickEvents.js";
import { setHoverEvents } from "../events/setHoverEvents.js";
import { setAttributes } from "./setAttributes.js";

export const createCard = (value, index, reset = false)=> {
    let newCard;    
    if (!reset) {
        newCard = create("button");
        console.log(newCard);
        
    } else {
        newCard = get(index);
    }
    setAttributes(value, index, newCard);
    if (!reset) { 
        append(newCard);
    }
    setHoverEvents(newCard, index);
    setCLickEvents(newCard, index);
}