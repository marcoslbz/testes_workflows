// Função para carregar o JSON e gerar o HTML
async function loadJsonAndRender() {
    try {
      // Caminho para o arquivo JSON
      const response = await fetch('./data/data.json');
      const jsonData = await response.json();
  
      // Seleciona os resultados do JSON
      const user = jsonData.results[0];
  
      // Gera o HTML com os dados do JSON
      const htmlContent = `
        <h1>Informações do Usuário</h1>
        <p><strong>Nome:</strong> ${user.name.title} ${user.name.first} ${user.name.last}</p>
        <p><strong>Gênero:</strong> ${user.gender}</p>
        <p><strong>E-mail:</strong> ${user.email}</p>
        <p><strong>Localização:</strong> ${user.location.street.number} ${user.location.street.name}, 
        ${user.location.city}, ${user.location.state}, ${user.location.country} - ${user.location.postcode}</p>
        <p><strong>Telefone:</strong> ${user.phone}</p>
        <p><strong>Celular:</strong> ${user.cell}</p>
        <p><strong>Nacionalidade:</strong> ${user.nat}</p>
        <img src="${user.picture.large}" alt="Foto de ${user.name.first}">
      `;
  
      // Insere o HTML no corpo da página
      document.body.innerHTML = htmlContent;
    } catch (error) {
      console.error('Erro ao carregar o JSON:', error);
      document.body.innerHTML = '<p>Erro ao carregar os dados.</p>';
    }
  }
  
  // Chama a função para carregar e renderizar os dados
  loadJsonAndRender();
  