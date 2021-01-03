$(document).ready(()=>{
	$("button#refresh").click(()=>{
		console.log("click");
	})


	$("#network").click(()=>{
		$("#unready_content").hide();
		$("#Network").show();
	})

	$("#device").click(()=>{
		$("#Network").hide();
		$("#unready_content").show();
	})

	$("#others").click(()=>{
		$(".side_nav ul").not("#other_nav").hide();
		$("#other_nav").show();
		$("#device").trigger("click");
	})

	$("#setup").click(()=>{
		$(".side_nav ul").not("#setup_nav").hide();
		$("#setup_nav").show();
		$("#network").trigger("click");
	})

	$("#some").click(()=>{
		$(".side_nav ul").not("#some_nav").hide();
		$("#some_nav").show();
		$("#device").trigger("click");
	})
})