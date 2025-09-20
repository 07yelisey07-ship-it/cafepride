// pizza-script.js
document.addEventListener('DOMContentLoaded', () => {
    // Функция для обновления состояния всех кнопок
    const updateAllAddButtons = () => {
        document.querySelectorAll('.add-button').forEach(button => {
            const itemId = button.closest('.scroll-list__item').dataset.id;
            const isInCart = cart.cart.some(item => item.id === itemId);
            
            if (isInCart) {
                button.classList.add('added');
                button.textContent = 'В корзине';
            } else {
                button.classList.remove('added');
                button.textContent = 'Добавить';
            }
        });
    };

    // Обработчики для карточек пицц
    document.querySelectorAll('.scroll-list__item').forEach(item => {
        const id = item.dataset.id;
        const name = item.querySelector('.item-name').textContent;
        const ingredients = item.querySelector('.item-ingredients')?.textContent ?? '';
        const price = parseFloat(item.querySelector('.item-price').textContent);
        const image = item.querySelector('.item-image').src;
        
        // Клик по карточке
        item.addEventListener('click', (e) => {
            if (!e.target.closest('.add-button')) {
                const isInCart = cart.cart.some(cartItem => cartItem.id === id);
                
                if (isInCart) {
                    // Если товар в корзине - открываем корзину
                    cart.renderCartItems();
                    document.getElementById('cartSidebar').classList.add('active');
                    return; // Важно: прекращаем выполнение
                }
                
                // Если товара нет - открываем модалку
                document.getElementById('modalPizzaImage').src = image;
                document.getElementById('modalPizzaName').textContent = name;
                document.getElementById('modalPizzaIngredients').textContent = ingredients;
                document.getElementById('modalPizzaPrice').textContent = `${price.toFixed(2)} руб.`;
                document.getElementById('pizzaModal').style.display = 'flex';
                
                // Обработчик для кнопки в модалке
                document.querySelector('.add-to-cart-btn').onclick = () => {
                    cart.addItem({id, name, price, image});
                    document.getElementById('pizzaModal').style.display = 'none';
                    cart.renderCartItems();
                    updateAllAddButtons();
                };
            }
        });
        
        // Кнопка "Добавить"
        item.querySelector('.add-button').addEventListener('click', function(e) {
            e.stopPropagation();
            const isInCart = cart.cart.some(cartItem => cartItem.id === id);
            
            if (!isInCart) {
                cart.addItem({id, name, price, image});
                this.classList.add('added');
                this.textContent = 'В корзине';
                cart.renderCartItems();
            } else {
                document.getElementById('cartSidebar').classList.add('active');
                cart.renderCartItems();
            }
            updateAllAddButtons();
        });
    });
    
    // Закрытие модалки
    document.querySelector('.close-modal').addEventListener('click', () => {
        document.getElementById('pizzaModal').style.display = 'none';
    });
    
    // Закрытие модалки при клике вне ее
    document.getElementById('pizzaModal').addEventListener('click', (e) => {
        if (e.target === document.getElementById('pizzaModal')) {
            document.getElementById('pizzaModal').style.display = 'none';
        }
    });

    // Обновляем кнопки при загрузке
    updateAllAddButtons();
});

// Модифицируем метод saveCart
const originalSaveCart = Cart.prototype.saveCart;
Cart.prototype.saveCart = function() {
    originalSaveCart.call(this);
    document.querySelectorAll('.add-button').forEach(button => {
        const itemId = button.closest('.scroll-list__item').dataset.id;
        const isInCart = this.cart.some(item => item.id === itemId);
        
        if (isInCart) {
            button.classList.add('added');
            button.textContent = 'В корзине';
        } else {
            button.classList.remove('added');
            button.textContent = 'Добавить';
        }
    });
};
// Обработчик для кнопки возврата на главную
document.getElementById('homeIcon').addEventListener('click', function() {
    window.location.href = 'index.html';
});