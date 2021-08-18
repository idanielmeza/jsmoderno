const enlace = document.createElement('A');
//Agregando texto
enlace.textContent = 'Nuevo enlace';
//href
enlace.href = '/nuevo-enlace';

enlace.target = '_blank';


console.log(enlace);

// enlace.onclick = miFuncion;

//Seleccionar navegacion

const navegacion = document.querySelector('nav');
// navegacion.appendChild(enlace); // insertar al final
navegacion.insertBefore(enlace, navegacion.children[1]); //Agregar en un luga especifico

// function miFuncion () {
//     alert('Diste click');
// }

// Crear un card de forma dinamica

const parrafo1 = document.createElement('P');
parrafo1.textContent = 'Concierto';
parrafo1.classList.add('categoria' ,'concierto');

const parrafo2 = document.createElement('P');
parrafo2.textContent = 'Concierto TRAP';
parrafo2.classList.add('titulo');

const parrafo3 = document.createElement('P');
parrafo3.textContent = '$800 por persona';
parrafo3.classList.add('precio');


//Crear div con clase info

const info = document.createElement('DIV');
info.classList.add('info');

//Agregando los parrafos al div

info.appendChild(parrafo1);
info.appendChild(parrafo2);
info.appendChild(parrafo3);

// Crear imagen
const imagen = document.createElement('IMG');
imagen.src = 'img/hacer2.jpg';

//Crear card
const card = document.createElement('DIV');
card.classList.add('card');

//Asignar imagen
card.appendChild(imagen);
card.appendChild(info);


//Insertar en HTML

const contenedor = document.querySelector('.hacer .contenedor-cards');

contenedor.appendChild(card);

