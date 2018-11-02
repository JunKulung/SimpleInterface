$(window).scroll(function(){
    if ($(window).scrollTop() >= 10) {
        $('#nav').addClass('fixed-header');

    }
    else {
        $('#nav').removeClass('fixed-header');

    }
});



$('.home').click(function() {
    $("#service").css("display","none");
    $('#home').toggle('slow');


  });



  $('.service').click(function() {
    $("#home").css("display","none");
    $('#service').toggle('slow');
  });

