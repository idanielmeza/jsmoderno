//Varibales

const carrito = document.querySelector('#carrito');

const contenedorCarrito = document.querySelector('#lista-carrito tbody');
const vaciarCarritoBtn = document.querySelector('#vaciar-carrito');
const listaCursos = document.querySelector('#lista-cursos');

let articulosCarrito =[];

cargarEvenetListeners();

function cargarEvenetListeners(){
    //Cuando agregas un curso presionando agregar al carrito
    listaCursos.addEventListener('click', agregarCurso);

    //Elimina cursos del carrito
    carrito.addEventListener('click' , eliminarCurso);

    //Muestra los cursos localstorage
    document.addEventListener('DOMContentLoaded', ()=>{
        articulosCarrito = JSON.parse(localStorage.getItem('carrito')) || [];

        carritoHTML();
    })

    // Vaciar carrito BTN
    vaciarCarritoBtn.addEventListener('click', vaciarCarrito);
}


//Funciones
function agregarCurso(e){
    e.preventDefault();
    if(e.target.classList.contains('agregar-carrito')){
        const cursoSeleccionado = e.target.parentElement.parentElement;
        leerDatosCurso(cursoSeleccionado);
    }
}

// Eliminar cursos
function eliminarCurso(e){
    // console.log(e.target.classList);
    if(e.target.classList.contains('borrar-curso')){
        const cursoID = e.target.getAttribute('data-id');

        //Elimina del arreglo por el data ID

        articulosCarrito = articulosCarrito.filter( curso => curso.id !== cursoID )
        carritoHTML();
    }
}

//Leer el contenido del html al que le dimos click y extrae informacion del curso

function leerDatosCurso(curso){
    // console.log(curso);

    //Crear un objeto con el contenido del curso actual
    const infoCurso = {
        imagen: curso.querySelector('img').src,
        titulo: curso.querySelector('h4').textContent,
        precio: curso.querySelector('.precio span').textContent,
        id: curso.querySelector('a').getAttribute('data-id'),
        cantidad: 1
    }

    //Revisa si un elemento ya existe en el carrito
    const existe = articulosCarrito.some(curso => curso.id === infoCurso.id);
    // console.log(existe);
    if(existe){
        //Actualizamos la cantidad

        const cursos = articulosCarrito.map( curso => {
            if(curso.id === infoCurso.id){
                curso.cantidad++;
                return curso; //Retorna el objeto actualizado
            }else{
                return curso; // retorna los objetos que no son dublicados
            }
        })
        articulosCarrito = [...cursos];
    }else{
        //Agrega elementos al arreglo del carrito
        articulosCarrito = [...articulosCarrito, infoCurso];
    }

    
    // console.log(articulosCarrito);
    carritoHTML();
}

// Muestra el carrito de compras en el HTML

function carritoHTML(){

    //Limpiar HTML
    limpiarCarrito();

    // recorre el carrito y genera el HTML
    articulosCarrito.forEach(curso =>{
        const {id,titulo,imagen,precio,cantidad} = curso;

        const row = document.createElement('tr');
        row.innerHTML = `
            <td><img src='${imagen}' width='100'></td>

            <td>${titulo}</td>

            <td>${precio}</td>

            <td>${cantidad}</td>

            <td>
                <a href='#' class='borrar-curso' data-id='${id}'> x </a>
            </td>
        `;

        //Agrega el HTML del carrito en tl tbody
        contenedorCarrito.appendChild(row);
    });

    //Sincronizar con storage
    sincronizarStorage();
}

function sincronizarStorage(){
    localStorage.setItem('carrito', JSON.stringify(articulosCarrito));
}

//Limpia el carrito
function limpiarCarrito(){
    // forma lenta
    // contenedorCarrito.innerHTML = '';
    

    //Forma rapida
    while(contenedorCarrito.firstChild){
        contenedorCarrito.removeChild(contenedorCarrito.firstChild);
    }
}

// Vaciar el carrito
function vaciarCarrito(){
    articulosCarrito = [];
    limpiarCarrito();

}

