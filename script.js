$(document).ready(function(){
    $(window).scroll(function(event){
        var s=$(this).scrollTop();
        var w=$(this).outerWidth();
        var h=$('.title-text').outerHeight();
        var h_b=$('.page').outerHeight();
        var p =s/h*100;
        var p_b=s/h_b*100;
        // var z = 1+(w/10000000*p*20);
        var z = 1+(p/500);
        $('.image-background').css('transform','scale('+z+')' );


    });
});