/*--------------------------------------------------
Appear Plugin
---------------------------------------------------*/

!function(e){e.fn.appear=function(a,r){var n=e.extend({data:void 0,one:!0,accX:0,accY:0},r);return this.each(function(){var r=e(this);if(r.appeared=!1,!a)return void r.trigger("appear",n.data);var p=e(window),t=function(){if(!r.is(":visible"))return void(r.appeared=!1);var e=p.scrollLeft(),a=p.scrollTop(),t=r.offset(),c=t.left,i=t.top,o=n.accX,f=n.accY,s=r.height(),u=p.height(),d=r.width(),l=p.width();i+s+f>=a&&a+u+f>=i&&c+d+o>=e&&e+l+o>=c?r.appeared||r.trigger("appear",n.data):r.appeared=!1},c=function(){if(r.appeared=!0,n.one){p.unbind("scroll",t);var c=e.inArray(t,e.fn.appear.checks);c>=0&&e.fn.appear.checks.splice(c,1)}a.apply(this,arguments)};n.one?r.one("appear",n.data,c):r.bind("appear",n.data,c),p.scroll(t),e.fn.appear.checks.push(t),t()})},e.extend(e.fn.appear,{checks:[],timeout:null,checkAll:function(){var a=e.fn.appear.checks.length;if(a>0)for(;a--;)e.fn.appear.checks[a]()},run:function(){e.fn.appear.timeout&&clearTimeout(e.fn.appear.timeout),e.fn.appear.timeout=setTimeout(e.fn.appear.checkAll,20)}}),e.each(["append","prepend","after","before","attr","removeAttr","addClass","removeClass","toggleClass","remove","css","show","hide"],function(a,r){var n=e.fn[r];n&&(e.fn[r]=function(){var a=n.apply(this,arguments);return e.fn.appear.run(),a})})}(jQuery);


//Lazy Load Images

document.addEventListener("DOMContentLoaded", function() {
  var lazyloadImages = document.querySelectorAll("img.lazy");
  var lazyloadThrottleTimeout;

  function lazyload () {
    if(lazyloadThrottleTimeout) {
      clearTimeout(lazyloadThrottleTimeout);
    }

    lazyloadThrottleTimeout = setTimeout(function() {
        var scrollTop = window.pageYOffset;
        lazyloadImages.forEach(function(img) {
            if(img.offsetTop < (window.innerHeight + scrollTop)) {
              img.src = img.dataset.src;
              img.classList.remove('lazy');
            }
        });
        if(lazyloadImages.length == 0) {
          document.removeEventListener("scroll", lazyload);
          window.removeEventListener("resize", lazyload);
          window.removeEventListener("orientationChange", lazyload);
        }
    }, 20);
  }

  document.addEventListener("scroll", lazyload);
  window.addEventListener("resize", lazyload);
  window.addEventListener("orientationChange", lazyload);
});



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


//

/*--------------------------------------------------
Function FadeSiblings
---------------------------------------------------*/

$(window).scroll(function(){
    $(".fade-scroll").css("opacity", 1 - $(window).scrollTop() / 550);
  });



	/* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("hide-nav").style.top = "0";
  } else {
    document.getElementById("hide-nav").style.top = "-50px";
  }
  prevScrollpos = currentScrollPos;
}



$(".sibling-fade").hover(

	function() {
	$( this ).siblings().css( "opacity", "0.5" )
},
function() {
	$( this ).siblings().css( "opacity", "1" )
}

);


$( ".emoji" ).hover(function() {
  // $( this ).fadeOut( 100 );
  // $( this ).fadeIn( 500 );

	// $( "#changeLogo" ).fadeOut(100);
	$( "#changeLogo" ).removeClass('fa-smile').addClass('fa-surprise');
},
function() {
	$( "#changeLogo" ).removeClass('fa-surprise').addClass('fa-smile');
}

);

/*--------------------------------------------------
Function FadeHover
---------------------------------------------------*/


$('.fadeHover').children().hover(function() {
		$(this).siblings().stop().fadeTo(500,0.5);
	}, function() {
		$(this).siblings().stop().fadeTo(500,1);
	});


	$('.ani').hover(function() {
			$(this).addClass("animated jello");
		}, function() {
			$(this).removeClass("animated jello");
		});



/*--------------------------------------------------
Function AppearItem
---------------------------------------------------*/

	function AppearItem() {
		$('.has-animation, .has-animation-nav').each(function() {
			$(this).appear(function() {
				$(this).delay($(this).attr('data-delay')).queue(function(next){
					$(this).addClass('animate-in');
					next();

				});
			});
		});

	}//End AppearIteam




$( document ).ready(function() {

	// setTimeout(AppearItem, 500);
  AppearItem();



	console.log("Sneaky sneaky. Watcha doin back here?");

  //CHOOSE LINKS TO DISABLE
  $('.menu-5, .menu-6').click(function(e) {
    e.preventDefault();
    $(this).css("color", "fff");
    //do other stuff when a click happens
  });



});

$('.item').each(function(i){
  setTimeout(function(){
    $('.item').eq(i).addClass('is-visible');
  }, 200*i);
});




// Select all links with hashes
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
      &&
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top - 300
        }, 800, function() {
          // Callback after animation
        });
      }
    }
});
