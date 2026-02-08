document.addEventListener('DOMContentLoaded', () => {
    
    // Lista de 50 itens: Comida natural, caseira e preços acessíveis
    const menuData = [
        // MARMITAS E PRATOS FEITOS
        { nome: "Marmitex Comercial P", desc: "Arroz, feijão, macarrão, farofa e frango grelhado.", preco: "15.00", cat: "principal", emoji: "🍱", img: "https://media.istockphoto.com/id/1988706910/pt/foto/chicken-lunch-box-with-salad-and-fries.jpg?s=1024x1024&w=is&k=20&c=8aVY2MnrMnQcvcpYcqunqCKnZSJC1k4PTc061ktLF0A=" },
        { nome: "marmitex G", desc: "Arroz, feijão, macarrão, farofa e carne de panela.", preco: "20.00", cat: "principal", emoji: "🍱", img: "img/carne_de_panela.png" },
        { nome: "bife acebolado", desc: "Prato feito com bife, arroz, feijão, fritas e salada.", preco: "22.00", cat: "principal", emoji: "🥩", img: "img/bife_acebolado.png" },
        { nome: "Frango a Passarinho", desc: "Porção de frango frito com alho e óleo.", preco: "30.00", cat: "principal", emoji: "🍗", img: "https://images.pexels.com/photos/60616/fried-chicken-chicken-fried-crunchy-60616.jpeg?auto=compress&cs=tinysrgb&w=500" },
        { nome: "omelete completo", desc: "3 ovos, queijo, presunto, tomate e cebola.", preco: "18.00", cat: "principal", emoji: "🍳", img: "img/omelete_completo.png" },
        { nome: "feijoada", desc: "Acompanha arroz, couve e farofa.", preco: "25.00", cat: "principal", emoji: "🍲", img: "img/feijoada.png" },
        { nome: "parmegiana", desc: "Frango empanado, molho de tomate e mussarela + arroz.", preco: "28.00", cat: "principal", emoji: "🥘", img: "img/parmegiana_de_frango.png" },
        { nome: "strogonoff de carne", desc: "Acompanha arroz branco e batata palha sequinha.", preco: "24.00", cat: "principal", emoji: "🍲", img: "img/strogonoff_de_carne.png" },
        { nome: "filé de tilápia", desc: "Peixe leve, arroz de brócolis e purê de batata.", preco: "32.00", cat: "principal", emoji: "🐟", img: "img/file_de_tilapia.png" },
        { nome: "calabresa acebolada", desc: "Porção de calabresa com cebola e pão francês.", preco: "20.00", cat: "principal", emoji: "🌭", img: "img/calabresa.png" },
        { nome: "macarrão bolonhesa", desc: "Espaguete ao molho de carne moída e queijo ralado.", preco: "18.00", cat: "principal", emoji: "🍝", img: "img/macarrao.png" },
        { nome: "lasanha de presunto e queijo", desc: "Massa artesanal servida em porção individual.", preco: "22.00", cat: "principal", emoji: "🥧", img: "img/lasanha.png" },
        { nome: "picadinho de carne", desc: "Carne em cubos com legumes, arroz e feijão.", preco: "21.00", cat: "principal", emoji: "🍛", img: "img/carne_em_cubos.png" },
        { nome: "Costelinha Suína", desc: "Costela frita com mandioca cozida e arroz.", preco: "30.00", cat: "principal", emoji: "🍖", img: "https://images.pexels.com/photos/410648/pexels-photo-410648.jpeg?auto=compress&cs=tinysrgb&w=500" },
        { nome: "dobradinha com feijão branco", desc: "Prato tradicional bem temperado.", preco: "24.00", cat: "principal", emoji: "🥣", img: "img/dobradinha.png" },

        // PIZZAS
        { nome: "Pizza Calabresa", desc: "Mussarela, calabresa e cebola.", preco: "35.00", cat: "principal", emoji: "🍕", img: "https://images.pexels.com/photos/1566837/pexels-photo-1566837.jpeg?auto=compress&cs=tinysrgb&w=500" },
        { nome: "Pizza Mussarela", desc: "Mussarela, molho de tomate e orégano.", preco: "32.00", cat: "principal", emoji: "🍕", img: "https://images.pexels.com/photos/2147491/pexels-photo-2147491.jpeg?auto=compress&cs=tinysrgb&w=500" },
        { nome: "Pizza Portuguesa", desc: "Presunto, ovos, cebola, ervilha e queijo.", preco: "40.00", cat: "principal", emoji: "🍕", img: "https://images.pexels.com/photos/825661/pexels-photo-825661.jpeg?auto=compress&cs=tinysrgb&w=500" },
        { nome: "Pizza Frango c/ Catupiry", desc: "Frango desfiado temperado e catupiry.", preco: "38.00", cat: "principal", emoji: "🍕", img: "https://images.pexels.com/photos/1146760/pexels-photo-1146760.jpeg?auto=compress&cs=tinysrgb&w=500" },
        { nome: "Pizza Marguerita", desc: "Mussarela, tomate fatiado e manjericão fresco.", preco: "36.00", cat: "principal", emoji: "🍕", img: "https://images.pexels.com/photos/2233348/pexels-photo-2233348.jpeg?auto=compress&cs=tinysrgb&w=500" },
        { nome: "Pizza Quatro Queijos", desc: "Mussarela, catupiry, provolone e parmesão.", preco: "42.00", cat: "principal", emoji: "🍕", img: "https://images.pexels.com/photos/3915855/pexels-photo-3915855.jpeg?auto=compress&cs=tinysrgb&w=500" },
        { nome: "Pizza Napolitana", desc: "Mussarela, tomate e parmesão ralado.", preco: "35.00", cat: "principal", emoji: "🍕", img: "https://images.pexels.com/photos/1566837/pexels-photo-1566837.jpeg?auto=compress&cs=tinysrgb&w=500" },
        { nome: "Pizza de Bacon", desc: "Mussarela e fatias generosas de bacon.", preco: "38.00", cat: "principal", emoji: "🍕", img: "https://images.pexels.com/photos/1166120/pexels-photo-1166120.jpeg?auto=compress&cs=tinysrgb&w=500" },
        { nome: "Pizza Vegetariana", desc: "Milho, ervilha, palmito e tomate.", preco: "38.00", cat: "principal", emoji: "🍕", img: "https://images.pexels.com/photos/315755/pexels-photo-315755.jpeg?auto=compress&cs=tinysrgb&w=500" },
        { nome: "Pizza de Atum", desc: "Atum sólido, cebola e mussarela.", preco: "40.00", cat: "principal", emoji: "🍕", img: "https://images.pexels.com/photos/803290/pexels-photo-803290.jpeg?auto=compress&cs=tinysrgb&w=500" },

        // LANCHES E SALGADOS
        { nome: "Hambúrguer de Carne", desc: "Pão, carne artesanal e queijo.", preco: "12.00", cat: "principal", emoji: "🍔", img: "https://images.pexels.com/photos/1639562/pexels-photo-1639562.jpeg?auto=compress&cs=tinysrgb&w=500" },
        { nome: "X-Salada", desc: "Pão, carne, queijo, alface e tomate.", preco: "15.00", cat: "principal", emoji: "🍔", img: "https://images.pexels.com/photos/1199957/pexels-photo-1199957.jpeg?auto=compress&cs=tinysrgb&w=500" },
        { nome: "X-Bacon", desc: "Pão, carne, muito bacon e queijo.", preco: "18.00", cat: "principal", emoji: "🍔", img: "https://images.pexels.com/photos/1251198/pexels-photo-1251198.jpeg?auto=compress&cs=tinysrgb&w=500" },
        { nome: "Coxinha de Frango", desc: "Salgado clássico frito na hora.", preco: "6.00", cat: "entrada", emoji: "🍗", img: "https://images.pexels.com/photos/1352270/pexels-photo-1352270.jpeg?auto=compress&cs=tinysrgb&w=500" },
        { nome: "enroladinho de presunto", desc: "Massa fofinha recheada com presunto e queijo.", preco: "6.00", cat: "entrada", emoji: "🥐", img: "img/enroladinho.png" },
        { nome: "quibe recheado", desc: "Quibe frito recheado com carne moída.", preco: "6.50", cat: "entrada", emoji: "🍘", img: "img/quibe.png" },
        { nome: "pastel de carne", desc: "Pastel de feira frito na hora.", preco: "8.00", cat: "entrada", emoji: "🥟", img: "img/pastel_de_carne.png" },
        { nome: "pastel de queijo", desc: "Pastel de feira crocante.", preco: "8.00", cat: "entrada", emoji: "🥟", img: "img/pastel_de_queijo.png" },
        { nome: "esfiha de carne", desc: "Esfiha aberta ou fechada temperada.", preco: "5.50", cat: "entrada", emoji: "🥧", img: "img/esfiha.png" },
        { nome: "pão de queijo", desc: "Unidade grande, sempre quentinho.", preco: "4.00", cat: "entrada", emoji: "🥯", img: "img/pao_de_queijo.png" },

        // SOBREMESAS
        { nome: "pudim de leite condensado", desc: "Fatia individual do melhor pudim da casa.", preco: "8.00", cat: "sobremesa", emoji: "🍮", img: "img/pudim.png" },
        { nome: "Mousse de Chocolate", desc: "Cremoso e refrescante.", preco: "7.00", cat: "sobremesa", emoji: "🍧", img: "https://images.pexels.com/photos/45202/brownie-dessert-cake-sweet-45202.jpeg?auto=compress&cs=tinysrgb&w=500" },
        { nome: "Bolo de Pote Ninho", desc: "Bolo fofinho de leite ninho.", preco: "10.00", cat: "sobremesa", emoji: "🍰", img: "https://images.pexels.com/photos/1126359/pexels-photo-1126359.jpeg?auto=compress&cs=tinysrgb&w=500" },
        { nome: "Salada de Frutas", desc: "Mix de frutas da estação geladinho.", preco: "10.00", cat: "sobremesa", emoji: "🍉", img: "img/salada_de_frutas.png" },
        { nome: "brigadeiro", desc: "Unidade grande de brigadeiro gourmet.", preco: "4.50", cat: "sobremesa", emoji: "🍩", img: "img/brigadeiro.png" },
        { nome: "torta holandesa", desc: "Fatia de torta com creme e chocolate.", preco: "12.00", cat: "sobremesa", emoji: "🍰", img: "img/torta_holandesa.png" },
        { nome: "arroz doce", desc: "Tradicional com canela polvilhada.", preco: "7.00", cat: "sobremesa", emoji: "🍚", img: "img/arroz_doce.png" },
        { nome: "gelatina colorida", desc: "Copo individual, refrescante.", preco: "5.00", cat: "sobremesa", emoji: "🍧", img: "img/gelatina.png" },

        // BEBIDAS
        { nome: "água mineral", desc: "Com ou sem gás.", preco: "4.00", cat: "bebida", emoji: "💧", img: "img/agua.png" },
        { nome: "refrigerante lata", desc: "Coca-cola, Guaraná, Fanta ou Soda.", preco: "6.00", cat: "bebida", emoji: "🥤", img: "img/lata.png" },
        { nome: "suco de laranja natural", desc: "Copo de 500ml feito na hora.", preco: "10.00", cat: "bebida", emoji: "🍹", img: "img/laranja.png" },
        { nome: "suco de acerola", desc: "Polpa natural batida na hora.", preco: "8.00", cat: "bebida", emoji: "🥤", img: "img/acerola.png" },
        { nome: "cerveja lata", desc: "Skol ou Brahma geladinha.", preco: "7.00", cat: "bebida", emoji: "🍺", img: "img/cervejas.png" },
        { nome: "Café Expresso", desc: "Para finalizar a refeição.", preco: "5.00", cat: "bebida", emoji: "☕", img: "https://images.pexels.com/photos/312418/pexels-photo-312418.jpeg?auto=compress&cs=tinysrgb&w=500" },
        { nome: "chá gelado", desc: "Leão Fuze Limão ou Pêssego.", preco: "7.00", cat: "bebida", emoji: "🍹", img: "img/cha.png" }
    ];

    let cart = [];
    let showAll = false;

    const menuContainer = document.getElementById('menu-container');
    const filterBtns = document.querySelectorAll('.filter-btn');
    const searchInput = document.getElementById('search-input');
    const btnLoadMore = document.getElementById('btn-load-more');
    const cartIcon = document.querySelector('.cart-icon');
    const cartCount = document.querySelector('.cart-count');
    const cartModal = document.getElementById('cart-modal');
    const cartItemsList = document.getElementById('cart-items');
    const cartTotalDisplay = document.getElementById('cart-total');
    const btnWhatsapp = document.getElementById('btn-whatsapp-checkout');
    const btnLimpar = document.getElementById('btn-finalizar-limpar');

    function renderMenu() {
        if(!menuContainer) return;
        menuContainer.innerHTML = '';
        const currentFilter = document.querySelector('.filter-btn.active').dataset.filter;
        const searchTerm = searchInput.value.toLowerCase();

        let filteredItems = menuData.filter(item => {
            const matchesFilter = (currentFilter === 'todos' || item.cat === currentFilter);
            const matchesSearch = item.nome.toLowerCase().includes(searchTerm) || 
                                 item.desc.toLowerCase().includes(searchTerm);
            return matchesFilter && matchesSearch;
        });

        if (!showAll && !searchTerm && currentFilter === 'todos') {
            filteredItems = filteredItems.slice(0, 15);
            if(btnLoadMore) btnLoadMore.style.display = 'block';
        } else {
            if(btnLoadMore) btnLoadMore.style.display = 'none';
        }

        filteredItems.forEach(item => {
            const card = document.createElement('div');
            card.className = 'menu-item';
            card.innerHTML = `
                <img src="${item.img}" class="item-img-card" onclick="openProductModal('${item.nome}')">
                <div class="item-info">
                    <h3>${item.nome}</h3>
                    <p>${item.desc}</p>
                </div>
                <div class="item-footer">
                    <span class="preco">R$ ${item.preco}</span>
                    <button class="add-btn" onclick="addToCart('${item.nome}')">Adicionar</button>
                </div>
            `;
            menuContainer.appendChild(card);
        });
    }

    window.addToCart = (nome) => {
        const item = menuData.find(i => i.nome === nome);
        const itemInCart = cart.find(i => i.nome === nome);
        if (itemInCart) { itemInCart.quantidade++; } 
        else { cart.push({ ...item, quantidade: 1 }); }
        updateCart();
    };

    window.removeFromCart = (index) => {
        if (cart[index].quantidade > 1) { cart[index].quantidade--; } 
        else { cart.splice(index, 1); }
        updateCart();
    };

    function updateCart() {
        cartCount.textContent = cart.reduce((acc, item) => acc + item.quantidade, 0);
        cartItemsList.innerHTML = '';
        let total = 0;
        cart.forEach((item, index) => {
            total += parseFloat(item.preco) * item.quantidade;
            const li = document.createElement('li');
            li.innerHTML = `
                <div style="display:flex; flex-direction:column;">
                    <span style="font-weight:bold;">${item.quantidade}x ${item.emoji} ${item.nome}</span>
                    <span style="font-size:0.85rem; color:#666;">R$ ${(item.preco * item.quantidade).toFixed(2)}</span>
                </div>
                <button onclick="removeFromCart(${index})" style="background:none; border:none; color:#ff4444; cursor:pointer;">
                    <i class="fas fa-minus-circle"></i>
                </button>
            `;
            cartItemsList.appendChild(li);
        });
        cartTotalDisplay.textContent = total.toFixed(2);
    }

    window.openProductModal = (nome) => {
        const item = menuData.find(i => i.nome === nome);
        document.getElementById('modal-img').src = item.img;
        document.getElementById('modal-nome').textContent = item.nome;
        document.getElementById('modal-desc').textContent = item.desc;
        document.getElementById('modal-preco').textContent = `R$ ${item.preco}`;
        document.getElementById('modal-add-btn').onclick = () => {
            addToCart(item.nome);
            document.getElementById('product-modal').style.display = 'none';
        };
        document.getElementById('product-modal').style.display = 'block';
    };

    if(btnWhatsapp) {
        btnWhatsapp.onclick = () => {
            const pagamento = document.getElementById('payment-method').value;
            if (cart.length === 0) { alert("Carrinho vazio!"); return; }
            if (pagamento === "Não informado") { alert("Selecione o pagamento!"); return; }

            let msg = "⭐ *NOVO PEDIDO* ⭐\n\n";
            cart.forEach(item => {
                msg += `✅ *${item.quantidade}x ${item.emoji} ${item.nome}*\n`;
                msg += `   └ _R$ ${(item.preco * item.quantidade).toFixed(2)}_\n\n`;
            });
            msg += `💰 *TOTAL: R$ ${cartTotalDisplay.textContent}*\n`;
            msg += `💳 *PAGAMENTO:* ${pagamento}`;
            window.open(`https://wa.me/556992008985?text=${encodeURIComponent(msg)}`, '_blank');
        };
    }

    // --- LÓGICA DE AJUDA ---
    const helpBtn = document.getElementById('open-help');
    const helpModal = document.getElementById('help-modal');
    const closeHelp = document.querySelector('.close-help');

    if(helpBtn) helpBtn.onclick = () => helpModal.style.display = 'block';
    if(closeHelp) closeHelp.onclick = () => helpModal.style.display = 'none';

    if(btnLimpar) btnLimpar.onclick = () => { cart = []; updateCart(); };
    if(cartIcon) cartIcon.onclick = () => cartModal.style.display = 'block';
    if(document.querySelector('.close-cart')) document.querySelector('.close-cart').onclick = () => cartModal.style.display = 'none';
    if(document.querySelector('.close-product')) document.querySelector('.close-product').onclick = () => document.getElementById('product-modal').style.display = 'none';

    window.onclick = (event) => {
        if (event.target == cartModal) cartModal.style.display = 'none';
        if (event.target == document.getElementById('product-modal')) document.getElementById('product-modal').style.display = 'none';
        if (event.target == helpModal) helpModal.style.display = 'none';
    };

    filterBtns.forEach(btn => {
        btn.onclick = () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            showAll = false;
            renderMenu();
        };
    });

    if(btnLoadMore) btnLoadMore.onclick = () => { showAll = true; renderMenu(); };
    if(searchInput) searchInput.oninput = () => { showAll = false; renderMenu(); };

    renderMenu();
});
