
	


$(document).ready(function(){

	$("body").parallax("50%", 0.5);

	// $('.main-nav-box').hide();

	$( ".menu-box" ).one( "click", function() {
		$('.main-nav-box').css('visibility','visible');
		$('.menu-box').click(function(){
			$('.main-nav-box').css('visibility','visible');
			$('.main-nav-box').toggle("slow", function() {
				
			});
		});
	  });

	 

	// $('.menu-box').trigger('click');
	
	$('.about-slider').owlCarousel({

		animateIn: 'fadeIn',
		animateOut: 'fadeOut',
		mouseDrag : false,
		dots : true,
		autoplay: true,
		autoplayTimeout: 6000,
		loop: true,
		responsive : {
			0 : {items: 1}
		}

	});

	$('.services-slider').owlCarousel({

		margin : 25,
		mouseDrag : false,
		dots : false,
		nav : true,
		navText : ["<div class='previcon arrow-left-icon-box'><div class='arrow-left-icon'></div></div>","<div class='nexticon arrow-right-icon-box'><div class='arrow-right-icon'></div></div>"],

	});

	$('.biog-slider').owlCarousel({

		margin : 25,
		mouseDrag : false,
		dots : false,
		nav : true,
		navText : ["<div class='previcon arrow-left-icon-box'><div class='arrow-left-icon'></div></div>","<div class='nexticon arrow-right-icon-box'><div class='arrow-right-icon'></div></div>"],
		

	});
	
	$('.products-slider').owlCarousel({

		nav : true,
		// mouseDrag : false,
		dots : false,
		responsive : {
			0 : {items: 1}
		}

	});

	$(".nexticon").click(function(){
    $('.services-slider').trigger('owl.next');
  })

  $(".previcon").click(function(){
    $('.services-slider').trigger('owl.prev');
  })

	$('.search-icon').click(function(){
		$('.search').animate({

			width : "toggle"

		}).focus()
	});

	if ($(".search").is(":focus")){
		$(".logo").css('opacity', '0.5');
	}






			// 	$('#search-icon').css('display','none');
			// 	$('#search-close-icon').css('display', 'block');
			// },function(){
			// 	$('#search-icon').css('display', 'block');
			// 	$('#search-close-icon').css('display','none');


})