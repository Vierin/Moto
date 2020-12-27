(function($) {
  

    $('.first.circle').circleProgress({
        value: 0.8,
        size: 200,
        emptyFill: '#444',
      }).on('circle-animation-progress', function(event, progress) {
        $(this).find('span').html(Math.round(160 * progress) + '<p>MPH</p>');
      });
  
      $('.second.circle').circleProgress({
          value: 0.85,
          size: 200,
          emptyFill: '#444',
        }).on('circle-animation-progress', function(event, progress) {
          $(this).find('span').html(Math.round(229 * progress) + '<p>KG</p>');
        });
  
        $('.third.circle').circleProgress({
          value: 0.8,
          size: 200,
          emptyFill: '#444',
        }).on('circle-animation-progress', function(event, progress) {
          $(this).find('span').html(Math.round(6 * progress) + '<b>L</b><p>/100km</p>');
        });
  
        $("a[href^='#']").click(function(){
          var _href = $(this).attr("href");
          $("html, body").animate({ scrollTop: $(_href).offset().top + "px" }, 1000);
          return false;
      });

    

      
        $('.button_menu').click(function() {
          $('.button_menu').toggleClass('off');
          $('.main_wrap').toggleClass('blur');
          $('.nav').toggleClass('show');
        });

        $('.nav-menu__close').click(function() {
            $('.nav').toggleClass('show');
            $('.main_wrap').toggleClass('blur'); 
            $('.button_menu').toggleClass('off');
          });

        $('.nav-menu__item a').click(function() {
            $('.nav').toggleClass('show');
            $('.main_wrap').toggleClass('blur'); 
            $('.button_menu').toggleClass('off');
          });

        
          var block_show = false;

          function scrollTracking(){
              if (block_show) {
                  return false;
              }
          
              var wt = $(window).scrollTop();
              var wh = $(window).height();
              var et = $('.quality_button').offset().top;
              var eh = $('.quality_button').outerHeight();
              var dh = $(document).height();   
           
              if (wt + wh >= et || wh + wt == dh || eh + et < wh){
                  block_show = true;
                  
                  console
              }
          }
          
          $(window).scroll(function(){
              scrollTracking();
          });
              
          $(document).ready(function(){ 
              scrollTracking();
          });

          $(document).ready(function(){
            $(".view-moto__pics").image360();
          });	
     
  })(jQuery);

  