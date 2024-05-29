(() => {

    const btnSwitch = document.querySelector('[data-switch]')

    // Agrega la clase 'dark-mode' al cargar la página
    document.body.classList.add('dark-mode')
    btnSwitch.classList.add('active')

    btnSwitch.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode')
        btnSwitch.classList.toggle('active')
    })

})()