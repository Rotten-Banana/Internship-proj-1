$(document).ready(()=>{
	$("button.blue").click(()=>{
		console.log("click");
	})


	$("#network").click(()=>{
		$("#Network").show();
		$("#Devices").hide();
	})

	$("#device").click(()=>{
		$("#Devices").show();
		$("#Network").hide();
	})
})