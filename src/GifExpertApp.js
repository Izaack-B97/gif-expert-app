import React, {Fragment, useState} from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

const GifExpertApp = () => {

    // const categorias = ['Oue Punch', 'Samurai X', 'Dragon Ball'];
    const [categories, setCategories] = useState(['Oue Punch'])

    // Funciones
    // const handlerAdd= (e) => {
    //     setCategories([...categories, 'The Big Bang Theory']);
    // }; 

    return (
        <Fragment>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={ setCategories }/>
            <hr/>
            <ol>
                { 
                    categories.map(categoria => { 
                        return <GifGrid key={ categoria } category={ categoria }/>
                    }) 
                }
            </ol>
        </Fragment>
    )
}

export default GifExpertApp
