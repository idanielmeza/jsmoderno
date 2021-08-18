const cliente ={
    nombre: 'Daniel Ledezma',
    balance: 500
};

describe('Testing al cliente', ()=>{

    test('El cliente es premium',()=>{
        expect(cliente.balance).toBeGreaterThan(400);
    })

    test('ES daniel', ()=>{
        expect(cliente.nombre).toBe('Daniel Ledezma');
    })

    test('No es otro cliente', ()=>{
        expect(cliente.nombre).not.toBe('Matias');
    })

    test('No tiene 500', ()=>{
        expect(cliente.balance).not.toBe(300);
    })

})

