document.addEventListener("DOMContentLoaded", function() {
    // Obtém a referência dos elementos da página
    const cadastroForm = document.getElementById('cadastroForm');
    const listaParticipantes = document.getElementById('listaParticipantes');
    const sortearBtn = document.getElementById('sortearBtn');
    const resultadoSorteio = document.getElementById('resultadoSorteio');

    // Função para carregar participantes do localStorage
    function carregarParticipantes() {
        // Recupera a lista de participantes do localStorage ou inicia uma lista vazia
        const participantes = JSON.parse(localStorage.getItem('participantes')) || [];
        // Limpa a lista de participantes no HTML
        listaParticipantes.innerHTML = '';
        // Adiciona cada participante na lista HTML
        participantes.forEach((participante, index) => {
            const li = document.createElement('li');
            li.textContent = `${participante.nome} (${participante.email})`;
            listaParticipantes.appendChild(li);
        });
    }

    // Evento de envio do formulário de cadastro
    cadastroForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Impede o envio padrão do formulário
        // Obtém os valores dos campos do formulário
        const nome = document.getElementById('nome').value;
        const email = document.getElementById('email').value;

        // Recupera a lista de participantes do localStorage ou inicia uma lista vazia
        const participantes = JSON.parse(localStorage.getItem('participantes')) || [];
        // Adiciona o novo participante à lista
        participantes.push({ nome, email });
        // Atualiza o localStorage com a nova lista de participantes
        localStorage.setItem('participantes', JSON.stringify(participantes));
        
        // Atualiza a lista de participantes exibida na página
        carregarParticipantes();
        // Reseta o formulário de cadastro
        cadastroForm.reset();
    });

    // Evento de clique no botão de sorteio
    sortearBtn.addEventListener('click', function() {
        // Recupera a lista de participantes do localStorage
        const participantes = JSON.parse(localStorage.getItem('participantes')) || [];
        if (participantes.length === 0) {
            resultadoSorteio.textContent = 'Nenhum participante cadastrado!';
            return; // Sai da função se não houver participantes
        }
        
        // Sorteia um índice aleatório da lista de participantes
        const vencedorIndex = Math.floor(Math.random() * participantes.length);
        const vencedor = participantes[vencedorIndex];
        // Exibe o vencedor na página
        resultadoSorteio.textContent = `Vencedor: ${vencedor.nome} (${vencedor.email})`;
    });

    // Carrega a lista de participantes ao carregar a página
    carregarParticipantes();
});
