const box = document.getElementById('confirmation-box');
const storedReport = localStorage.getItem('lastReport');

if (storedReport) {
  const report = JSON.parse(storedReport);
  box.innerHTML = `
    <p>Thank you${report.reporter ? ', ' + report.reporter : ''}. Your report has been received.</p>
    <p><strong>Match ID:</strong> ${report.matchId}</p>
    <p><strong>Suspected team/player:</strong> ${report.suspect}</p>
    <p><strong>Minute:</strong> ${report.minute ? report.minute : 'Not specified'}</p>
    <p><strong>Description:</strong> ${report.description}</p>
  `;
} else {
  box.innerHTML = '<p>No report found. Please submit the form first.</p>';
}
