import React, { useState } from "react";

export const AddCountrys = ( {setCountrys} ) => {

    const [inputValue, setInputValue] = useState('');
   
     
    const handleInputChange = (e) => {
        setInputValue(e.target.value);
        
    }

    const handleSubmit = (e) =>{
        e.preventDefault()
        setCountrys(c => inputValue);
        setInputValue('');
    }
    
    return (

        <form onSubmit={handleSubmit} className="input-group mb-3">
                <input 
                type="text"
                value={inputValue}
                onChange={ handleInputChange }
                className="form-control" 
                placeholder="" 
                aria-label="Example text with button addon" 
                aria-describedby="button-addon1"
                />
            <div className="input-group-prepend">
                <button onClick={handleSubmit} className="btn btn-outline-secondary" type="button" id="button-addon1">Button</button>
            </div>
        </form>
    )
}