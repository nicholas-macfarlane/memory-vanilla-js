import {rules} from "../rules.js";
import { createCard } from "./createCard.js";
import {create, append} from "../engine/constants.js";
import {data} from "../data.js";
export const prepareCards = ()=> {
    for ( let index = 0; index < rules.pairs.length; index++) 
    {
        if (data.reset === false){
            if (index % rules.columns === 0 && index > 0 ) {
                append(create("br"));
            }
        }
        let value = rules.pairs[index];
        console.log(`index: ${index}, value: ${value}`)
        createCard(value, index, data.reset);
    };
        if (data.reset === true) {
            data.reset = false;
        } else {
            append(create("br"));
            append(create("br"));
            const div = create("div");
            div.id = "console-div"; 
            append(div);
        }
}