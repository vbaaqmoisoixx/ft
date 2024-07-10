function loadFotos() {
    fetch('link.json')
    .then(response => {
        if (!response.ok) {
            throw new Error('Erro na requisição: ' + response.statusText);
        }
        return response.json();
    })
    .then(links => { // Corrigido para 'links'
        const center = document.querySelector('#produtos-container');

        links.forEach(link => {
            const card = document.createElement('div');
            card.classList.add('card');

            const titulo = document.createElement('h1');
            titulo.textContent = link.nome;

            const content = document.createElement('div');
            content.classList.add('content');

            const linkDrive = document.createElement('a');
            linkDrive.href = link.drive_link;
            linkDrive.textContent = 'Link para Drive'; // Exemplo de texto para o link

            content.appendChild(titulo);
            card.appendChild(content);
            card.appendChild(linkDrive);

            center.appendChild(card);
        });
    })
    .catch(error => {
        console.error('Houve um problema com a requisição fetch:', error);
    });
}

loadFotos();
