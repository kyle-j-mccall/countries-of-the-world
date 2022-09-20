import { useState, useEffect } from 'react';
import { fetchCountries } from '../../services/countries';



export function useCountries() {

  const [countries, setCountries] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const data = await fetchCountries();
      data.map((country) => {
        if (!country.continent) {
          country.continent = 'none';
        }
      });
      setCountries(data);
    } fetchData();
  }, []);
  
  return { countries };

}
