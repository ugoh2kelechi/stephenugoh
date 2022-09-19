(function ($) {
	"use strict";

    $(document).ready(function($){


        $(".embed-responsive iframe").addClass("embed-responsive-item");
        $(".carousel-inner .item:first-child").addClass("active");
        
        $('[data-toggle="tooltip"]').tooltip();

		//Wow js
		new WOW().init();
		
		
		
		

    });


    $(window).on('load',function(){
		
		//Preloader
		$('.preloader').delay(500).fadeOut('slow');
        $('body').delay(500).css({'overflow':'visible'});
        
    });


}(jQuery));	