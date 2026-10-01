import { discoverData } from './discoverData.mjs';

function renderGallery(places) {
  const galleryEl = document.getElementById('gallery-container');
  galleryEl.innerHTML = '';

  places.forEach((place, index) => {
    const card = document.createElement('div');
    card.classList.add('gallery-card');
    card.style.gridArea = `item${index + 1}`;

    card.innerHTML = `
      <h2>${place.name}</h2>
      <figure>
        <img src="${place.image}" alt="${place.name}" loading="lazy">
      </figure>
      <address>${place.address}</address>
      <p>${place.description}</p>
      <button type="button" class="learn-more-btn">Learn more</button>
    `;
    galleryEl.appendChild(card);
  });
}

function displayLastVisit() {
  const messageEl = document.getElementById('visit-message');
  const now = Date.now();
  const lastVisit = localStorage.getItem('lastVisit');

  if (!lastVisit) {
    messageEl.textContent = "Welcome! Let us know if you have any questions.";
  } else {
    const msPerDay = 1000 * 60 * 60 * 24;
    const daysSinceLastVisit = Math.floor((now - Number(lastVisit)) / msPerDay);

    if (daysSinceLastVisit < 1) {
      messageEl.textContent = "Back so soon! Awesome!";
    } else if (daysSinceLastVisit === 1) {
      messageEl.textContent = "You last visited 1 day ago.";
    } else {
      messageEl.textContent = `You last visited ${daysSinceLastVisit} days ago.`;
    }
  }

  localStorage.setItem('lastVisit', now.toString());
}

export function initDiscover() {
  displayLastVisit();
  renderGallery(discoverData);
}