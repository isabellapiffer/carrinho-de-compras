// O que eu preciso fazer? 
//Recuperar os html
//Preciso comprar o produto, quantidade, add no carrinho e somar
//o que eu quero fazer é um fluxo, então vou por numa função.

let totalGeral = 0;
limpar();


    function adicionar() {
    //Recuperar valores - nome do produto, quantidade e valor.
    let produto = document.getElementById('produto').value;
    let nomeProduto = produto.split('-')[0];     //qual é o produto
    let valorUnitario = produto.split('R$')[1];   // qual é o valor        //split é pra quebrar uma parte da frase. 
    let quantidade = document.getElementById('quantidade').value;



    //Calcular o preco - valor unitario x quantidade. 

    let preco = quantidade * valorUnitario;

    //Adiconar o produto no carrinho - preciso saber do valor e do subtotal. 
    //Atualizar o valor total da compra. 

    let carrinho = document.getElementById('lista-produtos')
    carrinho.innerHTML = carrinho.innerHTML + `<section class="carrinho__produtos" id="lista-produtos">
        <section class="carrinho__produtos__produto">
          <span class="texto-azul">${quantidade}</span> ${nomeProduto} <span class="texto-azul">R$${preco}</span>
        </section>
      </section>`

        totalGeral = totalGeral + preco;

        let campoTotal = document.getElementById('valor-total');
        campoTotal.textContent = `R$ ${totalGeral}`;
        document.getElementById('quantidade').value = 0
       }



 function limpar() {
  totalGeral = 0;
  document.getElementById('lista-produtos').innerHTML = '';
  document.getElementById('valor-total').textContent = 'R$ 0';

 }




