const API_KEY = 'd293e5a0d0a7a018cf4d4da6a84fcc6f';
const LAT = -17.1938;
const LON = -70.9347;

async function fetchCurrentWeather() {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${LAT}&lon=${LON}&units=metric&appid=${API_KEY}`
  );
  if (response.ok) return await response.json();
  return null;
}

async function fetchForecast() {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/forecast?lat=${LAT}&lon=${LON}&units=metric&appid=${API_KEY}`
  );
  if (response.ok) return await response.json();
  return null;
}

function renderCurrentWeather(data) {
  const currentWeatherEl = document.getElementById('current-weather');
  currentWeatherEl.innerHTML = `
    <div class="current-weather-card">
      <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="${data.weather[0].description}" width="70" height="70" loading="lazy" onerror="this.style.display='none'">
      <div class="current-weather-info">
        <p class="current-temp">${Math.round(data.main.temp)}&deg;C</p>
        <p class="current-desc">${data.weather[0].description}</p>
      </div>
    </div>
  `;
}

function renderForecast(data) {
  const forecastEl = document.getElementById('forecast');
  const dailyData = data.list.filter(item => item.dt_txt.includes('12:00:00')).slice(0, 3);

  forecastEl.innerHTML = '';
  dailyData.forEach(day => {
    const date = new Date(day.dt_txt);
    const dayName = date.toLocaleDateString('en-US', { weekday: 'short' });

    const card = document.createElement('div');
    card.classList.add('forecast-card');
    card.innerHTML = `
      <p class="forecast-day">${dayName}</p>
      <img src="https://openweathermap.org/img/wn/${day.weather[0].icon}.png" alt="${day.weather[0].description}" width="50" height="50" loading="lazy" onerror="this.style.display='none'">
      <p class="forecast-temp">${Math.round(day.main.temp)}&deg;C</p>
    `;
    forecastEl.appendChild(card);
  });
}

export async function initWeather() {
  const current = await fetchCurrentWeather();
  if (current) renderCurrentWeather(current);

  const forecast = await fetchForecast();
  if (forecast) renderForecast(forecast);
}