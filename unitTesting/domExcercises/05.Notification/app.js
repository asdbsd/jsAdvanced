function notify(message) {

  const notificationDiv = document.querySelector('#notification');
  notificationDiv.textContent = message;
  notificationDiv.style.display ='block';

  document.querySelector('#notification').addEventListener('click', hideNotDiv);

  function hideNotDiv(e) {
      notificationDiv.style.display = 'none';
  }


}