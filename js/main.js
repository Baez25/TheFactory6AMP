$(document).ready(function(){

	$("#banner").css({"height": + "50%"});

	var flag = false;
	var scroll;

	$(window).scroll(function(){
		scroll = $(window).scrollTop();

		if(scroll > 200){
			if(!flag){
				$("#logo").css({"margin-top": "-5px", "width": "75px","height":"50px"});

				$("header").css({"background-color": "rgba(245, 245, 245, 0.73)"});
				flag = true;
			}
		}else{
			if(flag){
				$("#logo").css({"margin-top": "150px", "width": "450px","height":"350px"});

				$("header").css({"background-color": "transparent"});
				flag = false;
			}
		}


	});

});