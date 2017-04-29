$( document ).ready(function() {
    console.log( "ready!" );

/*HEADER*/
$("header").html("<div class='desktop-navbar scroll'>"+
"<a class='scroll' href='menu.html'>menu</a>"+
"<a class='scroll' href='custom.html'>custom</a>"+
"<img class='logo-1 scroll' src='./assets/images/fix-logo.png' alt='fix logo'>"+
"<a class='scroll' href='about.html'>about</a>"+
"<a class='scroll' href='hours.html'>hours</a>"+
"</div>");

/*NAVBAR ANIMATION SCRIPT*/
  $(function() {
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


/*FOOTER*/
$("footer").html(
    "<img class='media-icon' src='./assets/images/fix-fbicon.png' alt='Facebook icon'>"+
    "<img class='media-icon' src='./assets/images/fix-instaicon.png' alt='Instagram icon'>"+
    "<img class='media-icon' src='./assets/images/fix-twittericon.png' alt='Twitter icon'>");


});
