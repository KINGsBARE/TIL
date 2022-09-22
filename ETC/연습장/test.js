// 2) Image Slider

//슬라이더 요소선택해서 변수에 담기
var slider = document.querySelector('#slider');
var slides = slider.querySelector('.slides');
var slide = slides.querySelectorAll('.slide');

//화면에 보여지는 슬라이더가 몇번인지 알려주는 변수
var currentSlide = 0;

setInterval(function () {
  //현재있는 위치에서 어디로 이동할껀지
  var from = -(1024 * currentSlide); //현제 슬라이드에서 1024 를 뺸지점
  var to = from - 1024; //프론에서 1024를 뺸지점

  slides.animate(
    {
      marginLeft: [from + 'px', to + 'px'],
    },
    {
      duration: 2000,
      easing: 'ease',
      iterations: 1,
      fill: 'both',
    }
  );

  currentSlide++;
  if (currentSlide === slide.length - 1) {
    currentSlide = 0;
  }
}, 5000);
