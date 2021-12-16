import {data} from "../data.js";

export const updateConsole = ()=> {
    document.getElementById("console-div").innerHTML =
        `<div id="console-wrapper"><div id="console">
        <br /> Player ${data.currentPlayer}'s turn.
        <br /><br />${data.console}
        <br /><br /><div id="scoring">
         Game: <br />(P1):${data.score.p1} (P2):${data.score.p2}<br /><br />
         Wins: <br />(P1):${data.wins.p1} (P2):${data.wins.p2}
        </div></div></div>`;
}