import React from 'react';
import './Main.css';
import { useCountries } from '../../hooks/useCountries';
import CountryCard from '../../CountryCard';

export default function Main() {
  const { countries } = useCountries();
  console.log(countries);
  return (
    <main>
      <select>

      </select>

      {countries.map((country) => {
        return <CountryCard key={country.id} {...country}/>; })}
    </main>
  );
}


