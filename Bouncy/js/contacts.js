const submitMessage = document.querySelector('.message_submit');
const inputMessage = document.querySelector('.message_email');

document.addEventListener('DOMContentLoaded', () => {
  emailVerification(submitMessage, inputMessage);
})