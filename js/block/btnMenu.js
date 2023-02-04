const btnMenu = document.querySelector('[data-btnMenu]')
const btnMenuClose = document.querySelector('[data-btnMenu-close]')
const headerLinks = document.querySelector('[data-links]')

btnMenu.addEventListener('click', () => {
    btnMenu.style.display = 'none'
    headerLinks.style.display = 'flex'
    btnMenuClose.style.visibility = 'visible'
})

btnMenuClose.addEventListener('click', () => {
    btnMenuClose.style.visibility = 'hidden'
    btnMenu.style.display = ''
    headerLinks.style.display = 'none'
})

headerLinks.addEventListener('click', () => {
    headerLinks.style.display = 'none'
    btnMenu.style.display = ''
    btnMenuClose.style.visibility = 'hidden'
})