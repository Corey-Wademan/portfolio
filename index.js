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
  });

  $(".close-btn").on("click", function() {
    $(".popup-overlay, .popup-content").removeClass("active");
  });


  // Resume Popup

  $(".popup-btn-resume").on("click", function() {
  $(".popup-resume-content, .popup-resume-overlay").addClass("active");
  });

  $(".close-btn-resume").on("click", function() {
  $(".popup-resume-content, .popup-resume-overlay").removeClass("active");
  });


  // About Popup

  $(".popup-btn-about").on("click", function() {
  $(".popup-about-content, .popup-about-overlay").addClass("active");
  });

  $(".close-btn-about").on("click", function() {
  $(".popup-about-content, .popup-about-overlay").removeClass("active");
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