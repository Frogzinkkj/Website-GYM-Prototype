function loadAndScroll(event) {
  event.preventDefault(); 
  const url1 = 'aboutUs.html';
  const url2 = 'where.html'; // URL da segunda página

  fetch(url1)
    .then(response => response.text())
    .then(data => {
      // Carrega o conteúdo da primeira página
      document.getElementById('rBody').innerHTML = data;
      
      // Carrega o conteúdo da segunda página logo abaixo
      return fetch(url2);
    })
    .then(response => response.text())
    .then(data => {
      // Adiciona o conteúdo da segunda página abaixo da primeira
      const rBody = document.getElementById('rBody');
      rBody.insertAdjacentHTML('beforeend', data);
      
      // Rola até o elemento desejado
      const elementoDestino = document.querySelector('#myBody');
      if (elementoDestino) {
        elementoDestino.scrollIntoView({ behavior: 'smooth' });
      }
    })
    .catch(error => {
      console.error('Erro ao carregar o conteúdo:', error);
    });
}
