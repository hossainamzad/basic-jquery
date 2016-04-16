$(document).ready(function(){
	console.log("the dolcument is ready.");
	$("#batman").hide();
	// $("#batman").css (width: 700px; height: 500px);
	$("#body").click(function(){
			$("#batman").show();
	});
	// $("#batman").click(function(){
	// 	$(this).hide();
	// });
	$("#batman").click (function(){
 		$('#batman').hide();
 	});

	$("h1,#h2,#ul,p,#p,#ul2,#footer").animate({
	  // opacity: .25,
	  width: "70%",
	  marginLeft: "500px"
	} , 2000);

	// $("thing").delay(1000).css({
	// 	type CSS HERE
	// }, 5000)

	$("#h2").hide(1000). delay(15000). show(2000). slideUp(1000).slideDown(1000);
	$("#ul").fadeOut(4000).fadeIn(5000). slideUp(1000).slideDown(1000);
	$("#ul2").fadeOut(6000).fadeIn(7000).slideUp(1000).slideDown(1000);
	$("#footer").fadeOut(7000).fadeIn(7000). slideUp(1000).slideDown(1000);


    $("p").click(
    	function(){
    		alert("inclicked");
    	});


    $("h1").css("color", "Green");
    $("#h2").css("color", "Blue");
    $("#ul").css("color", "navy Blue");
    $("#ul2").css("color", "yellow");
    $("#footer").css("color", "limegreen");
    $("#body").css("background", "grey");
    $("#p").css("color", "violet");
    $("p").css("color", "orange");
});