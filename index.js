$(window).on('load', function() {

  // Smooth scroll to section
  $('.smooth-goto').on('click', function () {
    $('html, body').animate({
        scrollTop: $(this.hash).offset().top + 50
    }, 1000);
  });

  // Navbar Animations 
  $(window).scroll(function () {
    if ($(window).scrollTop() >= 200) {
      $('.navbar').css({
          'background': '#3d98c2',
          'border-bottom': '3px solid black',
          'padding': '5px 0',
      })
      $('#name').css('display', 'block')
    } else {
      $('.navbar').css({
        'background': 'transparent',
        'padding': '0px',
        'border-bottom': 'none',
      })
      $('#name').css('display', 'none')
    }
  });

  // Green To Clean Popup 

  $(".popup-btn-g2c").on("click", function() {
    $(".popup-g2c-overlay, .popup-g2c-content").addClass("active");
    $('.navbar').css('display','none')
  });

  $(".g2c-close-btn").on("click", function() {
    $(".popup-g2c-overlay, .popup-g2c-content").removeClass("active");
    $('.navbar').css('display','flex')
  });

  // Checkpoint Popup 

  $(".popup-btn-checkpoint").on("click", function() {
    $(".popup-checkpoint-overlay, .popup-checkpoint-content").addClass("active");
    $('.navbar').css('display','none')
  });

  $(".close-btn").on("click", function() {
    $(".popup-overlay, .popup-content").removeClass("active");
    $('.navbar').css('display','flex')
  });

  // J Michael Popup
  $(".popup-btn-jmichael").on("click", function() {
    $(".popup-jmichael-overlay, .popup-jmichael-content").addClass("active");
    $('.navbar').css('display','none')
  });

  $(".close-btn").on("click", function() {
    $(".popup-jmichael-overlay, .popup-jmichael-content").removeClass("active");
    $('.navbar').css('display','flex')
  });

  

  // About Popup

  $(".popup-btn-about").on("click", function() {
    $(".popup-about-content, .popup-about-overlay").addClass("active")
    $('.navbar').css('display','none')
  });

  $(".close-btn-about").on("click", function() {
    $(".popup-about-content, .popup-about-overlay").removeClass("active");
    $('.navbar').css('display', 'flex');
  });
})