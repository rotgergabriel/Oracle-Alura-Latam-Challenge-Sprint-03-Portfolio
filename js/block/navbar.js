import { data } from "../db.js"

const links = document.querySelector('[data-links-desktop]')

links.innerHTML = data.header[0].links.map(element =>
    `<li><a class="nav-desktop__link underline" href="${element.href}">${element.name}</a></li>`
).join('')