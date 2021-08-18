localStorage.removeItem('nombre');

//ACTUALIZAR UN REGISTRO

const productoJSON = JSON.parse(localStorage.getItem('producto'));
console.log(productoJSON);
productoJSON.disponible = true;

console.log(productoJSON);
localStorage.setItem('productos',productoJSON);

//Limpia todo el localStorage
localStorage.clear();
