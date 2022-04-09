import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { CountryScreen } from '../components/Countrys/CountryScreen'
import { MainPage } from '../components/MainPage/MainPage'
import { SearchScreen } from '../components/Search/SearchScreen'
import { Navbar } from '../components/UI/Navbar'

export const AppRouter = () => {
  return (
    <>

            <Navbar/>
            <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/:countryid" element = {<CountryScreen/>} />
                <Route path="/SearchScreen" element = {<SearchScreen/>} />              
            </Routes>

    </>
  )
}
