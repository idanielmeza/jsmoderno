const carrito = ['Producto 1', 'Producto 2', 'Producto 3'];

describe('Tetsing carrito de comrpas', ()=>{

    test('Probar que el array tenga 3 elementos', ()=>{
        expect(carrito).toHaveLength(3);
    })

    test('Verifica que el carrito no este vacio', ()=>{
        expect(carrito).not.toHaveLength(0);
    })
})