import { getMembersData } from './members-data.mjs';

function renderSpotlights(members) {
  const spotlightsContainer = document.getElementById('spotlights-container');
  const eligible = members.filter(member => member.membership === 2 || member.membership === 3);
  const shuffled = eligible.sort(() => 0.5 - Math.random());
  const count = Math.random() < 0.5 ? 2 : 3;
  const selected = shuffled.slice(0, count);

  spotlightsContainer.innerHTML = '';
  selected.forEach(member => {
    const level = member.membership === 3 ? 'Gold' : 'Silver';
    const displayUrl = member.website.replace(/^https?:\/\//, '').replace(/\/$/, '');

    const card = document.createElement('section');
    card.classList.add('spotlight-card');
    card.innerHTML = `
      <img src="${member.image}" alt="${member.name} logo" loading="lazy" width="80" height="80">
      <h3>${member.name}</h3>
      <p class="membership-level">${level} Member</p>
      <p>${member.phone}</p>
      <p>${member.address}</p>
      <p><a href="${member.website}" target="_blank" rel="noopener">${displayUrl}</a></p>
    `;
    spotlightsContainer.appendChild(card);
  });
}

export async function initSpotlights() {
  const members = await getMembersData();
  renderSpotlights(members);
}