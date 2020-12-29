// FIXME: react-hooks-testing-library ---> Libreria para testiar hooks

import { renderHook } from "@testing-library/react-hooks";
import { useFetchGifs } from "../../hooks/useFetchGifs";


describe('Pruebas en useFetchGifs' , () => {

    test('debe retornar el estado inicial ', async () => {
        
        // const { data, loading } = useFetchGifs( 'Spider man' )
        const { result, waitForNextUpdate } = renderHook(() => useFetchGifs( 'Spider Man' )); // Nos crea un componente virtual para usuar un hook
        const { data, loading } = result.current;

        // console.log( data, loading );
        await waitForNextUpdate();

        expect( data ).toEqual( [] );
        expect( loading ).toBe( true );
    });

    test('debe de retornar un arreglo de imgs y el loading en false ', async () => {
        
        // TODO: waitForNextUpdate -> Es una funcion que regresa una promesa esperando a que cambie el state
        const { result, waitForNextUpdate } = renderHook( () => useFetchGifs( 'Spider Man' ) );
        await waitForNextUpdate();

        const { data: imgs , loading } = result.current;
        
        expect( imgs.length ).toBe( 10 );
        expect( loading ).toBe( false );
    });
    
    
});