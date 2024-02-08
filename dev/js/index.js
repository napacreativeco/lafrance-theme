(function($) {

    $('main').css('opacity', '0');

    $(document).on('ready', function() {

      $('.progress-indicator').css({
        animationName: 'widther',
        animationDuration: '3s',
        animationTimingFunction: 'ease-in-out',
        animationFillMode: 'forwards'
      });

      setTimeout(function() {
        $('.preloader').fadeOut();
        $('main').css('opacity', '1');
        $('.sidebar').css('opacity', '1');
      }, 3000);

    });

    $('.cart-drawer--close').on('click', function() {
      $('body').removeClass('js-my-cart-open');
    });




      // $('main').on("scroll", function() {

      //   var scrollHeight = $(document).height();
      //   var scrollPosition = $(window).height() + $(window).scrollTop();
        
      //   if ((scrollHeight - scrollPosition) / scrollHeight <= 0) {
          
      //     setTimeout(function() {
      //       $('footer').css('height', 'auto');
      //     }, 300);

      //     setTimeout(function() {
      //       $('main').on('scroll', function() { $('footer').css('height', '0px') });
      //     }, 1000);

      //   }
        
      // });
      

})(jQuery);