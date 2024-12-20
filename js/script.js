// Sign into navbar-nav while @media tablet and laptop
const signNav = document.querySelector('.sign-nav') ;
const navbarNav = document.querySelector('.navbar-nav');
const extraNavbar = document.querySelector('.extra-navbar');

function moveSignNav() {
    
    if ( window.innerWidth <= 768) {
    
        if (!navbarNav.contains(signNav)) {
            navbarNav.insertBefore(signNav, navbarNav.firstChild);
        } 
    
    } else {

        if (!extraNavbar.contains(signNav)) {
            extraNavbar.appendChild(signNav);
        }
    }
};

document.querySelector('#humberger-menu').onclick = () => {
    navbarNav.classList.toggle('active')

} 

const humberger = document.querySelector('#humberger-menu');

document.addEventListener('click', (e) => {
    if (!navbarNav.contains(e.target) && !humberger.contains(e.target) && !signNav.contains(e.target)) {
        navbarNav.classList.remove('active');
    }
});


window.addEventListener('resize', moveSignNav);
moveSignNav();

