

$(document).ready(function(){

    var rellax = new Rellax(".rellax");


    var $hints = $('.content');
    // var $hintDescriptions = $('.hint-description');
    var i = 0;

    $('.button--primary').on('click', function(){
      console.log("here");
        i = (i + 1) % $hints.length;
        $hints.slideUp(1000).eq(i).show();
        // $hintDescriptions.hide().eq(i).show();
    });

    $('#back').on('click', function(){
      console.log("here");
        i = (i + 1) % $hints.length;
        $hints.hide().eq(i).show();
        // $hintDescriptions.hide().eq(i).show();
    });

});
