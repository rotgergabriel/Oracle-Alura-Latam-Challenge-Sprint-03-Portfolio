//Get the menu classes and then just the '<a>'
const linksMenu = document.querySelector('.header__links')
const links = linksMenu.querySelectorAll('a')

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