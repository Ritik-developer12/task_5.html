
const apiKey = 'https://api.weather.gov/openapi.json '; // Replace with your OpenWeather API key

// Function to get weather based on user input
function getWeather() {
    const location = document.getElementById('location').value;
    if (location) {
        fetchWeatherData(location);
    } else {
        alert('Please enter a location!');
    }
}

// Function to fetch weather data
async function fetchWeatherData(location) {
    try {
        const response = await fetch("https://api.weather.gov/openapi.json");
        const data = await response.json();
        displayWeather(data);
    } catch (error) {
        alert('Error fetching weather data. Please try again.');
    }
}

// Function to display weather data
function displayWeather(data) {
    if (data.cod === 200) {
        const weatherInfo = `
            <h2>Weather in ${data.name}, ${data.sys.country}</h2>
            <p>Temperature: ${data.main.temp} °C</p>
            <p>Condition: ${data.weather[0].description}</p>
            <p>Humidity: ${data.main.humidity}%</p>
            <p>Wind Speed: ${data.wind.speed} m/s</p>
        `;
        document.getElementById('weather-info').innerHTML = weatherInfo;
    } else {
        alert('Location not found!');
    }
}