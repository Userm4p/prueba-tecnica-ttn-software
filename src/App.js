import React from 'react'
import { CountrysContext } from './data/CountrysContext'
import { useFetchCountrys } from './hooks/useFetchCountrys';
import { DashboardRoutes } from './routes/DashboardRoutes'

export const App = () => {

  const state = useFetchCountrys();

  return (
    <>
      <CountrysContext.Provider value={state}>
        <DashboardRoutes/>
      </CountrysContext.Provider>
    </>
  )
}
