jQuery(document).ready(function() {
	
	"use strict";

	

	$('.btn-form').on('click', function (){
		$('footer .btn-form').hide();	
		$('footer form').slideDown();
	});

	$('.popup-with-form').magnificPopup({
		type: 'inline',
		closeBtnInside: false,
		focus: '#test-form',
	});

});