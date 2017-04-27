$('document').ready(function(){

  var $animation_elements = $('.animation-element');
  var $window = $(window);

  $window.on('scroll', check_if_in_view);


});
