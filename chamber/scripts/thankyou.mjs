export function initThankYou() {
  const params = new URLSearchParams(window.location.search);

  const fields = {
    firstName: document.getElementById('confirm-firstName'),
    lastName: document.getElementById('confirm-lastName'),
    email: document.getElementById('confirm-email'),
    mobilePhone: document.getElementById('confirm-mobilePhone'),
    businessName: document.getElementById('confirm-businessName'),
    timestamp: document.getElementById('confirm-timestamp')
  };

  for (const key in fields) {
    if (fields[key] && params.has(key)) {
      fields[key].textContent = params.get(key);
    }
  }
}