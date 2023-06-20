

const nav = document.querySelector('nav');
const serach = document.querySelector('.search');
const foodSlide = document.querySelector('.food-slide');
const appName = document.querySelector('.app-name');
const restaurant = document.querySelector('.restaurant');
const logIn = document.querySelector('.logIn');
const account = document.querySelector('.account');




const preLoader = document.querySelector('#pre-Loader');
window.addEventListener('load', ()=>{
  preLoader.style.display = "none";
  document.querySelector('main').classList.remove('invisible2');
})





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


const arrow = document.querySelector('.fa-angle-down');
arrow.addEventListener('click', ()=>{
  window.location.href = "./address.html"
})

