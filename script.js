/*$(window).scroll(function() {
  console.log('FUNCTION IS WORKING');
    var scroll = $(window).scrollTop();
    if (scroll <= 500) {
      console.log('SCROLL IS WORKING');
        $(".desktop-navbar").addClass("smaller");
    }
  }); */

  $(function() {
    //caches a jQuery object containing the header element
    console.log('JQ has begun!');
    var navBar = $(".scroll");
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();

        if (scroll >= 500) {
            navBar.addClass("smaller");
            console.log('the navbar should get smaller');
        } else {
            navBar.removeClass("smaller");
            console.log('the navbar should get bigger')
        }
    });
});

/*

BELOW HERE IS THE EXAMPLE

function init() {
    window.addEventListener('scroll', function(e){
        var distanceY = window.pageYOffset || document.documentElement.scrollTop,
            shrinkOn = 300,
            header = document.querySelector("header");
        if (distanceY > shrinkOn) {
            classie.add(header,"smaller");
        } else {
            if (classie.has(header,"smaller")) {
                classie.remove(header,"smaller");
            }
        }
    });
}
window.onload = init();
*/
