async function getWeather() {
    const apiKey = 'd0ee3e5d84ee38a737f3f79ed8cfd3a0';
    const cityName = document.getElementById('cityName').value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`;
    // const url = `http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit={limit}&appid=${apiKey}`;
    // const url = `https://api.openweathermap.org/data/3.0/onecall?lat=33.44&lon=-94.04&exclude=hourly,daily&appid=${apiKey}`;

    try {
        const response = await fetch(url);
        const data = await response.json();
        if (response.ok) {
            displayWeather(data);
            document.getElementById('weatherData').style.display = 'block';
        } else {
            throw new Error(data.message);
        }
    } catch (error) {
        console.error('Error:', error);
        document.getElementById('weatherData').textContent = 'Failed to retrieve weather data: ' + error.message;
    }
}

// function displayWeather(data) {
//     const weather = `The weather in ${data.name}: ${data.weather[0].description}. It's currently ${data.main.temp}°C.`;
//     document.getElementById('weatherData').textContent = weather;
// }

function displayWeather(data) {
    const weather = `The weather in ${data.name}: ${data.weather[0].description}. It's currently ${data.main.temp}°C.`;
    const weatherDataDiv = document.getElementById('weatherData');
    weatherDataDiv.textContent = weather;
    // No need to set display to block here if it's already done in the try block
    // but it's safe to ensure it's visible in case displayWeather is called from elsewhere
    weatherDataDiv.style.display = 'block';
}