function sortear(){
    let quantidade = parseInt(document.getElementById('quantidade').value);
    let de = parseInt(document.getElementById('de').value);
    let ate = parseInt(document.getElementById('ate').value);
    //pra pegar valores dentro do elemento HTML!

    let sorteados = [];
    let numero;

    for (let i = 0; i<quantidade; i++){
        numero = obterNumeroAleatorio(de,ate);

        while (sorteados.includes(numero)){
            numero = obterNumeroAleatorio(de,ate);
        }

        sorteados.push(numero)
    }
    
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados: ${sorteados}</label>`
    
    alterarStatusBotao();
}

function obterNumeroAleatorio(min,max){
    return Math.floor(Math.random()*(max - min + 1)) + min;
}

function alterarStatusBotao(){
    let botao = document.getElementById('btn-reiniciar');
    if (botao.classList.contains('container__botao-desabilitado')){
        botao.classList.remove('container__botao-desabilitado');
        botao.classList.add('container__botao');
    }
    else{
        botao.classList.remove('container__botao');
         botao.classList.add('container__botao-desabilitado');
    }
}

function reiniciar() {
        document.getElementById('quantidade').value = '';
        document.getElementById('de').value = '';
        document.getElementById('ate').value = '';
        document.getElementById('resultado').innerHTML = '<label class="texto__paragrafo">Números sorteados: nenhum até agora</label>';
        alterarStatusBotao();
}

//LIÇÕES APRENDIDAS

/* O document.getElementById('de').value = Utilizamos o .VALUE quando 
queremos recuperar o valor que recebemos de um campo de texto.

.getElementByid = Utilizado para acessar e manipular elementos pelo
seu atributo ID

Math.random() = gera um número aleatório entre 0 e 1.

porque eu preciso criar outra função pra obter o número? estudar

Math.floor(Math.random()*(max - min + 1)) + min
Formula para gerar um número aleatório inclusive, com min e max.

Math.floor = arredonda para baixo e remove os decimais

array = []

array.push(valor) = adiciona um valor ao final do array

includes() - Determina se um array possui um valor especifico.
Retorna true ou false.

.innerHTML = Utilizado quando precisamos manipular o conteudo HTML 
interno de um elemento.

.textContent = Utilizado quando queremos inserir ou modificar um texto
simples dentro de um elemento HTML

While = Repete um bloco de código enquanto uma condição for verdadeira 

.classList = Lista as classes de um elemento
.classList.contains = verifica se um elemento possui certa classe
.classList.remove = remove uma classe específica
.classList.add = adiciona uma classe específica

*/