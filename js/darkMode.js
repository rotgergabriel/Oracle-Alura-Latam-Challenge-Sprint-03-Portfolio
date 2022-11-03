(() => {

    const btnSwitch = document.querySelector('[data-switch]')

    btnSwitch.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode')
        btnSwitch.classList.toggle('active')
    })

})()