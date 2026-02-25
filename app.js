// OpenWeatherMap API Key
const apiKey = "ae18ab9562a907ea7c8b9942b112bc32";

// Hardcoded city (required for Part 1)
const city = "London";

// API URL
const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

// Fetch weather data using Axios
axios.get(url)
.then(function(response) {

    console.log("API Success:", response.data);

    const data = response.data;

    // Extract required fields
    const cityName = data.name;
    const temperature = data.main.temp;
    const description = data.weather[0].description;
    const iconCode = data.weather[0].icon;

    // Update DOM
    document.getElementById("city").innerText = cityName;
    document.getElementById("temperature").innerText = temperature + "°C";
    document.getElementById("description").innerText = description;
    document.getElementById("icon").src =
        `https://openweathermap.org/img/wn/${iconCode}@2x.png`;

})
.catch(function(error) {
    console.error("Error fetching weather data:", error.response?.data || error.message);
});