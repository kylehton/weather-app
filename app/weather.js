'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect } from 'react';

export default function Weather() {
  const searchParams = useSearchParams();
  
  const city = searchParams.get('city');
  const state = searchParams.get('state');
  const country = searchParams.get('country');
  const postalCode = searchParams.get('postalCode');

  useEffect(() => {
    console.log('City:', city);
    console.log('State:', state);
    console.log('Country:', country);
    console.log('Postal Code:', postalCode);
  }, [city, state, country, postalCode]);

  return (
    <div>
      <h1>Weather Information</h1>
      <p>City: {city}</p>
      <p>State: {state}</p>
      <p>Country: {country}</p>
      <p>Postal Code: {postalCode}</p>
      {/* Render weather data here */}
    </div>
  );
}
