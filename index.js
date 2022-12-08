$(document).ready(function($) {
	// Votre code ici avec les appels à la fonction $()
	$("#button").hover(function(){
		$(this).css("background-color", "hsl(240, 100%, 5%)")
			},function(){
				$(this).css("background-color", "hsl(5, 85%, 63%)")
			})

	$("[id=nav]").hover(function(){
		$(this).css("color", "hsl(5, 85%, 63%")
			},function(){
				$(this).css("color", "hsl(236, 13%, 42%)")
			})

			$("[id=new]").hover(function(){
				$(this).css("color", " hsl(35, 77%, 62%)")
					},function(){
						$(this).css("color", "hsl(36, 100%, 99%)")
					})
					$("[id=bottom-title]").hover(function(){
						$(this).css("color", " hsl(5, 85%, 63%)")
							},function(){
								$(this).css("color", "hsl(240, 100%, 5%)")
							})
});

// $(document).ready(function ($) {
// 	// Votre code ici avec les appels à la fonction $()
// 	$('#button').hover(function () {
// 		$(this).css('background-color', 'hsl(240, 100%, 5%)')
// 	})
// })