// Функция для проверки видимости элемента
function isElementInView(element) {
    const rect = element.getBoundingClientRect();
    return rect.top >= 0 && rect.bottom <= window.innerHeight;
  }
  
  // Функция для применения анимации
  function animateRoles() {
    const roles = document.querySelectorAll('.role');
    roles.forEach(role => {
      if (isElementInView(role)) {
        role.classList.add('show');
      }
    });
  }
  
  // Прокрутка страницы
  window.addEventListener('scroll', animateRoles);
  
  // Начальная проверка
  animateRoles();
  
  const images = document.querySelectorAll('.role img');

  images.forEach(image => {
    image.addEventListener('mouseenter', () => {
      image.style.filter = 'grayscale(0)';  // Убираем черно-белый фильтр
      image.style.transform = 'scale(1.1)'; // Плавное увеличение
      image.style.transition = 'transform 0.3s ease, filter 0.3s ease'; // Плавные переходы
    });
  
    image.addEventListener('mouseleave', () => {
      image.style.filter = 'grayscale(0.5)';  // Возвращаем черно-белый фильтр
      image.style.transform = 'scale(1)';  // Возвращаем размер картинки в исходное состояние
      image.style.transition = 'transform 0.3s ease, filter 0.3s ease'; // Плавные переходы
    });
  });
  
