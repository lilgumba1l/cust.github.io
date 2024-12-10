// Переключение видимости левой боковой панели
document.querySelector('.sidebar-toggle').addEventListener('click', function() {
  const sidebar = document.querySelector('.sidebar');
  const roleSidebar = document.querySelector('.role-sidebar');

  // Закрываем правую панель, если она открыта
  if (roleSidebar.classList.contains('open')) {
    roleSidebar.classList.remove('open');
  }

  // Переключаем левую панель
  sidebar.classList.toggle('open');
});

// Переключение видимости правой боковой панели
document.querySelector('.role-sidebar-toggle').addEventListener('click', function() {
  const sidebar = document.querySelector('.sidebar');
  const roleSidebar = document.querySelector('.role-sidebar');

  // Закрываем левую панель, если она открыта
  if (sidebar.classList.contains('open')) {
    sidebar.classList.remove('open');
  }

  // Переключаем правую панель
  roleSidebar.classList.toggle('open');
});
