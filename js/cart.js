// cart.js

class Cart {
    constructor() {
        this.cart = JSON.parse(localStorage.getItem('cart')) || [];
        this.updateCartCount();
    }

    addItem(item) {
        const existingItem = this.cart.find(i => i.id === item.id);
        if (existingItem) {
            existingItem.quantity++;
        } else {
            this.cart.push({...item, quantity: 1});
        }
        this.saveCart();
    }

    removeItem(id) {
        this.cart = this.cart.filter(item => item.id !== id);
        this.saveCart();
    }

    updateQuantity(id, quantity) {
        const item = this.cart.find(i => i.id === id);
        if (item) {
            item.quantity = quantity;
            if (item.quantity <= 0) this.removeItem(id);
            this.saveCart();
        }
    }

    getTotal() {
        return this.cart.reduce((total, item) => total + item.price * item.quantity, 0);
    }

    saveCart() {
        localStorage.setItem('cart', JSON.stringify(this.cart));
        this.updateCartCount();
        this.renderCartItems();
    }

    updateCartCount() {
        const count = this.cart.reduce((sum, item) => sum + item.quantity, 0);
        document.querySelectorAll('.cart-count').forEach(el => {
            el.textContent = count;
        });
    }

renderCartItems() {
    const cartItems = document.getElementById('cartItems');
    if (!cartItems) return;
    
    cartItems.innerHTML = '';
    this.cart.forEach(item => {
        const cartItem = document.createElement('div');
        cartItem.className = 'cart-item';
        cartItem.innerHTML = `
            <img src="${item.image}" alt="${item.name}">
            <div class="cart-item-info">
                <span class="zag">${item.name}</span>
                <span class="cart-item-price" style="float:right">${item.price.toFixed(2)} руб.</span>
                <div class="cart-item-controls">
                    <button class="decrease">-</button>
                    <span class="cart-item-quantity">${item.quantity}</span>
                    <button class="increase">+</button>
                    <button class="remove-item" style="margin-left:10px">×</button>
                </div>
            </div>
        `;
        
        cartItem.querySelector('.decrease').addEventListener('click', (e) => {
            e.stopPropagation(); // Остановить всплытие
            this.updateQuantity(item.id, item.quantity - 1);
        });
        
        cartItem.querySelector('.increase').addEventListener('click', (e) => {
            e.stopPropagation(); // Остановить всплытие
            this.updateQuantity(item.id, item.quantity + 1);
        });
        
        cartItem.querySelector('.remove-item').addEventListener('click', (e) => {
            e.stopPropagation(); // Остановить всплытие
            this.removeItem(item.id);
        });
        
        cartItems.appendChild(cartItem);
    });
    
    document.getElementById('cartTotal').textContent = `${this.getTotal().toFixed(2)} руб.`;
}
}

// Инициализация корзины
const cart = new Cart();

// Показ/скрытие корзины
document.getElementById('cartIcon').addEventListener('click', () => {
    document.getElementById('cartSidebar').classList.add('active');
    cart.renderCartItems();
});

document.querySelector('.close-cart').addEventListener('click', () => {
    document.getElementById('cartSidebar').classList.remove('active');
});

// Закрытие корзины при клике вне ее области
document.addEventListener('click', (e) => {
    const cartSidebar = document.getElementById('cartSidebar');
    if (cartSidebar.classList.contains('active') && 
        !e.target.closest('#cartSidebar') && 
        !e.target.closest('#cartIcon')) {
        cartSidebar.classList.remove('active');
    }
});

// Обработка оформления заказа
document.querySelector('.order-btn').addEventListener('click', () => {
    // Показываем модальное окно
    document.getElementById('orderModal').style.display = 'flex';
    
    // Заполняем данные из корзины, если они есть
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    
    // Можно добавить предзаполнение данных, если они есть в localStorage
    const savedName = localStorage.getItem('userName');
    const savedPhone = localStorage.getItem('userPhone');
    
    if (savedName) document.getElementById('orderName').value = savedName;
    if (savedPhone) document.getElementById('orderPhone').value = savedPhone;
});

// Закрытие модального окна
document.querySelector('.close-order-modal').addEventListener('click', () => {
    document.getElementById('orderModal').style.display = 'none';
});

// Закрытие при клике вне окна
document.getElementById('orderModal').addEventListener('click', (e) => {
    if (e.target === document.getElementById('orderModal')) {
        document.getElementById('orderModal').style.display = 'none';
    }
});

// Обработка формы заказа
document.getElementById('orderForm')?.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Получаем данные формы
    const formData = {
        name: document.getElementById('orderName').value,
        phone: document.getElementById('orderPhone').value,
        deliveryType: document.querySelector('input[name="deliveryType"]:checked').value,
        street: document.getElementById('orderStreet').value,
        house: document.getElementById('orderHouse').value,
        entrance: document.getElementById('orderEntrance').value,
        floor: document.getElementById('orderFloor').value,
        apartment: document.getElementById('orderApartment').value,
        comment: document.getElementById('orderComment').value,
        cart: JSON.parse(localStorage.getItem('cart')) || [],
        total: cart.getTotal().toFixed(2)
    };
    
    // Сохраняем основные данные для будущих заказов
    localStorage.setItem('userName', formData.name);
    localStorage.setItem('userPhone', formData.phone);
    
    // Показываем лоадер
    document.getElementById('loader').style.display = 'block';
    
    // Здесь можно добавить AJAX-запрос для отправки данных на сервер
    setTimeout(() => {
        document.getElementById('loader').style.display = 'none';
        document.getElementById('orderModal').style.display = 'none';
        
        // Очищаем корзину после успешного оформления
        cart.cart = [];
        cart.saveCart();
        
        // Показываем подтверждение
        alert(`Заказ оформлен! Сумма: ${formData.total} руб. Мы свяжемся с вами для подтверждения.`);
    }, 1500);
});

// Показ/скрытие полей адреса в зависимости от способа получения
document.querySelectorAll('input[name="deliveryType"]').forEach(radio => {
    radio.addEventListener('change', function() {
        const deliveryAddress = document.querySelector('.delivery-address');
        if (this.value === 'delivery') {
            deliveryAddress.style.display = 'block';
        } else {
            deliveryAddress.style.display = 'none';
        }
    });
});
