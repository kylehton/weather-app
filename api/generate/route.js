// Description: Route for generating a route based on user input.

async function tempAtLocation(location) {
     const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${process.env.OPENWEATHER_API_KEY}`);
     const data = await response.json();
     return data.main.temp;
}