$(function () {

	$(".mobile-menu-button").click(function () {
		$(this).toggleClass("on");
	});

	$('.mobile-menu-button').click(function () {
		$('body').toggleClass('menu-open');
	})

	$('.copy').clone().appendTo('.menu-mobile');



	var hellopreloader = document.getElementById("hellopreloader_preload");
	function fadeOutnojquery(el) {
		el.style.opacity = 1; var interhellopreloader = setInterval(function () {
			el.style.opacity = el.style.opacity - 0.05;
			if (el.style.opacity <= 0.05) {
				clearInterval(interhellopreloader);
				hellopreloader.style.display = "none";
			}
		}, 16);
	} window.onload = function () {
		setTimeout(function () { fadeOutnojquery(hellopreloader); }, 500);
	};


	$('.panel-collapse').on('show.bs.collapse', function () {
		$(this).siblings('.panel-heading').addClass('active_arrow');
	});

	$('.panel-collapse').on('hide.bs.collapse', function () {
		$(this).siblings('.panel-heading').removeClass('active_arrow');
	});

	$('.main-nav li').removeClass('active');
	var path = window.location.pathname;
	$('.main-nav li a').each(function () {
		var href = $(this).attr('href');
		if (path.slice(1).substring(0, href.length) === href) {
			$(this).parent('li').addClass('active');
		}
	});

});

function up() {
	var top = Math.max(document.body.scrollTop, document.documentElement.scrollTop);
	if (top > 0) {
		window.scrollBy(0, ((top + 100) / -30));
		t = setTimeout('up()', 20);
	} else clearTimeout(t);
	return false;
} 


$(document).ready(function() {
  $('.popup_recall').magnificPopup();
});