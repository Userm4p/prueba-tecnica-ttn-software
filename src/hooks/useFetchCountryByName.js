import { useEffect, useState } from "react"
import { getsCountrysbyName } from "../helpers/getCountrysbyName";


export const useFetchCountryByName = (name) => {

    const [state, setState] = useState({
        data: [],
        loading: true   
    });

    useEffect(()=>{
        getsCountrysbyName(name)
            .then(countrys => 
            {
                
                    setState({
                        data: countrys,
                        loading: false
                    });
                
                
            }).catch(err => {
                setState({
                    data: '',
                    loading: false
                });
            })
    }, [name])
    return state
}
