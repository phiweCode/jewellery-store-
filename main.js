const hamburgerMenu = document.querySelector('.hamburger-menu')
const navListWrapper = document.querySelector('.nav-list-wrapper')
hamburgerMenu.addEventListener('click', (e)=>{

    console.log("menu clicked")
    hamburgerMenu.classList.toggle('active')
    navListWrapper.classList.toggle('active')

})