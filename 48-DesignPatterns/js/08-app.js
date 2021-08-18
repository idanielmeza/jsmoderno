function Vendedor(nombre){
    this.nombre=nombre;
    this.sala = null;
}

Vendedor.prototype ={
    oferta: (articulo,precio)=>{
        console.log(`Tenemos el sig articulo ${articulo}, iniciamos con un precio de ${precio}`);
    },
    vendido: comprador=>{
        console.log(`Vendido a ${comprador}`);
    }
}

function Comprador (nombre){
    this.nombre = nombre;
    this.sala = null;
}

Comprador.prototype = {
    oferta: (cantidad, comprador)=>{
        console.log(`${comprador.nombre} oferto ${cantidad}`)
    }
}

function Subasta(){
    let compradores = {};

    return{
        registrar: usuario =>{
            compradores[usuario.nombre] = usuario;
            usuario.sala= this;
        }
    }
}

//Crear objetos
const daniel = new Comprador('Daniel');
const matias = new Comprador('Matias');

const vendedor = new Vendedor('Vendedor de Autos');
const subasta = new Subasta();

//Tiene que registrarlos
subasta.registrar(daniel);
subasta.registrar(matias);
subasta.registrar(vendedor);


vendedor.oferta('Tomatemovil', 4000);

daniel.oferta(3200,daniel);
matias.oferta(3500,matias);

vendedor.vendido('Mati');