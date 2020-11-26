import React, {Fragment, useState} from 'react'
import { AddCategory } from './components/AddCategory';

const GifExpertApp = () => {

    // const categorias = ['Oue Punch', 'Samurai X', 'Dragon Ball'];
    const [categories, setCategories] = useState(['Oue Punch', 'Samurai X', 'Dragon Ball'])

    // Funciones
    const handlerAdd= (e) => {
        setCategories([...categories, 'The Big Bang Theory']);
    }; 

    return (
        <Fragment>
            <h2>GifExpertApp</h2>
            <AddCategory />
            <hr/>
            <button onClick={ handlerAdd }>Agregar</button>
            <ol>
                { 
                    categories.map(categoria => { 
                        return <li key={ categoria }> { categoria } </li>
                    }) 
                }
            </ol>
        </Fragment>
    )
}

export default GifExpertApp
