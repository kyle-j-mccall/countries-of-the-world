import { useState, useEffect } from 'react';
import { fetchCountries } from '../../services/countries';



export function useCountries() {

  const [countries, setCountries] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await fetchCountries();
        data.map((country) => {
          if (!country.continent) {
            country.continent = 'none';
          }
        });
        setCountries(data);
      } catch (e) {
        setError('something went wrong');
      }
      
    } fetchData();
  }, []);
  
  return { countries };

}
