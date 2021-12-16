import { data } from "../data.js"
import { log } from "./constants.js";

export const checkScore = ()=> {
    if ( data.score.p1 + data.score.p2 === 7) {
        if (data.score.p1 > data.score.p2) {
            data.wins.p1++;
            log("Player 1 wins")
        } 
        if (data.score.p2 > data.score.p1) {
            data.wins.p2++;
            log("Player 2 wins")
        }
        data.currentPlayer = 1;
        data.score = {p1:0, p2:0};
        data.reset = true;
    }
    setTimeout(()=>log(""),750);
}