import { getGifs } from "../../helpers/getGifs";

describe('Pruebas con getGifs Fetch', () => {

    test('debe de traer 10 elementos ', async () => {
        
        const gifs = await getGifs('Spider Man');

        expect( gifs.length ).toBe( 10 );
    });
    
    test('debe regresar un array vacio si se manda un string vacio ', async () => {
        const gifs = await getGifs('');

        expect( gifs.length ).toBe( 0 );
    });
    

});