// Navbar responsive JavaScript
const navbarMenu = document.querySelector('.navbar-menu');
const menu = document.querySelector('.fa-solid');
document.addEventListener('DOMContentLoaded', () => {
    updateNavbarIcons();
});


// function updateNavbarIcons() {
//     const menuLink = document.getElementbyId('menu');

//     menuLink.addEventListener('mouseover', () => {
//             const icon = document.createElement('i');
//             icon.classList.add('fa-burger');
//             icon.classList.add('fa-solid');

//             // You can change the icon based on the link's content here
//             menuLink.appendChild(icon);
//         });

//         menuLink.addEventListener('mouseout', () => {
//             const icon = menuLink.querySelector('.fa-burger');
//             if (icon) {
//                 icon.remove();
//             }
//         });

// }
