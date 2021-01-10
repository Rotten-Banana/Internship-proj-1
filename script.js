$(document).ready(()=>{

	$('.nav_list li').click(function(){
		var index = $(this).index();
		$('.setup .panes').hide();
		$('.setup .panes').eq(index).show();
		return false
	});

	$('.nav_list li').click(function(){
		var index = $(this).index();
		$('.others .panes').hide();
		$('.others .panes').eq(index).show();
		return false
	});

	$('.nav_list li').click(function(){
		var index = $(this).index();
		$('.some .panes').hide();
		$('.some .panes').eq(index).show();
		return false
	});

	$('nav h1').click(function(){
		var index = $(this).index();
		$('.tabs').hide();
		$('.tabs').eq(index).show();
		return false
	});
	
	
	$(()=>{
		var list = $('ul#network_list')
		$.ajax({
			type: 'GET',
			url: 'http://localhost:3000',
			success: (data)=>{
				$.each(data, (i,dat)=>{
					list.append(`<li onclick="test(this)" id="network_element" class="remove">${dat.SSID} <span style="float: right;">${dat.RSSI}</span></li>`);
				});
			},
			error: (error)=>{
				console.log('error',error);
			}
		})
	});

	setInterval(()=>{
		var list = $('ul#network_list')
		var flag1 = $('.setup').css("display")
		var flag2 = $('#Network').css("display")
		if(flag1==='block' && flag2==='block'){
			$.ajax({
				type: 'GET',
				url: 'http://localhost:3000',
				success: (data)=>{
					$("li").remove('.remove');
					$.each(data, (i,dat)=>{
						list.append(`<li onclick="test(this)" id="network_element" class="remove">${dat.SSID} <span style="float: right;">${dat.RSSI}</span></li>`);
					});
				},
				error: (error)=>{
					console.log('error',error);
				}
			});
		}
	},3000)

	// $(document).on('click','#network_list li',()=>{
	// 	console.log("click");
	// 	console.log($(this).text());

	// })
	
	// function test(a){
	// 	console.log(a.innerHTML)
	// }

	$("input#Password").on('keypress',function(e) {
		if(e.which == 13) {
			$("form#SSID_Pass").submit();
		}
	});

	$("form#submit").click(()=>{
		$("form#SSID_Pass").submit();
	})

});
