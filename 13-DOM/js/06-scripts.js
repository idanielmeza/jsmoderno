const encabezado = document.querySelector('.contenido-hero h1').textContent;

console.log(encabezado);


// console.log(encabezado.innerText); // Si en el css - visibitily: hidden; no lo encontrara
// console.log(encabezado.textContent);  // Si lo encontrara
// console.log(encabezado.innerHTML); //Se trae el HTML

document.querySelector('.contenido-hero h1').textContent = 'Nuevo HEADING';

const imagen = document.querySelector('.card img');
imagen.src = 'img/hacer2.jpg';