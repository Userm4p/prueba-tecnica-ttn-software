import { useEffect, useState } from "react"
import { getsCountrys } from "../helpers/getCountrys";


export const useFetchCountrys = () => {

    const [state, setState] = useState({
        data: [],
        loading: true   
    });

    useEffect(()=>{
        getsCountrys()
            .then(countrys => 
            {
                
                    setState({
                        data: countrys,
                        loading: false
                    });
                
                
            })
    }, [])

    return state

}