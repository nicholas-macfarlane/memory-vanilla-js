export const shuffle = (deck)=> {
    let shuffling = deck.length;
    let swappedChar, randomCard;
    while (shuffling) {
        randomCard = Math.floor(Math.random() * shuffling--);
        swappedChar = deck[shuffling].getAttribute("character");
        deck[shuffling].setAttribute("character", deck[randomCard].getAttribute("character"));
        deck[shuffling].innerHTML = deck[randomCard].getAttribute("character");
        deck[randomCard].setAttribute("character", swappedChar );
        deck[randomCard].innerHTML = swappedChar;
    }
}