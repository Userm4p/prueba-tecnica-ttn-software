import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { MainPage } from '../components/MainPage/MainPage'
import { Navbar } from '../components/UI/Navbar'
import { AppRouter } from './AppRouter'

export const DashboardRoutes = () => {
    return (
        
        <BrowserRouter>
            <AppRouter/>
        </BrowserRouter>   
    )
  }