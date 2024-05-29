function gerarCartela() {
    var nome = document.getElementById('nome').value;
    var cartela = document.getElementById('cartela');
    cartela.innerHTML = '';

    var cabecalho = document.createElement('tr');
    
    var nomeCelulaLabel = document.createElement('td');
    nomeCelulaLabel.textContent = 'Nome: ';
    cabecalho.appendChild(nomeCelulaLabel);
    
    var nomeCelulaValor = document.createElement('td');
    nomeCelulaValor.textContent = nome;
    nomeCelulaValor.colSpan = 4;
    cabecalho.appendChild(nomeCelulaValor);
    
    cartela.appendChild(cabecalho);

    var numerosCartela = [];
    while (numerosCartela.length < 25) {
        var numero = Math.floor(Math.random() * 99) + 1;

        if (!numerosCartela.includes(numero)) {
            numerosCartela.push(numero);
        }
    }

    for (var i = 0; i < 5; i++) {
        var linha = document.createElement('tr');

        for (var j = 0; j < 5; j++) {
            var coluna = document.createElement('td');
            coluna.textContent = numerosCartela[i * 5 + j];
            linha.appendChild(coluna);
        }

        cartela.appendChild(linha);
    }
}
