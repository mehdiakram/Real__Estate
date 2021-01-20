$(document).ready(function () {
	
	// STICKY MENU _____________________________
	$(window).on("scroll", function () {
		if ($(window).scrollTop()) {
			$('nav').addClass('sticky__menu');
		} else {
			$('nav').removeClass('sticky__menu');
		}
	});

	// MOBAIL MENU ______________________________
	$(".menu-btn").click(function () {
		$(".nav__menu").addClass("show_menu");
		$(".nav__menu").removeClass("hide_menu");
	});

	$(".close__icon").click(function () {
		$(".nav__menu").addClass("hide_menu");
		$(".nav__menu").removeClass("show-menu");
	});;

	// VIDEO ON CLICK CHANGE ____________________
	$('.play-icon').on('click', function () {
		$('video').css({
			'z-index': 1,
			'opacity': 1
		});

		$('video').trigger('play');
		$('.video-img').hide();
		$(this).hide();
	});

	$('video').on('click', function () {
		console.log('a');
	});

	// SLIDER _____________________________________
	var swiper = new Swiper('.swiper-container', {
		pagination: {
			el: '.swiper-pagination',
			type: 'fraction',
		},
		navigation: {
			nextEl: '.swiper-next',
			prevEl: '.swiper-prev',
		},
	});

	// FAQ ______________________________________________________
	const items = document.querySelectorAll(".accordion button");

	function toggleAccordion() {
		const itemToggle = this.getAttribute('aria-expanded');

		for (i = 0; i < items.length; i++) {
			items[i].setAttribute('aria-expanded', 'false');
		}

		if (itemToggle == 'false') {
			this.setAttribute('aria-expanded', 'true');
		}
	}
	items.forEach(item => item.addEventListener('click', toggleAccordion));

	// BACK TO TOP BUTTON ______________________________________________________
	var mybutton = document.getElementById("myBtn");

	// When the user scrolls down 20px from the top of the document, show the button
	window.onscroll = function () {
		scrollFunction();
	};

	function scrollFunction() {
		if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
			mybutton.style.opacity = "1";
		} else {
			mybutton.style.opacity = "0";
		}
	}
	mybutton.addEventListener("click", topFunction);
	// When the user clicks on the button, scroll to the top of the document
	function topFunction() {
		document.body.scrollTop = 0;
		document.documentElement.scrollTop = 0;
	}

});
