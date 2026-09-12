const membersContainer = document.getElementById('members-container');
const gridBtn = document.getElementById('grid-btn');
const listBtn = document.getElementById('list-btn');

async function getMembers() {
  try {
    const response = await fetch('data/members.json');
    if (response.ok) {
      const data = await response.json();
      displayMembers(data);
    }
  } catch (error) {
    console.error(error);
  }
}

function displayMembers(members) {
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

getMembers();