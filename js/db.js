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
            title: 'Junior front-end developer.',
            fullName: 'Rotger Gabriel',
            subtitle: '| HTML | CSS | JavaScript | React.js | PHP | MySQL | WordPress | Figma |',
            github: 'https://github.com/rotgergabriel',
            linkedin: 'https://www.linkedin.com/in/gabriel-augusto-rotger'
        }
    ],
    about : [
        { 
            title : 'About',
            description: `Soy un desarrollador web en formación, con base sólida en HTML, CSS y JavaScript, y conocimientos de PHP, MySQL y WordPress (CMS).

Trabajo con herramientas y flujos profesionales como Git, GitHub, VSCode, NPM y Figma, y utilizo metodologías de desarrollo estructuradas para gestionar mis proyectos personales.

Actualmente curso una formación profesional de 600 horas con 250 horas de prácticas en Forte Chance Piemonte (Italia), orientada al desarrollo Full Stack y al diseño UI/UX.

Mi objetivo es crecer como Junior Frontend Developer, contribuyendo en entornos colaborativos y mejorando continuamente mis habilidades técnicas y creativas.`}
    ],
    skill : [
        {
            title : 'Skills',
            skills: [
                // --- Frontend ---
                { name: 'HTML', url: '/assets/img/skills/html-5-144.png' },
                { name: 'CSS', url: '/assets/img/skills/css3-144.png' },
                { name: 'JavaScript', url: '/assets/img/skills/javascript-144.png' },
                { name: 'React.js', url: '/assets/img/skills/react-100.png' },

                // --- Backend / Database ---
                { name: 'PHP', url: '/assets/img/skills/PHP-logo.png' },
                { name: 'MySQL', url: '/assets/img/skills/MySQL-Logo.png' },
                { name: 'WordPress', url: '/assets/img/skills/wordpress.png' },

                // --- Tools & Workflow ---
                { name: 'Git', url: '/assets/img/skills/git-144.png' },
                { name: 'GitHub', url: '/assets/img/skills/github-192.png' },
                { name: 'NPM', url: '/assets/img/skills/npm.png' },
                { name: 'VSCode', url: '/assets/img/skills/vscode.png' },

                // --- Design & Productivity ---
                { name: 'Figma', url: '/assets/img/skills/figma.png' },
                { name: 'Notion', url: '/assets/img/skills/notion.png' }
            ]
        }
    ],
    formation : [
        {
            title : 'My formation',
            formations : [
                {
                    name: 'forte--chance',
                    description: "Técnico de desarrollo y gestión de sitios web (Full Stack Developer). Módulos principales: HTML, CSS, JavaScript, PHP, MySQL, Diseño UI/UX con Figma y Gestión de bases de datos. Incluye 240 horas de pasantía (stage).",
                    years: "2025 - 03/2026 (Estimado)"
                },
                { 
                    name: 'alura',
                    description: 'JavaScript, HTML, CSS, Git, GitHub, Lógica de programación, Desarrollo Personal',
                    years: '04/2022 - 01/2023'
                },
                { 
                    name: 'platzi',
                    description: 'JavaScript, React, Router, Redux, HTML, CSS, Git, GitHub.',
                    years: '2020 - Actualidad'
                },
                { 
                    name: 'foundation',
                    description: 'Diplomado en idioma Ingles',
                    years: '06/2020 - 12/2020'
                }
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
                    title: 'Birthday invitation card',
                    subtitle: 'Personal Project',
                    description: 'HTML, CSS, JavaScript, Materialize.css, Node.js, NPM',
                    img: '/assets/img/works/evangelina.png',
                    github: 'https://github.com/rotgergabriel/tarjetaCumple',
                    demo: 'https://evangelina.netlify.app/index.html'
                }, 
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
            tel: '(+39)3290818919',
            mail: 'rotgergabriel@gmail.com',
            github: 'https://github.com/rotgergabriel',
            linkedin: 'https://www.linkedin.com/in/gabriel-augusto-rotger'
        }
    ]
}