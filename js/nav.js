jQuery(document).ready(function($){
    $('.nav-trigger').on('click', function(){
		$('.nav-trigger').toggleClass('clicked'); 
        $('.top-bar').toggleClass('nav-active'); 
        $('nav').toggleClass('active');
	}); 
});