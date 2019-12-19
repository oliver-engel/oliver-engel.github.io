// Set kerning between T and o

(function(b){function e(a,c){var d;if(b.isPlainObject(a))d=a;else try{d=b.parseJSON(a)}catch(f){d=b.parseJSON('{"'+a+'":'+c+"}")}return d}function h(a,c){var d="";b(a).replaceWith(b.map(a.nodeValue.split("").reverse(),function(a,e){var g=a;b.each(c,function(c,e){d==c[1]&&a==c[0]&&(g=b.fn.wrapCharacter(a,e))});d=a;return g}).reverse().join(""))}b.fn.wrapCharacter=function(a,b){return'<span style="letter-spacing:'+b+'em">'+a+"</span>"};b.fn.jerning=function(a,c){var d=e(a,c),f=this.contents();b.each(f,
function(a,c){1==c.nodeType&&b(c).jerning(d);3==c.nodeType&&h(c,d)});return this}})(jQuery);

$('h2').jerning("To", -0.15);

$('h1').jerning("ft", -0.05);
$('h1').jerning("rt", 0.01);


/*--------------------------------------------------
Appear Plugin
---------------------------------------------------*/

!function(e){e.fn.appear=function(a,r){var n=e.extend({data:void 0,one:!0,accX:0,accY:0},r);return this.each(function(){var r=e(this);if(r.appeared=!1,!a)return void r.trigger("appear",n.data);var p=e(window),t=function(){if(!r.is(":visible"))return void(r.appeared=!1);var e=p.scrollLeft(),a=p.scrollTop(),t=r.offset(),c=t.left,i=t.top,o=n.accX,f=n.accY,s=r.height(),u=p.height(),d=r.width(),l=p.width();i+s+f>=a&&a+u+f>=i&&c+d+o>=e&&e+l+o>=c?r.appeared||r.trigger("appear",n.data):r.appeared=!1},c=function(){if(r.appeared=!0,n.one){p.unbind("scroll",t);var c=e.inArray(t,e.fn.appear.checks);c>=0&&e.fn.appear.checks.splice(c,1)}a.apply(this,arguments)};n.one?r.one("appear",n.data,c):r.bind("appear",n.data,c),p.scroll(t),e.fn.appear.checks.push(t),t()})},e.extend(e.fn.appear,{checks:[],timeout:null,checkAll:function(){var a=e.fn.appear.checks.length;if(a>0)for(;a--;)e.fn.appear.checks[a]()},run:function(){e.fn.appear.timeout&&clearTimeout(e.fn.appear.timeout),e.fn.appear.timeout=setTimeout(e.fn.appear.checkAll,20)}}),e.each(["append","prepend","after","before","attr","removeAttr","addClass","removeClass","toggleClass","remove","css","show","hide"],function(a,r){var n=e.fn[r];n&&(e.fn[r]=function(){var a=n.apply(this,arguments);return e.fn.appear.run(),a})})}(jQuery);


//Lazy Load Images

document.addEventListener("DOMContentLoaded", function() {

  fadeInPage();

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

function fadeInPage() {
  if (!window.AnimationEvent) { return; }
  var fader = document.getElementById('fader');
    fader.classList.add('fade-out');
}

document.addEventListener('DOMContentLoaded', function() {
  if (!window.AnimationEvent) { return; }
  var anchors = document.getElementsByTagName('a');

    for (var idx=0; idx<anchors.length; idx+=1) {
      if (anchors[idx].hostname !== window.location.hostname || anchors[idx].pathname === window.location.pathname) {
  continue;
}
        anchors[idx].addEventListener('click', function(event) {
            var fader = document.getElementById('fader'),
                anchor = event.currentTarget;

            var listener = function() {
                window.location = anchor.href;
                fader.removeEventListener('animationend', listener);
            };
            fader.addEventListener('animationend', listener);

            event.preventDefault();
            fader.classList.add('fade-in');
       });
   }
});

window.addEventListener('pageshow', function (event) {
  if (!event.persisted) {
    return;
  }
  var fader = document.getElementById('fader');
  fader.classList.remove('fade-in');
});


// SIDEBAR

$(function() {
  $('.sidebar-sticky').hover(function() {
    $('.sidebar-links').css('opacity', '1');
    $('.sidebar-sticky').css('background', 'white');
  }, function() {
    // on mouseout, reset the background colour
    $('.sidebar-links').css('opacity', '0');
    $('.sidebar-sticky').css('background', 'none');
  });
});
