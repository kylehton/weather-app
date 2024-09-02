This is my weather app, which takes in user input for a location, and searches for the current weather information to display. 

It uses geocaching to find the latitude and longitude of the inputted location, which are the parameters for the API call.

After the API call, it returns a JSON object with all the information, such as the precipitation levels, temperatures, and other details. I chose to include only temperatures and weather/sky descriptions for simplicity.

After receiving that information, the submit button also uses the App Router to navigate to another page displaying the inputted location and the generated weather information.

NOTE: The API used is OpenWeatherAPI. The 3.0 One Call gives 1,000 free use tokens per day. I chose to use that so anyone can implement the app. The app uses my personal key, so PLEASE LIMIT USAGE. IT WILL CHARGE ME FOR EACH API CALL OVER THE 1,000 LIMIT. 
