const menuBar = document.querySelector('.fa-bars');
const closeNav = document.querySelector('.fa-xmark');



menuBar.addEventListener('click', ()=>{
  
  const slideNav = document.querySelector('.nav-slide');
  slideNav.classList.toggle('nav-slide-action');
});

closeNav.addEventListener('click', ()=>{
  
  const slideNav = document.querySelector('.nav-slide');
  slideNav.classList.remove('nav-slide-action');
});


