//New Biding
function Auto(modelo,color){
    this.modelo = modelo;
    this.color = color;
}

const auto = new Auto('Vocho','Amarillo');
console.log(auto);


//Window Biding
window.color = 'negro';
function hola(){
    console.log(color);
}

hola();