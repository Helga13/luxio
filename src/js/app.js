'use strict'

$(document).ready(function () {
	
	$('a.disabled').on('click', function(e) {
        e.preventDefault();
	});

	$('.slider').slick({
		dots: true,
		infinite: true,
		autoplay: true,
		autoplaySpeed: 2000,
	});

	$('.palette_header > a').on('click', function (e) {
		e.preventDefault();
		$(this).parent().next('.palette_block').slideToggle();
		if ($(this).hasClass('open')) {
			$(this).removeClass('open');
		} else {
			$(this).addClass('open');
		}
	});
	// scrollto (плавная прокрутка по якорю без плагина)

	$('a.scrollto').click(function () {
	//		e.preventDefault(); для отображения id в адресную строку
		var elementClick = $(this).attr('href');
		var destination = $(elementClick).offset().top;
		$('html:not(:animated),body:not(:animated)').animate({scrollTop: destination}, 1100);
	});

})