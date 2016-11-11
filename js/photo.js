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
  }, 10000);

})


function changeImg(){
  var img = $('.photo-container img');
  var photoCount = Number(localStorage.photoCount);
  if (photoCount < 1)
    localStorage.photoCount = 5;
  else if (photoCount > 5)
    localStorage.photoCount = 1;
  
  $(img).attr('src','/img/picture' + localStorage.photoCount + '.gif');
}
