$(function(){

  localStorage.photoCount= 1;

  $('.prev').bind('click', function(){
    var photoCount = Number(localStorage.photoCount);
    localStorage.photoCount = photoCount - 1;
    changeImg();
  });

  $('.next').bind('click', function(){
    var photoCount = Number(localStorage.photoCount);
    localStorage.photoCount = photoCount + 1;
    changeImg();
  });
})


function changeImg(){
  var photoCount = Number(localStorage.photoCount);
  if (photoCount < 1)
    localStorage.photoCount = 5;
  else if (photoCount > 5)
    localStorage.photoCount = 1;
  $('.photo-container img').attr('src','/img/picture' + localStorage.photoCount + '.gif');
}
