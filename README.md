This project is a simple weather app, that fetches data from open-meteo.com. When you first run this on your machine it fetches weather for Kraków. You can search weather by typing city name in the search box and hitting enter. It displays weather for the next 24 hours from current hour on the left and weekly weather on the right. You can switch hour forecast by using the slider. When you click a button on the right it redirects you to the 14 day forecast. You can find temperature, wind and precipitation charts on this page. Data is sent between pages using local storage in your browser. 

getWeather.js - this fetches data from the API<br>
weathercodes.js - acts like a database to store weather codes that map to different weather images<br>
parseWeather.js - gets important data from json and parses it so it's easy to display<br>
createCharts.js - uses charts.js library to create line and bar charts<br>
displayChars.js - displays data on charts.html<br>
displayWeather.js - displays data on index.html<br>


Run this code:
``` bash
git clone https://github.com/m-aleksandra/weather_app.git
http-server
```



