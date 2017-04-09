$(document).ready(function () {
	reset();
});

function reset() {
	$("#grid-frame").empty();
	var side = prompt("Enter side length");
	for (var i = 0; i < side; i++) {
		for (var j = 0; j < side; j++)
		$("#grid-frame").append('<div class="box"></div>');
		$(".box").width((500/side)-1);
	$(".box").height((500/side)-1);
	$(".box").hover(function () {
		$(this).css("background-color","yellow");
	});
	}
}
					