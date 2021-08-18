import Citas from '../js/classes/Citas';

describe('Probar la clase de citas', ()=>{
    const id = Date.now();
    const citas = new Citas()
    
    test('Agregar nueva cita', ()=>{
        const citaObj = {
            id,
            mascota: 'Matias',
            propietario: 'Daniel',
            telefono: '321213',
            fecha: '10/12/2021',
            hora:'10:30',
            sintomas: 'Se come su caca'
        }

        citas.agregarCita(citaObj);

        expect(citas).toMatchSnapshot();

    })

    test('Actualizar cita', ()=>{
        const citaObjAct = {
            id,
            mascota: 'Matias Meza',
            propietario: 'Daniel',
            telefono: '321213',
            fecha: '10/12/2021',
            hora:'10:30',
            sintomas: 'Se come su caca'
        }

        citas.editarCita(citaObjAct);

        expect(citas).toMatchSnapshot();
    })

    test('Eliminar cita', ()=>{
        citas.eliminarCita(id);

        expect(citas).toMatchSnapshot();
    })

})