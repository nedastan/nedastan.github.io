let d = document
let menuButton = d.getElementById('hamburger'),
    menu = d.getElementById('menu'),
    button = d.querySelectorAll('a.closeButton')

menuButton.addEventListener('click', () => {
    menuButton.classList.toggle('active')
    menu.classList.toggle('active')
})

button.forEach(element => {
    element.addEventListener('click', () => {
        menuButton.classList.remove('active')
        menu.classList.remove('active')
    })
})