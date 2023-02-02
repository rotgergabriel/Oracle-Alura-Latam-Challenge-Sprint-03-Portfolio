import { data } from "./api.js"

const title = document.querySelector('[data-main-title]')
const subtitle = document.querySelector('[data-main-subtitle]')

title.innerHTML = `${data.main[0].title}`
subtitle.innerText = data.main[0].subtitle