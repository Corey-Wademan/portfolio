$(window).on('load', function() {

  // Smooth scroll to section
  $('.smooth-goto').on('click', function () {
    $('html, body').animate({
        scrollTop: $(this.hash).offset().top + 50
    }, 1700);
  });

  // Navbar Animations 
  $(window).scroll(function () {
    if ($(window).scrollTop() >= 500) {
      $('.navbar').css({
          'background': 'rgb(76, 104, 145)',
          'border-bottom': '5px solid black',
          'padding': '5px 0',
      })
    } else {
      $('.navbar').css({
        'background': 'transparent',
        'padding': '0px',
        'border-bottom': 'none',
      })
    }
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
  // END FADE SCROLLING ANIMATIONS
  });
  
})