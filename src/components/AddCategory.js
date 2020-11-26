import React, { useState } from 'react'

export const AddCategory = () => {

    const [inputValue, setInputValue] = useState('Hola mundo');

    const handleInputChange = (e) => {
        console.log(e.target.value);
        setInputValue(e.target.value);
    };
    
    const handleSubmit = (e) => {
        e.preventDefault(); // Cancela el comportamiento por default
        console.log('Que onduras');
    };

    return (
        <form onSubmit={ handleSubmit }>
            <h2>AddCategory</h2>
            <input type="text" value={ inputValue } onChange={ handleInputChange }/>
        </form>
    )
}
