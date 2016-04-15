$(document).ready(function(){
	console.log("the dolcument is ready.");

	$("h1,#h2,#ul,p,#p,#ul2,#footer").animate({
	  // opacity: .25,
	  width: "70%",
	  marginLeft: "500px"
	} , 2000);

	// $("thing").delay(1000).css({
	// 	type CSS HERE
	// }, 5000)

	$("#h2").hide(1000);
	$("#h2").show(2000);
	$("#ul").fadeOut(4000);
	$("#ul").fadeIn(5000);
	$("#ul2").fadeOut(6000);
	$("#ul2").fadeIn(7000);
	$("#footer").fadeOut(7000);
	$("#footer").fadeIn(7000);

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