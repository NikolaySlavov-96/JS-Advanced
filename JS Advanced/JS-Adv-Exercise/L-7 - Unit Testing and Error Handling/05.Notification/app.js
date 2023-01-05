function notify(message) {

  const divNotification = document.getElementById('notification');

  divNotification.addEventListener('click', onClick);

  divNotification.style.display = 'block';
  divNotification.textContent = message;

  function onClick(ev) {
    divNotification.style.display = 'none';
  }
}