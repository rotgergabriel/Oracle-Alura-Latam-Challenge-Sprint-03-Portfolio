//ARRAY
const data = {
    about : [
        title = 'About',
        description = 'Soy un apasionado por la tecnología en general, y en mi tiempo libre estudio de forma autodidacta programación web Front-End, buscando siempre el crecimiento intelectual y con ello mejores oportunidades laborales.',
    ],
    skills : [
        title = 'Skills',
        subtitles = [
            'HTML',
            'CSS',
            'JavaScript',
            'React',
            'Node',
            'NPM',
            'Git',
            'Github'
        ],
        url = [
            '/assets/img/skills/html-5-144.png',
            '/assets/img/skills/css3-144.png',
            '/assets/img/skills/javascript-144.png',
            '/assets/img/skills/react-100.png',
            '/assets/img/skills/icons8-nodejs-144.png',
            '/assets/img/skills/ngp-144.png',
            '/assets/img/skills/git-144.png',
            '/assets/img/skills/github-192.png'
        ]
    ],
    formation : [
        title = 'My formation',
        descriptions = [
            'JavaScript, React, Router, Redux, HTML, CSS, Git, GitHub.',
            'JavaScript, HTML, CSS, Git, GitHub, Lógica de programación, Desarrollo Personal',
            'Diplomado en idioma Ingles',
            'INTRODUCCION AL DESARROLLO WEB 1 y 2'
        ],
        years = [
            '2020 - Actualidad',
            '04/2022 - 01/2023',
            '06/2020 - 12/2020',
            '11/2019'
        ]
    ],
    hobbies : [
        title = 'Hobbies',
        subtitles = [
            'Programar',
            'Video Juegos',
            'Estudiar',
            'Cine',
            'Oir música',
            'Viajar',
            'Hacer deportes'
        ],
        url = [
            '/assets/img/hobbies/479-computer-laptop-notebook-gradient.png',
            '/assets/img/hobbies/476-controller-pad-game-play-gradient.png',
            '/assets/img/hobbies/112-book-morph-outline.png',
            '/assets/img/hobbies/1120-popcorn-gradient.png',
            '/assets/img/hobbies/43-music-note-outline.png',
            '/assets/img/hobbies/1008-travel-agency-gradient.png',
            '/assets/img/hobbies/431-football-soccer-ball-gradient.png'
        ]
    ],
    projects : [
        title = 'Projects',
        aluraGeek = {
            title: 'E-Commerce AluraGeek',
            subtitle: 'Oracle ONE / Alura Latam',
            description: 'HTML, CSS, JavaScript',
            img: '/assets/img/works/aluraGeek.png',
            github: 'https://github.com/rotgergabriel/Oracle-Alura-Latam-Challenge-Sprint-04-E-Commerce',
            demo: 'https://alura-ecommerce.netlify.app'
        },
        crudJavascript = {
            title: 'CRUD JavaScript',
            subtitle: 'Oracle ONE / Alura Latam',
            description: 'HTML, CSS, JavaScript',
            img: '/assets/img/works/crud.png',
            github: 'https://github.com/rotgergabriel/JS-en-la-Web-CRUD-con-JavaScript-Asincrono',
            demo: ''
        },
        toDo = {
            title: 'Manipulacion del DOM (TO-DO)',
            subtitle: 'Oracle ONE / Alura Latam',
            description: 'HTML, CSS, JavaScript',
            img: '/assets/img/works/TO-DO.png',
            github: 'https://github.com/rotgergabriel/JS-en-la-Web-Manipulacion-del-DOM-con-JavaScript',
            demo: 'https://rotgergabriel.github.io/JS-en-la-Web-Manipulacion-del-DOM-con-JavaScript/'
        },
        formValidation = {
            title: 'Validacion de formularios',
            subtitle: 'Oracle ONE / Alura Latam',
            description: 'HTML, CSS, JavaScript',
            img: '/assets/img/works/form-validation.png',
            github: 'https://github.com/rotgergabriel/JS-en-la-Web-Validacion-de-Formularios-y-HTML5',
            demo: 'https://form-validation-js-oracle-alura.netlify.app'
        },
        hangedMan = {
            title: 'Juego del ahorcado',
            subtitle: 'Challenge Sprint 02 - Oracle ONE / Alura Latam',
            description: 'HTML, CSS, JavaScript',
            img: '/assets/img/works/hangedMan.png',
            github: 'https://github.com/rotgergabriel/Oracle-Alura-Latam-Challenge-Sprint-02',
            demo: 'https://oracle-alura-latam-challenge-sprint-2.netlify.app/'
        },
        encryptText = {
            title: 'Encriptador de texto',
            subtitle: 'Challenge Sprint 01 - Oracle ONE / Alura Latam',
            description: 'HTML, CSS, JavaScript',
            img: '/assets/img/works/encrypt.png',
            github: 'https://github.com/rotgergabriel/Oracle-Alura-Latam-Challenge-Sprint-01',
            demo: 'https://encrypt-challenge.netlify.app/'
        },
        losAbuelos = {
            title: 'Los Abuelos',
            subtitle: 'Proyecto Personal',
            description: 'HTML, CSS, JavaScript, React',
            img: '/assets/img/works/losAbuelos.png',
            github: 'https://github.com/rotgergabriel/losAbuelosReact',
            demo: 'https://losabuelos.netlify.app/'
        },
    ]
}

console.log(data.Projects[5].title)