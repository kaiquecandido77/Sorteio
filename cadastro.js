document.addEventListener("DOMContentLoaded", function() {
    const cadastroForm = document.getElementById('cadastroForm');

    cadastroForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const nome = document.getElementById('nome').value;
        const email = document.getElementById('email').value;

        const participantes = JSON.parse(localStorage.getItem('participantes')) || [];
        participantes.push({ nome, email });
        localStorage.setItem('participantes', JSON.stringify(participantes));
        
        alert('Participante cadastrado com sucesso!');
        cadastroForm.reset();
    });
});
