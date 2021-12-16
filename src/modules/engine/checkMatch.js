import { get, log } from "./constants.js"
import { data } from "../data.js"
import { style } from "../style/style.js"
import { nextTurn } from "./nextTurn.js"

export function checkMatch() {
    let card1 = get(data.flippedCards[0].getAttribute("id"));
    let card2 = get(data.flippedCards[1].getAttribute("id"));
    if ( card1.getAttribute("character") === card2.getAttribute("character")) {
        card1.setAttribute("matched", true);
        card2.setAttribute("matched", true);
        card1.style.backgroundColor = style.colors.green;
        card2.style.backgroundColor = style.colors.green;
        card1.style.color = style.colors.green;
        card2.style.color = style.colors.green;
        data.score[`p${data.currentPlayer}`]++;
        log("match");
    } else {
        card1.setAttribute("flipped", false);
        card2.setAttribute("flipped", false);
        card1.style.color = style.colors.black;
        card1.style.backgroundColor = style.colors.black;
        card2.style.color = style.colors.black; 
        card2.style.backgroundColor = style.colors.black
        log("no match");
    }
    nextTurn();
}