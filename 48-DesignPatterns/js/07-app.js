//Namespaces

const restaurantApp = {};

restaurantApp.platillos = [
    {
        platillo: 'Pizza',
        precio: 25
    },
    {
        platillo: 'Hamburguesa',
        precio: 12
    },
    {
        platillo: 'Refresco',
        precio: 3
    }
];

restaurantApp.funciones = {
    mostrarMenu: platillos =>{
        console.log('Bienvenidos a nuestro menu');
        platillos.forEach((platillo,indice)=>{
            console.log(`${indice} : ${platillo.platillo} $${platillo.precio}`);
        })
    },
    ordernar: id=>{
        console.log(`Tu platillo: ${restaurantApp.platillos[id].platillo} se esta preparando `)
    },
    agregarPlatillo: (platillo,precio)=>{
        const nuevo = {
            platillo,
            precio
        }
        restaurantApp.platillos.push(nuevo);
    }
}

const {platillos} = restaurantApp;

restaurantApp.funciones.mostrarMenu(platillos);
restaurantApp.funciones.ordernar(0);