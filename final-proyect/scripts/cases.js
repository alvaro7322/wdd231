async function loadCases(containerId, previewCount) {
  const container = document.getElementById(containerId);
  try {
    const response = await fetch('data/cases.json');
    if (!response.ok) throw new Error('Network response was not ok');
    const cases = await response.json();
    renderCases(container, previewCount ? cases.slice(0, previewCount) : cases);
    if (document.getElementById('filter-bar')) {
      buildFilterBar(cases, container);
    }
  } catch (error) {
    container.innerHTML = '<p>Cases could not be loaded right now.</p>';
    console.error(error);
  }
}

function renderCases(container, cases) {
  container.innerHTML = '';
  cases.forEach(item => {
    const card = document.createElement('article');
    card.classList.add('case-card');
    card.dataset.year = item.year;

    const img = document.createElement('img');
    img.src = item.image;
    img.alt = item.name;
    img.loading = 'lazy';

    const heading = document.createElement('h3');
    heading.textContent = `${item.name} (${item.year})`;

    const team = document.createElement('p');
    team.innerHTML = `<strong>Team:</strong> ${item.team}`;

    const sanction = document.createElement('p');
    sanction.innerHTML = `<strong>Sanction:</strong> ${item.sanction}`;

    const context = document.createElement('p');
    context.textContent = item.context;

    card.append(img, heading, team, sanction, context);
    container.appendChild(card);
  });
}

function buildFilterBar(cases, container) {
  const filterBar = document.getElementById('filter-bar');
  const years = [...new Set(cases.map(item => item.year))].sort();

  const allButton = document.createElement('button');
  allButton.textContent = 'All';
  allButton.classList.add('active');
  allButton.addEventListener('click', () => {
    setActiveButton(allButton);
    renderCases(container, cases);
  });
  filterBar.appendChild(allButton);

  years.forEach(year => {
    const button = document.createElement('button');
    button.textContent = year;
    button.addEventListener('click', () => {
      setActiveButton(button);
      renderCases(container, cases.filter(item => item.year === year));
    });
    filterBar.appendChild(button);
  });

  function setActiveButton(activeButton) {
    filterBar.querySelectorAll('button').forEach(button => button.classList.remove('active'));
    activeButton.classList.add('active');
  }
}