
var toggle= document.querySelectorAll(".toggle"),
	menu= document.querySelector(".nav-top");

for(var i= 0; i < toggle.length; i++) {
	toggle[i].addEventListener("click", menuAction)
}


document.addEventListener("keyup", function(e) {
	if(e.keyCode == 27) {
		menuAction();
	}
});

function menuAction() {
	if(menu.classList.contains("show-menu")) {
		menu.classList.remove("show-menu");
	} else {
		menu.classList.add("show-menu");
	}
}