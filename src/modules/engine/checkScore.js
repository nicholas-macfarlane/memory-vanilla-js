import { data } from "../data.js"

export const checkScore = ()=> {
    if ( data.score.p1 + data.score.p2 === 7) {
        if (data.score.p1 > data.score.p2) {
            data.wins.p1++;
        } 
        if (data.score.p2 > data.score.p1) {
            data.wins.p2++;
        }
        data.currentPlayer = 1;
        data.score = {p1:0, p2:0};
        data.reset = true;
    }
}