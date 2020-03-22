


(function($) {
"use strict";

/*------------------------------------------------------------------
[Table of contents]
MIP MENU TOGGLE JS
MIP STICKY MENU JS
MIP IMG SLIDER JS
MIP SLIDER SLIDER JS


-------------------------------------------------------------------*/

/*--------------------------------------------------------------
CUSTOM PRE DEFINE FUNCTION
------------------------------------------------------------*/
/* is_exist() */
jQuery.fn.is_exist = function(){
  return this.length;
}







/*--------------------------------------------------------------
MIP STICKY MENU JS
--------------------------------------------------------------*/
$(document).ready(function() {
	$('#fullpage').fullpage({
		//options here
		autoScrolling:true,
		scrollHorizontally: true,
		// sectionsColor : ['#2ecc71', '#e74c3c', '#3498db', '#f1c40f', '#ecf0f1', '#2c3e50', '#8e44ad', '#d35400'],
		scrollBar: true,
		css3: true,
		navigationPosition: 'right',
		navigation: true,
	});

	//methods
	$.fn.fullpage.setAllowScrolling(true);


	$('a[href*="#"]').on('click', function(e) {
	  e.preventDefault()

	  $('html, body').animate(
	    {
	      scrollTop: $($(this).attr('href')).offset().top,
	    },
	    500,
	    'linear'
	  )
	})

	
});





})(jQuery);






