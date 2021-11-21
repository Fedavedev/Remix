$("document").ready(function () {

	$("button:first").click(function () {
		$("body").removeClass("darktheme")
		$(".hero-img").attr("src", "img/Hero Image-light.png")
	})

	$("button:last").click(function () {
		$("body").addClass("darktheme")
		$(".hero-img").attr("src", "img/Hero Image-dark.png")
	})

})