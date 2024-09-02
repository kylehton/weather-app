'use client';

import React, { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { Typography } from '@mui/material'; 
import { getTemp } from '/api/generate/route.js'; // Adjust the path if necessary

const Weather = () => {
  const searchParams = useSearchParams();
  const City = searchParams?.get('City') || '';
  const State = searchParams?.get('State') || '';
  const Country = searchParams?.get('Country') || '';
  const PostalCode = searchParams?.get('PostalCode') || '';

  const [weatherData, setWeatherData] = React.useState('');
  const [error, setError] = React.useState('');

  React.useEffect(() => {
    async function fetchWeather() {
      if (City && State && Country && PostalCode) {
        try {
          const data = await getTemp(City, State, Country, PostalCode);
          setWeatherData(data);
        } catch (err) {
          setError('Failed to fetch weather data');
          console.error('Error fetching weather data:', err);
        }
      } else {
        setError('Incomplete location information provided');
      }
    }

    fetchWeather();
  }, [City, State, Country, PostalCode]); 

  return (
    <div>
      <div className="mt-5 ml-5 text-xs">
        <h1 className="font-bold">Weather Location</h1>
        <p>City: {City || 'N/A'}</p>
        <p>State: {State || 'N/A'}</p>
        <p>Country: {Country || 'N/A'}</p>
        <p>Postal Code: {PostalCode || 'N/A'}</p>
        <br></br>
        <div className='ml-10 mr-10'>
          <h2 className="text-lg font-semibold">Weather Data:</h2>
          {error ? (
            <p className="text-red-500">{error}</p>
          ) : (
            <p className='text-lg'>{weatherData}</p>
          )}
        </div>
      </div>
    </div>
  );
};

const WeatherPage = () => {
  return (
    <Suspense fallback={<div>Loading weather data...</div>}>
      <Weather />
    </Suspense>
  );
};

export default WeatherPage;
