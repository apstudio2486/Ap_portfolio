	var intro = $("header.container ul.main_menu a.intro");
	var skill = $("header.container ul.main_menu a.skill");
	var work = $("header.container ul.main_menu a.work");
	$(document).ready(function () {
		

		// slide scroll

		intro.on("click", function () {
			let headerHeight = $('.header').height();
			window.scrollTo(0, $("#intro").offset().top - headerHeight);
		});
		skill.on("click", function () {
			let headerHeight = $('.header').height();
			window.scrollTo(0, $("#skills").offset().top - headerHeight);
		});
		work.on("click", function () {
			let headerHeight = $('.header').height();
			window.scrollTo(0, $("#work_section").offset().top - headerHeight);
		});


		// menu slide toggle
		$('.bars').click(function(){
			$('.option').slideToggle(500);
			$('.fa-align-justify').toggleClass('.fa-times');
		});

		// Read more toggle
		$('.scroll').hide();
		$('.read-more').click(function () {
			$('.scroll').slideToggle(600);
			$('.fa-arrow-circle-down').toggleClass('fa-arrow-circle-up');
		});



		$('.owl-carousel').owlCarousel({
			loop:true,
			margin:15,
			nav:true,
			autoplay:true,
			autoplayTimeout:2000,
			responsive:{
				0:{
					items:1
				},
				600:{
					items:2
				},
				1000:{
					items:4
				}
			}
		})

	});