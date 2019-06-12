/*------МОДАЛЬНОЕ ОКНО-------*/

var buttonWriteUs = document.querySelector('a[href="writeus.html"]'); // кнопка открытия
var buttonClose = document.querySelector('.modal-close'); // кнопка закрытия
var windowWriteUs = document.querySelector('.modal-write-us'); // окно Напишите нам

var setBeginPosition = function (element) { // устанавливаем начальную позицию элемента
  element.style.top = '-100%';
  element.style.display = 'flex';
  buttonWriteUs.removeAttribute('href');
};

var showElement = function (element) { // показываем элемент
  setBeginPosition(element);
  var position = parseInt(element.style.top);
  var animation = setInterval(function () {
    if (position >= 50) {
      clearInterval(animation);
    } else {
      position += 1;
      element.style.top = position + '%';
      return element.style.top;
    }
  }, 3);
};

var hideElement = function (element) { // прячем элемент
  var position = parseInt(element.style.top);
  var animation = setInterval(function () {
    if (position >= 300) {
      clearInterval(animation);
    } else {
      position += 1;
      element.style.top = position + '%';
    }
  }, 1);
};

var buttonWriteUsHandler = function () { // обработчик показа окна
  if (event.type === 'click' || event.keyCode === 32) {
    showElement(windowWriteUs);
  } else {
    return false;
  }
};

var buttonCloseHandler = function () { // обработчик скрытия окна
  hideElement(windowWriteUs);
};

buttonWriteUs.addEventListener('click', buttonWriteUsHandler); // добавляем обработчик по клику на кнопке Напишите нам
buttonClose.addEventListener('click', buttonCloseHandler); // добавляем обработчик по клику на кнопке Закрыть

buttonWriteUs.addEventListener('keypress', buttonWriteUsHandler); // добавляем обработчик по нажатию на кнопке Напишите нам
