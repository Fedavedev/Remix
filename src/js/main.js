$("document").ready(function () {

	$("button:first").click(function () {
		$("body").removeClass("darktheme")
		$(".hero-img").attr("src", "img/Hero Image-light.png")
		$(".logo").attr("src", "img/Remix Logo light Mode.svg")
	})

	$("button:last").click(function () {
		$("body").addClass("darktheme")
		$(".hero-img").attr("src", "img/Hero Image-dark.png")
		$(".logo").attr("src", "img/Remix-logo light mode.svg")
	})

})