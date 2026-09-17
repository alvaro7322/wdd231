import { getMembersData } from './members-data.mjs';

function displayMembers(members) {
  const membersContainer = document.getElementById('members-container');
  membersContainer.innerHTML = '';
  members.forEach(member => {
    const card = document.createElement('section');
    card.classList.add('member-card');

    const displayUrl = member.website.replace(/^https?:\/\//, '').replace(/\/$/, '');

    card.innerHTML = `
      <img src="${member.image}" alt="${member.name} logo" loading="lazy" width="80" height="80">
      <div>
        <h3>${member.name}</h3>
        <p><em>${member.tagline || ''}</em></p>
        <p>${member.address}</p>
        <p>${member.phone}</p>
        <p><a href="${member.website}" target="_blank" rel="noopener">${displayUrl}</a></p>
      </div>
    `;
    membersContainer.appendChild(card);
  });
}

export async function initDirectory() {
  const membersContainer = document.getElementById('members-container');
  const gridBtn = document.getElementById('grid-btn');
  const listBtn = document.getElementById('list-btn');

  const members = await getMembersData();
  displayMembers(members);

  gridBtn.addEventListener('click', () => {
    membersContainer.classList.add('grid-view');
    membersContainer.classList.remove('list-view');
    gridBtn.classList.add('active');
    listBtn.classList.remove('active');
  });

  listBtn.addEventListener('click', () => {
    membersContainer.classList.add('list-view');
    membersContainer.classList.remove('grid-view');
    listBtn.classList.add('active');
    gridBtn.classList.remove('active');
  });
}