export const footer = ()=> {
    const footer = document.createElement("span");
    footer.innerHTML = 
        "nmacfarlane - 2020 <a href='https://codepen.io/nmacfarlane/full/abOrWRy' target='_blank'>CodePen</a> <a href='https://github.com/nicholas-macfarlane/memory-vanilla-js' target='_blank'>Github</a>";
    footer.id = "footer";
    document.body.append(footer);
}