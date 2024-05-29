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

    var letras = ['B', 'I', 'N', 'G', 'O'];
    var letrasCabecalho = document.createElement('tr');
    letras.forEach(function(letra) {
        var letraCelula = document.createElement('td');
        letraCelula.textContent = letra;
        letrasCabecalho.appendChild(letraCelula);
    });

    cartela.appendChild(letrasCabecalho);

    var numerosCartela = {
        'B': [],
        'I': [],
        'N': [],
        'G': [],
        'O': []
    };

    while (numerosCartela['B'].length < 5) {
        var numero = Math.floor(Math.random() * 15) + 1;
        if (!numerosCartela['B'].includes(numero)) {
            numerosCartela['B'].push(numero);
        }
    }

    while (numerosCartela['I'].length < 5) {
        var numero = Math.floor(Math.random() * 15) + 16;
        if (!numerosCartela['I'].includes(numero)) {
            numerosCartela['I'].push(numero);
        }
    }

    while (numerosCartela['N'].length < 5) {
        var numero = Math.floor(Math.random() * 15) + 31;
        if (!numerosCartela['N'].includes(numero)) {
            numerosCartela['N'].push(numero);
        }
    }

    while (numerosCartela['G'].length < 5) {
        var numero = Math.floor(Math.random() * 15) + 46;
        if (!numerosCartela['G'].includes(numero)) {
            numerosCartela['G'].push(numero);
        }
    }

    while (numerosCartela['O'].length < 5) {
        var numero = Math.floor(Math.random() * 15) + 61;
        if (!numerosCartela['O'].includes(numero)) {
            numerosCartela['O'].push(numero);
        }
    }

    for (var i = 0; i < 5; i++) {
        var linha = document.createElement('tr');

        ['B', 'I', 'N', 'G', 'O'].forEach(function(letra) {
            var coluna = document.createElement('td');
            coluna.textContent = numerosCartela[letra][i];
            linha.appendChild(coluna);
        });

        cartela.appendChild(linha);
    }
}
