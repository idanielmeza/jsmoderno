// traversing de DOM

const navegacion = document.querySelector('nav');
console.log(navegacion.firstElementChild);
console.log(navegacion.lastElementChild);

// console.log(navegacion);
// console.log(navegacion.childNodes); // los espacios en blanco son considerados elementos
// console.log(navegacion.children); // Los elementos reales


// console.log(navegacion.children[1].nodeName);
// console.log(navegacion.children[1].nodeType);

// const card = document.querySelector('.card');
// card.children[1].children[1].textContent = 'Nuevo heading desde traversing de DOM';
// card.children[0].src = 'img/hacer3.jpg';
// console.log(card.children[0]);


// Travsersing the child parent

// // console.log(card.parentElement.parentElement);
// console.log(card);

// console.log(card.nextElementSibling);

// const ultimoCard = document.querySelector('.card:last-child');
// console.log(ultimoCard.prevElementSibling);
