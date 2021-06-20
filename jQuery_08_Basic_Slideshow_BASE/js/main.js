$(function(){
    var slideImg = $('.slideshow img');
    var slideCount = slideImg.length;
    var currentIndex = 0;

    var timer = undefined;
    slideImg.eq(currentIndex).fadeIn();


    if(!timer){
        timer = setInterval(showSlideNext, 1000);
    }

    function showSlideNext(){
        var nextIndex = (currentIndex + 1) % slideCount;
        slideImg.eq(currentIndex).fadeOut();
        slideImg.eq(nextIndex).fadeIn();
        currentIndex = nextIndex;
    }

    var timerOff = function(){
        clearInterval(timer);
    }
    var timerOn = function(){
        timer = setInterval(showSlideNext, 1000);
    }

    slideImg.mouseenter(function(){
        timerOff();
    }).mouseleave(function(){
        timerOn();
    });
});



// $(function(){

//     var slideImg = $('.slideshow img');
//     var slideCount = slideImg.length;
//     var currentIndex = 0;

//     slideImg.eq(currentIndex).fadeIn();

//     var timer = undefined;  
//     //타이머의 값을 undefined(지정되어 있지 않다)라고 지정합니다.

//     if (timer == undefined) { //타이머의 값이 undefined이면 showNextslide를 3.5s 마다 실행하라고 합니다.
//         timer = setInterval(showNextSlide, 1000);
//     }     

//     function showNextSlide(){
//         var nextIndex = (currentIndex + 1 ) % slideCount;
        
//         slideImg.eq(currentIndex).fadeOut();
//         slideImg.eq(nextIndex).fadeIn();
//         currentIndex = nextIndex;
//     }

//     function timeron(){
//         if(!timer){ //타이머의 값이 undefined이면 showNextslide를 3.5s 마다 실행하라고 합니다.
//             timer = setInterval(showNextSlide,1000);
//         }
//     }

//     function timeroff(){
//         if(timer){//타이머의 값이 있으면 즉 setInterval(showNextSlide, 3500)값이 있으면 클리어하고 값을 다시 undefined로 저장.
//             clearInterval(timer);
//             timer = undefined;
//         }
//     }

//     slideImg.mouseenter(function(){
//         timeroff();
//     }).mouseleave(function(){
//         timeron();
//     });


// });