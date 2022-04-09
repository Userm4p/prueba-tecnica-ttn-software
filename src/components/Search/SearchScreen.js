import React, { useState } from 'react'
import { SearchContext } from '../../data/CountrysContext';
import { useFetchCountryByName } from '../../hooks/useFetchCountryByName';
import { AddCountrys } from './AddCountrys'
import { SearchList } from './SearchList';

export const SearchScreen = () => {

    const [countrys, setCountrys] = useState("");
    const {data, loading} = useFetchCountryByName(countrys);
    
  return (
    <>
    <div className="p-3 row">
      <h1 className="ml-3  col-5">Search Screen</h1>
      <AddCountrys setCountrys={setCountrys} />
        <div className="col-7 animate__animated animate__zoomIn animate__delay-0.1s"  >
          
          <SearchContext.Provider value={data}>
              <SearchList/> 
          </SearchContext.Provider>
      </div>
    </div>    
    </>
  )
}
