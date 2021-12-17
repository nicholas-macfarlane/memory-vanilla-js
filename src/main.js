import {
    create,
    get,
    append,
    checkMatch,
    nextTurn,
    style,
    data,
    footer,
    prepareDeck,
    createCard,
    prepareCards,
    setAttributes,
    updateConsole,
    flipCard,
    shuffle,
    getHoverColor,
    getHoverOutColor,

} from "./modules/engine/engine.js";
const main = ()=> {
    prepareDeck();
    footer();
}
window.onload=main();

