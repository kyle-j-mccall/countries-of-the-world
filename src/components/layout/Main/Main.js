import React from 'react';
import { useState } from 'react';
import './Main.css';
import { useCountries } from '../../hooks/useCountries';
import CountryCard from '../CountryCard';

export default function Main() {
  const { countries } = useCountries();
  const [continent, setContinent] = useState('');
  const filterContinent = (countries) => {
    return countries.filter((country) => {
      return (country.continent.includes(continent)) && (country.continent);
    });
  };
  
  return (
    <main>
      <div>
        <label>Filter by continent</label>
        <select value={continent} onChange={(e) => setContinent(e.target.value)}>
          <option value = ''>all</option>
          <option>none</option>
          <option>North America</option>
          <option>South America</option>
          <option>Europe</option>
          <option>Asia</option>
          <option>Antarctica</option>
          <option>Oceania</option>
          <option>Africa</option>
          
        </select>
      </div>
      
      <div className='countries-container'>
        {filterContinent(countries).map((country) => {
          return <CountryCard key={country.id} {...country}/>; })}
      </div>
      
    </main>
  );
}


