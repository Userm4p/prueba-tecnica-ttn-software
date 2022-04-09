export  const  getsCountrys = async () => {

    const url = "https://restcountries.com/v3.1/all";
    const resp = await fetch(url);
    const data = await resp.json();

    // console.log(data)  
    return data;
    
  }
  
  