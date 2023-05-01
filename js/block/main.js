import { data } from "../db.js"

const profile = document.querySelector('[data-main-profile]')

profile.innerHTML = data.profile.map(element =>
`   <div class="main__container--title">
        <h1 class="main__title">${element.title}</h1>
        <h2 class="main__subtitle">${element.subtitle}</h2>
        <div class="main__links">
                <li><a class="main__link underline" href=${element.github} target="_blank">GitHub<span>&#9701</span></a></li>
                <li><a class="main__link underline" href=${element.linkedin} target="_blank">Linkedin<span>&#9701</span></a></li>
                <li><a class="main__link underline" href="/assets/file/Cv Gabriel - Es.pdf" download="Cv-Rotger">Cv-Download<span>&#9701</span></a></li>
        </div>
    </div>`
).join('')

//Version anterior
    // `   <img class="main__profile--img" src="/assets/img/profile.jpeg" alt="profile image">
    // <div class="main__container--title">
    //     <h1 class="main__title">${element.title}</h1>
    //     <h2 class="main__subtitle">${element.subtitle}</h2>
    //     <div class="main__links">
    //         <li><a class="main__link underline" href=${element.github} target="_blank">GitHub<span>&#9701</span></a></li>
    //         <li><a class="main__link underline" href=${element.linkedin} target="_blank">Linkedin<span>&#9701</span></a></li>
    //         <li><a class="main__link underline" href="/assets/file/Cv Gabriel - Es.pdf" download="Cv-Rotger">Cv-Download<span>&#9701</span></a></li>
    //     </div>
    // </div>`