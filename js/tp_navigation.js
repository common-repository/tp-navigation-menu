jQuery(function() {

	// grab the initial top offset of the navigation 
	var tp_navigation_offset_top = jQuery('#navbar').offset().top;
	
	// our function that decides weather the navigation bar should have "fixed" css position or not.
	var tp_navigation = function(){
		var scroll_top = jQuery(window).scrollTop(); // our current vertical position from the top
		
		// if we've scrolled more than the navigation, change its position to fixed to stick to top, otherwise change it back to relative
		if (scroll_top > tp_navigation_offset_top) { 
			jQuery('#navbar').css({ 'position': 'fixed', 'top':0 });
			jQuery('#navbar').css({ 'background': 'url("wp-content/plugins/tp-navigation-menu/css/brown-2.png") repeat scroll 0 0 transparent' });
			jQuery('#navbar').css({ 'box-shadow': '0 0 5px #999999' });
		} else {
			jQuery('#navbar').css({ 'position': 'relative' }); 
			jQuery('#navbar').css({ 'background': '#F7F5E7' });
			jQuery('#navbar').css({ 'box-shadow': 'none' });
		}   
	};
	
	// run our function on load
	tp_navigation();
	
	// and run it again every time you scroll
	jQuery(window).scroll(function() {
		 tp_navigation();
	});	
	
});