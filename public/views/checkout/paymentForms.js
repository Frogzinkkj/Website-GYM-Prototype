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
}

function loadAndScroll(event) {
  event.preventDefault();
  const url = '/public/views/indexPages/aboutUs.html'; // Aqui, você escolhe a página única

  fetch(url)
    .then(response => response.text())
    .then(data => {
      document.getElementById('rBody').innerHTML = data;

      const elementoDestino = document.querySelector('#myBody');
      if (elementoDestino) {
        elementoDestino.scrollIntoView({ behavior: 'smooth' });
      }
    })
    .catch(error => {
      console.error('Erro ao carregar o conteúdo:', error);
    });
}

// Função para carregar o conteúdo de card.html abaixo da página
function loadCardContent() {
  const cardUrl = '/public/views/checkout/card.html';
  fetch(cardUrl)
    .then(response => response.text())
    .then(data => {
      // Insere o conteúdo do card.html dentro do elemento #cardSection
      document.getElementById('cardSection').innerHTML = data;
    })
    .catch(error => {
      console.error('Erro ao carregar o conteúdo do cartão:', error);
    });
}

populateUserData();
formsPayment();
loadCardContent();  
