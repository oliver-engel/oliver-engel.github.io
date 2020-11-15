jQuery(document).ready(function($) {

  var rellax = new Rellax('.rellax');

});

document.addEventListener("DOMContentLoaded", function() {

  try {

    MicroModal.init({
      awaitCloseAnimation: true,// set to false, to remove close animation
      onShow: function(modal) {
        console.log("micromodal open");
      },
      onClose: function(modal) {
        console.log("micromodal close");
      }
    });

  } catch (e) {
    console.log("micromodal error: ", e);
  }

});

var imgCounter = 0;

function nextImage(){

  //Get all the images into an array
  var photoArray = document.getElementsByClassName('photo-grid-image');

  //If we get to the end of the array
  if(imgCounter === photoArray.length - 1){
    $(photoArray[imgCounter]).hide();
    imgCounter = 0;
    // $(photoArray[imgCounter]).css("display", "flex").hide().fadeIn(450);
    $(photoArray[imgCounter]).css("display", "flex");
  }

  else{
  //Hide current image, then fade in the next one
    $(photoArray[imgCounter]).hide();
    $(photoArray[imgCounter + 1]).css("display", "flex");
    imgCounter++;
  }
  //Increment for the next image
  console.log(imgCounter);
};


function prevImage(){

  //Get all the images into an array
  var photoArray = document.getElementsByClassName('photo-grid-image');

  //If we get to the beginning of the array
  if(imgCounter === 0){
    $(photoArray[imgCounter]).hide();
    imgCounter = photoArray.length - 1;
    $(photoArray[imgCounter]).css("display", "flex");
  }

  //Hide current image, show the previous one
  else{
    $(photoArray[imgCounter]).hide();
    $(photoArray[imgCounter - 1]).css("display", "flex");
    imgCounter--;
  }
};

//ARROW KEY FUNCTIONS

document.onkeydown = checkKey;

function checkKey(e) {
    e = e || window.event;
    if (e.keyCode == '37') {
       prevImage();
    }
    else if (e.keyCode == '39') {
       nextImage();
    }
}

//PREVENT WHACKY FOOTER SHIT

$(window).scroll(function() {
   if($(window).scrollTop() + $(window).height() == $(document).height()) {
     $("footer").css("visibility", "visible");
     $("footer").fadeIn();
   }
});

if (document.querySelector('.animated-header') !== null) {
  // Wrap every letter in a span
  var textWrapper = document.querySelector('.animated-header');
  textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

  anime.timeline({loop: false})
    .add({
      targets: '.animated-header .letter',
      translateY: [120,0],
      easing: "easeOutExpo",
      duration: 900,
      delay: (el, i) => 10 * i
    });

    $(window).scroll(function(){
        $(".fade-scroll").css("opacity", 1 - $(window).scrollTop() / 500);
      });

      $(window).scroll(function(){
          $(".fadein-scroll").css("opacity", 0 + $(window).scrollTop() / 100);
        });
}

//Smooth scrolling hash links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
