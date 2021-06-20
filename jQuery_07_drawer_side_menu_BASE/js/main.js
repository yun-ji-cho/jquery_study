$(function(){
  var aside = $('aside');
  var button = aside.find('button');
  var duration = 300;

  button.on('click', function(){
    aside.toggleClass('is-open');
    if(aside.hasClass('is-open')){
      // aside.stop().animate({'left':'-350px'}, 300, 'easeOutBack');
      $(this).find('img').attr('src', 'img/btn_open.png');

    }else{
      // aside.stop().animate({'left':'-70px'}, 300, 'easeInBack' );
      $(this).find('img').attr('src', 'img/btn_close.png');
    }
  });
});