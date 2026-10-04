const reportForm = document.getElementById('report-form');

reportForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const report = {
    matchId: document.getElementById('match-id').value,
    suspect: document.getElementById('suspect').value,
    minute: document.getElementById('minute').value,
    description: document.getElementById('description').value,
    reporter: document.getElementById('reporter').value,
    submittedAt: new Date().toISOString()
  };

  localStorage.setItem('lastReport', JSON.stringify(report));
  window.location.href = 'confirmation.html';
});
