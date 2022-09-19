(function ($) {
    "use strict";

  $('.testimonial2').owlCarousel({
		loop:true,
		margin:30,
		responsiveClass:true,
		dots: true,
		responsive:{
			0:{
				items:1,
				nav:false
			},
			600:{
				items:1,
				nav:false
			},
			1000:{
				items:1,
				nav:false,
				dots: true
			}
			}
		});
		
  $('.testimonial1').owlCarousel({
		loop:true,
		margin:30,
		responsiveClass:true,
		dots: true,
		responsive:{
			0:{
				items:1,
				nav:true
			},
			600:{
				items:2,
				nav:true
			},
			1000:{
				items:3,
				nav:true
			}
			}
	   });

}(jQuery));
