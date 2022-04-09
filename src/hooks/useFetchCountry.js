import { useEffect, useState } from "react"
import { getsCountry } from "../helpers/getCountry";


export const useFetchCountry = ({countryid}) => {

    const [state, setState] = useState({
        data: [],
        loading: true   
    });

    useEffect(()=>{
        getsCountry(countryid)
            .then(country => 
            {
                
                    setState({
                        data: country,
                        loading: false
                    });
                
                
            })
    }, [])

    return state
}