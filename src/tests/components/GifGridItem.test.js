import { shallow } from "enzyme";
import { GifGridItem } from "../../components/GifGridItem";

describe('Pruebas en <GifGridItem /> ' , () => {
    
    const title = 'Mi titulo';
    const url = 'https://example.com';

    const wrapper = shallow(<GifGridItem title={ title } url={ url }/>);

    test('debe de mostrar correctamente el componente ', () => {
        
        expect( wrapper ).toMatchSnapshot();

    });
    
    test('debe de tener un parrafo con el title', () => {
        const p = wrapper.find('p');
        expect( p.text() ).toBe( title );
    });

    test('debe de tener la imagen igual a la url y alt de los props ', () => {
        const img = wrapper.find('img');

        // console.log(img.props()) // { src: 'https://example.com', alt: 'Mi titulo' } -> props devuelte las propiedas en enzyme

        expect( img.prop('src') ).toBe( url );
        expect( img.prop('alt') ).toBe( title );
    });
    
    test('debe de tener la clase animate__fadeIn" ', () => {
        const clase = 'animate__fadeIn';
        const div = wrapper.find('div');
        const divClass = div.prop('className');

        // console.log( div.props());
        expect( divClass.includes( clase ) ).toBe( true );        
    });
    

});