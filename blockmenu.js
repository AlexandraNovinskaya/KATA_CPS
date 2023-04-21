// const btnMob = document.getElementsById("btnnn");

// function toggleMenu() {
//     const nav = document.getElementsById('right__menu');
//     nav.classList.toggle('active');
// }

// btnMob.addEventListener('click', toggleMenu);

document.querySelector(".burger").addEventListener('click', function() {
    document.querySelector(".burger span").classList.toggle('active');
    document.querySelector(".menu").classList.toggle('animate');
    document.querySelector(".blur").classList.toggle('open');
});

    
document.onclick = function(evt) {
    if (!document.querySelector(".burger").contains(evt.target) && (!document.querySelector(".menu").contains(evt.target))) {
        document.querySelector(".burger span").classList.remove('active');
        document.querySelector(".menu").classList.remove('animate');
        document.querySelector(".blur").classList.remove('open');
    }
}

let more_txt = document.querySelectorAll(".ReadMore_text");
let arr_txt = document.querySelector(".arrow");
let text1 = document.querySelector(".firstblock__additional1");
let text2 = document.querySelector(".firstblock__additional2");

for (let i = 0; i < more_txt.length; i++) {
  more_txt[i].addEventListener('click', function(){
    more_txt[i].parentNode.classList.toggle('active');
    arr_txt.classList.toggle('rotate');
    text1.classList.toggle('read1');
    text2.classList.toggle('read2');
  })
}

const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    
    slidesPerView: 1.1,
    spaceBetween: 16,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  
    // // Navigation arrows
    // navigation: {
    //   nextEl: '.swiper-button-next',
    //   prevEl: '.swiper-button-prev',
    // },
  
    // And if we need scrollbar
    // scrollbar: {
    //   el: '.swiper-scrollbar',
    // },
  });

let more_firm = document.querySelectorAll(".ReadMore");
let arr_firm = document.querySelector(".arrow_firm");
  
for (let i = 0; i < more_firm.length; i++) {
    more_firm[i].addEventListener('click', function(){
      more_firm[i].parentNode.classList.toggle('active_firm');
      arr_firm.classList.toggle('rotate_firm');
    })
}