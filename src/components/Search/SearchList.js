import React, { useContext } from 'react'
import { SearchContext } from '../../data/CountrysContext';
import { CountrysItem } from '../Countrys/CountrysItem';

export const SearchList = () => {
    
    const countrys = useContext(SearchContext);
    console.log(countrys);
    console.log(countrys);

  return (
    <div className="p-4 d-flex ">
            {   
                (countrys.length===0) ? <div>
                    <p>Type the name of a country</p>
                </div> :                           
                <div className="animate__animated animate__fadeInLeft">
                {countrys.map( (c,i) => (
                    <CountrysItem 
                        key={i} 
                        cname={c.name.common} 
                        cflag={c.flags.png}
                        ccapital={c.capital} 
                        ccode={c.cca2}
                    />
                ))}
                </div>
                
            }
    </div>
  )
}
