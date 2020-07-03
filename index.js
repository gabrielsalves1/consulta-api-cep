function consultarCep() {
    event.preventDefault();

     const buscarCep = () => {
        const cep = document.getElementById('cep').value;
        return fetch(`https://viacep.com.br/ws/${cep}/json/`)
        .then(resposta => 
            resposta.json()
        )
        .then(json => 
            json
        )
     }


    const exibeEndereco = (cep, logradouro, bairro, localidade, uf) => {
        const linha = document.createElement('tr')
        const conteudoLinha = 
        `
        <td>${cep}</td>
        <td>${logradouro}</td>
        <td>${bairro}</td>
        <td>${localidade}</td>
        <td>${uf}</td>
        `;
        linha.innerHTML = conteudoLinha;
        return linha
    }

    const corpoTabela = document.querySelector("[data-conteudo-tabela]");
    buscarCep().then(exibe => {
        const dados = Object.values(exibe);
        corpoTabela.appendChild(exibeEndereco(dados[0], dados[1], dados[3], dados[4], dados[5]))
    })
}
