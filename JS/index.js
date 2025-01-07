document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); // предотвращает отправку формы

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    // Здесь можно добавить код для отправки данных на сервер

    // Показать сообщение об успехе
    document.getElementById("formResponse").innerText = `Спасибо, ${name}! Ваше сообщение отправлено.`;
    
    // Очистить форму
    document.getElementById("contactForm").reset();
});

// Плавная прокрутка к секциям при нажатии на навигационные ссылки
const links = document.querySelectorAll('nav a');
links.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault(); // Предотвращаем стандартное поведение ссылки
        const targetId = this.getAttribute('href'); // Получаем ID секции
        const targetSection = document.querySelector(targetId);
        
        targetSection.scrollIntoView({ behavior: 'smooth' }); // Плавная прокрутка к секции
    });
});
