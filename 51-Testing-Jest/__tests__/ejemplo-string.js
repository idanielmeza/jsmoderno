const password = '123456';

describe('Valida que el password este vacio', ()=>{

    test('Que el password tenga 6 caratectes', ()=>{
        expect(password).toHaveLength(6);
    })

    test('Password no vacio', ()=>{
        expect(password).not.toHaveLength(0);
    })

})