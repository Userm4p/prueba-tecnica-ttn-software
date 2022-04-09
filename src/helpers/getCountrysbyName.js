
export  const  getsCountrysbyName  = async ( name ) => {

        const url = `https://restcountries.com/v3.1/name/${name}`;
        const resp = await fetch(url);
        const data = await resp.json();
        const countrys = data.map(c => {
            return {
            name: c.name,
            capital: c.capital,
            flags: c.flags,
            population: c.population,
            continents: c.continents,
            region: c.region,
            cca2: c.cca2
            }      
        })
        return countrys;       
  }