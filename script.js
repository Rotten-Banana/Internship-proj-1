$(document).ready(()=>{
	$("button#refresh").click(()=>{
		console.log("click");
	})

	$('.nav_list li').click(function(){
		var index = $(this).index();
		// jQuery('.tabs-menu li').removeClass('active');
		// jQuery(this).addClass('active');
		$('.setup .panes').hide();
		$('.setup .panes').eq(index).show();
		return false
	});

	$('.nav_list li').click(function(){
		var index = $(this).index();
		// jQuery('.tabs-menu li').removeClass('active');
		// jQuery(this).addClass('active');
		$('.others .panes').hide();
		$('.others .panes').eq(index).show();
		return false
	});

	$('.nav_list li').click(function(){
		var index = $(this).index();
		// jQuery('.tabs-menu li').removeClass('active');
		// jQuery(this).addClass('active');
		$('.some .panes').hide();
		$('.some .panes').eq(index).show();
		return false
	});

	$('nav h1').click(function(){
		var index = $(this).index();
		// jQuery('.tabs-menu li').removeClass('active');
		// jQuery(this).addClass('active');
		$('.tabs').hide();
		$('.tabs').eq(index).show();
		// $('.tabs').hide();
		// $('.tabs').eq(index).show();
		return false
	});
})