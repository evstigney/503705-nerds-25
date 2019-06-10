/* ОЖИВЛЯЕМ СЛАЙДЕР */

var showSlider = function () {
    var target = event.target;
    if (target.classList.contains('slider-button-current')) {
      return;
    } else {
      var sliderButtonsArr = document.querySelectorAll('.slider-button');
      var slidersArr = document.querySelectorAll('.main-feature-item');
      for (var i = 0; i < sliderButtonsArr.length; i++) {
        var currentButton = sliderButtonsArr[i];
        var currentSlider = slidersArr[i];
        if (currentButton.classList.contains('slider-button-current')) {
          currentButton.classList.remove('slider-button-current');
          currentSlider.classList.remove('current-slider')
          break;
        }
      }
      for (var i = 0; i < sliderButtonsArr.length; i++) {
        if (sliderButtonsArr[i] === target) {
          var sliderIndex = i;
        }
      }
      target.classList.add('slider-button-current');
      slidersArr[sliderIndex].classList.add('current-slider');
    }
};
