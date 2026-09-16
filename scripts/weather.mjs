const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

const lat = 49.7596;
const lon = 6.6441;
const apiKey = 'd293e5a0d0a7a018cf4d4da6a84fcc6f';

const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;

async function apiFetch() {
  try {
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      console.log(data); // testing only
      displayResults(data);
    } else {
      throw Error(await response.text());
    }
  } catch (error) {
    console.log(error);
  }
}

function displayResults(data) {
  currentTemp.textContent = `${data.main.temp}°C`;

  const iconsrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
  weatherIcon.src = iconsrc;
  weatherIcon.alt = data.weather[0].description;

  captionDesc.textContent = data.weather[0].description;
}

apiFetch();