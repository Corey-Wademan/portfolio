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


  // About Popup

  $(".popup-btn-about").on("click", function() {
    $(".popup-about-content, .popup-about-overlay").addClass("active");
    $('.scroll-top').css('display', 'none');
  });

  $(".close-btn-about").on("click", function() {
    $(".popup-about-content, .popup-about-overlay").removeClass("active");
    $('.scroll-top').css('display', 'inline-block');
  });

  // Projects Gif Popup

  /* hides cards if gif is active to not show animation bug
    if ( $('card-btn').data('clicked', true) ) {
      $('.card').hide()
    }
  */  
  $('.gif-hover1, .gif-btn1').click(function() {
    $('#gif1').toggle();
    $('.scroll-top').toggle('display');
     if ( $(window).width() > 800 ) {
      $('.card, .work, .love-it').toggle('opacity')
     }
  });

  $('.gif-hover2, .gif-btn2').click(function() {
    $('#gif2').toggle();
    $('.scroll-top').toggle('display');
    if ( $(window).width() > 800 ) {
      $('.card, .work, .love-it').toggle('opacity')
     }  });
  $('.gif-hover3, .gif-btn3').click(function() {
    $('#gif3').toggle();
    $('.scroll-top').toggle('display');
    if ( $(window).width() > 800 ) {
      $('.card, .work, .love-it').toggle('opacity')
     }  });

  $('.gif-hover4, .gif-btn4').click(function() {
    $('#gif4').toggle();
    $('.scroll-top').toggle('display');
    if ( $(window).width() > 800 ) {
      $('.card, .work, .love-it').toggle('opacity')
     }
  });

  $('.gif-hover5, .gif-btn5').click(function() {
    $('#gif5').toggle();
    $('.scroll-top').toggle('display');
    if ( $(window).width() < 800 ) {
      $('.card, .work, .love-it').toggle('opacity')
     }  });

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

        // FADE IN / FADE OUT SCROLLING ANIMATIONS 
  $(function() {
  
    var html = $('html');
    // Detections
    if (!("ontouchstart" in window)) {
      html.addClass("noTouch");
    }
    if ("ontouchstart" in window) {
      html.addClass("isTouch");
    }
    if ("ontouchstart" in window) {
      html.addClass("isTouch");
    }
   
    if (document.documentMode || /Edge/.test(navigator.userAgent)) {
      if (navigator.appVersion.indexOf("Trident") === -1) {
        html.addClass("isEDGE");
      } else {
        html.addClass("isIE isIE11");
      }
    }
    if (navigator.appVersion.indexOf("MSIE") !== -1) {
      html.addClass("isIE");
    }
    if (
      navigator.userAgent.indexOf("Safari") != -1 &&
      navigator.userAgent.indexOf("Chrome") == -1
    ) {
      html.addClass("isSafari");
    }
  
    // On Screen
  
    $.fn.isOnScreen = function() {
      var elementTop = $(this).offset().top,
        elementBottom = elementTop + $(this).outerHeight(),
        viewportTop = $(window).scrollTop(),
        viewportBottom = viewportTop + $(window).height();
      return elementBottom > viewportTop && elementTop < viewportBottom;
    };
  
    function detection() {
      for (var i = 0; i < items.length; i++) {
        var el = $(items[i]);
        if (el.isOnScreen()) {
          el.addClass("in-view");
        } else {
          el.removeClass("in-view");
        }
      }
    }
  
    var items = document.querySelectorAll(
      "*[data-animate-in], *[data-detect-viewport]"
    ),
      waiting = false,
      w = $(window);
  
    w.on("resize scroll", function() {
      if (waiting) {
        return;
      }
      waiting = true;
      detection();
  
      setTimeout(function() {
        waiting = false;
      }, 100);
    });
  
      setTimeout(function() {
        detection();
      }, 500);
  
      for (var i = 0; i < items.length; i++) {
        var d = 0,
          el = $(items[i]);
        if (items[i].getAttribute("data-animate-in-delay")) {
          d = items[i].getAttribute("data-animate-in-delay") / 1000 + "s";
        } else {
          d = 0;
        }
        el.css("transition-delay", d);
      }
  });
  // END FADE SCROLLING ANIMATIONS

})