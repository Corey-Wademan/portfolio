// Smooth scroll
$('.smooth-goto').on('click', function () {
    $('html, body').animate({
        scrollTop: $(this.hash).offset().top + 50
    }, 1700);
});



$(document).ready(function(){
    $('.popup__img').css('visibility', 'visible');
    
    $('.popup-show').on('click', function () {
        $('#popup-checkpoint', '.popup-content').addClass('active');
    });
    $('.close-btn').on('click', function () {
        $('#popup-checkpoint', '.popup-content').removeClass('active');
    });
})

