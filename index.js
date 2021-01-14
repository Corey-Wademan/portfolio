$( window ).on( "load", function() {

    // Smooth scroll to section
  $('.smooth-goto').on('click', function () {
    $('html, body').animate({
        scrollTop: $(this.hash).offset().top + 50
    }, 1700);
  });


  // Checkpoint Popup 

  $(".popup-btn").on("click", function() {
    $(".popup-overlay, .popup-content").addClass("active");
    $('.scroll-top').css('display', 'none');
  });

  $(".close-btn").on("click", function() {
    $(".popup-overlay, .popup-content").removeClass("active");
    $('.scroll-top').css('display', 'inline-block');
  });


  /* Resume Popup **Temporary Disabled, displayed as google drive link instead**

  $(".popup-btn-resume").on("click", function() {
    $(".popup-resume-content, .popup-resume-overlay").addClass("active");
    $('.scroll-top').css('display', 'none');
  });

  $(".close-btn-resume").on("click", function() {
    $(".popup-resume-content, .popup-resume-overlay").removeClass("active");
    $('.scroll-top').css('display', 'inline-block');
  });
*/

  // About Popup

  $(".popup-btn-about").on("click", function() {
    $(".popup-about-content, .popup-about-overlay").addClass("active");
    $('.scroll-top').css('display', 'none');
  });

  $(".close-btn-about").on("click", function() {
    $(".popup-about-content, .popup-about-overlay").removeClass("active");
    $('.scroll-top').css('display', 'inline-block');
  });


  // Scroll-To-Top Btn

  var btn = $('.scroll-top');

  $(window).scroll(function() {
  if ($(window).scrollTop() > 700) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
  });

  btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, 'slow');
  });

})