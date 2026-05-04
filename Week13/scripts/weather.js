let is_loading = false;
let error_message = "";
let weather_data = null;

const output_element = document.querySelector("#weather-output");

function renderWeather() {
    output_element.className = "weather-box";

    if (is_loading){
        output_element.textContent = "Loading weather data...";
        return;
    }

    if (error_message) {
        output_element.textContent = error_message;
        output_element.classList.add("weather-error");
        return;
    }

    if (weather_data) {
        const current_weather = weather_data.properties.periods[0];

        output_element.innerHTML = `
        <p class="weather-temp">${current_weather.temperature}°F</p>
        <p class="weather-forecast">${current_weather.shortForecast}</p>
        `;
        return;
    }
    output_element.textContent = "No weather data available.";
}

async function Get_Weather(){
    is_loading = true;
    error_message = "";
    weather_data = null;
    renderWeather();

    try {
        const response = await fetch("https://api.weather.gov/gridpoints/MSO/105,131/forecast");
        if (!response.ok) {
            throw new Error("Could not load weather data");
        }
        weather_data = await response.json();
    } catch (error) {
        error_message = "There was a problem getting the weather."
    } finally {
        is_loading = false;
        renderWeather();
    }
}

Get_Weather();