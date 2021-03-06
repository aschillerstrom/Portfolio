//parallax

$(window).load(function(){
  $('.parallax').parallax().css("height", $(window).height());
});

//scrollspy
$(window).load(function(){
  $('.scrollspy').scrollSpy();
});

//full page
vpw = $(window).width();
vph = $(window).height();

$('.full-page').height(vph);


    
//orbs

$(document).ready(function () {
    
var orbs$ = $('.orbs span');
$('.end-right').css('left' , '-10%');
$('.end-left').css('left', '110%');
orbs$.velocity({'top': '-300px', scaleX: '.2', scaleY: '.2', color: '#FFFF00'},0);
var orb = 0;
var numOrbs = orbs$.length;

$('.end-right').velocity({left : '50%'}, 'easeOutExpo', 1200);
$('.end-left').velocity({left : '50%'}, 'easeOutExpo',  1200);


dropOrbs = function(){
  orbs$.eq(orb).velocity({top: '70px'}, 400).velocity({scaleX: 1, scaleY: 1, color: '#fff'}, 1000).css('position', 'relative');
  orb = orb + 1;
  if(orb < numOrbs){
    setTimeout(dropOrbs, 100);
  }
  else{
    setTimeout(function(){$('.glow').velocity({opacity: 1}, 1200);}, 1200);

  }
  
}

setTimeout(dropOrbs, 400);
});

