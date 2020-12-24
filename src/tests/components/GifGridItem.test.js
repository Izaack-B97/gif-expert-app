import { shallow } from "enzyme";
import { GifGridItem } from "../../components/GifGridItem";

describe('Pruebas en <GifGridItem /> ' , () => {
    
    test('debe de mostrar correctamente el componente ', () => {

        const title = 'Mi titulo';
        const url = 'https://example.com';

        const wrapper = shallow(<GifGridItem title={ title } url={ url }/>);
        
        expect( wrapper ).toMatchSnapshot();

    });
    
});