import { get } from "../engine/constants.js"
import { data } from "../data.js"
import { style } from "../style/style.js"
import { checkMatch } from "../engine/checkMatch.js";

export const flipCard = (index)=> {
   const cardToFlip = get(index);
   if (cardToFlip.getAttribute("flipped") ==="true") return;
   if (cardToFlip.getAttribute("flipped") === "false" && data.flippedCardsCount < 2) 
    {
        cardToFlip.style.color = style.colors.green;
        cardToFlip.setAttribute("flipped", true);
        data.flippedCardsCount++;
        data.flippedCards.push(cardToFlip);

        if (data.flippedCardsCount === 2) 
        {
           console.log("flipped and checking... ");
           setTimeout(checkMatch, 1000);
        }
   }
}