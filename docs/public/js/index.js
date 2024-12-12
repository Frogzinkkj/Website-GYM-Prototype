function loadAndScroll(event) {
  event.preventDefault(); 
  const url1 = '/public/views/indexPages/aboutUs.html';
  const url2 = '/public/views/indexPages/where.html'; 

  fetch(url1)
    .then(response => response.text())
    .then(data => {
     
      document.getElementById('rBody').innerHTML = data;
      
      
      return fetch(url2);
    })
    .then(response => response.text())
    .then(data => {
    
      const rBody = document.getElementById('rBody');
      rBody.insertAdjacentHTML('beforeend', data);
      

      const elementoDestino = document.querySelector('#myBody');
      if (elementoDestino) {
        elementoDestino.scrollIntoView({ behavior: 'smooth' });
      }
    })
    .catch(error => {
      console.error('Erro ao carregar o conteúdo:', error);
    });
}
