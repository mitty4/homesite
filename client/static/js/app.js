function random_color(){
             var rgb = ['a','b','c','d','e','f','0','1','2','3','4','5','6','7','8','9'];
             color = '#'  
             for(var i = 0; i < 6; i++) {
                x = Math.floor((Math.random()*16))
                color += rgb[x]; 
             }
             return color;
          }
var showcontent = function(){	
	if(window.innerWidth>1080){
		$('#education_info, #personal_info, #aspirations_info').hide();
		$('#spacer').css('display', 'block')
		$('#education, #personal, #aspirations').mouseenter(function(){
			$(this).css('cursor','pointer')
		});
		$('#personal').click(function(){
			$('#personal_info').css('display', 'block');
			$('#education_info').css('display', 'none');
			$('#aspirations_info').css('display', 'none');
			$('#spacer').css('display', 'none');
		});
		$('#education').click(function(){
			$('#education_info').css('display', 'block');
			$('#aspirations_info').css('display', 'none');
			$('#personal_info').css('display', 'none');
			$('#spacer').css('display', 'none');
		});			
		$('#aspirations').click(function(){
			$('#aspirations_info').css('display', 'block');
			$('#education_info').css('display', 'none');
			$('#personal_info').css('display', 'none');
			$('#spacer').css('display', 'none');
		});
		$('body').click(function(e){
			e.target.id != 'personal' ? $('#personal_info').css('display', 'none'): 0;
			e.target.id != 'education' ? $('#education_info').css('display', 'none') : 0;
			e.target.id != 'aspirations' ? $('#aspirations_info').css('display', 'none'): 0;
			if(e.target.id != 'personal' && e.target.id != 'education'&& e.target.id != 'aspirations') {
			 	$('#spacer').css('display','block');
			 };	
		});
	}else if(window.innerWidth<1080){
		$('#education_info, #personal_info, #aspirations_info').css('display', 'block');
		$('#spacer').css('display', 'none');
	}
	// return showcontent;
	};



var showinfo = function(){
	$('#education_info, #aspirations_info').hide();
		$('#education, #personal, #aspirations').mouseenter(function(){
			$(this).css('cursor','pointer')
		});
			$('#personal').click(function(){
			$('#personal_info').css('display', 'block');
			$('#education_info').css('display', 'none');
			$('#aspirations_info').css('display', 'none');
		});
		$('#education').click(function(){
			$('#education_info').css('display', 'block');
			$('#aspirations_info').css('display', 'none');
			$('#personal_info').css('display', 'none');
		});			
		$('#aspirations').click(function(){
			$('#aspirations_info').css('display', 'block');
			$('#education_info').css('display', 'none');
			$('#personal_info').css('display', 'none');
		});
}

$(document).ready(function(){

	$(window).resize(function(){
		if(window.innerWidth<880){
			showinfo();
		}
		if(window.innerWidth>880){
			// $(window).resize(function(){
				$('#spacer').mouseenter(function(){
				$('.flash').fadeIn(100)
				$('.flash').fadeOut(1000)
				})
				$(window).scroll(function(){
					for(var i = 0; i<1; i++){
						$('.flash1').fadeIn(100)
						$('.flash1').fadeOut(1500)
						$('.flash1').removeClass('flash1')
					}
				})
			}
	})	
	// showcontent();
	// showinfo();
	var arr = $('#others').html().split("");
	var temp = "";
	for(var i =0;i<arr.length;i++){
		temp+='<span style="color:'+random_color()+'">'+arr[i]+'</span>';
	};
	$('#others').html(temp);
	$('#others').click(function(){
		alert("More Projects Coming Soon")
	});
	// $('.skillset').css('color', random_color());
	
});




