// Smooth scroll
$('.smooth-goto').on('click', function () {
    $('html, body').animate({
        scrollTop: $(this.hash).offset().top + 50
    }, 1700);
});

// Popup Functionality
$(".popup-btn").on("click", function() {
    $(".popup-overlay, .popup-content").addClass("active");
});

$(".close-btn, .popup-overlay").on("click", function() {
    $(".popup-overlay, .popup-content").removeClass("active");
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








