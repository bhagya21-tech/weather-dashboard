async function getCoordinates(city) {

    const url =
        `${API_CONFIG.GEOCODING_URL}?name=${encodeURIComponent(city)}&count=1&language=en&format=json`;

    let response;

    try {

        response = await fetch(url);

    } catch (error) {

        throw new Error(
            "Network error. Please check your internet connection."
        );

    }

    if (!response.ok) {

        throw new Error(
            `Location service error (${response.status}).`
        );

    }

    const data = await response.json();

    if (!data.results || data.results.length === 0) {

        throw new Error(
            `City "${city}" was not found.`
        );

    }

    return data.results[0];

}


async function getWeather(latitude, longitude) {

    const url =
        `${API_CONFIG.WEATHER_URL}?latitude=${latitude}` +
        `&longitude=${longitude}` +
        `&current=temperature_2m,relative_humidity_2m,apparent_temperature,weather_code,wind_speed_10m` +
        `&timezone=auto`;

    let response;

    try {

        response = await fetch(url);

    } catch (error) {

        throw new Error(
            "Network error. Please check your internet connection."
        );

    }

    if (!response.ok) {

        throw new Error(
            `Weather service error (${response.status}).`
        );

    }

    const data = await response.json();

    if (!data.current) {

        throw new Error(
            "Current weather information is unavailable."
        );

    }

    return data;

}