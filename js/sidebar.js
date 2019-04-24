//Check if objects are overlapping

function isOverlapping(rect1, rect2) {
  var overlap = !(rect1.right < rect2.left ||
                rect1.left > rect2.right ||
                rect1.bottom < rect2.top ||
                rect1.top > rect2.bottom);
  return overlap;
}

//Fade side menu when it collides with big images



$(window).scroll(function(event){
  hideMenuIfOverlap();
});




window.onload = function () {
  // hideMenuIfOverlap();

}

function hideMenuIfOverlap() {

  var bigImages = document.getElementsByClassName("big-image");

  var menu = document.getElementById("menu");
  var menuPosition = menu.getBoundingClientRect();

  var bigImagesValue = bigImages[0].getBoundingClientRect();
  // console.log(bigImagesValue);
  // console.log(menuPosition);

  var imagesLength = bigImages.length;


  var overlap = false;

  for (var i = 0; i < imagesLength; i++) {
    overlap = overlap || isOverlapping(menuPosition, bigImages[i].getBoundingClientRect());

  }

  if (overlap) {

    document.getElementById("menu").className = document.getElementById("menu").className.replace("show-menu", "hide-menu");
  } else {

    document.getElementById("menu").className = document.getElementById("menu").className.replace("hide-menu", "show-menu");
  }
}
