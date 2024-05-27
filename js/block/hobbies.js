import { data } from "../db.js"

const title = document.querySelector('[data-hobbies-title]')
const hobbies = document.querySelector('[data-hobbies]')

title.innerHTML = `<a id="hobbies">${data.hobbies[0].title}</a>`

hobbies.innerHTML = data.hobbies[0].description.map(element =>
    `<div class="skill__item">
        <h2 class="skill__subtitle">${element.name}</h2>
        <img class="skills__img" src=${element.url} alt= ${element.name}>
    </div>`
).join('')