document.addEventListener('DOMContentLoaded', () => {
    
    const menuData = [
        // ENTRADAS (10)
        { nome: "Bruschetta Italiana", desc: "Pão tostado, tomates, manjericão e azeite extra virgem.", preco: "28.00", cat: "entrada", img: "https://images.pexels.com/photos/4963958/pexels-photo-4963958.jpeg?auto=compress&cs=tinysrgb&w=500" },
        { nome: "Bolinho de Bacalhau", desc: "6 unidades tradicionais, crocantes e bem recheadas.", preco: "35.00", cat: "entrada", img: "https://images.pexels.com/photos/3625372/pexels-photo-3625372.jpeg?auto=compress&cs=tinysrgb&w=500" },
        { nome: "Carpaccio de Carne", desc: "Fatias finas de filé, alcaparras, parmesão e molho de mostarda.", preco: "42.00", cat: "entrada", img: "https://images.pexels.com/photos/6252739/pexels-photo-6252739.jpeg?auto=compress&cs=tinysrgb&w=500" },
        { nome: "Batata Rústica", desc: "Temperada com alecrim, sal grosso e maionese de alho artesanal.", preco: "25.00", cat: "entrada", img: "https://images.pexels.com/photos/1583884/pexels-photo-1583884.jpeg?auto=compress&cs=tinysrgb&w=500" },
        { nome: "Cebola Empanada", desc: "Anéis de cebola gigantes empanados em farinha panko.", preco: "22.00", cat: "entrada", img: "https://images.pexels.com/photos/4393021/pexels-photo-4393021.jpeg?auto=compress&cs=tinysrgb&w=500" },
        { nome: "Tábua de Queijos", desc: "Seleção de queijos nobres acompanhada de mel e nozes.", preco: "55.00", cat: "entrada", img: "https://images.pexels.com/photos/4004460/pexels-photo-4004460.jpeg?auto=compress&cs=tinysrgb&w=500" },
        { nome: "Dadinho de Tapioca", desc: "Crocantes por fora e macios por dentro com geleia de pimenta.", preco: "30.00", cat: "entrada", img: "https://images.pexels.com/photos/10350280/pexels-photo-10350280.jpeg?auto=compress&cs=tinysrgb&w=500" },
        { nome: "Salada Caesar", desc: "Alface romana, croutons, frango grelhado e molho caesar original.", preco: "32.00", cat: "entrada", img: "https://images.pexels.com/photos/1213710/pexels-photo-1213710.jpeg?auto=compress&cs=tinysrgb&w=500" },
        { nome: "Ceviche Clássico", desc: "Peixe branco marinado no limão siciliano com cebola roxa.", preco: "48.00", cat: "entrada", img: "https://images.pexels.com/photos/2098085/pexels-photo-2098085.jpeg?auto=compress&cs=tinysrgb&w=500" },
        { nome: "Pastéis Mistos", desc: "Cesta com 6 pastéis variados e sequinhos.", preco: "26.00", cat: "entrada", img: "https://images.pexels.com/photos/12481161/pexels-photo-12481161.jpeg?auto=compress&cs=tinysrgb&w=500" },
        
        // PRATOS PRINCIPAIS (20)
        { nome: "Filé ao Molho Madeira", desc: "Medalhão de mignon, arroz branco e purê de batata cremoso.", preco: "75.00", cat: "principal", img: "https://images.pexels.com/photos/675951/pexels-photo-675951.jpeg?auto=compress&cs=tinysrgb&w=500" },
        { nome: "Salmão Grelhado", desc: "Filé de salmão com crosta de ervas e legumes salteados.", preco: "82.00", cat: "principal", img: "https://images.pexels.com/photos/262959/pexels-photo-262959.jpeg?auto=compress&cs=tinysrgb&w=500" },
        { nome: "Risoto de Cogumelos", desc: "Arroz arbóreo com mix de cogumelos frescos e azeite trufado.", preco: "58.00", cat: "principal", img: "https://images.pexels.com/photos/5638527/pexels-photo-5638527.jpeg?auto=compress&cs=tinysrgb&w=500" },
        { nome: "Picanha na Chapa", desc: "Corte nobre servido com arroz, feijão, farofa e vinagrete.", preco: "95.00", cat: "principal", img: "https://images.pexels.com/photos/618491/pexels-photo-618491.jpeg?auto=compress&cs=tinysrgb&w=500" },
        { nome: "Lasanha Bolonhesa", desc: "Massa artesanal intercalada com ragu de carne e molho bechamel.", preco: "45.00", cat: "principal", img: "https://images.pexels.com/photos/5949900/pexels-photo-5949900.jpeg?auto=compress&cs=tinysrgb&w=500" },
        { nome: "Nhoque de Batata", desc: "Massa de batata leve com molho cremoso de queijos selecionados.", preco: "42.00", cat: "principal", img: "https://images.pexels.com/photos/7613568/pexels-photo-7613568.jpeg?auto=compress&cs=tinysrgb&w=500" },
        { nome: "Frango à Parmegiana", desc: "Frango empanado, molho de tomate pelado e batatas fritas.", preco: "52.00", cat: "principal", img: "https://images.pexels.com/photos/10361458/pexels-photo-10361458.jpeg?auto=compress&cs=tinysrgb&w=500" },
        { nome: "Bacalhau à Lagareiro", desc: "Lombo de bacalhau, batatas murro, cebola e muito azeite.", preco: "88.00", cat: "principal", img: "https://images.pexels.com/photos/10534204/pexels-photo-10534204.jpeg?auto=compress&cs=tinysrgb&w=500" },
        { nome: "Hambúrguer Prime", desc: "Blend bovino 200g, cheddar, bacon e cebola caramelizada.", preco: "38.00", cat: "principal", img: "https://images.pexels.com/photos/1639562/pexels-photo-1639562.jpeg?auto=compress&cs=tinysrgb&w=500" },
        { nome: "Espaguete Camarão", desc: "Massa al dente com camarões médios e molho bisque.", preco: "72.00", cat: "principal", img: "https://images.pexels.com/photos/4773233/pexels-photo-4773233.jpeg?auto=compress&cs=tinysrgb&w=500" },
        { nome: "Costelinha BBQ", desc: "Costela suína desfiando ao molho barbecue com milho.", preco: "65.00", cat: "principal", img: "https://images.pexels.com/photos/410648/pexels-photo-410648.jpeg?auto=compress&cs=tinysrgb&w=500" },
        { nome: "Moqueca de Peixe", desc: "Tradicional com azeite de dendê e leite de coco.", preco: "78.00", cat: "principal", img: "https://images.pexels.com/photos/9393339/pexels-photo-9393339.jpeg?auto=compress&cs=tinysrgb&w=500" },
        { nome: "Strogonoff de Carne", desc: "Cubos de filé mignon, champignon e batata palha.", preco: "44.00", cat: "principal", img: "https://images.pexels.com/photos/101134251/pexels-photo-101134251.jpeg?auto=compress&cs=tinysrgb&w=500" },
        { nome: "Ravioli de Abóbora", desc: "Massa verde artesanal com recheio de abóbora e sálvia.", preco: "48.00", cat: "principal", img: "https://images.pexels.com/photos/845811/pexels-photo-845811.jpeg?auto=compress&cs=tinysrgb&w=500" },
        { nome: "Feijoada Completa", desc: "Feijão preto com carnes selecionadas, couve e laranja.", preco: "60.00", cat: "principal", img: "https://images.pexels.com/photos/11913317/pexels-photo-11913317.jpeg?auto=compress&cs=tinysrgb&w=500" },
        { nome: "Fish and Chips", desc: "Iscas de peixe empanadas na cerveja com batatas fritas.", preco: "46.00", cat: "principal", img: "https://images.pexels.com/photos/14742617/pexels-photo-14742617.jpeg?auto=compress&cs=tinysrgb&w=500" },
        { nome: "Arroz Carreteiro", desc: "Arroz soltinho com charque, linguiça e tempero verde.", preco: "38.00", cat: "principal", img: "https://images.pexels.com/photos/12737657/pexels-photo-12737657.jpeg?auto=compress&cs=tinysrgb&w=500" },
        { nome: "Polenta Cremosa", desc: "Polenta italiana com ragu de linguiça artesanal.", preco: "40.00", cat: "principal", img: "https://images.pexels.com/photos/8991316/pexels-photo-8991316.jpeg?auto=compress&cs=tinysrgb&w=500" },
        { nome: "Camarão na Moranga", desc: "Camarões ao creme de abóbora servidos na própria fruta.", preco: "85.00", cat: "principal", img: "https://images.pexels.com/photos/13506945/pexels-photo-13506945.jpeg?auto=compress&cs=tinysrgb&w=500" },
        { nome: "Paella Valenciana", desc: "Clássico espanhol com açafrão, lula, camarão e mexilhões.", preco: "110.00", cat: "principal", img: "https://images.pexels.com/photos/4004467/pexels-photo-4004467.jpeg?auto=compress&cs=tinysrgb&w=500" },

        // SOBREMESAS (10)
        { nome: "Pudim de Leite", desc: "Textura aveludada com calda de caramelo dourada.", preco: "16.00", cat: "sobremesa", img: "https://images.pexels.com/photos/5945848/pexels-photo-5945848.jpeg?auto=compress&cs=tinysrgb&w=500" },
        { nome: "Petit Gâteau", desc: "Bolo de chocolate líquido com sorvete de baunilha.", preco: "24.00", cat: "sobremesa", img: "https://images.pexels.com/photos/101134017/pexels-photo-101134017.jpeg?auto=compress&cs=tinysrgb&w=500" },
        { nome: "Brownie Chocolate", desc: "Brownie intenso com nozes chilenas e calda quente.", preco: "22.00", cat: "sobremesa", img: "https://images.pexels.com/photos/132694/pexels-photo-132694.jpeg?auto=compress&cs=tinysrgb&w=500" },
        { nome: "Tiramisu Clássico", desc: "Camadas de mascarpone, café e biscoito artesanal.", preco: "26.00", cat: "sobremesa", img: "https://images.pexels.com/photos/6344738/pexels-photo-6344738.jpeg?auto=compress&cs=tinysrgb&w=500" },
        { nome: "Mousse de Maracujá", desc: "Leve e refrescante, feito com a fruta pura.", preco: "18.00", cat: "sobremesa", img: "https://images.pexels.com/photos/11550508/pexels-photo-11550508.jpeg?auto=compress&cs=tinysrgb&w=500" },
        { nome: "Cheesecake Frutas", desc: "Creme de queijo leve com calda de frutas vermelhas.", preco: "32.00", cat: "sobremesa", img: "https://images.pexels.com/photos/1126359/pexels-photo-1126359.jpeg?auto=compress&cs=tinysrgb&w=500" },
        { nome: "Torta de Limão", desc: "Base crocante, creme cítrico e merengue tostado.", preco: "20.00", cat: "sobremesa", img: "https://images.pexels.com/photos/4686826/pexels-photo-4686826.jpeg?auto=compress&cs=tinysrgb&w=500" },
        { nome: "Banana Flambada", desc: "Banana caramelizada e flambada no conhaque.", preco: "19.00", cat: "sobremesa", img: "https://images.pexels.com/photos/4016579/pexels-photo-4016579.jpeg?auto=compress&cs=tinysrgb&w=500" },
        { nome: "Churros Gourmet", desc: "4 unidades recheadas com doce de leite mineiro.", preco: "16.00", cat: "sobremesa", img: "https://images.pexels.com/photos/372851/pexels-photo-372851.jpeg?auto=compress&cs=tinysrgb&w=500" },
        { nome: "Crème Brûlée", desc: "Creme de baunilha em fava com crosta de açúcar.", preco: "30.00", cat: "sobremesa", img: "https://images.pexels.com/photos/101134241/pexels-photo-101134241.jpeg?auto=compress&cs=tinysrgb&w=500" },

        // BEBIDAS (10)
        { nome: "Água Mineral", desc: "500ml - Com ou sem gás.", preco: "6.00", cat: "bebida", img: "https://images.pexels.com/photos/407041/pexels-photo-407041.jpeg?auto=compress&cs=tinysrgb&w=500" },
        { nome: "Refrigerante Lata", desc: "Lata 350ml - Diversas opções.", preco: "7.00", cat: "bebida", img: "https://images.pexels.com/photos/2983101/pexels-photo-2983101.jpeg?auto=compress&cs=tinysrgb&w=500" },
        { nome: "Suco Natural", desc: "Copo 400ml - Diversos sabores.", preco: "12.00", cat: "bebida", img: "https://images.pexels.com/photos/158053/pexels-photo-158053.jpeg?auto=compress&cs=tinysrgb&w=500" },
        { nome: "Soda Italiana", desc: "Xarope de fruta, água gaseificada e gelo.", preco: "15.00", cat: "bebida", img: "https://images.pexels.com/photos/3407081/pexels-photo-3407081.jpeg?auto=compress&cs=tinysrgb&w=500" },
        { nome: "Café Expresso", desc: "Blend de grãos arábica selecionados.", preco: "6.00", cat: "bebida", img: "https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg?auto=compress&cs=tinysrgb&w=500" },
        { nome: "Limonada Suíça", desc: "Limão batido com leite condensado.", preco: "14.00", cat: "bebida", img: "https://images.pexels.com/photos/1194030/pexels-photo-1194030.jpeg?auto=compress&cs=tinysrgb&w=500" },
        { nome: "Ice Tea Pêssego", desc: "Chá preto gelado com infusão de pêssego.", preco: "9.00", cat: "bebida", img: "https://images.pexels.com/photos/1292294/pexels-photo-1292294.jpeg?auto=compress&cs=tinysrgb&w=500" },
        { nome: "Chopp Pilsen", desc: "Tulipa 400ml bem gelada.", preco: "15.00", cat: "bebida", img: "https://images.pexels.com/photos/1672304/pexels-photo-1672304.jpeg?auto=compress&cs=tinysrgb&w=500" },
        { nome: "Vinho Tinto Taça", desc: "Vinho seco da casa (150ml).", preco: "19.00", cat: "bebida", img: "https://images.pexels.com/photos/2912108/pexels-photo-2912108.jpeg?auto=compress&cs=tinysrgb&w=500" },
        { nome: "Milkshake Choco", desc: "Chocolate belga com chantilly.", preco: "18.00", cat: "bebida", img: "https://images.pexels.com/photos/103566/pexels-photo-103566.jpeg?auto=compress&cs=tinysrgb&w=500" }
    ];

    const menuContainer = document.getElementById('menu-container');
    const btnLoadMore = document.getElementById('btn-load-more');
    const filterBtns = document.querySelectorAll('.filter-btn');
    const searchInput = document.getElementById('search-input');
    const cartCount = document.querySelector('.cart-count');
    const cartIcon = document.querySelector('.cart-icon');
    const cartModal = document.getElementById('cart-modal');
    const productModal = document.getElementById('product-modal');
    const cartItems = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');
    const btnWhatsAppCheckout = document.getElementById('btn-whatsapp-checkout');

    let cart = [];
    let showAll = false; // Controle de Ver Mais

    function renderMenu() {
        if(!menuContainer) return;
        menuContainer.innerHTML = '';
        
        const currentFilter = document.querySelector('.filter-btn.active').dataset.filter;
        const currentSearch = searchInput.value.toLowerCase();

        let filtered = menuData.filter(item => {
            const matchesFilter = currentFilter === 'todos' || item.cat === currentFilter;
            const matchesSearch = item.nome.toLowerCase().includes(currentSearch);
            return matchesFilter && matchesSearch;
        });

        // Lógica do Ver Mais (25 itens iniciais)
        if (!showAll && currentFilter === 'todos' && !currentSearch) {
            filtered = filtered.slice(0, 25);
            btnLoadMore.parentElement.style.display = 'block';
        } else {
            btnLoadMore.parentElement.style.display = 'none';
        }

        filtered.forEach(item => {
            const div = document.createElement('div');
            div.className = 'menu-item';
            div.innerHTML = `
                <div class="item-info"><h3>${item.nome}</h3><p>${item.desc.substring(0,65)}...</p></div>
                <div class="item-footer"><span class="preco">R$ ${item.preco}</span>
                <button class="add-btn" data-nome="${item.nome}" data-preco="${item.preco}">Adicionar</button></div>
            `;
            div.onclick = (e) => { if(!e.target.classList.contains('add-btn')) openDetails(item); };
            menuContainer.appendChild(div);
        });

        document.querySelectorAll('.add-btn').forEach(btn => {
            btn.onclick = (e) => { e.stopPropagation(); addToCart(btn.dataset.nome, btn.dataset.preco); };
        });
    }

    btnLoadMore.onclick = () => {
        showAll = true;
        renderMenu();
    };

    function openDetails(item) {
        document.getElementById('modal-img').src = item.img;
        document.getElementById('modal-nome').textContent = item.nome;
        document.getElementById('modal-desc').textContent = item.desc;
        document.getElementById('modal-preco').textContent = `R$ ${item.preco}`;
        document.getElementById('modal-add-btn').onclick = () => { addToCart(item.nome, item.preco); productModal.style.display = 'none'; };
        productModal.style.display = 'block';
    }

    function addToCart(nome, preco) {
        cart.push({ nome, preco: parseFloat(preco) });
        updateCart();
    }

    window.removeFromCart = (index) => { cart.splice(index, 1); updateCart(); };

    function updateCart() {
        if(cartCount) cartCount.textContent = cart.length;
        if(cartItems) {
            cartItems.innerHTML = '';
            let total = 0;
            cart.forEach((item, index) => {
                const li = document.createElement('li');
                li.style.cssText = "display:flex; justify-content:space-between; margin-bottom:10px;";
                li.innerHTML = `<span>${item.nome}</span><div>R$ ${item.preco.toFixed(2)} <button onclick="removeFromCart(${index})" style="background:none; border:none; cursor:pointer">❌</button></div>`;
                cartItems.appendChild(li);
                total += item.preco;
            });
            cartTotal.textContent = total.toFixed(2);
        }
    }

    if(btnWhatsAppCheckout) {
        btnWhatsAppCheckout.onclick = () => {
            const pagamento = document.getElementById('payment-method').value;
            if(cart.length === 0) return alert("Adicione itens!");
            if(pagamento === "Não informado") return alert("Selecione o pagamento!");

            let msg = "*Novo Pedido*\n\n";
            cart.forEach((item, i) => msg += `${i+1}. ${item.nome} - R$ ${item.preco.toFixed(2)}\n`);
            msg += `\n*Total: R$ ${cart.reduce((a,b)=>a+b.preco,0).toFixed(2)}*\n*Pagamento:* ${pagamento}`;
            window.open(`https://wa.me/556992008985?text=${encodeURIComponent(msg)}`, '_blank');
        };
    }

    filterBtns.forEach(btn => {
        btn.onclick = () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            showAll = false; // Reseta ao filtrar
            renderMenu();
        };
    });

    searchInput.oninput = () => { showAll = false; renderMenu(); };
    cartIcon.onclick = () => cartModal.style.display = 'block';
    document.querySelector('.close-cart').onclick = () => cartModal.style.display = 'none';
    document.querySelector('.close-product').onclick = () => productModal.style.display = 'none';

    renderMenu();
});