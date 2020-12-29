// FIXME: react-hooks-testing-library ---> Libreria para testiar hooks

import { renderHook } from "@testing-library/react-hooks";
import { useFetchGifs } from "../../hooks/useFetchGifs";


describe('Pruebas en useFetchGifs' , () => {

    test('debe retornar el estado inicial ', () => {
        
        // const { data, loading } = useFetchGifs( 'Spider man' )
        const { result } = renderHook(() => useFetchGifs( 'Spider Man' )); // Nos crea un componente virtual para usuar un hook
        const { data, loading } = result.current;

        // console.log( data, loading );

        expect( data ).toEqual( [] );
        expect( loading ).toBe( true );
    });
    
});