import "./node_modules/jquery/dist/jquery.min.js"
import "./stylesheet/js/swiper.js"
import "https://kit.fontawesome.com/37fd9173e9.js"

$(document).ready(function () {
  $('a').click(function(event){
    event.preventDefault();
    $(this).toggleClass('link-danger')
  })
});