import { data } from "../db.js"

const links = document.querySelector('[data-links]')

links.innerHTML = data.header[0].links.map(element =>
    `<li><a class="header__link underline" href="${element.href}">${element.name}</a></li>`
).join('')