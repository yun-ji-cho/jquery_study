$(function(){
  var button = $('#buttons2 button');
  button.each(function(idx){
    $(this).css('top',(idx-1)*40 +'px');
  })
  .mouseover(function(){
    $(this).stop().animate({'backgroundColor':'yellow', 'color':'black'},300);
    $(this).find('img:nth-child(2)').stop().animate({'opacity':1},300);
    $(this).find('img:first-child').stop().animate({'opacity':0},300);
  })
  .mouseout(function(){
    $(this).stop().animate({'backgroundColor':'white', 'color':'#01b169'},300);
    $(this).find('img:nth-child(2)').stop().animate({'opacity':0},300);
    $(this).find('img:first-child').stop().animate({'opacity':1},300);
  })


});

