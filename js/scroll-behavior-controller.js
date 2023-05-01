//Get the menu classes and then just the '<a>'
const linksMenu = document.querySelector('.header__links')
const links = linksMenu.querySelectorAll('a')

//Obtain the class of the images for the parallax effect
const images = document.getElementsByClassName('')

//We detect the click event and apply the scrollTo event to the targetId
links.forEach(link => {
    link.addEventListener('click', event => {
        event.preventDefault()
        const targetId = link.getAttribute('href')
        const targetPosition = document.querySelector(targetId).offsetTop
        window.scrollTo({
            top:targetPosition,
            behavior:"smooth"
        })
    })
})

//ScrollReveal framework function
ScrollReveal().reveal('.about__container', {delay: 500});
ScrollReveal().reveal('.skills', {delay: 500});
ScrollReveal().reveal('.formation__container', {delay: 500});
ScrollReveal().reveal('.works__container', {delay: 500});
ScrollReveal().reveal('.hobbies', {delay: 500});
ScrollReveal().reveal('.contact__container', {delay: 500});

//Simple parallax framework function
new simpleParallax(images, { scale: 5 })