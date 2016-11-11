$(function(){

  localStorage.photoCount= 1;



  $('.prev div').bind('click', function(){
    var photoCount = Number(localStorage.photoCount);
    localStorage.photoCount = photoCount - 1;
    changeImg();
  });

  $('.next div').bind('click', function(){
    var photoCount = Number(localStorage.photoCount);
    localStorage.photoCount = photoCount + 1;
    changeImg();
  });

  setInterval(function(){
    var photoCount = Number(localStorage.photoCount);
    localStorage.photoCount = photoCount + 1;
    changeImg();
  }, 5000);

})


function changeImg(){
  var img = $('.photo-container img');
  var photoCount = Number(localStorage.photoCount);
  if (photoCount < 1)
    localStorage.photoCount = 5;
  else if (photoCount > 5)
    localStorage.photoCount = 1;

  $(img).animate({
    opacity: 0
  }, 500, function(){
    $(this).attr('src','/img/picture' + localStorage.photoCount + '.gif');
    $(this).animate({
      opacity: 1
    }, 500);
  });


}
