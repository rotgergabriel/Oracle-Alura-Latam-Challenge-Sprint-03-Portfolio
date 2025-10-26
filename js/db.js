export const data = {
    header: [
        {
            links : [
                { name: 'Start', href:'#hero'},
                { name: 'Who I Am', href:'#about'},
                { name: 'Tech Stack', href:'#skills'},
                { name: 'Professional Training', href:'#formation'},
                { name: 'Projects', href:'#works'},
                { name: "Let's Connect", href:'#footer'}
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
            title: 'Who I Am',
            description: `Soy un desarrollador web en formación con base sólida en HTML, CSS y JavaScript, y conocimientos en PHP, MySQL y WordPress. Trabajo con herramientas profesionales como Git, GitHub, VSCode, NPM y Figma, aplicando metodologías estructuradas en mis proyectos personales.

Actualmente curso una formación profesional en Forte Chance Piemonte (Italia) orientada al desarrollo Full Stack y diseño UI/UX.

Mi objetivo es crecer como Junior Frontend Developer, aportando en equipos colaborativos y mejorando continuamente mis habilidades técnicas y creativas.`}
    ],
    skill : [
        {
            title: 'Tech Stack',
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
            title: 'Training',
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
                    years: '2019 - 2021'
                },
                { 
                    name: 'foundation',
                    description: 'Diplomado en idioma Ingles',
                    years: '06/2020 - 12/2020'
                }
            ]
        }
    ],
    project : [
        {
            title : 'Projects',
            projects : [
                {
                    title: 'Portfolio Web',
                    subtitle: 'Personal Project',
                    description: 'HTML, CSS, JavaScript, Git, Git Flow, JSON, Responsive Design, Dark Mode',
                    img: '/assets/img/works/portfolio.png',
                    github: 'https://github.com/rotgergabriel/Oracle-Alura-Latam-Challenge-Sprint-03-Portfolio',
                    demo: 'https://rotgergabriel.netlify.app/'
                },
                {
                    title: 'Devscraft',
                    subtitle: 'Proyecto Personal',
                    description: 'Sitio web creado como proyecto personal con el objetivo de ofrecer tarjetas de cumpleaños digitales personalizadas. Basado en una plantilla, fue adaptado y rediseñado con HTML, CSS y JavaScript, modificando estilos, contenido y estructura para ajustarse al propósito comercial.',
                    img: '/assets/img/works/devscraft.png',
                    github: 'https://github.com/rotgergabriel/Devs-Craft', // si lo tienes publicado
                    demo: 'https://devscraft.netlify.app/'
                },
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
                    subtitle: 'Proyecto de Aprendizaje',
                    description: 'Mi primer proyecto utilizando React con componentes funcionales. Proyecto básico diseñado para aprender los fundamentos de React y la estructura de componentes, representando mis primeros pasos en frameworks modernos y sirviendo como base para proyectos posteriores más complejos.',
                    img: '/assets/img/works/losAbuelos.png',
                    github: 'https://github.com/rotgergabriel/losAbuelosReact',
                    demo: 'https://losabuelos.netlify.app/'
                }
            ]
        }
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