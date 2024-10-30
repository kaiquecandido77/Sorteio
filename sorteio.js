document.addEventListener("DOMContentLoaded", function() {
    const listaParticipantes = document.getElementById('listaParticipantes');
    const sortearBtn = document.getElementById('sortearBtn');
    const resultadoSorteio = document.getElementById('resultadoSorteio');

    // Função para carregar participantes do localStorage
    function carregarParticipantes() {
        const participantes = JSON.parse(localStorage.getItem('participantes')) || [];
        listaParticipantes.innerHTML = '';
        participantes.forEach((participante, index) => {
            const li = document.createElement('li');
            li.textContent = `${participante.nome} (${participante.email})`;
            listaParticipantes.appendChild(li);
        });
    }

    // Evento de clique no botão de sorteio
    sortearBtn.addEventListener('click', function() {
        const participantes = JSON.parse(localStorage.getItem('participantes')) || [];
        if (participantes.length === 0) {
            resultadoSorteio.textContent = 'Nenhum participante cadastrado!';
            return;
        }
        
        const vencedorIndex = Math.floor(Math.random() * participantes.length);
        const vencedor = participantes[vencedorIndex];
        resultadoSorteio.textContent = `Vencedor: ${vencedor.nome} (${vencedor.email})`;
    });

    // Carregar participantes ao carregar a página
    carregarParticipantes();
});
