document.addEventListener('DOMContentLoaded', () => {
    
    // VARIÁVEIS PARA A PLANILHA
    let menuData = []; // Agora começa vazio
    const urlPlanilha = "https://docs.google.com/spreadsheets/d/e/2PACX-1vTBavkeXFBzllrFeHj_OjAVNN_Va9e7BO7tzShnyddV4sQlMVGgk4qyFceYIy2wbb3q1sJBOZ2vCNyW/pub?output=csv";

    // --- FUNÇÃO PARA CARREGAR DADOS DA PLANILHA (MÁGICA DO PLANO PREMIUM) ---
    async function carregarDadosDaPlanilha() {
        try {
            const resposta = await fetch(urlPlanilha);
            const dataText = await resposta.text();
            
            // Função inteligente para ler CSV mesmo com vírgulas dentro das frases
            const parseCSV = (text) => {
                const lines = text.split('\n');
                return lines.map(line => {
                    // Essa regra (Regex) separa por vírgula mas ignora as vírgulas dentro de aspas
                    const result = line.match(/(".*?"|[^",\s]+)(?=\s*,|\s*$)/g);
                    return result ? result.map(val => val.replace(/"/g, '')) : [];
                });
            };

            const linhas = parseCSV(dataText);
            
            menuData = linhas.slice(1).map(linha => {
                if (linha.length < 6) return null;
                return {
                    nome: linha[0]?.trim(),
                    desc: linha[1]?.trim(),
                    preco: linha[2]?.trim(),
                    cat: linha[3]?.trim(),
                    emoji: linha[4]?.trim(),
                    img: linha[5]?.trim()
                };
            }).filter(item => item !== null && item.nome !== "");

            console.log("Produtos carregados:", menuData.length);
            renderMenu(); 
        } catch (error) {
            console.error("Erro ao carregar cardápio:", error);
        }
    }

    // Seletores (Mantidos iguais ao seu original)
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

    let cart = [];
    let showAll = false;

    // --- RENDER MENU (Atualizada para usar os dados da planilha) ---
    function renderMenu() {
        if(!menuContainer) return;
        menuContainer.innerHTML = '';

        // Se o menu ainda estiver vazio (carregando), mostra um aviso
        if (menuData.length === 0) {
            menuContainer.innerHTML = '<p style="text-align:center; padding:20px;">Carregando cardápio...</p>';
            return;
        }

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
                <img src="${item.img}" class="item-img-card" onclick="openProductModal('${item.nome}')" onerror="this.src='https://via.placeholder.com/300x200?text=Imagem+Indisponível'">
                <div class="item-info">
                    <h3>${item.nome}</h3>
                    <p>${item.desc}</p>
                </div>
                <div class="item-footer">
                    <span class="preco">R$ ${parseFloat(item.preco).toFixed(2)}</span>
                    <button class="add-btn" onclick="addToCart('${item.nome}')">Adicionar</button>
                </div>
            `;
            menuContainer.appendChild(card);
        });
    }

    // Chamar a função de carregamento assim que o script iniciar
    carregarDadosDaPlanilha();

    // --- FUNÇÕES DE CARRINHO E MODAL (Tudo mantido como o seu original) ---
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
        document.getElementById('modal-preco').textContent = `R$ ${parseFloat(item.preco).toFixed(2)}`;
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

            const url = "https://api.whatsapp.com/send?phone=556992008985&text=" + encodeURIComponent(msg);
            window.open(url, '_blank');
        };
    }

    // --- EVENTOS E FILTROS (Mantidos) ---
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

});
