function loadAndScroll(event) {
  event.preventDefault(); 
  const url = 'aboutUs.html';

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