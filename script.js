// JavaScript
console.log('Hello world!');
const btnA = document.querySelector('#btn-a');
const btnB = document.querySelector('#btn-b');
const btnC = document.querySelector('#btn-c');
const btnD = document.querySelector('#btn-d');

btnA.addEventListener('click', () => {
  document.documentElement.setAttribute('data-theme','color-a');
});

btnB.addEventListener('click', () => {
  document.documentElement.setAttribute('data-theme','color-b');
});

btnC.addEventListener('click', () => {
  document.documentElement.setAttribute('data-theme','color-c');
});

btnD.addEventListener('click', () => {
  document.documentElement.setAttribute('data-theme','color-d');
  });