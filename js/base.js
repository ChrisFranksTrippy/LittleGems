$(function(){
  $('.nav-toggle').bind('click', function(){
      $('header ul').toggleClass('show-nav');
  });

  $('.button').bind('click', function(){
      $(this).toggleClass('pressed');
      setTimeout(function () {
        $('.button').removeClass('pressed');
      }, 200);
  });

});
