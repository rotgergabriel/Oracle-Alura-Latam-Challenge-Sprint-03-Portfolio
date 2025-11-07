import { data } from "../db.js"

const title = document.querySelector('[data-formation-title]')
const formation = document.querySelector('[data-formation]')

title.innerHTML = `<a id="formation">${data.formation[0].title}</a>`

formation.innerHTML = data.formation[0].formations.map(element => 
    `<div class="formation__item">
        <a href="${element.link}" target="_blank">
            <div class="formation__img ${element.name}"></div>
            <span class="formation--info">${element.description}</span>
            <span class="formation--info years">${element.years}</span>
        </a>
    </div>`
).join('')