import React from 'react';

export default function CountryCard({ name, iso2 }) {
  return (
    <div className='country-card'>
      <p>{name}</p>
      <img
        src={`https://flagcdn.com/16x12/${iso2.toLowerCase()}.png`}
        
        alt={ name }/>
    </div>
  );
}
