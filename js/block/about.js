import { data } from "../db.js"

const title = document.querySelector('[data-about-title]')
const description = document.querySelector('[data-about-description]')

title.innerHTML = `<a id="about">${data.about[0].title}</a>`
description.innerText = data.about[0].description