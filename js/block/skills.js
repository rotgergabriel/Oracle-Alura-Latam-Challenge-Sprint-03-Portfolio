import { data } from "../db.js"

const title = document.querySelector('[data-skills-title]')
const skill = document.querySelector('[data-skill]')

title.innerHTML = `<a name="skills">${data.skill[0].title}</a>`

skill.innerHTML = data.skill[0].skills.map(element => 
    `<div class="skill__item">
        <h2 class="skill__subtitle">${element.name}</h2>
        <img class="skills__img" src=${element.url} alt= ${element.name}>
    </div>`
)