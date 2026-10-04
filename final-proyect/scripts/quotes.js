async function loadQuotes(containerId) {
  const container = document.getElementById(containerId);
  try {
    const response = await fetch('data/quotes.json');
    if (!response.ok) throw new Error('Network response was not ok');
    const quotes = await response.json();
    container.innerHTML = '';
    quotes.forEach(item => {
      const card = document.createElement('div');
      card.classList.add('quote-card');
      card.innerHTML = `
        <blockquote>"${item.quote}"</blockquote>
        <cite>${item.author} — ${item.role}</cite>
      `;
      container.appendChild(card);
    });
  } catch (error) {
    container.innerHTML = '<p>Quotes could not be loaded right now.</p>';
    console.error(error);
  }
}
