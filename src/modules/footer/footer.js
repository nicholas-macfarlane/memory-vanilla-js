import { codePen, gitHub, author, year } from "../engine/constants.js"

export const footer = ()=> {
    const footer = document.createElement("span");
    footer.innerHTML =
        `${author()} - ${year()} <a href='${codePen()}' target='_blank'>CodePen</a>
        <a href='${gitHub()}' target='_blank'>Github</a>`;
    footer.id = "footer";
    document.body.append(footer);
}