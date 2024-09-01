This is my weather app, which takes in user input for a location, and searches for the current weather information to display. 

It uses geocaching to find the latitude and longitude of the inputted location, which are the parameters for the api call.

After the api call, it returns a JSON object with all the information, such as the precipitation levels, temperatures, and other details. I chose to include only temperatures and weather/sky description for simplicity.

After receiving that information, the submit button also uses the App Router to navigate to another page displaying the inputted information as well as the generated weather information.