document.getElementById('registrationForm').addEventListener('submit', function (event) {
  event.preventDefault(); 

  const firstName = document.getElementById('firstName').value;
  const lastName = document.getElementById('lastName').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const confirmPassword = document.getElementById('confirmPassword').value;

  const errorMessage = document.getElementById('errorMessage');


  if (password !== confirmPassword) {
    errorMessage.textContent = 'As senhas não coincidem!';
  } else {
    errorMessage.textContent = ''; 

   
    localStorage.setItem('firstName', firstName);
    localStorage.setItem('lastName', lastName);
    localStorage.setItem('email', email);

    
    window.location.href = "confirmEmail.html";
  }
});
