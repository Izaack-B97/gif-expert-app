import '@testing-library/jest-dom';

import { shallow } from "enzyme";
import { GifGrid } from "../../components/GifGrid";
import { useFetchGifs } from "../../hooks/useFetchGifs.js";

jest.mock('../../hooks/useFetchGifs.js'); // Sirve para falsear informacion

// FIXME: Mock; Es fingir algo, falser informacion para que el componente crea que lo tenga

describe('Pruebas en <GifGrid />'  , () => {

    test('debe de renderizar correctamente cuando se carga por primera vez ', () => {
        
        useFetchGifs.mockReturnValue({
            data: [],
            loading: true
        });

        const category = 'Spider man';
        const wrapper = shallow( <GifGrid category={ category }/> );

        expect( wrapper ).toMatchSnapshot();
        
    })
    
    test('debe de mostrar items cuando se cargan las imagenes useFetchGifs ', () => {

        const gifs = [
            {
                id: 125,
                title: 'ABC', 
                url: 'https://www.gayo.com/imagem.png'
            }
        ];  
        
        useFetchGifs.mockReturnValue({
            data: gifs,
            loading: false
        });

        const category = 'Spider man';
        const wrapper = shallow( <GifGrid category={ category }/> );

        expect( wrapper ).toMatchSnapshot();
        // Evaluacion de que existen elementos
        expect( wrapper.find('p').exists() ).toBe( false );
        expect( wrapper.find('GifGridItem').length ).toBe( gifs.length );
    })
    
});