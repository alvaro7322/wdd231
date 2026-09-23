function setTimestamp() {
  document.getElementById('timestamp').value = new Date().toString();
}

function initModals() {
  const triggers = document.querySelectorAll('.modal-trigger');
  triggers.forEach(trigger => {
    trigger.addEventListener('click', (e) => {
      e.preventDefault();
      const modalId = trigger.getAttribute('data-modal');
      const dialog = document.getElementById(modalId);
      if (dialog) dialog.showModal();
    });
  });

  const closeButtons = document.querySelectorAll('.modal-close');
  closeButtons.forEach(button => {
    button.addEventListener('click', () => {
      button.closest('dialog').close();
    });
  });
}

export function initJoin() {
  setTimestamp();
  initModals();
}