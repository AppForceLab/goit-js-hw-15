const loginForm = document.querySelector('.login-form');

loginForm.addEventListener('submit', function (event) {
  event.preventDefault(); 

  const emailInput = this.elements.email;
  const passwordInput = this.elements.password;

  if (emailInput.value.trim() === '' || passwordInput.value.trim() === '') {
    alert('Будь ласка, заповніть всі поля форми.');
  } else {
    const formData = {
      email: emailInput.value,
      password: passwordInput.value,
    };

    console.log(`Об'єкт в консоль:`); 
    console.log(formData); 
    this.reset(); 
  }
});
