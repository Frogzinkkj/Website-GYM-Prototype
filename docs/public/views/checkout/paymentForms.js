function populateUserData() {
  const firstName = localStorage.getItem('firstName');
  const lastName = localStorage.getItem('lastName');
  const email = localStorage.getItem('email');

  document.getElementById('userName').textContent = `${firstName} ${lastName}`;
  document.getElementById('userEmail').textContent = email;
}

const formas = [
  'Pix', 'Boleto', 'Cartão de Crédito'
];

function formsPayment() {
  const stateSelect = document.getElementById('forms');
  formas.forEach(forma => {
    const option = document.createElement('option');
    option.value = forma;
    option.textContent = forma;
    stateSelect.appendChild(option);
  });

  stateSelect.addEventListener('change', function() {
    if (stateSelect.value === 'Cartão de Crédito') {
      loadCardContent();
    }
  });
}

function loadCardContent() {
  const cardUrl = '/public/views/checkout/card.html';
  fetch(cardUrl)
    .then(response => response.text())
    .then(data => {
      document.getElementById('cardSection').innerHTML = data;
      document.getElementById('cardSection').scrollIntoView({ behavior: 'smooth' });

     
      const script = document.createElement('script');
      script.src = '/public/views/checkout/card.js';
      script.onload = function() {
        initializeCardForm();
      };
      document.body.appendChild(script);
    })
    .catch(error => {
      console.error('Erro ao carregar o conteúdo do cartão:', error);
    });
}

populateUserData();
formsPayment();