/*--------------------------------------------------
Appear Plugin
---------------------------------------------------*/

!function(e){e.fn.appear=function(a,r){var n=e.extend({data:void 0,one:!0,accX:0,accY:0},r);return this.each(function(){var r=e(this);if(r.appeared=!1,!a)return void r.trigger("appear",n.data);var p=e(window),t=function(){if(!r.is(":visible"))return void(r.appeared=!1);var e=p.scrollLeft(),a=p.scrollTop(),t=r.offset(),c=t.left,i=t.top,o=n.accX,f=n.accY,s=r.height(),u=p.height(),d=r.width(),l=p.width();i+s+f>=a&&a+u+f>=i&&c+d+o>=e&&e+l+o>=c?r.appeared||r.trigger("appear",n.data):r.appeared=!1},c=function(){if(r.appeared=!0,n.one){p.unbind("scroll",t);var c=e.inArray(t,e.fn.appear.checks);c>=0&&e.fn.appear.checks.splice(c,1)}a.apply(this,arguments)};n.one?r.one("appear",n.data,c):r.bind("appear",n.data,c),p.scroll(t),e.fn.appear.checks.push(t),t()})},e.extend(e.fn.appear,{checks:[],timeout:null,checkAll:function(){var a=e.fn.appear.checks.length;if(a>0)for(;a--;)e.fn.appear.checks[a]()},run:function(){e.fn.appear.timeout&&clearTimeout(e.fn.appear.timeout),e.fn.appear.timeout=setTimeout(e.fn.appear.checkAll,20)}}),e.each(["append","prepend","after","before","attr","removeAttr","addClass","removeClass","toggleClass","remove","css","show","hide"],function(a,r){var n=e.fn[r];n&&(e.fn[r]=function(){var a=n.apply(this,arguments);return e.fn.appear.run(),a})})}(jQuery);




/*--------------------------------------------------
Function AppearItem
---------------------------------------------------*/

	function AppearItem() {
    console.log('hey 2');
		$('.has-animation').each(function() {
			$(this).appear(function() {
				$(this).delay($(this).attr('data-delay')).queue(function(next){
					$(this).addClass('animate-in');
					next();

				});
			});
		});

	}//End AppearIteam


$( document ).ready(function() {


  AppearItem();



  console.log("Hey, get outta here.");
  console.log("You're not supposed to see this.");
  console.log("Oops, I just haiku'd");
  //CHOOSE LINKS TO DISABLE
  $('.menu-5, .menu-6').click(function(e) {
    e.preventDefault();
    $(this).css("color", "fff");
    //do other stuff when a click happens
  });


  //MENU ITEM 1
  $(".menu-1").attr("href", "index.html")
  $(".menu-1").html("Osler");


  $(".menu-1-content h3").text("Osler");
  $(".menu-1-content h5").text("Product design");
  $(".menu-1-content img").attr("src", "img/osler.jpg");
  $(".menu-1-content a").attr("href", "index.html");


  //MENU ITEM 2
  $(".menu-2").attr("href", "collective.html");
  $(".menu-2").html("Collective Health");

  $(".menu-2-content h3").text("Collective Health");
  $(".menu-2-content h5").text("Design systems");
  $(".menu-2-content img").attr("src", "img/ch.jpg");
  $(".menu-2-content a").attr("href", "collective.html");



  //MENU ITEM 3
  $(".menu-3").attr("href", "redshare.html")
  $(".menu-3").html("Red Share");

  $(".menu-3-content h3").text("Red Share");
  $(".menu-3-content h5").text("Interactive art");
  $(".menu-3-content img").attr("src", "img/sp/close.jpg");
  $(".menu-3-content a").attr("href", "redshare.html");


  //MENU ITEM 4
  $(".menu-4").attr("href", "foundry.html")
  $(".menu-4").html("Foundry");

  $(".menu-4-content h3").text("Foundry");
  $(".menu-4-content h5").text("Product design");
  $(".menu-4-content img").attr("src", "img/foundry.jpg");
  $(".menu-4-content a").attr("href", "foundry.html");


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

$('.item').each(function(i){
  setTimeout(function(){
    $('.item').eq(i).addClass('is-visible');
  }, 200*i);
});
