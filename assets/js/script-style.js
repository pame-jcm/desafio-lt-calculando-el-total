

// Declara Elementos del DOM
let body        = document.querySelector('body');
let container   = document.getElementById('container');
let resultado   = document.getElementById('resultado');
let base        = document.getElementById('base');
let circle      = document.getElementById('circle');
let card        = document.getElementById('card');
let img         = document.getElementById('image');
let form        = document.getElementById('form');
let title       = document.getElementById('title');
let inputCanti  = document.getElementById('input-cantidad');
let inputColor  = document.getElementById('input-color');
let precio      = document.getElementById('precio');
let btnCalcular = document.getElementById('btnCalcular');

// Elemento BODY
body.style.display = 'flex';
body.style.justifyContent = 'center';
body.style.height = '100vh';

// Elemento RESULTADO
resultado.style.display = 'flex';
resultado.style.flexDirection = 'column';
resultado.style.justifyContent = 'center';
resultado.style.margin = '3em';

// Elemento BASE
base.style.display = 'flex';

// Elemento CIRCLE
circle.style.marginLeft      = '.3em';
circle.style.width           = '2em';
circle.style.height          = '100%';
circle.style.border          = '1px solid #555';
circle.style.borderRadius    = '50%';
circle.style.backgroundColor = 'white';

// Elemento CONTAINER
container.style.display = 'flex';
container.style.flexDirection = 'column';
container.style.justifyContent = 'center';
container.style.alignItems = 'center';

// Elemento CARD
card.style.display         = 'flex';
card.style.flexDirection   = 'column';
card.style.justifyContent  = 'center';
card.style.alignItems      = 'center';
card.style.border          = '1px solid gray';
card.style.borderRadius    = '1em';
card.style.backgroundColor = '#7ba238';
card.style.width           = '25em';

// Elemento IMG
img.style.padding = '2em';

// Elemento FORM
form.style.display = 'flex';
form.style.flexDirection = 'column';
for (let i = 0; i < form.children.length; i++) {
  console.log(form.children[i].id);
  form.children[i].style.margin = '.5em'
}

// Elemento TITLE
title.style.color = 'white';
title.style.fontSize = '1.2em';

// Elemento INPUT CANTIDAD
inputCanti.style.padding = '.2em';
inputCanti.style.fontSize = '1.2em';
inputCanti.style.border = '1px solid gray';
inputCanti.style.borderRadius = '.3em';

// Elemento INPUT COLOR
inputColor.style.padding = '.2em';
inputColor.style.fontSize = '1.2em';
inputColor.style.border = '1px solid gray';
inputColor.style.borderRadius = '.3em';

// Elemento PRECIO
precio.style.color = 'white';

// Elemento BUTTON
btnCalcular.style.padding = '.3em';
btnCalcular.style.margin = '.5em';
btnCalcular.style.width = '8em';
btnCalcular.style.fontSize = '1.2em';
btnCalcular.style.border = '1px solid gray';
btnCalcular.style.borderRadius = '.3em';
btnCalcular.style.backgroundImage = 'linear-gradient(#e7b128, #bb8f03, #e7b128)';
btnCalcular.style.color = 'white';
