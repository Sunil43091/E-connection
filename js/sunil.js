$(document).ready(function(){
    $(".toogle").click(function(){
      $("body").toggleClass("activeClass");
    });
  });
  
  

var swiper = new Swiper(".mySwiper", {
    cssMode: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    mousewheel: true,
    keyboard: true,
  });


  var swiper = new Swiper(".siderCOL", {
    slidesPerView: 4,
    spaceBetween: 10,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });




//   $(document).ready(function () {
//     $("#news-slider").owlCarousel({
//         items:1,
//         itemsDesktop: [1199, 1],
//         itemsMobile: [600, 1],
//         pagination: true,
//         autoPlay: true
//     });
// });


// $(document).ready(function () {
//   $("#news-slider1").owlCarousel({
//       items: 1,
//       itemsDesktop: [1199, 1],
//       itemsMobile: [600, 1],
//       pagination: true,
//       autoPlay: true
//   });
// });

// $(document).ready(function() {
//   $("#news-slider-2").owlCarousel({
//       items : 4,
//       itemsDesktop : [1199,3],
//       itemsMobile : [600,1],
//       pagination :true,
//       autoPlay : true
//   });
// });
 
//    $(document).ready(function() {
//   $("#news-slider-3").owlCarousel({
//       items : 4,
//       itemsDesktop : [1199,3],
//       itemsMobile : [600,1],
//       pagination :true,
//       autoPlay : true
//   });
// });

AOS.init();


