$(function () {

  //==================Sticky Menu Start==================

  $(window).on("scroll", function () {
    var scrolling = $(this).scrollTop();
    if (scrolling >= 100) {
      $(".navbar").addClass("sticky");
    } else {
      $(".navbar").removeClass("sticky");
    }
  });

  //==================Sticky Menu End==================

  $('.venobox').venobox();

  $('.single-slide').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    infinite: true,
    dots: false,
    arrows: true,
    prevArrow: "",
    nextArrow: ".single-right",
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: false,
          autoplay: true,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          autoplay: true,
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });

});

//
// ul-select
// https://github.com/zgreen/ul-select
//

$.fn.ulSelect = function () {
  var ul = $(this);

  if (!ul.hasClass('zg-ul-select')) {
    ul.addClass('zg-ul-select');
  }
  // SVG arrow
  var arrow = '<svg id="ul-arrow" xmlns="http://www.w3.org/2000/svg" version="1.1" width="32" height="32" viewBox="0 0 32 32"><line stroke-width="1" x1="" y1="" x2="" y2="" stroke="#449FDB" opacity=""/><path d="M4.131 8.962c-0.434-0.429-1.134-0.429-1.566 0-0.432 0.427-0.432 1.122 0 1.55l12.653 12.528c0.434 0.429 1.133 0.429 1.566 0l12.653-12.528c0.432-0.429 0.434-1.122 0-1.55s-1.136-0.429-1.566-0.002l-11.87 11.426-11.869-11.424z" fill="#111"/></svg>';
  $('li:first-of-type', this).addClass('active').append(arrow);
  $(this).on('click', 'li', function (event) {

    // Remove div#selected if it exists
    if ($('#selected--zg-ul-select').length) {
      $('#selected--zg-ul-select').remove();
    }
    ul.before('<div id="selected--zg-ul-select">');
    var selected = $('#selected--zg-ul-select');
    $('li #ul-arrow', ul).remove();
    ul.toggleClass('active');
    // Remove active class from any <li> that has it...
    ul.children().removeClass('active');
    // And add the class to the <li> that gets clicked
    $(this).toggleClass('active');

    var selectedText = $(this).text();
    if (ul.hasClass('active')) {
      selected.text(selectedText).addClass('active').append(arrow);
    } else {
      selected.text('').removeClass('active');
      $('li.active', ul).append(arrow);
    }
  });
  // Make ul tabbable
  /*$(ul).focus(function(){
   $(this).keydown(function(e) {
    if(e.which == 38 || 40) { // Up or down keypress
      $(this).addClass('active');
      var liActive =  $('li.active', ul);
      var liPrev = $('li.active', ul).prev();
      var liNext =  $('li.active', ul).next();
      if(e.which == 38) { // Down
        liActive.removeClass('active');
        liPrev.addClass('active');
      }
      if(e.which == 40) { // Down
        liActive.removeClass('active');
        liNext.addClass('active');
      }
    }
   });
   $(this).keydown(function(){
      if(e.which == 13) { // Down
        ul.removeClass('active');
      }
    });
  });*/
  // Close the faux select menu when clicking outside it 
  $(document).on('click', function (event) {
    if ($('ul.zg-ul-select').length) {
      if (!$('ul.zg-ul-select').has(event.target).length == 0) {
        return;
      } else {
        $('ul.zg-ul-select').removeClass('active');
        $('#selected--zg-ul-select').removeClass('active').text('');
        $('#ul-arrow').remove();
        $('ul.zg-ul-select li.active').append(arrow);
      }
    }
  });
}

// Run
$('#mob-pills-tab').ulSelect();