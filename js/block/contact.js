import { data } from "../db.js"

const title = document.querySelector('[data-contact-title]')
// const form = document.querySelector('[data-contact-form]')

title.innerHTML = `<a id="contact">${data.contact[0].title}</a>`
// form.innerText = data.contact[0].form