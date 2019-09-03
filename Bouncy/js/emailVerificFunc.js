const mailPattern = /^[^\s^@]+@[a-z]+\.(ru|com|org)/;


const emailVerification = (submitBtn, emailInput) => {
  submitBtn.addEventListener('click', (e) => {
    e.preventDefault();
    if (!(mailPattern.test(emailInput.value))) {
      emailInput.classList.add('error-input');
    }
  })

  emailInput.addEventListener('focus', (e) => {
    e.preventDefault();
    emailInput.classList.contains('error-input') ?
      emailInput.classList.remove('error-input') :
      null;
  })
}