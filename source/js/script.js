/* в этот файл добавляет скрипты*/
const header = document.querySelector('.header');
const navigationToggle = document.querySelector('.navigation__toggle');
header.classList.add('header--js-enable');

navigationToggle.addEventListener('click', () => {
  header.classList.toggle('header--menu-open')
})
