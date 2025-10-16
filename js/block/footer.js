import { data } from "../db.js"

const footer = document.querySelector('[data-footer]')

footer.innerHTML = data.footer.map(element =>
    `<div class="footer__container">
            <div>
                <a href=${element.github} target="_blank">GitHub<span>&#9701</span></a>
                <a href=${element.linkedin} target="_blank">Linkedin<span>&#9701</span></a>
            </div>
            <a href="tel:+393290818919">${element.tel}</a>
            <a href="mailto:rotgergabriel@gmail.com">${element.mail}</a>
    </div>`
).join('')
