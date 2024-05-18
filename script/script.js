function formatarNome(nomeCompleto) {
    //Palavras para ignorados
    const conectores = ["de", "da", "das", "do", "dos", "e"];

    //Separar o nome completo
    let partes = nomeCompleto.split(" ");

    //Filtrar para remover os conectores
    let partesFiltradas = partes.filter(parte => !conectores.includes(parte.toLowerCase()));

    //O último sobrenome é o ultimo filtrado
    let ultimoSobrenome = partesFiltradas.pop();

    //Estilizar as Iniciais
    let iniciais = partesFiltradas.map(parte => parte[0].toUpperCase() + '.');

    //Juntar o ultimo nome com as iniciais
    let nomeFormatado = `${ultimoSobrenome.toUpperCase()}, ${iniciais.join(" ")}`;

    return nomeFormatado;
}

function gerarNomeFormatado() {
    //Pegar o valor do input
    let nomeCompleto = document.getElementById('nomeCompleto').value;

    //Chamar a função de formatação de nome
    let nomeFormatado = formatarNome(nomeCompleto);

    //Armazenar o nome formatado
    localStorage.setItem('nomeFormatado', nomeFormatado);

    //Redirecionar para a pagina de cracha
    window.location.href = 'cracha.html';
    event.preventDefault();
}

//Desabilitar botao se o input tiver vazio
function verificarInput() {
    //Pegar o valor do input
    let nomeCompleto = document.getElementById('nomeCompleto').value;

    //Desabilitar ou habilitar
    if (nomeCompleto.trim() === "") {
        document.getElementById('gerarBtn').disabled = true;
    } else {
        document.getElementById('gerarBtn').disabled = false;
    }
}

//Botao
document.getElementById('gerarBtn').addEventListener('click', gerarNomeFormatado);

//Input vazio
document.getElementById('nomeCompleto').addEventListener('input', verificarInput);

//Tecla Enter também funciona, porem fica desabilitada se o botao estiver desabilitado
document.getElementById('nomeCompleto').addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        if (document.getElementById('gerarBtn').disabled) {
            event.preventDefault(); // Prevenir comportamento padrão se o botão estiver desabilitado
        } else {
            event.preventDefault(); // Prevenir comportamento padrão (atualização da página)
            gerarNomeFormatado();
        }
    }
});

//Começa com o botao desabilitado :)
verificarInput();
