const mailPattern = /^[^\s^@]+@[a-z]+\.(ru|com|org)/;

const submitSubscribe = document.querySelector('.subsribe_submit');
const inputSubscribe = document.querySelector('.subscribe_mail');

document.addEventListener('DOMContentLoaded', () => {
  submitSubscribe.addEventListener('click', (e) => {
    e.preventDefault();
    if (!(mailPattern.test(inputSubscribe.value))) {
      inputSubscribe.classList.add('error-input');
    }
  })

  inputSubscribe.addEventListener('focus', (e) => {
    e.preventDefault();
    inputSubscribe.classList.contains('error-input') ?
    inputSubscribe.classList.remove('error-input') :
    null;
  })
})
  