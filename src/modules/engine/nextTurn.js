import { data } from "../data.js"
import { updateConsole } from "../actions/updateConsole.js"
import { prepareDeck } from "../actions/prepareDeck.js"
import { checkScore } from "./checkScore.js"

export const nextTurn = ()=> {
    data.flippedCards = [];
    data.flippedCardsCount = 0;
    data.currentPlayer > 1 ? data.currentPlayer = 1 : data.currentPlayer = 2;
    checkScore();
    if (data.reset) {
        prepareDeck();
    }
}