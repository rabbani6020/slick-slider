$(document).ready(function () {
   /*==============================
   //  Banner
   ===============================*/

   $(".banner-slider").slick();

   $(".product-slider").slick({
      slidesToShow: 4,
      slidesToScroll: 1
   });
   /*==============================
   //  Back to Top
   ===============================*/
   // var $window = $(window);
   // var distance = 300;
   // $window.scroll(function () {
   //    if ($window.scrollTop() >= distance) {
   //       $(".back-to-top").fadeIn();
   //    } else {
   //       $(".back-to-top").fadeOut();
   //    }
   // });
   // $(".back-to-top").click(function () {
   //    $("html, body").animate(
   //       {
   //          scrollTop: 0,
   //       },
   //       800
   //    );
   // });
});
