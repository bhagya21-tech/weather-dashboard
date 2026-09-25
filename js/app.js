const searchForm = document.getElementById("search-form");
const cityInput = document.getElementById("city-input");
const searchButton = document.getElementById("search-button");

const loading = document.getElementById("loading");
const errorMessage = document.getElementById("error-message");
const errorText = document.getElementById("error-text");

const celsiusButton = document.getElementById("celsius-button");
const fahrenheitButton = document.getElementById("fahrenheit-button");



let currentLocation = null;
let currentWeather = null;
let currentUnit = "celsius";


// ===============================
// SEARCH
// ===============================

searchForm.addEventListener("submit", handleSearch);


async function handleSearch(event) {

    event.preventDefault();

    const city = cityInput.value.trim();

    console.log("Search started:", city);

    if (!city) {
        showError("Please enter a city name.");
        cityInput.focus();
        return;
    }

    hideError();
    setLoadingState(true);

    try {

        console.log("Getting coordinates...");

        const location = await getCoordinates(city);

        console.log("Location:", location);

        console.log("Getting weather...");

        const weather = await getWeather(
            location.latitude,
            location.longitude
        );

        console.log("Weather:", weather);

        currentLocation = location;
        currentWeather = weather;

        localStorage.setItem("lastCity", city);

        renderWeather(
            currentLocation,
            currentWeather,
            currentUnit
        );

        attachRefreshHandler();

        console.log("Weather rendered successfully.");

    } catch (error) {

        console.error("ERROR:", error);

        clearWeather();

        showError(error.message);

    } finally {

        setLoadingState(false);

        console.log("Loading finished.");

    }
}


// ===============================
// LOADING
// ===============================

function setLoadingState(isLoading) {

    if (isLoading) {

        loading.classList.remove("hidden");

        searchButton.disabled = true;
        cityInput.disabled = true;

        searchButton.textContent = "Searching...";

    } else {

        loading.classList.add("hidden");

        searchButton.disabled = false;
        cityInput.disabled = false;

        searchButton.textContent = "Search";

    }
}


// ===============================
// ERROR
// ===============================

function showError(message) {

    errorText.textContent = message;

    errorMessage.classList.remove("hidden");

}


function hideError() {

    errorMessage.classList.add("hidden");

}


// ===============================
// TEMPERATURE UNIT
// ===============================

celsiusButton.addEventListener("click", () => {

    currentUnit = "celsius";

    updateUnitButtons();

    if (currentLocation && currentWeather) {

        renderWeather(
            currentLocation,
            currentWeather,
            currentUnit
        );

        attachRefreshHandler();
    }

});


fahrenheitButton.addEventListener("click", () => {

    currentUnit = "fahrenheit";

    updateUnitButtons();

    if (currentLocation && currentWeather) {

        renderWeather(
            currentLocation,
            currentWeather,
            currentUnit
        );

        attachRefreshHandler();
    }

});


function updateUnitButtons() {

    if (currentUnit === "celsius") {

        celsiusButton.classList.add("active");
        fahrenheitButton.classList.remove("active");

    } else {

        fahrenheitButton.classList.add("active");
        celsiusButton.classList.remove("active");

    }

}


// ===============================
// REFRESH
// ===============================

function attachRefreshHandler() {

    const refreshButton =
        document.getElementById("refresh-weather");

    if (!refreshButton) {
        return;
    }

    refreshButton.addEventListener(
        "click",
        refreshWeather
    );

}


async function refreshWeather() {

    if (!currentLocation) {
        return;
    }

    hideError();

    setLoadingState(true);

    try {

        console.log("Refreshing weather...");

        const weather = await getWeather(
            currentLocation.latitude,
            currentLocation.longitude
        );

        currentWeather = weather;

        renderWeather(
            currentLocation,
            currentWeather,
            currentUnit
        );

        attachRefreshHandler();

    } catch (error) {

        console.error("Refresh error:", error);

        showError(error.message);

    } finally {

        setLoadingState(false);

    }

}


// ===============================
// CLEAR WEATHER
// ===============================

function clearWeather() {

    const weatherContainer =
        document.getElementById("weather-container");

    weatherContainer.innerHTML = `
        <div class="weather-placeholder">

            <h2>Weather unavailable</h2>

            <p>
                We couldn't retrieve weather information.
                Please try again.
            </p>

        </div>
    `;

}

const lastCity = localStorage.getItem("lastCity");

if (lastCity) {
    cityInput.value = lastCity;
}
