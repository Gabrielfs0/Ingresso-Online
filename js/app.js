function comprar() {
 // Recuperar os tipos de ingresso e a quantidade exigida pelo usuario em número inteiro
 let tipoIngresso = document.getElementById('tipo-ingresso').value;
 let quantidade = parseInt(document.getElementById('qtd').value);
 
// Verificar se a quantidade inserida é válida e um número positivo
if (isNaN(quantidade) || quantidade <= 0) {
  alert("Por favor, insira uma quantidade válida.");
  return;
}

 // Verificar qual tipo de ingresso foi selecionado fazendo "function == 'opção'"
 if (tipoIngresso == 'pista') {
    comprarPista(quantidade);
 } else if (tipoIngresso == 'superior') {
  comprarSuperior(quantidade);
 } if (tipoIngresso == 'inferior') {
  comprarInferior(quantidade);
}

}


// Criar uma função com parametro quantidade
// Pegar o id 'qtd-pista' como numero inteiro e textContent
function comprarPista(quantidade) {
  let qtdPista = parseInt(document.getElementById('qtd-pista').textContent);
  // Fazer um "se" ("quantidade" for maior que "quantidade disponivel na pista") exiba um alert qtd indisponivel
  if (quantidade > qtdPista) {
    alert('Quantidade indisponivel para Pista.');
  // "senao" faça ("quantidade disponivel na pista" menos "quantidade") = "quantidade disponivel na pista"
  // Pegue novamente o id da variavel "qtdPista" para exibir a nova quantidade
  // Exiba um alert da compra feita 
  } else { 
    qtdPista = qtdPista - quantidade;
    document.getElementById('qtd-pista').textContent = qtdPista;
    alert('Compra realizada com sucesso!');
  }
}


function comprarInferior(quantidade) {
 let qtdInferior = parseInt(document.getElementById('qtd-inferior').textContent);
 if (quantidade > qtdInferior) {
   alert('Quantidade indisponivel para Cadeira Inferior.');
 } else { 
   qtdInferior = qtdInferior - quantidade;
   document.getElementById('qtd-inferior').textContent = qtdInferior;
   alert('Compra realizada com sucesso!');
}
}


function comprarSuperior(quantidade) { 
    let qtdSuperior = parseInt(document.getElementById('qtd-superior').textContent);
    if (quantidade > qtdSuperior) {
      alert('Quantidade indisponivel para Cadeira Superior.');
    } else { 
      qtdSuperior = qtdSuperior - quantidade;
      document.getElementById('qtd-superior').textContent = qtdSuperior;
      alert('Compra realizada com sucesso!');
    }
  }
