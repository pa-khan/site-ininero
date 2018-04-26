$(document).ready(function($) {

	$('.text_phone').mask('+7 (999) 999-99-99');
	

	$('.gallery__slider').slick({
		centerMode: true,
		variableWidth: true,
		dots: true,
		responsive: [{
			breakpoint: 815,
			 settings: {
        centerMode: false,
				variableWidth: false,
      }
		}]
	})

	$('.program__slider-wrap').slick({
		dots: true
	})

	$('.program__btn-more').click(function(event) {
		$('.program__item').slideDown(300)
		$(this).hide();
		$('.program__slider').slick('reinit');
	});

	$('.reviews__list').slick({
		slidesToShow: 2,
		responsive: [{
			breakpoint: 992,
			 settings: {
        slidesToShow: 1
      }
		}]
	})

	$(".header__nav-wrap").on("click","a", function (event) {
		event.preventDefault();

		var id  = $(this).attr('href'),

			top = $(id).offset().top;
		
		$('body,html').animate({scrollTop: top - 30}, 1500);
	});

	$(window).on('load resize scroll', function(event) {
		if($(window).scrollTop() > 1){
			$('.header__nav').addClass('header__nav_scroll');
		} else{
			$('.header__nav').removeClass('header__nav_scroll');
		}
	});

});
