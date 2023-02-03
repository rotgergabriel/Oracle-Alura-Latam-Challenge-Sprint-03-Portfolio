import { data } from "./api.js"

const title = document.querySelector('[data-main-title]')
const subtitle = document.querySelector('[data-main-subtitle]')

title.innerHTML = `${data.profile[0].title}`
subtitle.innerText = data.profile[0].subtitle