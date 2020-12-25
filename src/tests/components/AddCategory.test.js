import { shallow } from "enzyme";
import { AddCategory } from "../../components/AddCategory";

describe('Pruebas en <AddCategory />', () => {

    const setCategories = () => {};
    const wrapper = shallow(<AddCategory setCategories={ setCategories }/>);

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
    
    

});