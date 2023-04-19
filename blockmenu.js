// const btnMob = document.getElementsById("btnnn");

// function toggleMenu() {
//     const nav = document.getElementsById('right__menu');
//     nav.classList.toggle('active');
// }

// btnMob.addEventListener('click', toggleMenu);

document.querySelector(".burger").addEventListener('click', function() {
    document.querySelector(".burger span").classList.toggle('active');
    document.querySelector(".menu").classList.toggle('animate');
    document.querySelector("body").classList.toggle('blur');
});

    
