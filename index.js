// Smooth scroll
$('.smooth-goto').on('click', function () {
    $('html, body').animate({
        scrollTop: $(this.hash).offset().top + 50
    }, 1000);
});

$(document).ready(function(){
$('.popup__img').css('visibility', 'visible');        
})