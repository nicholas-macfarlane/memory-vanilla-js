import { prepareCards } from "./prepareCards.js";
import { updateConsole } from "./updateConsole.js";
import { shuffle } from "./shuffle.js";
export const prepareDeck = ()=> {
    prepareCards();
    updateConsole();
    shuffle(document.getElementsByTagName("button"));
}