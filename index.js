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


$(document).ready(function(){
    $('.popup__img').css('visibility', 'visible');
    
    
})

