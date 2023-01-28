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
        ],
    ],
}

console.log(data.skills[0], data.skills[1].length)

// API
// const api = {
//     about: {
//         title: 'About',
//         description: 'Soy un apasionado por la tecnología en general, y en mi tiempo libre estudio de forma autodidacta programación web Front-End, buscando siempre el crecimiento intelectual y con ello mejores oportunidades laborales.',
//     },
//     skill: {
//         title: 'Skills',
//         skills: {
//             html: {
//                 title: 'HTML',
//                 url: '/assets/img/skills/html-5-144.png'
//             },
//             css: {
//                 title: 'CSS',
//                 url: '/assets/img/skills/css3-144.png'
//             },
//             javascript: {
//                 title: 'JavaScript',
//                 url: '/assets/img/skills/javascript-144.png'
//             },
//             react: {
//                 title: 'React',
//                 url: '/assets/img/skills/react-100.png'
//             },
//             node: {
//                 title: 'Node',
//                 url: '/assets/img/skills/icons8-nodejs-144.png'
//             },
//             npm: {
//                 title: 'NPM',
//                 url: '/assets/img/skills/ngp-144.png'
//             },
//             git: {
//                 title: 'Git',
//                 url: '/assets/img/skills/git-144.png'
//             },
//             github: {
//                 title: 'GitHub',
//                 url: '/assets/img/skills/github-192.png'
//             }
//         }
//     },
// }