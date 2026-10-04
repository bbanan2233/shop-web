// JavaScript используется только для открытия и закрытия модального окна.
const dialog = document.getElementById('info-dialog');
const openButtons = document.querySelectorAll('[data-open-dialog]');
const closeButton = document.querySelector('[data-close-dialog]');

if (dialog && closeButton) {
  openButtons.forEach(function (button) {
    button.addEventListener('click', function () {
      dialog.showModal();
    });
  });

  closeButton.addEventListener('click', function () {
    dialog.close();
  });
}
// Escape закрывает <dialog> штатно, без дополнительного обработчика.
