$( document ).ready(function() {

  //CHOOSE LINKS TO DISABLE
  $('.menu-4, .menu-5, .menu-6').click(function(e) {
    e.preventDefault();
    $(this).css("color", "fff");
    //do other stuff when a click happens
  });


  //MENU ITEM 1
  $(".menu-1").attr("href", "foundry.html")
  $(".menu-1").html("Foundry");

  $(".menu-1-content h3").text("Foundry");
  $(".menu-1-content h5").text("Product design, programming");
  $(".menu-1-content img").attr("src", "img/foundry.jpg");
  $(".menu-1-content a").attr("href", "foundry.html");

  //MENU ITEM 2
  $(".menu-2").attr("href", "collective.html");
  $(".menu-2").html("Collective Health");

  $(".menu-2-content h3").text("Collective Health");
  $(".menu-2-content h5").text("Design systems");
  $(".menu-2-content img").attr("src", "img/train.jpg");
  $(".menu-2-content a").attr("href", "collective.html");



  //MENU ITEM 3
  $(".menu-3").attr("href", "redshare.html")
  $(".menu-3").html("Red Share");

  $(".menu-3-content h3").text("Red Share");
  $(".menu-3-content h5").text("Experimental art, programming");
  $(".menu-3-content img").attr("src", "img/red.jpg");
  $(".menu-3-content a").attr("href", "redshare.html");


  //MENU ITEM 4
  $(".menu-4").attr("href", "http://www.oliverengel.com/")
  $(".menu-4").html("<del>Code &amp; Art</del>");


  $(".menu-4-content h3").text("Foundry");
  $(".menu-4-content h5").text("Product Design, Python Programming");
  $(".menu-4-content img").attr("src", "img/foundry-hero.jpg");
  $(".menu-4-content a").attr("href", "http://www.oliverengel.com/");

  //MENU ITEM 5
  $(".menu-5").attr("href", "http://www.oliverengel.com/")
  $(".menu-5").html("<del>UW Capstone</del>");

  $(".menu-5-content h3").text("Foundry");
  $(".menu-5-content h5").text("Product Design, Python Programming");
  $(".menu-5-content img").attr("src", "img/foundry-hero.jpg");
  $(".menu-5-content a").attr("href", "http://www.oliverengel.com/");

  //MENU ITEM 6
  $(".menu-6").attr("href", "http://www.oliverengel.com/")
  $(".menu-6").html("<del>Light &amp; Form</del>");

  $(".menu-6-content h3").text("Foundry");
  $(".menu-6-content h5").text("Product Design, Python Programming");
  $(".menu-6-content img").attr("src", "img/foundry-hero.jpg");
  $(".menu-6-content a").attr("href", "http://www.oliverengel.com/");

  //MENU ITEM 7
  $(".menu-7").attr("href", "http://www.oliverengel.com/")
  $(".menu-7").html("Light &amp; Form");

  $(".menu-7-content h3").text("Foundry");
  $(".menu-7-content h5").text("Product Design, Python Programming");
  $(".menu-7-content img").attr("src", "img/foundry-hero.jpg");
  $(".menu-7-content a").attr("href", "http://www.oliverengel.com/");





});
