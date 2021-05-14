$( window ).ready( function() {

    // Smooth scroll to section
  $('.smooth-goto').on('click', function () {
    $('html, body').animate({
        scrollTop: $(this.hash).offset().top + 50
    }, 1700);
  });


  // Green To Clean Popup 

  $(".popup-btn-g2c").on("click", function() {
    $(".popup-g2c-overlay, .popup-g2c-content").addClass("active");
  });

  $(".g2c-close-btn").on("click", function() {
    $(".popup-g2c-overlay, .popup-g2c-content").removeClass("active");
  });

  // Checkpoint Popup 

  $(".popup-btn-checkpoint").on("click", function() {
    $(".popup-checkpoint-overlay, .popup-checkpoint-content").addClass("active");
  });

  $(".close-btn").on("click", function() {
    $(".popup-overlay, .popup-content").removeClass("active");
  });


  // About Popup

  $(".popup-btn-about").on("click", function() {
    $(".popup-about-content, .popup-about-overlay").addClass("active");
  });

  $(".close-btn-about").on("click", function() {
    $(".popup-about-content, .popup-about-overlay").removeClass("active");
  });

  // Projects Gif Popup

  /* hides cards if gif is active to not show animation bug
    if ( $('card-btn').data('clicked', true) ) {
      $('.card').hide()
    }
  */  
  $('.gif-hover1, .gif-btn1').click(function() {
    $('#gif1').toggle();
     if ( $(window).width() > 800 ) {
      $('.card, .work, .love-it').toggle('opacity')
     }
  });

  $('.gif-hover2, .gif-btn2').click(function() {
    $('#gif2').toggle();
    if ( $(window).width() > 800 ) {
      $('.card, .work, .love-it').toggle('opacity')
     }  });
  $('.gif-hover3, .gif-btn3').click(function() {
    $('#gif3').toggle();
    if ( $(window).width() > 800 ) {
      $('.card, .work, .love-it').toggle('opacity')
     }  });

  $('.gif-hover4, .gif-btn4').click(function() {
    $('#gif4').toggle();
    if ( $(window).width() > 800 ) {
      $('.card, .work, .love-it').toggle('opacity')
     }
  });

  $('.gif-hover5, .gif-btn5').click(function() {
    $('#gif5').toggle();
    if ( $(window).width() < 800 ) {
      $('.card, .work, .love-it').toggle('opacity')
    }
  });
  
  $('.gif-hover6, .gif-btn6').click(function() {
    $('#gif6').toggle();
    if ( $(window).width() < 800 ) {
      $('.card, .work, .love-it').toggle('opacity')
  }});

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