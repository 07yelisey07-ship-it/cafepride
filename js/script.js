document.addEventListener('DOMContentLoaded', function() {
    // Элементы меню
    const burgerMenu = document.querySelector('.burger-menu');
    const navMenu = document.querySelector('.page-nav');
    const navOverlay = document.querySelector('.nav-overlay');
    const body = document.body;
    
    // Функция закрытия меню
    function closeMenu() {
        burgerMenu.classList.remove('active');
        navMenu.classList.remove('active');
        navOverlay.classList.remove('active');
        body.style.overflow = '';
        burgerMenu.setAttribute('aria-expanded', 'false');
    }
    
    // Функция открытия/закрытия меню
    function toggleMenu() {
        const isOpen = navMenu.classList.contains('active');
        
        if (isOpen) {
            closeMenu();
        } else {
            burgerMenu.classList.add('active');
            navMenu.classList.add('active');
            navOverlay.classList.add('active');
            body.style.overflow = 'hidden';
            burgerMenu.setAttribute('aria-expanded', 'true');
        }
    }
    
    // Обработчики событий для меню
    burgerMenu.addEventListener('click', toggleMenu);
    navOverlay.addEventListener('click', closeMenu);
    
    // Закрытие по Esc
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && navMenu.classList.contains('active')) {
            closeMenu();
        }
    });
    
    // Плавная прокрутка для всех якорных ссылок
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            // Если это ссылка в навигационном меню - закрываем меню
            if (this.closest('.page-nav')) {
                closeMenu();
            }
            
            // Стандартная плавная прокрутка
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            e.preventDefault();
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                // Прокрутка с учетом фиксированного заголовка
                const headerHeight = document.querySelector('.main-header').offsetHeight;
                const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
});
//---------------------------пицца--------------------------------------------
document.getElementById('pizzaCard').addEventListener('click', function() {
        // Показываем лоадер перед переходом
        document.getElementById('loader').style.display = 'block';
        
        
        setTimeout(function() {
            // Переходим на страницу pizza.html
            window.location.href = 'pizza.html';
        },);
    });
    
   


//-----------------------------салат--------------------------------------------
    document.getElementById('saladCard').addEventListener('click', function() {
        // Показываем лоадер перед переходом
        document.getElementById('loader').style.display = 'block';
        
        
        setTimeout(function() {
            // Переходим на страницу salad.html
            window.location.href = 'salad.html';
        },);
    });
    
    // Скрываем лоадер при загрузке страницы (на случай возврата)
    window.addEventListener('load', function() {
        document.getElementById('loader').style.display = 'none';
    });


//-------------------------------------горячие блюда--------------------------------
     document.getElementById('hotdishesCard').addEventListener('click', function() {
        // Показываем лоадер перед переходом
        document.getElementById('loader').style.display = 'block';
        
        
        setTimeout(function() {
            // Переходим на страницу hotdiches.html
            window.location.href = 'hotdishes.html';
        },);
    });
    
    // Скрываем лоадер при загрузке страницы (на случай возврата)
    window.addEventListener('load', function() {
        document.getElementById('loader').style.display = 'none';
    });


//----------------------------бургеры на углях---------------------------------------
    document.getElementById('burgerCard').addEventListener('click', function() {
        // Показываем лоадер перед переходом
        document.getElementById('loader').style.display = 'block';
        
        
        setTimeout(function() {
            // Переходим на страницу hotdiches.html
            window.location.href = 'burger.html';
        },);
    });
    
    // Скрываем лоадер при загрузке страницы (на случай возврата)
    window.addEventListener('load', function() {
        document.getElementById('loader').style.display = 'none';
    });


//-----------------------------------напитки----------------------------------------
    document.getElementById('napitokCard').addEventListener('click', function() {
        // Показываем лоадер перед переходом
        document.getElementById('loader').style.display = 'block';
        
        
        setTimeout(function() {
            // Переходим на страницу hotdiches.html
            window.location.href = 'napitok.html';
        },);
    });
    
    // Скрываем лоадер при загрузке страницы (на случай возврата)
    window.addEventListener('load', function() {
        document.getElementById('loader').style.display = 'none';
    });


//---------------------------------хачапури---------------------------------------
    document.getElementById('haccapuriCard').addEventListener('click', function() {
        // Показываем лоадер перед переходом
        document.getElementById('loader').style.display = 'block';
        
        
        setTimeout(function() {
            // Переходим на страницу hotdiches.html
            window.location.href = 'haccapuri.html';
        },);
    });
    
    // Скрываем лоадер при загрузке страницы (на случай возврата)
    window.addEventListener('load', function() {
        document.getElementById('loader').style.display = 'none';
    });


//----------------------------------------шаурма---------------------------------------
    document.getElementById('shawarmaCard').addEventListener('click', function() {
        // Показываем лоадер перед переходом
        document.getElementById('loader').style.display = 'block';
        
        
        setTimeout(function() {
            // Переходим на страницу hotdiches.html
            window.location.href = 'shawarma.html';
        },);
    });
    
    // Скрываем лоадер при загрузке страницы (на случай возврата)
    window.addEventListener('load', function() {
        document.getElementById('loader').style.display = 'none';
    });


//--------------------------------------мангал меню---------------------------------
    document.getElementById('grillCard').addEventListener('click', function() {
        // Показываем лоадер перед переходом
        document.getElementById('loader').style.display = 'block';
        
        
        setTimeout(function() {
            // Переходим на страницу hotdiches.html
            window.location.href = 'grill.html';
        },);
    });
    
    // Скрываем лоадер при загрузке страницы (на случай возврата)
    window.addEventListener('load', function() {
        document.getElementById('loader').style.display = 'none';
    });


//-------------------------------закуски-------------------------------------------
    document.getElementById('snackCard').addEventListener('click', function() {
        // Показываем лоадер перед переходом
        document.getElementById('loader').style.display = 'block';
        
        
        setTimeout(function() {
            // Переходим на страницу hotdiches.html
            window.location.href = 'snack.html';
        },);
    });
    
    // Скрываем лоадер при загрузке страницы (на случай возврата)
    window.addEventListener('load', function() {
        document.getElementById('loader').style.display = 'none';
    });
    
// Маска для телефона
document.getElementById('phone')?.addEventListener('input', function(e) {
    let phone = this.value.replace(/\D/g, '');
    let formattedPhone = '+375';
    
    if (phone.length > 3) {
        formattedPhone += ' (' + phone.substring(3, 5);
    }
    if (phone.length >= 5) {
        formattedPhone += ') ' + phone.substring(5, 8);
    }
    if (phone.length >= 8) {
        formattedPhone += '-' + phone.substring(8, 10);
    }
    if (phone.length >= 10) {
        formattedPhone += '-' + phone.substring(10, 12);
    }
    
    // Ограничиваем длину (3 код + 9 цифр = 12 символов)
    if (phone.length > 12) {
        phone = phone.substring(0, 12);
    }
    
    this.value = formattedPhone;
});

// Запрет на изменение первых 5 символов (+375 )
document.getElementById('phone')?.addEventListener('keydown', function(e) {
    if (this.selectionStart < 5 && e.keyCode !== 8 && e.keyCode !== 46 && !e.ctrlKey) {
        e.preventDefault();
    }
});
// Функция для получения текущей даты и времени в нужном формате
function getCurrentDateTime() {
    const now = new Date();
    
    // Добавляем 1 час к текущему времени (чтобы бронь была минимум через час)
    now.setHours(now.getHours() + 1);
    
    // Округляем минуты до ближайших 15 минут (0, 15, 30, 45)
    const minutes = Math.ceil(now.getMinutes() / 15) * 15;
    now.setMinutes(minutes);
    
    // Форматируем дату в формат, который понимает input[type="datetime-local"]
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');
    const hours = String(now.getHours()).padStart(2, '0');
    const mins = String(now.getMinutes()).padStart(2, '0');
    
    return `${year}-${month}-${day}T${hours}:${mins}`;
}

// Установка текущей даты и времени в поле бронирования
const dateInput = document.getElementById('date');
if (dateInput) {
    dateInput.min = getCurrentDateTime(); // Минимальное время - текущее
    dateInput.value = getCurrentDateTime(); // Устанавливаем значение по умолчанию
    
    // Можно также установить максимальную дату (например, на 3 месяца вперед)
    const maxDate = new Date();
    maxDate.setMonth(maxDate.getMonth() + 3);
    dateInput.max = maxDate.toISOString().slice(0, 16);
}

// Обработка формы бронирования
document.querySelector('.booking-form')?.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Показываем лоадер
    document.getElementById('loader').style.display = 'block';
    
    // Здесь можно добавить AJAX-запрос для отправки данных на сервер
    // Для примера просто покажем alert
    setTimeout(function() {
        document.getElementById('loader').style.display = 'none';
        alert('Ваш столик успешно забронирован! Мы свяжемся с вами для подтверждения.');
        e.target.reset();
        
        // Восстанавливаем значение по умолчанию для даты
        if (dateInput) {
            dateInput.value = getCurrentDateTime();
        }
    }, 1500);
});
// Галерея
// Галерея с Font Awesome
document.addEventListener('DOMContentLoaded', function() {
    // Подключаем Font Awesome (если еще не подключен)
    if (!document.querySelector('link[href*="font-awesome"]')) {
        const faLink = document.createElement('link');
        faLink.rel = 'stylesheet';
        faLink.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css';
        document.head.appendChild(faLink);
    }

    const galleryImages = [
        'images/gallery1.jpg',
        'images/gallery2.jpg',
        'images/gallery3.jpg',
        'images/gallery4.jpg',
        'images/gallery5.jpg'
        // Добавьте свои изображения
    ];
    
    const slider = document.querySelector('.gallery-slider');
    const dotsContainer = document.querySelector('.gallery-dots');
    const prevBtn = document.querySelector('.gallery-prev');
    const nextBtn = document.querySelector('.gallery-next');
    let currentSlide = 0;
    let slideInterval;
    let isAnimating = false;
    
    // Инициализация галереи
    function initGallery() {
        // Создаем слайды
        galleryImages.forEach((image, index) => {
            // Слайд
            const slide = document.createElement('div');
            slide.className = 'gallery-slide';
            slide.innerHTML = `<img src="${image}" alt="Галерея ${index + 1}" loading="lazy">`;
            slider.appendChild(slide);
            
            // Точки-индикаторы
            const dot = document.createElement('div');
            dot.className = 'gallery-dot';
            if (index === 0) dot.classList.add('active');
            dot.addEventListener('click', () => !isAnimating && goToSlide(index));
            dotsContainer.appendChild(dot);
        });
        
        // Навигация
        prevBtn.addEventListener('click', () => !isAnimating && prevSlide());
        nextBtn.addEventListener('click', () => !isAnimating && nextSlide());
        
        // Автопрокрутка
        startInterval();
        
        // Пауза при наведении
        slider.addEventListener('mouseenter', pauseSlider);
        slider.addEventListener('mouseleave', startInterval);
        
        // Обновление кнопок
        updateButtons();
    }
    
    // Переход к слайду
    function goToSlide(slideIndex) {
        if (isAnimating || slideIndex === currentSlide) return;
        
        isAnimating = true;
        currentSlide = slideIndex;
        
        slider.style.transform = `translateX(-${currentSlide * 100}%)`;
        
        // Обновляем индикаторы
        document.querySelectorAll('.gallery-dot').forEach((dot, index) => {
            dot.classList.toggle('active', index === currentSlide);
        });
        
        // Обновляем кнопки
        updateButtons();
        
        // Сбрасываем анимацию
        setTimeout(() => {
            isAnimating = false;
        }, 600);
    }
    
    // Следующий слайд
    function nextSlide() {
        const nextSlide = (currentSlide + 1) % galleryImages.length;
        goToSlide(nextSlide);
        resetInterval();
    }
    
    // Предыдущий слайд
    function prevSlide() {
        const prevSlide = (currentSlide - 1 + galleryImages.length) % galleryImages.length;
        goToSlide(prevSlide);
        resetInterval();
    }
    
    // Обновление состояния кнопок
    function updateButtons() {
        prevBtn.classList.toggle('disabled', currentSlide === 0);
        nextBtn.classList.toggle('disabled', currentSlide === galleryImages.length - 1);
    }
    
    // Автопрокрутка
    function startInterval() {
        if (slideInterval) clearInterval(slideInterval);
        slideInterval = setInterval(nextSlide, 7000);
    }
    
    function pauseSlider() {
        clearInterval(slideInterval);
    }
    
    function resetInterval() {
        pauseSlider();
        startInterval();
    }
    
    // Инициализируем галерею
    initGallery();
});
// Таймер работы кафе
function updateWorkingHoursTimer() {
    const now = new Date();
    const dayOfWeek = now.getDay(); // 0 - воскресенье, 6 - суббота
    const currentHour = now.getHours();
    const currentMinute = now.getMinutes();
    
    const openingTime = 11; // Открытие всегда в 11:00
    let closingTime = (dayOfWeek >= 5) ? 0 : 23; // Для Пт-Сб закрытие в 02:00 следующего дня
    let isOpen = false;
    
    // Проверяем, открыто ли кафе сейчас
    if (dayOfWeek >= 0 && dayOfWeek <= 4) { // Вс-Чт
        isOpen = (currentHour >= openingTime && currentHour < closingTime);
    } else { // Пт-Сб
    // Открыто если после 11:00 и до полуночи
    isOpen = (currentHour >= openingTime && currentHour < 24);
}
    
    const timerStatus = document.getElementById('timerStatus');
    const timerDisplay = document.getElementById('timerDisplay');
    
    if (isOpen) {
        timerStatus.textContent = 'Закрываемся через:';
        
        // Рассчитываем время закрытия
        let closeTime = new Date(now);
        if (dayOfWeek >= 5) { // Пт-Сб
            if (currentHour >= openingTime) {
                // После открытия - закрытие в 02:00 следующего дня
                closeTime.setDate(closeTime.getDate() + 1);
                closeTime.setHours(closingTime, 0, 0, 0);
            } else {
                // До открытия - закрытие сегодня в 02:00 (но это не должно случиться)
                closeTime.setHours(closingTime, 0, 0, 0);
            }
        } else {
            // Вс-Чт - закрытие сегодня в 23:00
            closeTime.setHours(closingTime, 0, 0, 0);
        }
        
        // Разница во времени в миллисекундах
        let diffMs = closeTime - now;
        
        // Преобразуем разницу в часы и минуты
        let diffHours = Math.floor(diffMs / (1000 * 60 * 60));
        let diffMinutes = Math.floor((diffMs % (1000 * 60 * 60)) / (1000 * 60));
        
        // Форматируем вывод
        timerDisplay.innerHTML = `
            <span class="time-value">${diffHours}</span> <span class="time-label">ч</span> 
            <span class="time-value">${diffMinutes}</span> <span class="time-label">мин</span>
        `;
    } else {
        timerStatus.textContent = 'Открываемся через:';
        
        let nextOpeningTime = new Date(now);
        
        // Если сейчас время после закрытия
        if ((dayOfWeek >= 5 && currentHour >= closingTime && currentHour < openingTime) || 
            (dayOfWeek <= 4 && currentHour >= closingTime)) {
            nextOpeningTime.setDate(nextOpeningTime.getDate() + 1);
        }
        nextOpeningTime.setHours(openingTime, 0, 0, 0);
        
        // Разница во времени в миллисекундах
        let diffMs = nextOpeningTime - now;
        
        // Преобразуем разницу в часы и минуты
        let diffHours = Math.max(0, Math.floor(diffMs / (1000 * 60 * 60)));
        let diffMinutes = Math.max(0, Math.floor((diffMs % (1000 * 60 * 60)) / (1000 * 60)));
        
        // Форматируем вывод
        timerDisplay.innerHTML = `
            <span class="time-value">${diffHours}</span> <span class="time-label">часов</span> 
            <span class="time-value">${diffMinutes}</span> <span class="time-label">минут</span>
        `;
    }
}

// Обновляем таймер каждую минуту
updateWorkingHoursTimer();
setInterval(updateWorkingHoursTimer, 60000);

document.getElementById('geolocation').addEventListener('click', function() {
        // Показываем лоадер перед переходом
        document.getElementById('loader').style.display = 'block';
        
        
        setTimeout(function() {
            // Переходим на страницу 
            window.location.href = 'https://www.google.com/maps/place/%D0%9A%D0%B0%D1%84%D0%B5+%D0%9F%D1%80%D0%B0%D0%B9%D0%B4/@52.894432,30.0421208,17z/data=!3m1!4b1!4m6!3m5!1s0x46d6b7fa5297cfed:0xfe3d02d22b566025!8m2!3d52.894432!4d30.0421208!16s%2Fg%2F11ngtnq4y7?entry=ttu&g_ep=EgoyMDI1MDcwOS4wIKXMDSoASAFQAw%3D%3D';
        },);
    });
    
    // Скрываем лоадер при загрузке страницы (на случай возврата)
    window.addEventListener('load', function() {
        document.getElementById('loader').style.display = 'none';
    });

    document.getElementById('instagram').addEventListener('click', function() {
        // Показываем лоадер перед переходом
        document.getElementById('loader').style.display = 'block';
        
        
        setTimeout(function() {
            // Переходим на страницу 
            window.location.href = 'https://www.instagram.com/cafepride1/?igsh=dWRreTN6czNvNnVo';
        },);
    });
    
    // Скрываем лоадер при загрузке страницы (на случай возврата)
    window.addEventListener('load', function() {
        document.getElementById('loader').style.display = 'none';
    });
    document.getElementById('phoneContact')?.addEventListener('click', function() {
    // Показываем лоадер перед вызовом
    document.getElementById('loader').style.display = 'block';
    
    setTimeout(function() {
        // Открываем приложение телефона с номером
        window.location.href = 'tel:+375257070999';
        
        // Скрываем лоадер (на случай, если переход не сработал)
        document.getElementById('loader').style.display = 'none';
    }, 100); // Небольшая задержка для плавности
});
    document.getElementById('#').addEventListener('click', function() {
        // Показываем лоадер перед переходом
        document.getElementById('loader').style.display = 'block';
        
        
        setTimeout(function() {
            // Переходим на страницу
            window.location.href = 'https://yandex.by/search/?clid=2380526-287&win=489&from=chromesearch&text=%D0%BA%D0%B0%D1%84%D0%B5+%D0%BF%D1%80%D0%B0%D0%B9%D0%B4&rdrnd=803008&lr=155&redircnt=1752407133.1';
        },);
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

// Маска для телефона в форме заказа
document.getElementById('orderPhone')?.addEventListener('input', function(e) {
    let phone = this.value.replace(/\D/g, '');
    let formattedPhone = '+375';
    
    if (phone.length > 3) {
        formattedPhone += ' (' + phone.substring(3, 5);
    }
    if (phone.length >= 5) {
        formattedPhone += ') ' + phone.substring(5, 8);
    }
    if (phone.length >= 8) {
        formattedPhone += '-' + phone.substring(8, 10);
    }
    if (phone.length >= 10) {
        formattedPhone += '-' + phone.substring(10, 12);
    }
    
    if (phone.length > 12) {
        phone = phone.substring(0, 12);
    }
    
    this.value = formattedPhone;
});

document.getElementById('orderPhone')?.addEventListener('keydown', function(e) {
    if (this.selectionStart < 5 && e.keyCode !== 8 && e.keyCode !== 46 && !e.ctrlKey) {
        e.preventDefault();
    }

});
