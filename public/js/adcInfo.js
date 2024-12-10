
function goToNextPage() {
  window.location.href = "selectPlan.html"; 
}


function populateUserData() {
  const firstName = localStorage.getItem('firstName');
  const lastName = localStorage.getItem('lastName');
  const email = localStorage.getItem('email');

  document.getElementById('userName').textContent = `${firstName} ${lastName}`;
  document.getElementById('userEmail').textContent = email;
}


const estados = [
  'Acre', 'Alagoas', 'Amapá', 'Amazonas', 'Bahia', 'Ceará', 'Distrito Federal',
  'Espírito Santo', 'Goiás', 'Maranhão', 'Mato Grosso', 'Mato Grosso do Sul',
  'Minas Gerais', 'Pará', 'Paraíba', 'Paraná', 'Pernambuco', 'Piauí',
  'Rio de Janeiro', 'Rio Grande do Norte', 'Rio Grande do Sul', 'Rondônia',
  'Roraima', 'Santa Catarina', 'São Paulo', 'Sergipe', 'Tocantins'
];

function populateStates() {
  const stateSelect = document.getElementById('state');
  estados.forEach(estado => {
    const option = document.createElement('option');
    option.value = estado;
    option.textContent = estado;
    stateSelect.appendChild(option);
  });
}


function populateDateFields() {
  const daySelect = document.getElementById('day');
  const monthSelect = document.getElementById('month');
  const yearSelect = document.getElementById('year');


  for (let i = 1; i <= 31; i++) {
    const option = document.createElement('option');
    option.value = i;
    option.textContent = i;
    daySelect.appendChild(option);
  }


  const months = [
    'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
    'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'
  ];
  months.forEach((month, index) => {
    const option = document.createElement('option');
    option.value = index + 1;
    option.textContent = month;
    monthSelect.appendChild(option);
  });

  
  const currentYear = new Date().getFullYear();
  const ageLimitMin = 16;  
  const ageLimitMax = 60;  
  const startYearMin = currentYear - ageLimitMin; 
  const startYearMax = currentYear - ageLimitMax; 

  for (let i = startYearMin; i >= startYearMax; i--) { 
    const option = document.createElement('option');
    option.value = i;
    option.textContent = i;
    yearSelect.appendChild(option);
  }
}


function selectGender(gender) {
  document.getElementById('selectedGender').value = gender;

  const maleButton = document.getElementById('male');
  const femaleButton = document.getElementById('female');

  if (gender === 'Masculino') {
    maleButton.classList.add('selected');
    femaleButton.classList.remove('selected');
  } else if (gender === 'Feminino') {
    femaleButton.classList.add('selected');
    maleButton.classList.remove('selected');
  }
}


window.onload = function() {
  populateUserData();
  populateStates();
  populateDateFields();

  
  const nextButton = document.querySelector('.submit-button');
  nextButton.addEventListener('click', goToNextPage);
};
