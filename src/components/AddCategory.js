import React, { useState } from 'react'
import PropTypes from 'prop-types'

export const AddCategory = ({ setCategories }) => {

    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e) => {
        // console.log(e.target.value);
        setInputValue(e.target.value);
        console.log('handleInputChange llamado')
    };
    
    const handleSubmit = (e) => {
        e.preventDefault(); // Cancela el comportamiento por default
        
        console.log('handleSubmit', inputValue);

        if(inputValue.trim().length > 2) {
            setCategories(categories => [ inputValue, ...categories ]);
            setInputValue('');
        }
    };

    return (
        <form onSubmit={ handleSubmit }>
            <p>{ inputValue }</p>
            <h2>AddCategory</h2>
            <input type="text" value={ inputValue } onChange={ handleInputChange }/>
        </form>
    )
}

// Props requeridas
AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
};
