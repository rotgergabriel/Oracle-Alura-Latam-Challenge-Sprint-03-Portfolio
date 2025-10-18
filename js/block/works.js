import { data } from  '../db.js'

const title = document.querySelector('[data-works-title]')
const works = document.querySelector('[data-works]')

title.innerHTML = `<a id="works">${data.project[0].title}</a>`

works.innerHTML = data.project[0].projects.map(element => 
    `<div class="works__items">
        <img class="work__img" src=${element.img} alt=${element.title}>
        <div class="work__info">
            <h1 class="work--title">${element.title}</h1>
            <h2 class="work--subtitle">${element.subtitle}</h2>
            <span class="work--description">${element.description}</span>
            <a class="work--button plans" target="_blank" href=${element.demo}>Ver Proyecto</a>
            <a class="work--button ghost" target="_blank" href=${element.github}>GitHub</a>
        </div>
    </div>`
).join('')
