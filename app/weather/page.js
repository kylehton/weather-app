'use client'

import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { Typography } from '@mui/material'; 
import { getTemp } from '/api/generate/route.js'; // Adjust the path if necessary

const Weather = () => {
  const searchParams = useSearchParams();
  const City = searchParams.get('City');
  const State = searchParams.get('State');
  const Country = searchParams.get('Country');
  const PostalCode = searchParams.get('PostalCode');

  const [weatherData, setWeatherData] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    async function fetchWeather() {
      if (City && State && Country && PostalCode) {
        try {
          const data = await getTemp(City, State, Country, PostalCode);
          setWeatherData(data);
        } catch (err) {
          setError('Failed to fetch weather data');
          console.error('Error fetching weather data:', err);
        }
      }
    }

    fetchWeather();
  }, [City, State, Country, PostalCode]); 

  return (
    <div>
      <div className="mt-5 ml-5 text-xs">
        <h1>Weather Location</h1>
        <p>City: {City}</p>
        <p>State: {State}</p>
        <p>Country: {Country}</p>
        <p>Postal Code: {PostalCode}</p>
        <br></br>
          <div>
            <h2>Weather Data:</h2>
            <p>{weatherData}</p>
          </div>
        
      </div>
    </div>
  );
};

export default Weather;
