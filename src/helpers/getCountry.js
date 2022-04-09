export  const  getsCountry = async (code) => {

    const url = `https://restcountries.com/v3.1/alpha/${code}`;
    const resp = await fetch(url);
    const data = await resp.json();  

    return data;
  }
 