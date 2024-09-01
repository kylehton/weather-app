import fetch from 'node-fetch';
require('dotenv').config();


const apiKey = process.env.NEXT_PUBLIC_OPENWEATHER_API_KEY;

async function getCoordinates(City, State, Country, PostalCode) {
  try {
    const response = await fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${encodeURIComponent(City)},${encodeURIComponent(State)},${encodeURIComponent(Country)}&zip=${PostalCode}&limit=1&appid=${apiKey}`);
    const geoData = await response.json();

    if (geoData.length === 0) {
      throw new Error('No coordinates found for the provided location.');
    }

    const { lat, lon } = geoData[0];
    return { lat, lon };
  } catch (error) {
    console.error('OpenWeather API request error:', error);
    throw error; 
  }
}

export async function getTemp(City, State, Country, PostalCode) {
  try {
    const { lat, lon } = await getCoordinates(City, State, Country, PostalCode);

    const weatherResponse = await fetch(`https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&units=imperial&appid=${apiKey}`);
    if (!weatherResponse.ok) {
      throw new Error('Failed to fetch weather data');
    }

    console.log(weatherResponse);
    const weatherData = await weatherResponse.json();
    const temp = weatherData.current.temp;
    const high = weatherData.daily[0].temp.max;
    const low = weatherData.daily[0].temp.min;
    const description = weatherData.current.weather[0].description;

    return `The temperature in ${City}, ${State}, ${Country}, ${PostalCode} is ${temp}°F. The high for today is ${high}°F and the low is ${low}°F.
    The weather can be described as: ${description}`;
  } catch (error) {
    console.error('OpenWeather API request error:', error);
    throw error;
  }
}
