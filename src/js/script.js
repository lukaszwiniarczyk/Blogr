//NAV
const navBtn = document.querySelector('.nav__hamburger')
const navMobile = document.querySelector('.nav-mobile')
const activeNav = document.querySelector('.active')

//OPEN NAV MOBILE
const allLinks = document.querySelector('.nav-mobile__links')
const navLink = document.querySelectorAll('.nav-mobile__links-link')

const firstLink = document.querySelector('.nav-mobile__links-link--first')
const secondLink = document.querySelector('.nav-mobile__links-link--second')
const thirdLink = document.querySelector('.nav-mobile__links-link--third')

const firstLinkBox = document.querySelector('.nav-mobile__links-link-product')
const secondLinkBox = document.querySelector('.nav-mobile__links-link-company')
const thirdLinkBox = document.querySelector('.nav-mobile__links-link-connect')


const openBtn = '<img src="dist/img/icon-hamburger.svg" alt="Hamburger icon">'
const closeBtn = '<img src="dist/img/icon-close.svg" alt="Hamburger icon">'


navLink.forEach((link) =>{
    link.addEventListener('click', () =>{
        link.children[0].classList.toggle('rotate-arrow')
    })
})

const openLinksNavFirst = () => {
    firstLinkBox.classList.toggle('active')
    secondLinkBox.classList.remove('active')
    thirdLinkBox.classList.remove('active')
}
const openLinksNavSecond = () => {
    secondLinkBox.classList.toggle('active')
    firstLinkBox.classList.remove('active')
    thirdLinkBox.classList.remove('active')
}
const openLinksNavThird = () => {
    thirdLinkBox.classList.toggle('active')
    firstLinkBox.classList.remove('active')
    secondLinkBox.classList.remove('active')
}

const handleNav = () => {
    navMobile.classList.toggle('active')
    if(navMobile.classList.contains('active')){
        navBtn.innerHTML = closeBtn
    } else {
        navBtn.innerHTML = openBtn 
    }
}


navBtn.addEventListener('click', handleNav)
firstLink.addEventListener('click', openLinksNavFirst)
secondLink.addEventListener('click', openLinksNavSecond)
thirdLink.addEventListener('click', openLinksNavThird)

