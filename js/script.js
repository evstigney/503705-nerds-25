/* --------- ПОКАЗЫВАЕМ ОКНО ОБРАТНОЙ СВЯЗИ -----------*/

var openModalWriteUs = function () {
  var modalWindow = document.querySelector('.modal-write-us');
  modalWindow.style.top = '-100%';
  modalWindow.style.display= 'flex';
  var windowPosition = parseInt(modalWindow.style.top);
  setTimeout(function () {
    while(windowPosition < 50) {
      windowPosition += 1;
      modalWindow.style.top = windowPosition + '%';
    }
  }, 100);
};

var closeModalWriteUs = function () {
  var modalWindow = document.querySelector('.modal-write-us');
  var windowPosition = parseInt(modalWindow.style.top);
  setTimeout(function () {
    while (windowPosition > -100) {
    windowPosition -= 1;
    modalWindow.style.top = windowPosition + '%';
    }
  }, 1);
};
