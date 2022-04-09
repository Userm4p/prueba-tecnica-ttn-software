import React, { useContext, useState } from 'react'
import { PageContext } from '../../data/CountrysContext';
import { useCounter } from '../../hooks/useCounter';
import { CountryList } from '../Countrys/CountryList';
import { SearchScreen } from '../Search/SearchScreen';

export const MainPage = () => { 

  const {
        state,
        increment,
        reset,
        decrement,
        
    } = useCounter();

  return (
    <>
      <h1 className="p-3">Countrys</h1>
      <hr/>
      <PageContext.Provider value={state}>
        <CountryList />
      </PageContext.Provider>
      
      <footer className="text-center d-flex align-items-baseline  justify-content-center">
            <button className="btn" onClick={reset} >Firs page</button>
            {(state>0) ?<button className="btn" onClick={() => decrement(1)} >Previus</button> : <div className="btn text-danger">
              Previus
            </div>}
            {
              (state>5) ? 
              <div>
                <button className="btn" onClick={() => decrement(5)}  >{state-4}</button>
                <button className="btn" onClick={() => decrement(4)}  >{state-3}</button>
                <button className="btn" onClick={() => decrement(3)}  >{state-2}</button>
                <span className="px-4">   .   </span>
                <span className="px-4">   .   </span>
                <span className="px-4">   .   </span>
                <span className="px-4">   .   </span>
              </div>
              : null
            }
            <div className="btn text-primary">
              {state+1}
            </div>
            
            <button className="btn" onClick={() => increment(1)}  >{state+2}</button>
            <button className="btn" onClick={() => increment(2)}  >{state+3}</button>
            <button className="btn" onClick={() => increment(3)}  >{state+4}</button>
            <button className="btn" onClick={() => increment(1)}  >Next</button>
            
      </footer>
    </>
  )
}
