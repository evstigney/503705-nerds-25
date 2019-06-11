/*------МОДАЛЬНОЕ ОКНО-------*/

var buttonWriteUs = document.querySelector('a[href="writeus.html"]'); // кнопка открытия
var buttonClose = document.querySelector('.modal-close'); // кнопка закрытия
var windowWriteUs = document.querySelector('.modal-write-us'); // окно Напишите нам

var setBeginPosition = function (element) { // устанавливаем начальную позицию элемента
  element.style.top = '-100%';
  element.style.display = 'flex';
  buttonWriteUs.removeAttribute('href');
};

var setFinalPosition = function (element) { // устанавливаем конечную позицию элемента
  element.style.display = 'none';
  element.style.top = '50%';
  buttonWriteUs.setAttribute('href', 'writeus.html');
};

var showElement = function (element) { // показываем элемент
  setBeginPosition(element);
  element.style.top = '50%';
};

var hideElement = function (element) { // прячем элемент
  element.style.top = '-300%';
  setFinalPosition(element);
};

var buttonWriteUsHandler = function () { // обработчик показа окна
  showElement(windowWriteUs);
};

var buttonCloseHandler = function () { // обработчик скрытия окна
  hideElement(windowWriteUs);
};

buttonWriteUs.addEventListener('click', buttonWriteUsHandler); // добавляем обработчик кнопке Напишите нам
buttonClose.addEventListener('click', buttonCloseHandler); // добавляем обработчик кнопке Закрыть
