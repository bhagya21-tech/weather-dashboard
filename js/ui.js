function renderWeather(location, weather, unit = "celsius") {

    const current = weather.current;

    const weatherDescription =
        getWeatherDescription(current.weather_code);

    const weatherIcon =
        getWeatherIcon(current.weather_code);

    const temperature =
        convertTemperature(
            current.temperature_2m,
            unit
        );

    const feelsLike =
        convertTemperature(
            current.apparent_temperature,
            unit
        );

    const temperatureUnit =
        unit === "celsius" ? "°C" : "°F";

    const weatherContainer =
        document.getElementById("weather-container");


    weatherContainer.innerHTML = `

        <div class="weather-card">

            <div class="weather-location">

                <h2>
                    ${location.name}, ${location.country}
                </h2>

                <p>
                    Local time: ${getLocalTime(weather.timezone)}
                </p>

            </div>


            <div class="main-weather">

                <div class="weather-icon">
                    ${weatherIcon}
                </div>

                <div class="temperature">
                    ${temperature}${temperatureUnit}
                </div>

                <div class="weather-description">
                    ${weatherDescription}
                </div>

            </div>


            <div class="weather-details">


                <div class="weather-detail">

                    <span class="detail-icon">
                        💧
                    </span>

                    <div>

                        <p>
                            Humidity
                        </p>

                        <strong>
                            ${current.relative_humidity_2m}%
                        </strong>

                    </div>

                </div>


                <div class="weather-detail">

                    <span class="detail-icon">
                        💨
                    </span>

                    <div>

                        <p>
                            Wind Speed
                        </p>

                        <strong>
                            ${current.wind_speed_10m} km/h
                        </strong>

                    </div>

                </div>


                <div class="weather-detail">

                    <span class="detail-icon">
                        🌡️
                    </span>

                    <div>

                        <p>
                            Feels Like
                        </p>

                        <strong>
                            ${feelsLike}${temperatureUnit}
                        </strong>

                    </div>

                </div>


            </div>


            <div class="weather-footer">

                <p>
                    Updated:
                    ${new Date().toLocaleTimeString()}
                </p>

                <button
                    id="refresh-weather"
                    class="refresh-button"
                >
                    🔄 Refresh
                </button>

            </div>


        </div>

    `;

}


function convertTemperature(celsius, unit) {

    if (unit === "fahrenheit") {

        return Math.round(
            (celsius * 9 / 5) + 32
        );

    }

    return Math.round(celsius);

}


function getLocalTime(timezone) {

    try {

        return new Intl.DateTimeFormat(
            "en-US",
            {
                timeZone: timezone,
                hour: "2-digit",
                minute: "2-digit",
                second: "2-digit"
            }
        ).format(new Date());

    } catch (error) {

        return "Unavailable";

    }

}


function getWeatherDescription(code) {

    const weatherCodes = {

        0: "Clear sky",

        1: "Mainly clear",
        2: "Partly cloudy",
        3: "Overcast",

        45: "Fog",
        48: "Depositing rime fog",

        51: "Light drizzle",
        53: "Moderate drizzle",
        55: "Dense drizzle",

        61: "Slight rain",
        63: "Moderate rain",
        65: "Heavy rain",

        71: "Slight snow",
        73: "Moderate snow",
        75: "Heavy snow",

        80: "Slight rain showers",
        81: "Moderate rain showers",
        82: "Violent rain showers",

        95: "Thunderstorm",

        96: "Thunderstorm with slight hail",
        99: "Thunderstorm with heavy hail"

    };

    return weatherCodes[code] || "Unknown weather";
}


function getWeatherIcon(code) {

    if (code === 0) {
        return "☀️";
    }

    if ([1, 2].includes(code)) {
        return "🌤️";
    }

    if (code === 3) {
        return "☁️";
    }

    if ([45, 48].includes(code)) {
        return "🌫️";
    }

    if (
        [51, 53, 55, 61, 63, 65, 80, 81, 82]
            .includes(code)
    ) {
        return "🌧️";
    }

    if ([71, 73, 75].includes(code)) {
        return "❄️";
    }

    if ([95, 96, 99].includes(code)) {
        return "⛈️";
    }

    return "🌡️";
}