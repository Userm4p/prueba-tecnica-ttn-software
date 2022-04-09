
import { useContext } from 'react';
import { CountrysContext, PageContext } from '../../data/CountrysContext';
import { CountrysItem } from './CountrysItem';


export const CountryList = () => {
    

    const countrys = useContext(CountrysContext);
    const pagestate = useContext(PageContext);
    const {data} = countrys;  
    const c20 = data.slice((pagestate*19), ((pagestate*20)+20));


  return (
    <div className="p-4 row row-cols-1 row-cols-md-3 g-3 animate__animated animate__fadeIn">
            {
                c20.map( (c,i) => (
                    <CountrysItem 
                        key={i} 
                        cname={c.name.common} 
                        cflag={c.flags.png}
                        ccapital={c.capital} 
                        ccode={c.cca2}
                    />
                ))
            }
    </div>
  )
}