// import "./node_modules/jquery/dist/jquery.min.js"
// import "./stylesheet/js/swiper.js"
// import "https://kit.fontawesome.com/37fd9173e9.js"
// import "./node_modules/lightbox2/dist/js/lightbox.js"

// console.log(window.jQuery)

$(document).ready(function () {
  $('#product').click(function(e){
    e.preventDefault();
    console.log($('.product-open'))
    $('.product-open').slideToggle()
  })

  $('.btn-top').click((e)=>{
    e.preventDefault();
    $('html, body').animate({scrollTop: 0}, 100);
  })
});