let carrinho = [];
let total = 0;

function adicionarCarrinho(nome, preco) {
    carrinho.push({ nome, preco });
    atualizarCarrinho();
}

function atualizarCarrinho() {
    const lista = document.getElementById('lista-carrinho');
    const spanTotal = document.getElementById('valor-total');
    
    lista.innerHTML = '';
    total = 0;

    if (carrinho.length === 0) {
        lista.innerHTML = '<li class="vazio">O carrinho está vazio.</li>';
    } else {
        carrinho.forEach((item, index) => {
            total += item.preco;
            let li = document.createElement('li');
            li.innerHTML = `${item.nome} <span>R$ ${item.preco.toFixed(2)}</span>`;
            lista.appendChild(li);
        });
    }

    spanTotal.textContent = total.toFixed(2);
}

function finalizarPedido() {
    if (carrinho.length === 0) {
        alert('O carrinho está vazio! Adicione itens antes de finalizar.');
        return;
    }
    const forma = document.getElementById('pagamento').value;
    alert(`Pedido gerado e enviado com sucesso! Forma de pagamento: ${forma.toUpperCase()}. Obrigado por comprar no Gourmet Cupcake Delivery!`);
    carrinho = [];
    atualizarCarrinho();
}

function enviarAvaliacao() {
    const texto = document.getElementById('comentario-aval').value;
    if (texto.trim() === '') {
        alert('Por favor, escreva um comentário antes de enviar a avaliação.');
        return;
    }
    alert('Avaliação enviada com sucesso! Agradecemos o seu feedback.');
    document.getElementById('comentario-aval').value = '';
}
