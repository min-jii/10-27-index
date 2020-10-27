$(document).ready(function () {
	
	var windowWidth = $(window).width()
	var mouseX = 0;

	$(document).mousemove(function (e) {
		mouseX = e.pageX;
		if (mouseX < windowWidth / 2) {
			$(".trapezoid").css("border-left", "46px solid transparent");
			$(".trapezoid").css("border-right", "46px solid transparent");
			$(".trapezoid").css("border-bottom", "0px solid #000000");

		}
		if (mouseX > windowWidth / 2) {
			$(".trapezoid").css("border-left", "46px solid transparent");
			$(".trapezoid").css("border-right", "46px solid transparent");
			$(".trapezoid").css("border-bottom", "158px solid #ffffff");
		}
	})
})