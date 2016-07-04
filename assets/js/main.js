var open= document.querySelector(".toggle-menu"),
	close= document.querySelector(".close");

	close.addEventListener("click", function() {
		document.querySelector(".nav-top").style.height= "0";
	});

	open.addEventListener("click", function() {
		document.querySelector(".nav-top").style.height= "300px";
	});