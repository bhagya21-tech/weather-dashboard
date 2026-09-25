
# 🌤️ Real-Time Weather Dashboard

A responsive and interactive weather dashboard built with **HTML, CSS, and modern JavaScript** that retrieves real-time weather information from public REST APIs.

The application allows users to search for a city and dynamically displays current weather conditions including temperature, humidity, wind speed, feels-like temperature, weather conditions, and local time.

---

## 🚀 Live Demo

🔗 **Live Demo:** []

🔗 **GitHub Repository:** [ ]

---

## 📌 Project Overview

The Real-Time Weather Dashboard demonstrates how a frontend application can communicate with external REST APIs using modern asynchronous JavaScript.

When a user searches for a city:

1. The city name is sent to the **Geocoding API**.
2. The API returns the city's latitude and longitude.
3. Those coordinates are used to request current weather data.
4. The returned JSON response is parsed.
5. Relevant nested data is extracted using JavaScript.
6. The weather information is dynamically rendered on the dashboard.

### Application Flow

```text
User enters city
       ↓
Search Form
       ↓
JavaScript Event Handler
       ↓
Geocoding REST API
       ↓
Latitude + Longitude
       ↓
Weather REST API
       ↓
JSON Response
       ↓
JSON Parsing
       ↓
Dynamic DOM Rendering
       ↓
Weather Dashboard
````

---

## ✨ Features

### 🌍 Weather Search

* Search weather information by city name.
* Supports cities from different countries.
* Handles invalid or unavailable city names.

### 🌡️ Real-Time Weather Metrics

Displays:

* Current temperature
* Feels-like temperature
* Humidity
* Wind speed
* Weather condition
* Weather icon
* Local time of the searched location
* Last updated time

### 🔄 Temperature Conversion

Users can switch between:

* Celsius (°C)
* Fahrenheit (°F)

The conversion is handled on the client side without making another API request.

### 🔄 Refresh Weather

A refresh button allows users to request the latest weather information for the currently selected location.

### ⚡ Asynchronous JavaScript

The project uses:

* Fetch API
* Promises
* `async/await`
* `try/catch/finally`

for asynchronous API communication.

### 🛡️ Error Handling

The application handles:

* Empty city input
* Invalid city names
* Network failures
* API request failures
* Invalid API responses
* Missing weather data

### ⏳ Loading State

A loading indicator is displayed while weather data is being retrieved.

The search button is also disabled while an API request is in progress to prevent duplicate requests.

### 💾 Local Storage

The most recently searched city is stored using browser `localStorage`.

### 📱 Responsive Design

The interface adapts to:

* Desktop
* Tablet
* Mobile screens

---

## 🛠️ Technologies Used

| Technology      | Purpose                       |
| --------------- | ----------------------------- |
| HTML5           | Page structure                |
| CSS3            | Styling and responsive layout |
| JavaScript ES6+ | Application logic             |
| Fetch API       | HTTP/API requests             |
| Async/Await     | Asynchronous operations       |
| REST APIs       | Weather and location data     |
| JSON            | Data exchange                 |
| DOM API         | Dynamic UI rendering          |
| LocalStorage    | Persisting last searched city |
| Live Server     | Local development             |

---

## 🌐 APIs Used

This project uses **Open-Meteo** public APIs.

### 1. Geocoding API

Converts a city name into geographic coordinates.

```text
City Name
   ↓
Latitude
Longitude
Country
Timezone
```

### 2. Weather Forecast API

Uses latitude and longitude to retrieve current weather information.

The application retrieves values such as:

```javascript
weather.current.temperature_2m
weather.current.relative_humidity_2m
weather.current.apparent_temperature
weather.current.weather_code
weather.current.wind_speed_10m
```

---

## 📂 Project Structure

```text
weather-dashboard/
│
├── index.html
│
├── css/
│   └── style.css
│
├── js/
│   ├── config.js
│   ├── api.js
│   ├── ui.js
│   └── app.js
│
├── assets/
│   └── icons/
│
├── .gitignore
│
└── README.md
```

---

## 🧩 Architecture

The application separates responsibilities across different JavaScript modules.

### `config.js`

Contains API configuration:

```javascript
const API_CONFIG = {
    GEOCODING_URL: "...",
    WEATHER_URL: "..."
};
```

### `api.js`

Responsible for communication with external REST APIs.

Main functions:

```javascript
getCoordinates(city)
getWeather(latitude, longitude)
```

### `app.js`

Responsible for application flow and user interaction.

Handles:

* Form submission
* Input validation
* Loading state
* API calls
* Error handling
* Temperature unit switching
* Refresh functionality
* Application state

### `ui.js`

Responsible for dynamically rendering weather information.

Handles:

* Weather card generation
* Weather descriptions
* Weather icons
* Temperature conversion
* Local timezone formatting

---

## 🔄 Asynchronous Data Flow

The application uses `async/await` to perform API requests.

Example:

```javascript
const location = await getCoordinates(city);

const weather = await getWeather(
    location.latitude,
    location.longitude
);
```

The first API request retrieves the location coordinates.

The second API request uses those coordinates to retrieve weather information.

---

## 📦 Example API Data Processing

The weather API returns a nested JSON structure.

Example:

```javascript
weather.current.temperature_2m
```

retrieves the current temperature.

```javascript
weather.current.relative_humidity_2m
```

retrieves humidity.

```javascript
weather.current.wind_speed_10m
```

retrieves wind speed.

```javascript
weather.current.apparent_temperature
```

retrieves the feels-like temperature.

```javascript
weather.current.weather_code
```

is converted into a human-readable weather condition.

For example:

```text
Weather Code
     ↓
61
     ↓
"Slight Rain"
     ↓
🌧️
```

---

## 🛡️ Error Handling Strategy

The application checks several possible failure scenarios.

### Empty Input

```text
User submits empty search
        ↓
Validation
        ↓
"Please enter a city name."
```

### Invalid City

```text
Unknown city
     ↓
Geocoding API
     ↓
No results
     ↓
User-friendly error
```

### Network Failure

```text
API request
     ↓
Network failure
     ↓
Catch error
     ↓
"Network error. Please check your internet connection."
```

### HTTP/API Failure

The application checks:

```javascript
response.ok
```

before processing the response.

This prevents unsuccessful HTTP responses from being treated as valid weather data.

---

## 🖥️ Getting Started

### Prerequisites

You only need:

* A modern web browser
* Visual Studio Code
* Live Server extension

No backend server is required.

---

## ⚙️ Installation

### 1. Clone the repository

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
```

### 2. Open the project

```bash
cd weather-dashboard
```

Open the folder in Visual Studio Code.

### 3. Install Live Server

Install the **Live Server** extension in VS Code.

### 4. Run the application

Open:

```text
index.html
```

Right-click and select:

```text
Open with Live Server
```

The application will open in your browser.

---

## 🧪 Testing

The application was tested using different scenarios:

| Test Case            | Expected Result                |
| -------------------- | ------------------------------ |
| Valid city           | Weather information displayed  |
| Invalid city         | Error message displayed        |
| Empty input          | Validation message displayed   |
| Internet unavailable | Network error displayed        |
| Celsius → Fahrenheit | Temperature converted          |
| Fahrenheit → Celsius | Temperature converted          |
| Refresh weather      | Latest weather retrieved       |
| Search using Enter   | Search submitted               |
| Multiple clicks      | Search disabled during request |
| Mobile screen        | Responsive layout              |

---

## 📸 Screenshots

### Main Dashboard

Add your screenshot here:

```markdown
![Weather Dashboard](screenshots/dashboard.png)
```

### Weather Results

Add another screenshot:

```markdown
![Weather Results](screenshots/weather-result.png)
```

### Error Handling

```markdown
![Error Handling](screenshots/error.png)
```

> Create a `screenshots` folder in the repository and place your screenshots there.

---

## 📚 Key JavaScript Concepts Demonstrated

This project demonstrates practical use of:

* DOM manipulation
* Event listeners
* Form handling
* Input validation
* Fetch API
* REST API integration
* Promises
* `async/await`
* `try/catch/finally`
* JSON parsing
* Nested object access
* Dynamic HTML rendering
* Template literals
* Browser LocalStorage
* Error handling
* Responsive design

---

## 🎯 Internship Requirements

This project was developed to demonstrate the following requirements:

### Fetch real-time data

Implemented using:

```javascript
fetch()
```

### Asynchronous JavaScript

Implemented using:

```javascript
async/await
```

### Error handling

Implemented using:

```javascript
try {
    // API request
} catch (error) {
    // Handle failure
} finally {
    // Reset loading state
}
```

### Nested JSON processing

Weather information is extracted from nested API objects such as:

```javascript
weather.current.temperature_2m
```

### City search

Users can enter a city name and retrieve its current weather information dynamically.

---

## 🔮 Future Improvements

Potential future enhancements include:

* 📅 Multi-day weather forecast
* 📍 Current-location weather using browser geolocation
* 🔎 Search history
* ⭐ Favorite cities
* 🌅 Sunrise and sunset information
* 🌧️ Precipitation information
* 💨 More detailed wind information
* 📊 Weather charts
* 🌎 Multiple weather units
* 🌙 Dark mode
* 📱 Progressive Web App support

---

## 👩‍💻 Author

**Bhagyashri Raut**

Computer Science Student | Python & Data/ML Enthusiast

### Connect

* GitHub: `https://github.com/bhagya21-tech`
* LinkedIn: `https://linkedin.com/in/bhagyashri-raut-471960322`

---

## 📄 License

This project is intended for educational and internship purposes.

---

## ⭐ Acknowledgements

Weather data is provided by **Open-Meteo**.

Built as part of an internship project focused on:

**Asynchronous JavaScript & RESTful APIs**

````

### A few things I strongly recommend before you push it

**1. Don't leave this in the README:**

```text
[Add your deployed URL here]
````

Replace it after deployment.

**2. Add actual screenshots.** Create:

```text
weather-dashboard/
└── screenshots/
    ├── dashboard.png
    ├── weather-result.png
    └── error.png
```

Then the README will look much more professional.

**3. Don't call it "AI" or overstate it.** This is a **JavaScript + REST API project**, and that's perfectly fine. Your strength here is demonstrating asynchronous programming, API integration, JSON processing, error handling, and frontend development.

**4. One technical cleanup remains:** before calling the repository final, I'd clean up the `innerHTML` rendering in `ui.js` and make the code slightly more production-quality. That's worth doing because someone reviewing your GitHub may actually inspect the JavaScript rather than only looking at the UI.
Yes. Since this is an **internship project**, your README should look like a real software project rather than a tutorial. It should clearly show the API architecture, asynchronous JavaScript, error handling, features, project structure, and how to run it.

Below is a **GitHub-ready README** based on what you actually built.

````markdown
# 🌤️ Real-Time Weather Dashboard

A responsive and interactive weather dashboard built with **HTML, CSS, and modern JavaScript** that retrieves real-time weather information from public REST APIs.

The application allows users to search for a city and dynamically displays current weather conditions including temperature, humidity, wind speed, feels-like temperature, weather conditions, and local time.

---

## 🚀 Live Demo

🔗 **Live Demo:** [Add your deployed URL here]

🔗 **GitHub Repository:** [Add your GitHub repository URL here]

---

## 📌 Project Overview

The Real-Time Weather Dashboard demonstrates how a frontend application can communicate with external REST APIs using modern asynchronous JavaScript.

When a user searches for a city:

1. The city name is sent to the **Geocoding API**.
2. The API returns the city's latitude and longitude.
3. Those coordinates are used to request current weather data.
4. The returned JSON response is parsed.
5. Relevant nested data is extracted using JavaScript.
6. The weather information is dynamically rendered on the dashboard.

### Application Flow

```text
User enters city
       ↓
Search Form
       ↓
JavaScript Event Handler
       ↓
Geocoding REST API
       ↓
Latitude + Longitude
       ↓
Weather REST API
       ↓
JSON Response
       ↓
JSON Parsing
       ↓
Dynamic DOM Rendering
       ↓
Weather Dashboard
````

---

## ✨ Features

### 🌍 Weather Search

* Search weather information by city name.
* Supports cities from different countries.
* Handles invalid or unavailable city names.

### 🌡️ Real-Time Weather Metrics

Displays:

* Current temperature
* Feels-like temperature
* Humidity
* Wind speed
* Weather condition
* Weather icon
* Local time of the searched location
* Last updated time

### 🔄 Temperature Conversion

Users can switch between:

* Celsius (°C)
* Fahrenheit (°F)

The conversion is handled on the client side without making another API request.

### 🔄 Refresh Weather

A refresh button allows users to request the latest weather information for the currently selected location.

### ⚡ Asynchronous JavaScript

The project uses:

* Fetch API
* Promises
* `async/await`
* `try/catch/finally`

for asynchronous API communication.

### 🛡️ Error Handling

The application handles:

* Empty city input
* Invalid city names
* Network failures
* API request failures
* Invalid API responses
* Missing weather data

### ⏳ Loading State

A loading indicator is displayed while weather data is being retrieved.

The search button is also disabled while an API request is in progress to prevent duplicate requests.

### 💾 Local Storage

The most recently searched city is stored using browser `localStorage`.

### 📱 Responsive Design

The interface adapts to:

* Desktop
* Tablet
* Mobile screens

---

## 🛠️ Technologies Used

| Technology      | Purpose                       |
| --------------- | ----------------------------- |
| HTML5           | Page structure                |
| CSS3            | Styling and responsive layout |
| JavaScript ES6+ | Application logic             |
| Fetch API       | HTTP/API requests             |
| Async/Await     | Asynchronous operations       |
| REST APIs       | Weather and location data     |
| JSON            | Data exchange                 |
| DOM API         | Dynamic UI rendering          |
| LocalStorage    | Persisting last searched city |
| Live Server     | Local development             |

---

## 🌐 APIs Used

This project uses **Open-Meteo** public APIs.

### 1. Geocoding API

Converts a city name into geographic coordinates.

```text
City Name
   ↓
Latitude
Longitude
Country
Timezone
```

### 2. Weather Forecast API

Uses latitude and longitude to retrieve current weather information.

The application retrieves values such as:

```javascript
weather.current.temperature_2m
weather.current.relative_humidity_2m
weather.current.apparent_temperature
weather.current.weather_code
weather.current.wind_speed_10m
```

---

## 📂 Project Structure

```text
weather-dashboard/
│
├── index.html
│
├── css/
│   └── style.css
│
├── js/
│   ├── config.js
│   ├── api.js
│   ├── ui.js
│   └── app.js
│
├── assets/
│   └── icons/
│
├── .gitignore
│
└── README.md
```

---

## 🧩 Architecture

The application separates responsibilities across different JavaScript modules.

### `config.js`

Contains API configuration:

```javascript
const API_CONFIG = {
    GEOCODING_URL: "...",
    WEATHER_URL: "..."
};
```

### `api.js`

Responsible for communication with external REST APIs.

Main functions:

```javascript
getCoordinates(city)
getWeather(latitude, longitude)
```

### `app.js`

Responsible for application flow and user interaction.

Handles:

* Form submission
* Input validation
* Loading state
* API calls
* Error handling
* Temperature unit switching
* Refresh functionality
* Application state

### `ui.js`

Responsible for dynamically rendering weather information.

Handles:

* Weather card generation
* Weather descriptions
* Weather icons
* Temperature conversion
* Local timezone formatting

---

## 🔄 Asynchronous Data Flow

The application uses `async/await` to perform API requests.

Example:

```javascript
const location = await getCoordinates(city);

const weather = await getWeather(
    location.latitude,
    location.longitude
);
```

The first API request retrieves the location coordinates.

The second API request uses those coordinates to retrieve weather information.

---

## 📦 Example API Data Processing

The weather API returns a nested JSON structure.

Example:

```javascript
weather.current.temperature_2m
```

retrieves the current temperature.

```javascript
weather.current.relative_humidity_2m
```

retrieves humidity.

```javascript
weather.current.wind_speed_10m
```

retrieves wind speed.

```javascript
weather.current.apparent_temperature
```

retrieves the feels-like temperature.

```javascript
weather.current.weather_code
```

is converted into a human-readable weather condition.

For example:

```text
Weather Code
     ↓
61
     ↓
"Slight Rain"
     ↓
🌧️
```

---

## 🛡️ Error Handling Strategy

The application checks several possible failure scenarios.

### Empty Input

```text
User submits empty search
        ↓
Validation
        ↓
"Please enter a city name."
```

### Invalid City

```text
Unknown city
     ↓
Geocoding API
     ↓
No results
     ↓
User-friendly error
```

### Network Failure

```text
API request
     ↓
Network failure
     ↓
Catch error
     ↓
"Network error. Please check your internet connection."
```

### HTTP/API Failure

The application checks:

```javascript
response.ok
```

before processing the response.

This prevents unsuccessful HTTP responses from being treated as valid weather data.

---

## 🖥️ Getting Started

### Prerequisites

You only need:

* A modern web browser
* Visual Studio Code
* Live Server extension

No backend server is required.

---

## ⚙️ Installation

### 1. Clone the repository

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
```

### 2. Open the project

```bash
cd weather-dashboard
```

Open the folder in Visual Studio Code.

### 3. Install Live Server

Install the **Live Server** extension in VS Code.

### 4. Run the application

Open:

```text
index.html
```

Right-click and select:

```text
Open with Live Server
```

The application will open in your browser.

---

## 🧪 Testing

The application was tested using different scenarios:

| Test Case            | Expected Result                |
| -------------------- | ------------------------------ |
| Valid city           | Weather information displayed  |
| Invalid city         | Error message displayed        |
| Empty input          | Validation message displayed   |
| Internet unavailable | Network error displayed        |
| Celsius → Fahrenheit | Temperature converted          |
| Fahrenheit → Celsius | Temperature converted          |
| Refresh weather      | Latest weather retrieved       |
| Search using Enter   | Search submitted               |
| Multiple clicks      | Search disabled during request |
| Mobile screen        | Responsive layout              |

---

## 📸 Screenshots

### Main Dashboard

Add your screenshot here:

```markdown
![Weather Dashboard](screenshots/dashboard.png)
```

### Weather Results

Add another screenshot:

```markdown
![Weather Results](screenshots/weather-result.png)
```

### Error Handling

```markdown
![Error Handling](screenshots/error.png)
```

> Create a `screenshots` folder in the repository and place your screenshots there.

---

## 📚 Key JavaScript Concepts Demonstrated

This project demonstrates practical use of:

* DOM manipulation
* Event listeners
* Form handling
* Input validation
* Fetch API
* REST API integration
* Promises
* `async/await`
* `try/catch/finally`
* JSON parsing
* Nested object access
* Dynamic HTML rendering
* Template literals
* Browser LocalStorage
* Error handling
* Responsive design

---

## 🎯 Internship Requirements

This project was developed to demonstrate the following requirements:

### Fetch real-time data

Implemented using:

```javascript
fetch()
```

### Asynchronous JavaScript

Implemented using:

```javascript
async/await
```

### Error handling

Implemented using:

```javascript
try {
    // API request
} catch (error) {
    // Handle failure
} finally {
    // Reset loading state
}
```

### Nested JSON processing

Weather information is extracted from nested API objects such as:

```javascript
weather.current.temperature_2m
```

### City search

Users can enter a city name and retrieve its current weather information dynamically.

---

## 🔮 Future Improvements

Potential future enhancements include:

* 📅 Multi-day weather forecast
* 📍 Current-location weather using browser geolocation
* 🔎 Search history
* ⭐ Favorite cities
* 🌅 Sunrise and sunset information
* 🌧️ Precipitation information
* 💨 More detailed wind information
* 📊 Weather charts
* 🌎 Multiple weather units
* 🌙 Dark mode
* 📱 Progressive Web App support

---

## 👩‍💻 Author

**Bhagyashri Raut**

Computer Science Student | Python & Data/ML Enthusiast

### Connect

* GitHub: `https://github.com/bhagya21-tech`
* LinkedIn: `https://linkedin.com/in/bhagyashri-raut-471960322`

---

## 📄 License

This project is intended for educational and internship purposes.

---

