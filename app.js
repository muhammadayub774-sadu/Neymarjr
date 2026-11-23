/* =========================================================
   MAHSULOTLAR MA'LUMOTLAR BAZASI (O‘ZBEK TILIDA)
   ========================================================= */
const PRODUCTS_DATA = [
    {
        id: 1,
        name: "iPhone 16 Pro Max",
        category: "iPhone",
        price: 17850000,
        isNew: true,
        image: "https://images.unsplash.com/photo-1695048133142-1a20484d2569?auto=format&fit=crop&w=800&q=85",
        description: "6.9 dyuymli Super Retina XDR displey, mustahkam titan korpus, A18 Pro protsessori va 4K 120 kadr/soniya video yozish imkoniyatiga ega professional kamera tizimi.",
        colors: [
            { name: "Sahro titani", hex: "#bfa48f" },
            { name: "Tabiiy titan", hex: "#8e8d8a" },
            { name: "Qora titan", hex: "#2c2c2e" },
            { name: "Oq titan", hex: "#f2f2f7" }
        ],
        storages: [
            { size: "256 GB", extra: 0 },
            { size: "512 GB", extra: 2600000 },
            { size: "1 TB", extra: 5200000 }
        ]
    },
    {
        id: 2,
        name: "iPhone 16",
        category: "iPhone",
        price: 11900000,
        isNew: true,
        image: "https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?auto=format&fit=crop&w=800&q=85",
        description: "Yangi Kamera boshqaruvi tugmasi, kuchli A18 chipi, yorqin ranglar va kun bo‘yi yetadigan batareya quvvati.",
        colors: [
            { name: "Ultramarin", hex: "#3b5998" },
            { name: "Firuzarang", hex: "#5ac8fa" },
            { name: "Pushti", hex: "#ff6482" },
            { name: "Qora", hex: "#1c1c1e" }
        ],
        storages: [
            { size: "128 GB", extra: 0 },
            { size: "256 GB", extra: 1300000 },
            { size: "512 GB", extra: 3800000 }
        ]
    },
    {
        id: 3,
        name: "iPhone 15 Pro",
        category: "iPhone",
        price: 13400000,
        isNew: false,
        image: "https://images.unsplash.com/photo-1696446701796-da61225697cc?auto=format&fit=crop&w=800&q=85",
        description: "Aerokosmik darajadagi titan dizayn, A17 Pro chipi va ko‘p funksiyali Harakat tugmasi.",
        colors: [
            { name: "Ko‘k titan", hex: "#2f3b4c" },
            { name: "Tabiiy titan", hex: "#8e8d8a" },
            { name: "Qora titan", hex: "#232324" }
        ],
        storages: [
            { size: "128 GB", extra: 0 },
            { size: "256 GB", extra: 1400000 },
            { size: "512 GB", extra: 3900000 }
        ]
    },
    {
        id: 4,
        name: "MacBook Pro 16 (M3 Max)",
        category: "MacBook",
        price: 38500000,
        isNew: true,
        image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=800&q=85",
        description: "Eng murakkab loyihalar uchun yaratilgan M3 Max chipi, Liquid Retina XDR displey va 22 soatgacha avtonom ishlash.",
        colors: [
            { name: "Kosmik qora", hex: "#1d1d1f" },
            { name: "Kumushrang", hex: "#e3e4e6" }
        ],
        storages: [
            { size: "1 TB SSD / 36 GB RAM", extra: 0 },
            { size: "2 TB SSD / 48 GB RAM", extra: 6500000 }
        ]
    },
    {
        id: 5,
        name: "MacBook Air 13 (M3)",
        category: "MacBook",
        price: 15200000,
        isNew: true,
        image: "https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?auto=format&fit=crop&w=800&q=85",
        description: "Atigi 1.24 kg vaznga ega o‘ta yupqa va yengil noutbuk. M3 chipi bilan har qanday vazifani tez bajaradi.",
        colors: [
            { name: "Yarim tun", hex: "#1e242b" },
            { name: "Yulduz nuri", hex: "#f0e5d3" },
            { name: "Kosmik kulrang", hex: "#7d7e80" },
            { name: "Kumushrang", hex: "#e3e4e6" }
        ],
        storages: [
            { size: "256 GB SSD", extra: 0 },
            { size: "512 GB SSD", extra: 2500000 }
        ]
    },
    {
        id: 6,
        name: "MacBook Air 15 (M3)",
        category: "MacBook",
        price: 17900000,
        isNew: false,
        image: "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?auto=format&fit=crop&w=800&q=85",
        description: "Keng 15.3 dyuymli Liquid Retina displey va oltita dinamikli fazoviy audio tizimi.",
        colors: [
            { name: "Yarim tun", hex: "#1e242b" },
            { name: "Kumushrang", hex: "#e3e4e6" }
        ],
        storages: [
            { size: "256 GB SSD", extra: 0 },
            { size: "512 GB SSD", extra: 2600000 }
        ]
    },
    {
        id: 7,
        name: "AirPods Pro 2 (USB-C)",
        category: "AirPods",
        price: 3150000,
        isNew: true,
        image: "https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?auto=format&fit=crop&w=800&q=85",
        description: "H2 chipi, 2 barobar kuchliroq faol shovqinni bostirish va MagSafe quvvatlash g‘ilofi.",
        colors: [
            { name: "Oq", hex: "#ffffff" }
        ],
        storages: [
            { size: "Standart to‘plam", extra: 0 }
        ]
    },
    {
        id: 8,
        name: "AirPods Max",
        category: "AirPods",
        price: 6950000,
        isNew: false,
        image: "https://images.unsplash.com/photo-1613040809024-b4ef7ba99bc3?auto=format&fit=crop&w=800&q=85",
        description: "Yuqori aniqlikdagi ovoz, moslashuvchan ekvalayzer va premium alyuminiy korpusli quloqchinlar.",
        colors: [
            { name: "Kosmik kulrang", hex: "#535456" },
            { name: "Kumushrang", hex: "#e3e4e6" },
            { name: "Moviy", hex: "#6488ea" }
        ],
        storages: [
            { size: "Standart to‘plam", extra: 0 }
        ]
    },
    {
        id: 9,
        name: "Apple Watch Ultra 2",
        category: "Apple Watch",
        price: 10400000,
        isNew: true,
        image: "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?auto=format&fit=crop&w=800&q=85",
        description: "49 mm titan korpus, ikki chastotali aniq GPS, 100 metrgacha suvga chidamlilik va S9 SiP protsessori.",
        colors: [
            { name: "Tabiiy titan", hex: "#b0ada8" },
            { name: "Qora titan", hex: "#1c1c1e" }
        ],
        storages: [
            { size: "49 mm GPS + Cellular", extra: 0 }
        ]
    },
    {
        id: 10,
        name: "Apple Watch Series 10",
        category: "Apple Watch",
        price: 5600000,
        isNew: true,
        image: "https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d?auto=format&fit=crop&w=800&q=85",
        description: "Eng yupqa Apple Watch, katta OLED displey va salomatlik ko‘rsatkichlarini aniq kuzatish.",
        colors: [
            { name: "Qora", hex: "#1d1d1f" },
            { name: "Pushti oltin", hex: "#e6c7c2" },
            { name: "Kumushrang", hex: "#e3e4e6" }
        ],
        storages: [
            { size: "42 mm", extra: 0 },
            { size: "46 mm", extra: 450000 }
        ]
    },
    {
        id: 11,
        name: "iPad Pro 13 (M4)",
        category: "iPad",
        price: 16800000,
        isNew: true,
        image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&w=800&q=85",
        description: "Ultra Retina XDR tandem OLED displey va Apple M4 chipi bilan jihozlangan eng kuchli planshet.",
        colors: [
            { name: "Kosmik qora", hex: "#1d1d1f" },
            { name: "Kumushrang", hex: "#e3e4e6" }
        ],
        storages: [
            { size: "256 GB", extra: 0 },
            { size: "512 GB", extra: 2600000 },
            { size: "1 TB", extra: 5200000 }
        ]
    },
    {
        id: 12,
        name: "MagSafe simsiz quvvatlagich",
        category: "Aksessuarlar",
        price: 650000,
        isNew: false,
        image: "https://images.unsplash.com/photo-1615526675159-e248c3021d3f?auto=format&fit=crop&w=800&q=85",
        description: "iPhone va AirPods qurilmalarini magnit yordamida tez va xavfsiz simsiz quvvatlash qurilmasi.",
        colors: [
            { name: "Oq", hex: "#f5f5f7" }
        ],
        storages: [
            { size: "1 metr kabel", extra: 0 },
            { size: "2 metr kabel", extra: 150000 }
        ]
    }
];

/* =========================================================
   ASOSIY ILOVA MANTIQI (APPLE STORE O‘ZBEKISTON)
   ========================================================= */
class AppleStoreApp {
    constructor() {
        this.products = PRODUCTS_DATA;
        this.cart = JSON.parse(localStorage.getItem('apple_uz_cart')) || [];
        this.users = JSON.parse(localStorage.getItem('apple_uz_users')) || [];
        this.currentUser = JSON.parse(localStorage.getItem('apple_uz_current_user')) || null;
        this.theme = localStorage.getItem('apple_uz_theme') || 'light';

        this.currentCategory = 'all';
        this.currentSort = 'newest';
        this.searchQuery = '';
        this.currentSlide = 0;
        this.profileTab = 'orders';

        this.init();
    }

    init() {
        this.handleSplashScreen();
        this.applyTheme(this.theme);
        this.bindEvents();
        this.initCarousel();
        this.renderHomeFeatured();
        this.renderCatalog();
        this.updateCartBadge();
    }

    /* 1. KIRISH ANIMATSIYASI */
    handleSplashScreen() {
        const splash = document.getElementById('splash-screen');
        setTimeout(() => {
            splash.classList.add('fade-out');
            setTimeout(() => splash.remove(), 700);
        }, 1400);
    }

    /* 2. NARX FORMATLASH (O‘ZBEKISTON SO‘MIDA) */
    formatPrice(amount) {
        return amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ") + " so‘m";
    }

    /* 3. BILDIRISHNOMA (TOAST) */
    showToast(message, type = 'success') {
        const container = document.getElementById('toast-container');
        const toast = document.createElement('div');
        toast.className = `toast ${type}`;
        toast.innerHTML = `<span>${type === 'success' ? '✓' : '✕'}</span><span>${message}</span>`;
        container.appendChild(toast);

        setTimeout(() => {
            toast.style.opacity = '0';
            toast.style.transform = 'translateX(40px)';
            setTimeout(() => toast.remove(), 300);
        }, 3000);
    }

    /* 4. KUN / TUN REJIMI */
    applyTheme(theme) {
        this.theme = theme;
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('apple_uz_theme', theme);

        const sunIcon = document.querySelector('.sun-icon');
        const moonIcon = document.querySelector('.moon-icon');
        if (theme === 'dark') {
            sunIcon.classList.add('hidden');
            moonIcon.classList.remove('hidden');
        } else {
            sunIcon.classList.remove('hidden');
            moonIcon.classList.add('hidden');
        }
    }

    toggleTheme() {
        const nextTheme = this.theme === 'light' ? 'dark' : 'light';
        this.applyTheme(nextTheme);
        this.showToast(nextTheme === 'dark' ? "Tun rejimi yoqildi" : "Kun rejimi yoqildi");
    }

    /* 5. SAHIFALARARO O‘TISH (ROUTER) */
    navigate(route, params = {}) {
        document.querySelectorAll('.page-view').forEach(view => view.classList.remove('active'));
        document.querySelectorAll('.nav-link').forEach(link => link.classList.remove('active'));

        // Mobil menyuni yopish
        document.getElementById('nav-links').classList.remove('open');

        if (route === 'home') {
            document.getElementById('view-home').classList.add('active');
            document.querySelector('.nav-link[data-route="home"]').classList.add('active');
        } else if (route === 'catalog') {
            document.getElementById('view-catalog').classList.add('active');
            if (params.category) {
                this.currentCategory = params.category;
            }
            this.updateCategoryUI();
            this.renderCatalog();
        } else if (route === 'cart') {
            document.getElementById('view-cart').classList.add('active');
            this.renderCart();
        } else if (route === 'profile') {
            document.getElementById('view-profile').classList.add('active');
            this.renderProfile();
        } else if (route === 'info') {
            document.getElementById('view-info').classList.add('active');
            this.renderInfoPage(params.info || 'about');
        }

        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    /* 6. KARUSEL */
    initCarousel() {
        const slides = document.querySelectorAll('.carousel-slide');
        const dotsContainer = document.getElementById('carousel-dots');
        dotsContainer.innerHTML = '';

        slides.forEach((_, index) => {
            const dot = document.createElement('span');
            dot.className = `dot ${index === 0 ? 'active' : ''}`;
            dot.addEventListener('click', () => this.goToSlide(index));
            dotsContainer.appendChild(dot);
        });

        setInterval(() => {
            this.goToSlide((this.currentSlide + 1) % slides.length);
        }, 6000);
    }

    goToSlide(index) {
        const slides = document.querySelectorAll('.carousel-slide');
        const dots = document.querySelectorAll('.dot');
        slides.forEach(s => s.classList.remove('active'));
        dots.forEach(d => d.classList.remove('active'));

        this.currentSlide = (index + slides.length) % slides.length;
        slides[this.currentSlide].classList.add('active');
        dots[this.currentSlide].classList.add('active');
    }

    /* 7. MAHSULOT KARTASI KOMPONENTI */
    createProductCardHTML(product) {
        const isFav = this.isFavorite(product.id);
        const colorsHTML = product.colors.map(c =>
            `<span class="color-dot" style="background-color: ${c.hex}" title="${c.name}"></span>`
        ).join('');

        return `
            <div class="product-card">
                <button class="fav-btn ${isFav ? 'active' : ''}" onclick="app.toggleFavorite(${product.id})" title="Sevimlilarga qo‘shish">
                    ${isFav ? '♥' : '♡'}
                </button>
                <div class="product-img-wrap" onclick="app.openProductModal(${product.id})">
                    <img src="${product.image}" alt="${product.name}" loading="lazy">
                </div>
                <div>
                    <span class="product-category-tag">${product.category} ${product.isNew ? '• Yangi' : ''}</span>
                    <h3 class="product-title" onclick="app.openProductModal(${product.id})">${product.name}</h3>
                    <p class="product-desc-short">${product.description}</p>
                    <div class="color-dots">${colorsHTML}</div>
                </div>
                <div class="product-footer">
                    <span class="product-price">${this.formatPrice(product.price)}</span>
                    <button class="btn btn-primary btn-sm" onclick="app.openProductModal(${product.id})">Xarid qilish</button>
                </div>
            </div>
        `;
    }

    renderHomeFeatured() {
        const container = document.getElementById('home-featured-products');
        const newestProducts = this.products.filter(p => p.isNew).slice(0, 4);
        container.innerHTML = newestProducts.map(p => this.createProductCardHTML(p)).join('');
    }

    /* 8. KATALOG, QIDIRUV VA SARALASH */
    updateCategoryUI() {
        document.querySelectorAll('#category-filters .pill').forEach(btn => {
            btn.classList.toggle('active', btn.dataset.category === this.currentCategory);
        });

        document.querySelectorAll('.nav-link[data-route="catalog"]').forEach(link => {
            link.classList.toggle('active', link.dataset.category === this.currentCategory);
        });

        const titleEl = document.getElementById('catalog-title');
        titleEl.textContent = this.currentCategory === 'all'
            ? 'Barcha mahsulotlar'
            : `${this.currentCategory} bo‘limi`;
    }

    renderCatalog() {
        let filtered = [...this.products];

        // Kategoriya filtri
        if (this.currentCategory !== 'all') {
            filtered = filtered.filter(p => p.category === this.currentCategory);
        }

        // Qidiruv filtri
        if (this.searchQuery.trim() !== '') {
            const q = this.searchQuery.toLowerCase();
            filtered = filtered.filter(p =>
                p.name.toLowerCase().includes(q) ||
                p.category.toLowerCase().includes(q)
            );
        }

        // Saralash
        if (this.currentSort === 'price-asc') {
            filtered.sort((a, b) => a.price - b.price);
        } else if (this.currentSort === 'price-desc') {
            filtered.sort((a, b) => b.price - a.price);
        } else if (this.currentSort === 'name-asc') {
            filtered.sort((a, b) => a.name.localeCompare(b.name));
        } else if (this.currentSort === 'newest') {
            filtered.sort((a, b) => (b.isNew === a.isNew) ? 0 : b.isNew ? 1 : -1);
        }

        document.getElementById('catalog-count').textContent = `${filtered.length} ta mahsulot topildi`;
        const grid = document.getElementById('catalog-products-grid');

        if (filtered.length === 0) {
            grid.innerHTML = `
                <div class="empty-state">
                    <h3>Mahsulot topilmadi</h3>
                    <p>Boshqa kalit so‘z yoki kategoriya tanlab ko‘ring.</p>
                    <button class="btn btn-primary" onclick="app.resetFilters()">Filtrlarni tozalash</button>
                </div>
            `;
            return;
        }

        grid.innerHTML = filtered.map(p => this.createProductCardHTML(p)).join('');
    }

    resetFilters() {
        this.currentCategory = 'all';
        this.searchQuery = '';
        this.currentSort = 'newest';
        document.getElementById('catalog-search-input').value = '';
        document.getElementById('sort-select').value = 'newest';
        this.updateCategoryUI();
        this.renderCatalog();
    }

    /* 9. TEZKOR QIDIRUV (NAVBAR) */
    handleInstantSearch(query) {
        const resultsContainer = document.getElementById('instant-search-results');
        if (!query.trim()) {
            resultsContainer.innerHTML = '';
            return;
        }

        const matches = this.products.filter(p =>
            p.name.toLowerCase().includes(query.toLowerCase())
        ).slice(0, 4);

        if (matches.length === 0) {
            resultsContainer.innerHTML = `<p style="font-size:13px; color:var(--text-secondary);">Hech narsa topilmadi.</p>`;
            return;
        }

        resultsContainer.innerHTML = matches.map(p => `
            <div class="instant-item" onclick="app.openProductModal(${p.id}); document.getElementById('search-dropdown').classList.add('hidden');">
                <img src="${p.image}" alt="${p.name}">
                <div class="instant-item-info">
                    <h4>${p.name}</h4>
                    <span>${this.formatPrice(p.price)}</span>
                </div>
            </div>
        `).join('');
    }

    /* 10. MAHSULOT BATAFSIL MODALI (RANG VA XOTIRA TANLASH) */
    openProductModal(productId) {
        const product = this.products.find(p => p.id === productId);
        if (!product) return;

        let selectedColor = product.colors[0].name;
        let selectedStorage = product.storages[0];

        const modal = document.getElementById('product-modal');
        const body = document.getElementById('modal-body-content');

        const renderModalContent = () => {
            const totalPrice = product.price + selectedStorage.extra;
            body.innerHTML = `
                <div class="modal-grid">
                    <div class="modal-img">
                        <img src="${product.image}" alt="${product.name}">
                    </div>
                    <div>
                        <span class="product-category-tag">${product.category}</span>
                        <h2 style="font-size:28px; margin:6px 0 12px;">${product.name}</h2>
                        <p style="color:var(--text-secondary); font-size:14px; line-height:1.6;">${product.description}</p>

                        <div class="option-group">
                            <label>Rangni tanlang: <strong>${selectedColor}</strong></label>
                            <div class="option-buttons" id="modal-color-btns">
                                ${product.colors.map(c => `
                                    <button class="opt-btn ${c.name === selectedColor ? 'selected' : ''}" data-color="${c.name}">
                                        <span class="color-dot" style="background:${c.hex}"></span>
                                        ${c.name}
                                    </button>
                                `).join('')}
                            </div>
                        </div>

                        <div class="option-group">
                            <label>Xotira hajmini tanlang:</label>
                            <div class="option-buttons" id="modal-storage-btns">
                                ${product.storages.map((s, idx) => `
                                    <button class="opt-btn ${s.size === selectedStorage.size ? 'selected' : ''}" data-idx="${idx}">
                                        ${s.size}
                                    </button>
                                `).join('')}
                            </div>
                        </div>

                        <div class="modal-price">${this.formatPrice(totalPrice)}</div>

                        <div style="display:flex; gap:12px; flex-wrap:wrap;">
                            <button class="btn btn-primary" id="modal-add-cart-btn">Savatchaga qo‘shish</button>
                            <button class="btn btn-outline" onclick="app.toggleFavorite(${product.id}); app.openProductModal(${product.id})">
                                ${this.isFavorite(product.id) ? '♥ Sevimlilarda' : '♡ Sevimlilarga'}
                            </button>
                        </div>
                    </div>
                </div>
            `;

            body.querySelectorAll('#modal-color-btns .opt-btn').forEach(btn => {
                btn.addEventListener('click', () => {
                    selectedColor = btn.dataset.color;
                    renderModalContent();
                });
            });

            body.querySelectorAll('#modal-storage-btns .opt-btn').forEach(btn => {
                btn.addEventListener('click', () => {
                    selectedStorage = product.storages[parseInt(btn.dataset.idx)];
                    renderModalContent();
                });
            });

            document.getElementById('modal-add-cart-btn').addEventListener('click', () => {
                this.addToCart(product, selectedColor, selectedStorage.size, totalPrice);
                modal.classList.add('hidden');
            });
        };

        renderModalContent();
        modal.classList.remove('hidden');
    }

    /* 11. SAVATCHA VA BUYURTMA FUNKSIYALARI */
    addToCart(product, color, storage, unitPrice) {
        const key = `${product.id}-${color}-${storage}`;
        const existing = this.cart.find(item => item.key === key);

        if (existing) {
            existing.qty += 1;
        } else {
            this.cart.push({
                key,
                productId: product.id,
                name: product.name,
                image: product.image,
                color,
                storage,
                price: unitPrice,
                qty: 1
            });
        }

        this.saveCart();
        this.showToast(`"${product.name}" savatchaga qo‘shildi`);
    }

    updateCartQty(key, delta) {
        const item = this.cart.find(i => i.key === key);
        if (!item) return;

        item.qty += delta;
        if (item.qty <= 0) {
            this.removeFromCart(key);
            return;
        }

        this.saveCart();
        this.renderCart();
    }

    removeFromCart(key) {
        this.cart = this.cart.filter(i => i.key !== key);
        this.saveCart();
        this.renderCart();
        this.showToast("Mahsulot savatchadan o‘chirildi", "error");
    }

    saveCart() {
        localStorage.setItem('apple_uz_cart', JSON.stringify(this.cart));
        this.updateCartBadge();
    }

    updateCartBadge() {
        const count = this.cart.reduce((sum, item) => sum + item.qty, 0);
        document.getElementById('cart-badge').textContent = count;
    }

    renderCart() {
        const container = document.getElementById('cart-content');

        if (this.cart.length === 0) {
            container.innerHTML = `
                <div class="empty-state">
                    <h3>Savatchangiz hozircha bo‘sh</h3>
                    <p>Katalogdan o‘zingizga yoqqan Apple mahsulotlarini tanlang.</p>
                    <button class="btn btn-primary" onclick="app.navigate('catalog', {category: 'all'})">Xarid qilishga o‘tish</button>
                </div>
            `;
            return;
        }

        const subtotal = this.cart.reduce((sum, item) => sum + item.price * item.qty, 0);
        const userName = this.currentUser ? this.currentUser.name : '';
        const userPhone = this.currentUser ? (this.currentUser.phone || '') : '';
        const userAddress = this.currentUser ? (this.currentUser.address || '') : '';

        container.innerHTML = `
            <div class="cart-items-list">
                ${this.cart.map(item => `
                    <div class="cart-item">
                        <div class="cart-item-left">
                            <img src="${item.image}" alt="${item.name}">
                            <div>
                                <h4>${item.name}</h4>
                                <p class="cart-item-meta">Rang: ${item.color} | Xotira: ${item.storage}</p>
                                <strong>${this.formatPrice(item.price * item.qty)}</strong>
                            </div>
                        </div>
                        <div style="display:flex; align-items:center; gap:14px;">
                            <div class="qty-controls">
                                <button class="qty-btn" onclick="app.updateCartQty('${item.key}', -1)">−</button>
                                <span>${item.qty}</span>
                                <button class="qty-btn" onclick="app.updateCartQty('${item.key}', 1)">+</button>
                            </div>
                            <button class="btn btn-outline btn-sm" onclick="app.removeFromCart('${item.key}')">O‘chirish</button>
                        </div>
                    </div>
                `).join('')}
            </div>

            <div class="checkout-card">
                <h3>Buyurtmani rasmiylashtirish</h3>
                <div class="summary-row">
                    <span>Mahsulotlar soni:</span>
                    <span>${this.cart.reduce((s, i) => s + i.qty, 0)} dona</span>
                </div>
                <div class="summary-row">
                    <span>Yetkazib berish:</span>
                    <span style="color:var(--success); font-weight:600;">Bepul</span>
                </div>
                <div class="summary-total">
                    <span>Jami to‘lov:</span>
                    <span>${this.formatPrice(subtotal)}</span>
                </div>

                <form id="checkout-form">
                    <div class="form-group">
                        <label>Ism va familiya *</label>
                        <input type="text" id="order-name" class="form-input" value="${userName}" placeholder="Masalan: Sardor Karimov" required>
                    </div>
                    <div class="form-group">
                        <label>Telefon raqam *</label>
                        <input type="tel" id="order-phone" class="form-input" value="${userPhone}" placeholder="+998 90 123 45 67" required>
                    </div>
                    <div class="form-group">
                        <label>Yetkazib berish manzili *</label>
                        <input type="text" id="order-address" class="form-input" value="${userAddress}" placeholder="Shahar, tuman, ko‘cha va uy raqami" required>
                    </div>
                    <button type="submit" class="btn btn-primary" style="width:100%; margin-top:8px;">Buyurtmani tasdiqlash</button>
                </form>
            </div>
        `;

        document.getElementById('checkout-form').addEventListener('submit', (e) => {
            e.preventDefault();
            this.submitOrder(subtotal);
        });
    }

    submitOrder(totalAmount) {
        const name = document.getElementById('order-name').value.trim();
        const phone = document.getElementById('order-phone').value.trim();
        const address = document.getElementById('order-address').value.trim();

        if (!name || !phone || !address) {
            this.showToast("Iltimos, barcha maydonlarni to‘ldiring!", "error");
            return;
        }

        const newOrder = {
            id: 'UZ-' + Math.floor(100000 + Math.random() * 900000),
            date: new Date().toLocaleDateString('uz-UZ'),
            items: [...this.cart],
            total: totalAmount,
            customer: { name, phone, address },
            status: 'Qabul qilindi'
        };

        if (this.currentUser) {
            this.currentUser.orders = this.currentUser.orders || [];
            this.currentUser.orders.unshift(newOrder);
            this.syncCurrentUser();
        } else {
            const guestOrders = JSON.parse(localStorage.getItem('apple_uz_guest_orders')) || [];
            guestOrders.unshift(newOrder);
            localStorage.setItem('apple_uz_guest_orders', JSON.stringify(guestOrders));
        }

        this.cart = [];
        this.saveCart();
        this.showToast(`Buyurtmangiz (#${newOrder.id}) muvaffaqiyatli tasdiqlandi!`);
        this.renderCart();
    }

    /* 12. SEVIMLILAR VA PROFIL TIZIMI */
    isFavorite(productId) {
        if (this.currentUser && this.currentUser.favorites) {
            return this.currentUser.favorites.includes(productId);
        }
        const guestFavs = JSON.parse(localStorage.getItem('apple_uz_guest_favs')) || [];
        return guestFavs.includes(productId);
    }

    toggleFavorite(productId) {
        if (this.currentUser) {
            this.currentUser.favorites = this.currentUser.favorites || [];
            const idx = this.currentUser.favorites.indexOf(productId);
            if (idx > -1) {
                this.currentUser.favorites.splice(idx, 1);
                this.showToast("Sevimlilardan olib tashlandi", "error");
            } else {
                this.currentUser.favorites.push(productId);
                this.showToast("Sevimlilarga qo‘shildi");
            }
            this.syncCurrentUser();
        } else {
            let guestFavs = JSON.parse(localStorage.getItem('apple_uz_guest_favs')) || [];
            const idx = guestFavs.indexOf(productId);
            if (idx > -1) {
                guestFavs.splice(idx, 1);
                this.showToast("Sevimlilardan olib tashlandi", "error");
            } else {
                guestFavs.push(productId);
                this.showToast("Sevimlilarga qo‘shildi");
            }
            localStorage.setItem('apple_uz_guest_favs', JSON.stringify(guestFavs));
        }

        this.renderHomeFeatured();
        this.renderCatalog();
        if (document.getElementById('view-profile').classList.contains('active')) {
            this.renderProfile();
        }
    }

    syncCurrentUser() {
        localStorage.setItem('apple_uz_current_user', JSON.stringify(this.currentUser));
        const idx = this.users.findIndex(u => u.email === this.currentUser.email);
        if (idx > -1) {
            this.users[idx] = this.currentUser;
            localStorage.setItem('apple_uz_users', JSON.stringify(this.users));
        }
    }

    renderProfile() {
        const container = document.getElementById('profile-container');

        if (!this.currentUser) {
            container.innerHTML = `
                <div class="auth-box">
                    <div class="auth-tabs">
                        <button class="auth-tab active" id="tab-login">Kirish</button>
                        <button class="auth-tab" id="tab-register">Ro‘yxatdan o‘tish</button>
                    </div>

                    <form id="login-form">
                        <div class="form-group">
                            <label>Elektron pochta</label>
                            <input type="email" id="login-email" class="form-input" placeholder="misol@mail.uz" required>
                        </div>
                        <div class="form-group">
                            <label>Parol</label>
                            <input type="password" id="login-pass" class="form-input" placeholder="••••••••" required>
                        </div>
                        <button type="submit" class="btn btn-primary" style="width:100%;">Kirish</button>
                    </form>

                    <form id="register-form" class="hidden">
                        <div class="form-group">
                            <label>Ism va familiya</label>
                            <input type="text" id="reg-name" class="form-input" placeholder="Ismingizni kiriting" required>
                        </div>
                        <div class="form-group">
                            <label>Elektron pochta</label>
                            <input type="email" id="reg-email" class="form-input" placeholder="misol@mail.uz" required>
                        </div>
                        <div class="form-group">
                            <label>Telefon raqam</label>
                            <input type="tel" id="reg-phone" class="form-input" placeholder="+998 90 123 45 67" required>
                        </div>
                        <div class="form-group">
                            <label>Parol</label>
                            <input type="password" id="reg-pass" class="form-input" placeholder="Kamida 6 ta belgi" required>
                        </div>
                        <button type="submit" class="btn btn-primary" style="width:100%;">Ro‘yxatdan o‘tish</button>
                    </form>
                </div>
            `;

            const tabLogin = document.getElementById('tab-login');
            const tabRegister = document.getElementById('tab-register');
            const loginForm = document.getElementById('login-form');
            const registerForm = document.getElementById('register-form');

            tabLogin.addEventListener('click', () => {
                tabLogin.classList.add('active');
                tabRegister.classList.remove('active');
                loginForm.classList.remove('hidden');
                registerForm.classList.add('hidden');
            });

            tabRegister.addEventListener('click', () => {
                tabRegister.classList.add('active');
                tabLogin.classList.remove('active');
                registerForm.classList.remove('hidden');
                loginForm.classList.add('hidden');
            });

            registerForm.addEventListener('submit', (e) => {
                e.preventDefault();
                const name = document.getElementById('reg-name').value.trim();
                const email = document.getElementById('reg-email').value.trim();
                const phone = document.getElementById('reg-phone').value.trim();
                const password = document.getElementById('reg-pass').value;

                if (this.users.some(u => u.email === email)) {
                    this.showToast("Bu elektron pochta allaqachon ro‘yxatdan o‘tgan!", "error");
                    return;
                }

                const newUser = {
                    name,
                    email,
                    phone,
                    password,
                    address: '',
                    orders: [],
                    favorites: []
                };

                this.users.push(newUser);
                localStorage.setItem('apple_uz_users', JSON.stringify(this.users));
                this.currentUser = newUser;
                localStorage.setItem('apple_uz_current_user', JSON.stringify(newUser));
                this.showToast("Ro‘yxatdan o‘tish muvaffaqiyatli yakunlandi!");
                this.renderProfile();
            });

            loginForm.addEventListener('submit', (e) => {
                e.preventDefault();
                const email = document.getElementById('login-email').value.trim();
                const password = document.getElementById('login-pass').value;

                const found = this.users.find(u => u.email === email && u.password === password);
                if (!found) {
                    this.showToast("Elektron pochta yoki parol noto‘g‘ri!", "error");
                    return;
                }

                this.currentUser = found;
                localStorage.setItem('apple_uz_current_user', JSON.stringify(found));
                this.showToast(`Xush kelibsiz, ${found.name}!`);
                this.renderProfile();
            });

            return;
        }

        // TIZIMGA KIRGAN FOYDALANUVCHI KABINETI
        const favProducts = this.products.filter(p => (this.currentUser.favorites || []).includes(p.id));
        const orders = this.currentUser.orders || [];

        let tabContentHTML = '';
        if (this.profileTab === 'orders') {
            tabContentHTML = `
                <h2 style="margin-bottom:20px;">Buyurtmalar tarixi</h2>
                ${orders.length === 0 ? `<p class="subtitle">Sizda hali buyurtmalar mavjud emas.</p>` : orders.map(order => `
                    <div class="order-card">
                        <div class="order-header">
                            <div>
                                <strong>Buyurtma raqami: #${order.id}</strong>
                                <span style="color:var(--text-secondary); margin-left:10px;">${order.date}</span>
                            </div>
                            <span class="status-badge">${order.status}</span>
                        </div>
                        <div style="font-size:14px; margin-bottom:10px;">
                            ${order.items.map(i => `<div>• ${i.name} (${i.color}, ${i.storage}) × ${i.qty}</div>`).join('')}
                        </div>
                        <div style="font-weight:700; text-align:right;">Jami: ${this.formatPrice(order.total)}</div>
                    </div>
                `).join('')}
            `;
        } else if (this.profileTab === 'favorites') {
            tabContentHTML = `
                <h2 style="margin-bottom:20px;">Sevimlilar</h2>
                ${favProducts.length === 0 ? `<p class="subtitle">Sevimli mahsulotlar ro‘yxati bo‘sh.</p>` : `
                    <div class="products-grid">
                        ${favProducts.map(p => this.createProductCardHTML(p)).join('')}
                    </div>
                `}
            `;
        } else if (this.profileTab === 'settings') {
            tabContentHTML = `
                <h2 style="margin-bottom:20px;">Shaxsiy ma'lumotlarni tahrirlash</h2>
                <form id="profile-edit-form" style="max-width:480px;">
                    <div class="form-group">
                        <label>Ism va familiya</label>
                        <input type="text" id="edit-name" class="form-input" value="${this.currentUser.name}" required>
                    </div>
                    <div class="form-group">
                        <label>Telefon raqam</label>
                        <input type="tel" id="edit-phone" class="form-input" value="${this.currentUser.phone || ''}" required>
                    </div>
                    <div class="form-group">
                        <label>Doimiy yetkazib berish manzili</label>
                        <input type="text" id="edit-address" class="form-input" value="${this.currentUser.address || ''}" placeholder="Manzilingizni kiriting">
                    </div>
                    <button type="submit" class="btn btn-primary">Saqlash</button>
                </form>
            `;
        }

        container.innerHTML = `
            <div class="profile-dashboard">
                <div class="profile-sidebar">
                    <div class="profile-avatar">${this.currentUser.name.charAt(0).toUpperCase()}</div>
                    <h3>${this.currentUser.name}</h3>
                    <p style="font-size:13px; color:var(--text-secondary);">${this.currentUser.email}</p>

                    <div class="profile-nav">
                        <button class="profile-nav-btn ${this.profileTab === 'orders' ? 'active' : ''}" onclick="app.switchProfileTab('orders')">Buyurtmalar tarixi</button>
                        <button class="profile-nav-btn ${this.profileTab === 'favorites' ? 'active' : ''}" onclick="app.switchProfileTab('favorites')">Sevimlilar (${favProducts.length})</button>
                        <button class="profile-nav-btn ${this.profileTab === 'settings' ? 'active' : ''}" onclick="app.switchProfileTab('settings')">Shaxsiy ma'lumotlar</button>
                        <button class="profile-nav-btn" style="color:var(--danger);" onclick="app.logout()">Profildan chiqish</button>
                    </div>
                </div>
                <div>${tabContentHTML}</div>
            </div>
        `;

        if (this.profileTab === 'settings') {
            document.getElementById('profile-edit-form').addEventListener('submit', (e) => {
                e.preventDefault();
                this.currentUser.name = document.getElementById('edit-name').value.trim();
                this.currentUser.phone = document.getElementById('edit-phone').value.trim();
                this.currentUser.address = document.getElementById('edit-address').value.trim();
                this.syncCurrentUser();
                this.showToast("Ma'lumotlar muvaffaqiyatli saqlandi!");
                this.renderProfile();
            });
        }
    }

    switchProfileTab(tab) {
        this.profileTab = tab;
        this.renderProfile();
    }

    logout() {
        this.currentUser = null;
        localStorage.removeItem('apple_uz_current_user');
        this.showToast("Tizimdan chiqdingiz");
        this.renderProfile();
    }

    /* 13. MA'LUMOT SAHIFALARI (BIZ HAQIMIZDA, YETKAZIB BERISH, MAXFIYLIK) */
    renderInfoPage(type) {
        const container = document.getElementById('info-page-content');
        const pages = {
            about: `
                <h1>Biz haqimizda</h1>
                <p><strong>Apple Store O‘zbekiston</strong> — Apple ekotizimidagi eng zamonaviy qurilmalarni mijozlarga qulay, ishonchli va rasmiy kafolat bilan yetkazib beruvchi internet-do‘kon.</p>
                <p>Bizning maqsadimiz — O‘zbekistonlik foydalanuvchilarga original iPhone, MacBook, iPad, Apple Watch va AirPods mahsulotlarini eng yuqori darajadagi xizmat ko‘rsatish madaniyati bilan taqdim etishdir.</p>
                <p>Barcha mahsulotlar IMEI ro‘yxatidan o‘tgan va 1 yillik rasmiy kafolatga ega.</p>
            `,
            delivery: `
                <h1>Yetkazib berish shartlari</h1>
                <p><strong>Toshkent shahri bo‘ylab:</strong> Buyurtma tasdiqlanganidan so‘ng 2 soat ichida bepul yetkazib beriladi.</p>
                <p><strong>O‘zbekistonning barcha viloyatlariga:</strong> Ishonchli kuryerlik xizmati orqali 1–2 ish kuni ichida eshigingizgacha yetkazib beriladi.</p>
                <p><strong>To‘lov usullari:</strong> Mahsulot qo‘lingizga yetib borganda naqd pul, Uzcard, Humo yoki Visa/Mastercard kartalari orqali to‘lov qilishingiz mumkin.</p>
            `,
            privacy: `
                <h1>Maxfiylik siyosati</h1>
                <p>Foydalanuvchilarning shaxsiy ma'lumotlari xavfsizligi biz uchun ustuvor ahamiyatga ega.</p>
                <p>Buyurtma rasmiylashtirish va ro‘yxatdan o‘tish jarayonida kiritilgan ism, telefon raqam va manzil ma'lumotlari faqat buyurtmani yetkazib berish maqsadida ishlatiladi va uchinchi shaxslarga berilmaydi.</p>
            `
        };

        container.innerHTML = pages[type] || pages.about;
    }

    /* 14. HODISALARNI BOG‘LASH (EVENT LISTENERS) */
    bindEvents() {
        // Navigatsiya havolalari
        document.querySelectorAll('[data-route]').forEach(el => {
            el.addEventListener('click', (e) => {
                e.preventDefault();
                const route = el.dataset.route;
                const category = el.dataset.category;
                const info = el.dataset.info;
                this.navigate(route, { category, info });
            });
        });

        // Mobil menyu
        document.getElementById('mobile-menu-btn').addEventListener('click', () => {
            document.getElementById('nav-links').classList.toggle('open');
        });

        // Kun/Tun rejimi tugmasi
        document.getElementById('theme-toggle-btn').addEventListener('click', () => {
            this.toggleTheme();
        });

        // Tezkor qidiruv paneli
        const searchDropdown = document.getElementById('search-dropdown');
        const globalSearchInput = document.getElementById('global-search-input');

        document.getElementById('search-toggle-btn').addEventListener('click', () => {
            searchDropdown.classList.toggle('hidden');
            if (!searchDropdown.classList.contains('hidden')) {
                globalSearchInput.focus();
            }
        });

        document.getElementById('search-close-btn').addEventListener('click', () => {
            searchDropdown.classList.add('hidden');
            globalSearchInput.value = '';
            document.getElementById('instant-search-results').innerHTML = '';
        });

        globalSearchInput.addEventListener('input', (e) => {
            this.handleInstantSearch(e.target.value);
        });

        // Karusel tugmalari
        document.getElementById('carousel-prev').addEventListener('click', () => {
            this.goToSlide(this.currentSlide - 1);
        });

        document.getElementById('carousel-next').addEventListener('click', () => {
            this.goToSlide(this.currentSlide + 1);
        });

        // Katalog qidiruv va saralash
        document.getElementById('catalog-search-input').addEventListener('input', (e) => {
            this.searchQuery = e.target.value;
            this.renderCatalog();
        });

        document.getElementById('sort-select').addEventListener('change', (e) => {
            this.currentSort = e.target.value;
            this.renderCatalog();
        });

        // Katalog kategoriya tugmalari
        document.querySelectorAll('#category-filters .pill').forEach(btn => {
            btn.addEventListener('click', () => {
                this.currentCategory = btn.dataset.category;
                this.updateCategoryUI();
                this.renderCatalog();
            });
        });

        // Modalni yopish
        document.getElementById('modal-close-btn').addEventListener('click', () => {
            document.getElementById('product-modal').classList.add('hidden');
        });

        document.getElementById('modal-backdrop').addEventListener('click', () => {
            document.getElementById('product-modal').classList.add('hidden');
        });
    }
}

// Ilovani ishga tushirish
const app = new AppleStoreApp();    