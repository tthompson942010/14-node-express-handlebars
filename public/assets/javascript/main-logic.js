$(document).ready(function(){
	var currentURL = window.location.origin;

	$("#placeOrder").on("click", function(){
		var burger = {
			name: $("#whatBurger").val().trim()
		};
		console.log(burger);

		$.post(currentURL + "/burgers/create", burger, function(data){
			
		});
	});
});