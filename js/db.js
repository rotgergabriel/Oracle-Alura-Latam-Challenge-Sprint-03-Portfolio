export const data = {
    header: [
        {
            links : [
                { name: 'About', href:'#about'},
                { name: 'My skills', href:'#skills'},
                { name: 'My formation', href:'#formation'},
                { name: 'Hobbies', href:'#hobbies'},
                { name: 'Projects', href:'#works'},
                { name: 'Contact', href:'#contact'}
            ]
        }
    ],
    profile : [
       { 
            title: 'Hola, soy Gabriel, front-end developer.',
            subtitle: '|Html| - |Css| - |JavaScript| - |React.js|',
            github: 'https://github.com/rotgergabriel',
            linkedin: 'https://www.linkedin.com/in/gabriel-augusto-rotger'
        }
    ],
    about : [
       { 
            title : 'About',
            description: `Soy un desarrollador web con habilidades en tecnologías modernas como HTML, CSS y Javascript, y experiencia en herramientas esenciales como VSCode, Git, GitHub y NPM. Mi enfoque en el desarrollo de aplicaciones web abarca desde la planificación y el diseño hasta la implementación y el mantenimiento, y he trabajado con varios frameworks, como React.js, Materialize.css y Bootstrap. Soy apasionado por encontrar soluciones óptimas y eficientes, y siempre busco mejorar mis habilidades y conocimientos. Estoy seguro de que mis habilidades, motivación y compromiso pueden ser de gran valor para su equipo. ¡Gracias por su consideración!`}
    ],
    skill : [
        {
            title : 'Skills',
            skills : [ 
                { name: 'HTML', url: '/assets/img/skills/html-5-144.png' },
                { name: 'CSS', url: '/assets/img/skills/css3-144.png' },
                { name: 'JavaScript', url: '/assets/img/skills/javascript-144.png' },
                { name: 'React', url: '/assets/img/skills/react-100.png' },
                { name: 'Node', url: '/assets/img/skills/icons8-nodejs-144.png' },
                { name: 'NPM', url: '/assets/img/skills/ngp-144.png' },
                { name: 'Git', url: '/assets/img/skills/git-144.png' },
                { name: 'Github', url: '/assets/img/skills/github-192.png' }
            ]
        }
    ],
    formation : [
        {
            title : 'My formation',
            formations : [
                { 
                    name: 'platzi',
                    description: 'JavaScript, React, Router, Redux, HTML, CSS, Git, GitHub.',
                    years: '2020 - Actualidad'
                 },
                { 
                    name: 'alura',
                    description: 'JavaScript, HTML, CSS, Git, GitHub, Lógica de programación, Desarrollo Personal',
                    years: '04/2022 - 01/2023'
                },
                { 
                    name: 'foundation',
                    description: 'Diplomado en idioma Ingles',
                    years: '06/2020 - 12/2020'
                },
                { 
                    name: 'google',
                    description: 'INTRODUCCION AL DESARROLLO WEB 1 y 2',
                    years: '11/2019'
                },
            ]
        }
    ],
    hobbies : [ 
        {
            title : 'Hobbies',
            description : [
                { name: 'Programar', url: '/assets/img/hobbies/479-computer-laptop-notebook-gradient.png' },
                { name: 'Video Juegos', url: '/assets/img/hobbies/476-controller-pad-game-play-gradient.png' },
                { name: 'Estudiar', url: '/assets/img/hobbies/112-book-morph-outline.png' },
                { name: 'Cine', url: '/assets/img/hobbies/1120-popcorn-gradient.png' },
                { name: 'Oir música', url: '/assets/img/hobbies/43-music-note-outline.png' },
                { name: 'Viajar', url: '/assets/img/hobbies/1008-travel-agency-gradient.png' },
                { name: 'Hacer deportes', url: '/assets/img/hobbies/431-football-soccer-ball-gradient.png' }
            ]
        }
    ],
    project : [
        {
            title : 'Projects',
            projects : [
                {
                    title: 'E-Commerce AluraGeek',
                    subtitle: 'Oracle ONE / Alura Latam',
                    description: 'HTML, CSS, JavaScript',
                    img: '/assets/img/works/aluraGeek.png',
                    github: 'https://github.com/rotgergabriel/Oracle-Alura-Latam-Challenge-Sprint-04-E-Commerce',
                    demo: 'https://alura-ecommerce.netlify.app'
                }, 
                {
                    title: 'CRUD JavaScript',
                    subtitle: 'Oracle ONE / Alura Latam',
                    description: 'HTML, CSS, JavaScript',
                    img: '/assets/img/works/crud.png',
                    github: 'https://github.com/rotgergabriel/JS-en-la-Web-CRUD-con-JavaScript-Asincrono',
                    demo: ''
                },
                {
                    title: 'Manipulacion del DOM (TO-DO)',
                    subtitle: 'Oracle ONE / Alura Latam',
                    description: 'HTML, CSS, JavaScript',
                    img: '/assets/img/works/TO-DO.png',
                    github: 'https://github.com/rotgergabriel/JS-en-la-Web-Manipulacion-del-DOM-con-JavaScript',
                    demo: 'https://rotgergabriel.github.io/JS-en-la-Web-Manipulacion-del-DOM-con-JavaScript/'
                },
                {
                    title: 'Validacion de formularios',
                    subtitle: 'Oracle ONE / Alura Latam',
                    description: 'HTML, CSS, JavaScript',
                    img: '/assets/img/works/form-validation.png',
                    github: 'https://github.com/rotgergabriel/JS-en-la-Web-Validacion-de-Formularios-y-HTML5',
                    demo: 'https://form-validation-js-oracle-alura.netlify.app'
                },
                {
                    title: 'Juego del ahorcado',
                    subtitle: 'Challenge Sprint 02 - Oracle ONE / Alura Latam',
                    description: 'HTML, CSS, JavaScript',
                    img: '/assets/img/works/handgedMan.png',
                    github: 'https://github.com/rotgergabriel/Oracle-Alura-Latam-Challenge-Sprint-02',
                    demo: 'https://oracle-alura-latam-challenge-sprint-2.netlify.app/'
                },
                {
                    title: 'Encriptador de texto',
                    subtitle: 'Challenge Sprint 01 - Oracle ONE / Alura Latam',
                    description: 'HTML, CSS, JavaScript',
                    img: '/assets/img/works/encrypt.png',
                    github: 'https://github.com/rotgergabriel/Oracle-Alura-Latam-Challenge-Sprint-01',
                    demo: 'https://encrypt-challenge.netlify.app/'
                },
                {
                    title: 'Los Abuelos',
                    subtitle: 'Proyecto Personal',
                    description: 'HTML, CSS, JavaScript, React',
                    img: '/assets/img/works/losAbuelos.png',
                    github: 'https://github.com/rotgergabriel/losAbuelosReact',
                    demo: 'https://losabuelos.netlify.app/'
                },
            ]
        }
    ],
    contact: [
        {
            title: 'Contacto',
            form: [
                {
                    //Form content
                }
            ]
        },
    ],
    footer : [
        {
            tel: 'Tel: (+39)3290818919',
            mail: 'E-mail: rotgergabriel@gmail.com',
            github: 'https://github.com/rotgergabriel',
            linkedin: 'https://www.linkedin.com/in/gabriel-augusto-rotger'
        }
    ]
}