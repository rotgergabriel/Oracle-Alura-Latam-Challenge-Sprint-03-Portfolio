import { data } from "./api.js"

const title = document.querySelector('[data-skills-title]')
const skill = document.querySelector('[data-skill]')

title.innerHTML = `<a name="skills">${data.skill[0].title}</a>`

// const div = document.createElement('div')
// const h2 = document.createElement('h2')
// const img = document.createElement('img')

// div.className = "skill__item"
// h2.className = "skill__subtitle"
// img.className = "skills__img"

// h2.innerText = `${element.name}`
// img.src = `${element.url}`
// img.alt = `${element.name}`

skill.innerHTML = data.skill[0].skills.map(element => 
    `<div class="skill__item">
        <h2 class="skill__subtitle">${element.name}</h2>
        <img class="skills__img" src=${element.url} alt= ${element.name}>
    </div>`
)