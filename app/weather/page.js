'use client'

import React from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

const Weather = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const City = searchParams.get('City');
  const State = searchParams.get('State');
  const Country = searchParams.get('Country');
  const PostalCode = searchParams.get('PostalCode');

  return (
    <div class="mt-5 ml-5 text-xs">
      <h1>Weather Information</h1>
      <p>City: {City || 'N/A'}</p>
      <p>State: {State || 'N/A'}</p>
      <p>Country: {Country || 'N/A'}</p>
      <p>Postal Code: {PostalCode || 'N/A'}</p>
    </div>
    
  );
};

export default Weather;
