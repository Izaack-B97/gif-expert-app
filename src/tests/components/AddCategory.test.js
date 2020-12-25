import '@testing-library/jest-dom';

import { shallow } from "enzyme";
import { AddCategory } from "../../components/AddCategory";

describe('Pruebas en <AddCategory />', () => {

    const setCategories = jest.fn(); // Funcion de Jest
    let wrapper = shallow(<AddCategory setCategories={ setCategories }/>);

    beforeEach(() => {
        jest.clearAllMocks(); // Sirve para limpiar funciones o mocks (funciones)
        wrapper = shallow(<AddCategory setCategories={ setCategories }/>);
    });

    test('debe de mostrar correctamente ', () => {
        expect( wrapper ).toMatchSnapshot();
    });

    test('debe de cambiar la caja de texto ', () => {
        const input = wrapper.find('input');
        const value = 'Hola mundo';

        input.simulate('change', { target: { value } }); // Cambia el valor;
        
        const p = wrapper.find('p');

        expect( p.text().trim() ).toBe( value );
    });
    
    test('NO debe de postear la informacion onSubmit ', () => {
        const form = wrapper.find('form');

        form.simulate('submit', { preventDefault: () => {} });

        expect( setCategories ).not.toHaveBeenCalled(); // Verifica que se halla llamado una funcion
    })
    

});