const pizzas = {
    salgadas: [
        { id: 1, nome: "Margherita", preco: 45.90, descricao: "Molho, mussarela, tomate e manjericão", 
          imagem: "https://images.unsplash.com/photo-1604068549290-dea0e4a305ca?w=400" },
        { id: 2, nome: "Calabresa", preco: 47.90, descricao: "Molho, mussarela e calabresa", 
          imagem: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=400" },
        { id: 3, nome: "Portuguesa", preco: 49.90, descricao: "Molho, mussarela, presunto, ovo e cebola", 
          imagem: "https://images.unsplash.com/photo-1528137871618-79d2761e3fd5?w=400" },
        { id: 4, nome: "Quatro Queijos", preco: 52.90, descricao: "Molho, mussarela, provolone, gorgonzola e parmesão", 
          imagem: "https://images.unsplash.com/photo-1573821663912-569905455b1c?w=400" },
        { id: 5, nome: "Frango com Catupiry", preco: 48.90, descricao: "Molho, frango desfiado e catupiry", 
          imagem: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400" },
        { id: 6, nome: "Pepperoni", preco: 51.90, descricao: "Molho, mussarela e pepperoni", 
          imagem: "https://images.unsplash.com/photo-1628840042765-356cda07504e?w=400" },
        { id: 7, nome: "Vegetariana", preco: 47.90, descricao: "Molho, mussarela, palmito, champignon, pimentão e cebola", 
          imagem: "https://images.unsplash.com/photo-1574126154517-d1e0d89ef734?w=400" },
        { id: 8, nome: "Bacon", preco: 49.90, descricao: "Molho, mussarela, bacon crocante e cebola", 
          imagem: "https://images.unsplash.com/photo-1595708684082-a173bb3a06c5?w=400" },
        { id: 9, nome: "Atum", preco: 48.90, descricao: "Molho, mussarela, atum e cebola", 
          imagem: "https://www.clonepizza.com.br/wp-content/uploads/atum-2.jpg" },
        { id: 10, nome: "Napolitana", preco: 46.90, descricao: "Molho, mussarela, tomate, parmesão e manjericão", 
          imagem: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=400" },
        { id: 11, nome: "Alho e Óleo", preco: 45.90, descricao: "Molho, mussarela, alho dourado e azeite", 
          imagem: "https://images.unsplash.com/photo-1600628421055-4d30de868b8f?w=400" },
        { id: 12, nome: "Mexicana", preco: 50.90, descricao: "Molho, mussarela, carne moída, pimenta e nachos", 
          imagem: "https://images.unsplash.com/photo-1605591099585-087b3d54cd45?w=400" },
        { id: 13, nome: "Frango com Bacon", preco: 49.90, descricao: "Molho, mussarela, frango, bacon e catupiry", 
          imagem: "https://images.unsplash.com/photo-1506354666786-959d6d497f1a?w=400" },
        { id: 14, nome: "Palmito", preco: 47.90, descricao: "Molho, mussarela, palmito e ervilhas", 
          imagem: "https://images.unsplash.com/photo-1593504049359-74330189a345?w=400" },
        { id: 15, nome: "Camarão", preco: 59.90, descricao: "Molho, mussarela, camarão e catupiry", 
          imagem: "https://th.bing.com/th/id/OIP.QHp7KsW3BNCUojsqIcjs7QHaE8?rs=1&pid=ImgDetMain" },
        { id: 16, nome: "Lombo", preco: 48.90, descricao: "Molho, mussarela, lombo e cebola", 
          imagem: "https://images.unsplash.com/photo-1541745537411-b8046dc6d66c?w=400" },
        { id: 17, nome: "Strogonoff", preco: 51.90, descricao: "Molho, mussarela, strogonoff de frango e batata palha", 
          imagem: "https://pizzaparma.com.br/image/cache/catalog/produtos/strogonoff-1200x1200.png" },
        { id: 18, nome: "Califórnia", preco: 48.90, descricao: "Molho, mussarela, presunto, pêssego e figo", 
          imagem: "https://images.unsplash.com/photo-1576458088443-04a19bb13da6?w=400" },
        { id: 19, nome: "Supreme", preco: 54.90, descricao: "Molho, mussarela, pepperoni, pimentão, cebola e azeitona", 
          imagem: "https://images.unsplash.com/photo-1590947132387-155cc02f3212?w=400" },
        { id: 20, nome: "Toscana", preco: 49.90, descricao: "Molho, mussarela, calabresa, bacon e ovo", 
          imagem: "https://images.unsplash.com/photo-1588315029754-2dd089d39a1a?w=400" }
    ],
    doces: [
        { id: 21, nome: "Chocolate", preco: 45.90, descricao: "Chocolate ao leite e chocolate granulado", 
          imagem: "https://clube-static.clubegazetadopovo.com.br/portal/wp-content/uploads/2020/04/materiasrepositorio-1584973875-1.jpeg" },
        { id: 22, nome: "Banana com Canela", preco: 44.90, descricao: "Banana, canela e leite condensado", 
          imagem: "https://th.bing.com/th/id/OIP.UUB3x2M0608NLZzhYOkkgwHaEK?rs=1&pid=ImgDetMain" },
        { id: 23, nome: "Romeu e Julieta", preco: 46.90, descricao: "Goiabada e mussarela", 
          imagem: "https://i0.wp.com/anamariabraga.globo.com/wp-content/uploads/2022/05/pizza-romeu-e-julieta.jpg?fit=1200%2C675&ssl=1" },
        { id: 24, nome: "Prestígio", preco: 47.90, descricao: "Chocolate, coco ralado e leite condensado", 
          imagem: "https://th.bing.com/th/id/R.57f43a020f8ef381d1e2c4d99f6b2786?rik=eWzWZUrYEyt0OA&pid=ImgRaw&r=0&sres=1&sresct=1" },
        { id: 25, nome: "Nutella", preco: 49.90, descricao: "Nutella e morango", 
          imagem: "https://th.bing.com/th/id/OIP.Fx4sH0H0dOhNjKm9gQyuAQHaE8?rs=1&pid=ImgDetMain" },
        { id: 26, nome: "Doce de Leite", preco: 45.90, descricao: "Doce de leite e granulado", 
          imagem: "https://th.bing.com/th/id/OIP.cR6TZqtZi4gaTiGus8nuCQHaE5?rs=1&pid=ImgDetMain" },
        { id: 27, nome: "M&M", preco: 48.90, descricao: "Chocolate e M&M", 
          imagem: "https://th.bing.com/th/id/OIP.5aBASQztJKEKD1JMUjCzVwHaEf?rs=1&pid=ImgDetMain" },
        { id: 28, nome: "Brigadeiro", preco: 46.90, descricao: "Brigadeiro e granulado", 
          imagem: "https://th.bing.com/th/id/OIP.fVdM6l3fWqEi7zMHeM4c9wHaC9?rs=1&pid=ImgDetMain" },
        { id: 29, nome: "Sensação", preco: 47.90, descricao: "Chocolate e morango", 
          imagem: "https://th.bing.com/th/id/R.f93a649110e25d7db9b5da9644c073e4?rik=q8IIzERduksXrA&pid=ImgRaw&r=0" },
        { id: 30, nome: "Churros", preco: 46.90, descricao: "Doce de leite e canela", 
          imagem: "https://th.bing.com/th/id/R.34eabc95a40bdd9791c09b0359321622?rik=LGjqdvfCvgzDqw&pid=ImgRaw&r=0" }
    ],
    bebidas: [
        // Refrigerantes
        { id: 31, nome: "Coca-Cola Lata", preco: 6.90, descricao: "350ml", 
          imagem: "https://cdn.dooca.store/418/products/coca.jpg?v=1589835707&webp=0" },
        { id: 32, nome: "Guaraná Antarctica Lata", preco: 6.90, descricao: "350ml", 
          imagem: "https://th.bing.com/th/id/OIP.43vq8CRwqM-iwi7S0aR3RQHaHa?rs=1&pid=ImgDetMain" },
        { id: 33, nome: "Sprite Lata", preco: 6.90, descricao: "350ml", 
          imagem: "https://i5.walmartimages.com/asr/daa7d872-178d-4cfb-a90f-62bb7ffc58ff.9153c6dc42b8d21a586ae13261e2db9d.jpeg?odnWidth=612&odnHeight=612&odnBg=ffffff" },
        { id: 34, nome: "Fanta Laranja Lata", preco: 6.90, descricao: "350ml", 
          imagem: "https://th.bing.com/th/id/R.ea7725d8f660b15a6ec56f3bf0af2b2b?rik=p8M6e%2baFgXFknw&pid=ImgRaw&r=0" },
        { id: 35, nome: "Coca-Cola Zero Lata", preco: 6.90, descricao: "350ml", 
          imagem: "https://du3hj28fogfli.cloudfront.net/Custom/Content/Products/69/26/69267_coca-cola-zero-lata-com-350ml-p44882_z1_638066159856346376.png" },
        
        // Sucos
        { id: 36, nome: "Suco de Laranja", preco: 9.90, descricao: "500ml - Natural", 
          imagem: "https://th.bing.com/th/id/OIP.lFAwFninWyzKA7-uL77oAQAAAA?rs=1&pid=ImgDetMain" },
        { id: 37, nome: "Suco de Limão", preco: 9.90, descricao: "500ml - Natural", 
          imagem: "https://farmadelivery.vtexassets.com/arquivos/ids/214936/28032707-suco-del-valle-fresh-lim-o-200ml.jpg?v=637996450400870000" },
        { id: 38, nome: "Suco de Maracujá", preco: 9.90, descricao: "500ml - Polpa", 
          imagem: "https://cdn.awsli.com.br/800x800/1838/1838895/produto/197452012/del-vale---laranja-290ml-(2)-656467998b.jpg" },
        { id: 39, nome: "Suco de Abacaxi", preco: 9.90, descricao: "500ml - Polpa", 
          imagem: "https://mercantilnovaera.vteximg.com.br/arquivos/ids/174122-1000-1000/Suco-Abacaxi-Garrafa-300ml.jpg?v=637448746437630000" },
        { id: 40, nome: "Suco de Morango", preco: 9.90, descricao: "500ml - Polpa", 
          imagem: "https://th.bing.com/th/id/OIP.I3Pnc2ql1zK99blNuIuw0wHaHa?rs=1&pid=ImgDetMain" }
    ]
};

let carrinho = [];

// Adicionar os tamanhos e multiplicadores de preço
const tamanhosPizza = {
    pequena: { nome: "Pequena (4 pedaços)", multiplicador: 1 },
    media: { nome: "Média (6 pedaços)", multiplicador: 1.3 },
    grande: { nome: "Grande (8 pedaços)", multiplicador: 1.6 },
    familia: { nome: "Família (12 pedaços)", multiplicador: 2 }
};

function filtrarCategoria(categoria) {
    const buttons = document.querySelectorAll('.categorias button');
    buttons.forEach(btn => btn.classList.remove('ativo'));
    event.target.classList.add('ativo');
    
    // Esconde todos os containers
    document.getElementById('pizzas-container').style.display = 'none';
    document.getElementById('sobre-container').style.display = 'none';
    
    if (categoria === 'sobre') {
        document.getElementById('sobre-container').style.display = 'block';
    } else {
        document.getElementById('pizzas-container').style.display = 'grid';
        mostrarPizzas(categoria);
    }
}

function mostrarPizzas(categoria) {
    const container = document.getElementById('pizzas-container');
    container.innerHTML = '';
    
    pizzas[categoria].forEach(pizza => {
        if (categoria === 'bebidas') {
            // Se for bebida, mantém o layout original
            container.innerHTML += `
                <div class="pizza-card">
                    <img src="${pizza.imagem}" alt="${pizza.nome}">
                    <h3>${pizza.nome}</h3>
                    <p>${pizza.descricao}</p>
                    <p class="preco">R$ ${pizza.preco.toFixed(2)}</p>
                    <button onclick="adicionarAoCarrinho(${pizza.id}, '${categoria}')">
                        Adicionar ao Carrinho
                    </button>
                </div>
            `;
        } else {
            // Se for pizza, mostra opções de tamanho
            container.innerHTML += `
                <div class="pizza-card">
                    <img src="${pizza.imagem}" alt="${pizza.nome}">
                    <h3>${pizza.nome}</h3>
                    <p>${pizza.descricao}</p>
                    <div class="tamanhos-container">
                        <button class="tamanho-toggle" onclick="toggleTamanhos(${pizza.id})">
                            <span>Escolher Tamanho</span>
                            <i class="fas fa-chevron-down"></i>
                        </button>
                        <div class="tamanhos-opcoes" id="tamanhos-${pizza.id}">
                            ${Object.entries(tamanhosPizza).map(([key, value]) => `
                                <div class="tamanho-opcao">
                                    <button onclick="selecionarTamanho(${pizza.id}, '${key}', ${pizza.preco * value.multiplicador})">
                                        ${value.nome} - R$ ${(pizza.preco * value.multiplicador).toFixed(2)}
                                    </button>
                                </div>
                            `).join('')}
                        </div>
                        <button id="btn-adicionar-${pizza.id}" 
                                class="btn-adicionar" 
                                style="display: none;"
                                onclick="adicionarAoCarrinhoComTamanho(${pizza.id}, '${categoria}')">
                            Adicionar ao Carrinho
                        </button>
                    </div>
                </div>
            `;
        }
    });
}

// Função para mostrar/esconder opções de tamanho
function toggleTamanhos(pizzaId) {
    const tamanhosDiv = document.getElementById(`tamanhos-${pizzaId}`);
    tamanhosDiv.classList.toggle('mostrar');
}

// Variável para armazenar o tamanho selecionado
let tamanhoSelecionado = null;

function selecionarTamanho(pizzaId, tamanho, preco) {
    tamanhoSelecionado = {
        tamanho: tamanho,
        preco: preco
    };
    
    // Atualiza visual dos botões de tamanho
    const opcoes = document.querySelectorAll(`#tamanhos-${pizzaId} button`);
    opcoes.forEach(btn => btn.classList.remove('selecionado'));
    event.target.classList.add('selecionado');
    
    // Mostra o botão de adicionar ao carrinho
    const btnAdicionar = document.getElementById(`btn-adicionar-${pizzaId}`);
    btnAdicionar.style.display = 'block';
}

// Modificar a função de adicionar ao carrinho
function adicionarAoCarrinhoComTamanho(id, categoria) {
    const pizza = pizzas[categoria].find(p => p.id === id);
    
    const itemCarrinho = {
        ...pizza,
        tamanho: tamanhosPizza[tamanhoSelecionado.tamanho].nome,
        precoOriginal: pizza.preco,
        preco: tamanhoSelecionado.preco
    };
    
    carrinho.push(itemCarrinho);
    atualizarCarrinho();
    
    // Fecha o menu de tamanhos após a seleção
    const tamanhosDiv = document.getElementById(`tamanhos-${id}`);
    tamanhosDiv.classList.remove('mostrar');
    
    // Reseta o tamanho selecionado
    tamanhoSelecionado = null;
    
    // Esconde o botão de adicionar
    document.getElementById(`btn-adicionar-${id}`).style.display = 'none';
}

function adicionarAoCarrinho(id, categoria) {
    const pizza = pizzas[categoria].find(p => p.id === id);
    carrinho.push(pizza);
    atualizarCarrinho();
}

function atualizarCarrinho() {
    const carrinhoElement = document.getElementById('itens-carrinho');
    const totalElement = document.getElementById('total-valor');
    
    carrinhoElement.innerHTML = '';
    let total = 0;
    
    carrinho.forEach((item, index) => {
        total += item.preco;
        carrinhoElement.innerHTML += `
            <div class="item-carrinho">
                <div class="item-info">
                    <span>${item.nome}</span>
                    ${item.tamanho ? `<span class="tamanho-info">${item.tamanho}</span>` : ''}
                </div>
                <span>R$ ${item.preco.toFixed(2)}</span>
                <button onclick="removerDoCarrinho(${index})">Remover</button>
            </div>
        `;
    });
    
    totalElement.textContent = total.toFixed(2);
}

function removerDoCarrinho(index) {
    carrinho.splice(index, 1);
    atualizarCarrinho();
}

function finalizarPedido() {
    if (carrinho.length === 0) {
        alert('Seu carrinho está vazio!');
        return;
    }
    alert('Pedido finalizado com sucesso! Total: R$ ' + 
          document.getElementById('total-valor').textContent);
    carrinho = [];
    atualizarCarrinho();
}

function adicionarAvaliacao(event) {
    event.preventDefault();
    
    const form = event.target;
    const rating = form.querySelector('input[name="rating"]:checked')?.value;
    const comentario = form.querySelector('textarea').value;
    const nome = form.querySelector('input[type="text"]').value;
    
    if (!rating) {
        alert('Por favor, selecione uma classificação em estrelas!');
        return;
    }
    
    // Aqui você pode adicionar o código para enviar a avaliação para um servidor
    // Por enquanto, vamos apenas mostrar um alerta
    alert('Obrigado pela sua avaliação!');
    
    // Limpa o formulário
    form.reset();
}

function mostrarFormularioPedido() {
    if (carrinho.length === 0) {
        alert('Seu carrinho está vazio!');
        return;
    }
    document.getElementById('modal-pedido').style.display = 'block';
}

function fecharModal() {
    document.getElementById('modal-pedido').style.display = 'none';
}

function toggleCartaoFields() {
    const formaPagamento = document.querySelector('select[name="formaPagamento"]').value;
    const camposCartao = document.getElementById('campos-cartao');
    const campoTroco = document.getElementById('campo-troco');
    
    camposCartao.style.display = formaPagamento === 'cartao' ? 'block' : 'none';
    campoTroco.style.display = formaPagamento === 'dinheiro' ? 'block' : 'none';
}

function finalizarPedido(event) {
    event.preventDefault();
    
    const formData = new FormData(event.target);
    const pedido = {
        cliente: {
            nome: formData.get('nome'),
            email: formData.get('email'),
            celular: formData.get('celular'),
            cpf: formData.get('cpf')
        },
        pagamento: {
            forma: formData.get('formaPagamento'),
            cartao: formData.get('formaPagamento') === 'cartao' ? {
                numero: formData.get('numeroCartao'),
                validade: formData.get('validade'),
                cvv: formData.get('cvv'),
                titular: formData.get('titular')
            } : null,
            troco: formData.get('formaPagamento') === 'dinheiro' ? formData.get('troco') : null
        },
        itens: carrinho,
        total: carrinho.reduce((total, item) => total + item.preco, 0)
    };
    
    // Gera o comprovante em formato texto
    const comprovante = gerarComprovante(pedido);
    
    // Cria um elemento de link temporário para download
    const element = document.createElement('a');
    const file = new Blob([comprovante], {type: 'text/plain'});
    element.href = URL.createObjectURL(file);
    element.download = `comprovante_pedido_${new Date().getTime()}.txt`;
    
    // Adiciona à página, clica e remove
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
    
    alert('Pedido realizado com sucesso! O comprovante foi baixado automaticamente.');
    
    // Limpa o carrinho e fecha o modal
    carrinho = [];
    atualizarCarrinho();
    fecharModal();
}

function gerarComprovante(pedido) {
    const data = new Date().toLocaleString();
    let texto = `
=================================================
            PIZZARIA BELLA NAPOLI
=================================================
Data: ${data}

DADOS DO CLIENTE
-------------------------------------------------
Nome: ${pedido.cliente.nome}
E-mail: ${pedido.cliente.email}
Celular: ${pedido.cliente.celular}
CPF: ${pedido.cliente.cpf}

ITENS DO PEDIDO
-------------------------------------------------`;

    pedido.itens.forEach(item => {
        texto += `
${item.nome}${item.tamanho ? ` (${item.tamanho})` : ''}
Valor: R$ ${item.preco.toFixed(2)}`;
    });

    texto += `
-------------------------------------------------
TOTAL: R$ ${pedido.total.toFixed(2)}

FORMA DE PAGAMENTO
-------------------------------------------------
${pedido.pagamento.forma.toUpperCase()}`;

    if (pedido.pagamento.cartao) {
        texto += `
Cartão: **** **** **** ${pedido.pagamento.cartao.numero.slice(-4)}
Titular: ${pedido.pagamento.cartao.titular}`;
    }

    if (pedido.pagamento.troco) {
        texto += `
Troco para: R$ ${pedido.pagamento.troco}`;
    }

    texto += `

=================================================
          Agradecemos a preferência!
    Seu pedido chegará em até 45 minutos.
=================================================`;

    return texto;
}

// Fechar modal quando clicar fora dele
window.onclick = function(event) {
    const modal = document.getElementById('modal-pedido');
    if (event.target === modal) {
        fecharModal();
    }
}

// Inicializar mostrando as pizzas salgadas
document.getElementById('sobre-container').style.display = 'none';
mostrarPizzas('salgadas'); 