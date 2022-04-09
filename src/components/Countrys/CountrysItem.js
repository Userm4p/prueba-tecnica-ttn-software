import React from 'react'
import { Link } from 'react-router-dom'

export const CountrysItem = ({cname ,cflag ,ccapital, ccode}) => {
  return (
    <div className="col p-2">
        <div className='card'>
          <div className="row no-gutters"> 
            <div className="col-6 px-5 mt-2">
              <img className="img-fluid card-img-top" src={cflag} alt='Country Flag Img' />
            </div>
            <div className="col-5">
              <div className="card-body">
                <h2 className="card-title" >{cname}</h2>
                <hr></hr>
                <h5 className='card-text'>Capital:</h5>
                <p className='card-text'>{ccapital}</p>
                <Link to={`/${ccode}`}>
                            Mas...
                </Link>
              </div>
            </div>
          </div>        
        </div>
    </div>
  )
}
