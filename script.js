$(document).ready(function(){

    //Set options

    let speed = 500;                 //Fade speed
    let autoswitch = true;          //Auto slider options
    let autoswitch_speed = 4000;    //Auto slider speed

    // Add initial active class

    $('.slide').first().addClass('active');

    // Hide all slides

    $('.slide').hide();

    // Show first slide

    $('.active').show();

// Next Handler

$('#next').on('click', nextSlide);

    // Previous Handler
    $('#prev').on('click', previousSlide);


    // Switch to next slide
function nextSlide(){
    $('.active').removeClass('active').addClass('oldActive');

    if($('.oldActive').is(':last-child')){
        $('.slide').first().addClass('active');
}else{
    $('.oldActive').next().addClass('active');
}

$('.oldActive').removeClass('oldActive');
$('.slide').fadeOut(speed);
$('.active').fadeIn(speed);  
}

// Switch to prev slide

function previousSlide(){
                $('.active').removeClass('active').addClass('oldActive');
        
                if($('.oldActive').is(':first-child')){
                    $('.slide').last().addClass('active');
            }else{
                $('.oldActive').prev().addClass('active');
            }
        
            $('.oldActive').removeClass('oldActive');
            $('.slide').fadeOut(speed);
            $('.active').fadeIn(speed);      
        }
});