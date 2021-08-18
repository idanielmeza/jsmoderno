const cliente = {
    nombre: 'Daniel Ledezma2',
    balance: 500,
    tipo: 'Premium'
}

describe('Testing al cliente', ()=>{

    test('Es Daniel Ledezma', ()=>{
        expect(cliente).toMatchSnapshot();
    })
    
})