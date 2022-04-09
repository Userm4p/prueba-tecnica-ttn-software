import React from 'react'
import { Link} from 'react-router-dom'

export const Navbar = () => {


    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark d-flex justify-content-between">     
            <Link 
                className="navbar-brand px-4" 
                to="/"
            >
                Home
            </Link>
            <Link 
                className="navbar-brand px-4" 
                to="/SearchScreen"
            >
                Search
            </Link>
        </nav>
    )
}

 