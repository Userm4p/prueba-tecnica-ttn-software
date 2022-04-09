import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useFetchCountry } from '../../hooks/useFetchCountry';

export const CountryScreen = () => {

    
    const {countryid} = useParams();
    const { data, loading} = useFetchCountry({countryid});
    const datos = {...data[0]};
    const navigate = useNavigate();
    const {
      name, 
      capital, 
      flags,
      population,
      continents, 
      region} = datos;
    
    const handleReturn = () => {
      navigate(`/`);
    }
  

    

  return (
    <>
      {loading ? (<h1>Loading...</h1>) : (
        <div className="row mt-5 p-4">
        <div className="col-3">
            <img src={flags.png} alt='Country Flag' className="img-thumbnail animate__animated animate__fadeInLeft" />
        </div> 
        <div className="col-4 animate__animated animate__fadeIn">
            <h1>{name.common}</h1>
            <h3><b>Common Name: </b>{name.common}</h3> 
            <h3><b>Official Name: </b>{name.official}</h3>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                  <b>Capital:</b> {capital}
              </li>
              <li className="list-group-item">
                  <b>Continents:</b> {continents}
              </li>
              <li className="list-group-item">
                  <b>Region:</b> {region}
              </li>
            </ul>

            <h5 className="mt-3" >Population</h5>
            <p>{population}</p>
            <button
              className="btn btn-outline-info"
              onClick={handleReturn}
            >
              Return
            </button>

        </div>
    </div>
      )}
      
    </>
  )
}
