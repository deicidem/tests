jQuery(document).ready(function() {
	
	"use strict";

	$('footer form').submit(function (e) {
      
		e.preventDefault();
		$.ajax({
			type: "POST",
			url: "./mail.php",
			data: $(this).serialize()
		}).done(function () {
			$(this).find("input").val("");
			let message = document.createElement('div');
			message.innerHTML = "Ваше сообщение отправлено";
			message.style.color = "#22eaaa";
			$("footer form").append(message);
      $("footer form").trigger("reset");
      setTimeout( ()=>{
        $('footer form').find(message).remove();
      }, 5000 );
		});
		return false;
	});

	$('#test-form form').submit(function (e) {
    
		e.preventDefault();
		$.ajax({
			type: "POST",
			url: "./mail-test.php",
			data: $(this).serialize()
		}).done(function () {
      
			$(this).find("input").val("");
			let message = document.createElement('div');
			message.innerHTML = "Ваше сообщение отправлено";
			message.style.color = "#22eaaa";
			$("#test-form form").append(message);
      $("#test-form form").trigger("reset");
      setTimeout( ()=>{
        $('#test-form form').find(message).remove();
      }, 5000 );
		});
		return false;
	});
	$('#test-email').on('change', function () {
		if ( $(this).val() != "" ){
			$('#test-phone').removeAttr('required');
		} else {
			$('#test-phone').attr('required', 'required');
		}
	});
	$('#test-phone').on('change', function () {
		if ( $(this).val() != "" ){
			$('#test-email').removeAttr('required');
		} else {
			$('#test-email').attr('required', 'required');
		}
	});
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