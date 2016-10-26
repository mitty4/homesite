function random_color(){
             var rgb = ['a','b','c','d','e','f','0','1','2','3','4','5','6','7','8','9'];
             color = '#'  
             for(var i = 0; i < 6; i++) {
                x = Math.floor((Math.random()*16))
                color += rgb[x]; 
             }
             return color;
          }
// var showcontent = function(){	
// 	if(window.innerWidth>1080){
// 		$('#education_info, #personal_info, #aspirations_info').hide();
// 		$('#spacer').css('display', 'block')
// 		$('#education, #personal, #aspirations').mouseenter(function(){
// 			$(this).css('cursor','pointer')
// 		});
// 		$('#personal').click(function(){
// 			$('#personal_info').css('display', 'block');
// 			$('#education_info').css('display', 'none');
// 			$('#aspirations_info').css('display', 'none');
// 			$('#spacer').css('display', 'none');
// 		});
// 		$('#education').click(function(){
// 			$('#education_info').css('display', 'block');
// 			$('#aspirations_info').css('display', 'none');
// 			$('#personal_info').css('display', 'none');
// 			$('#spacer').css('display', 'none');
// 		});			
// 		$('#aspirations').click(function(){
// 			$('#aspirations_info').css('display', 'block');
// 			$('#education_info').css('display', 'none');
// 			$('#personal_info').css('display', 'none');
// 			$('#spacer').css('display', 'none');
// 		});
// 		$('body').click(function(e){
// 			e.target.id != 'personal' ? $('#personal_info').css('display', 'none'): 0;
// 			e.target.id != 'education' ? $('#education_info').css('display', 'none') : 0;
// 			e.target.id != 'aspirations' ? $('#aspirations_info').css('display', 'none'): 0;
// 			if(e.target.id != 'personal' && e.target.id != 'education'&& e.target.id != 'aspirations') {
// 			 	$('#spacer').css('display','block');
// 			 };	
// 		});
// 	}else if(window.innerWidth<1080){
// 		$('#education_info, #personal_info, #aspirations_info').css('display', 'block');
// 		$('#spacer').css('display', 'none');
// 	}
// 	// return showcontent;
// 	};

var readme = function(){
	if(window.innerWidth>880){
		$('.flash').css('display', 'block')
		$('#spacer').mouseover(function(){
			$('.flash').css('display','block').fadeOut('slow')
			console.log('mouseenter880')
		})
		// $('#spacer').mouseleave(function(){
		// 	$('.flash').fadeOut(1000)
		// })
		$(window).scroll(function(){
			for(var i = 0; i<1; i++){
				$('.flash1').fadeIn(100)
				$('.flash1').fadeOut(1500)
				$('.flash1').removeClass('flash1')
			}
		})
	}else if(window.innerWidth<880){
		// $('#spacer').mouseenter(function(){
			$('.flash .flash1 vertical-txt-left').off('mouseover')
		// })
	}
}


var showinfo = function(){
	// if(window.innerWidth>880){
		$('#education_info, #personal_info').hide();
		$('#aspirations_info').css('display','block');

			$('#education, #personal, #aspirations, .python, .ruby, .javascript').mouseenter(function(){
				$(this).css('cursor','pointer')
			});
			$('#personal').click(function(){
				$('#personal_info').css('display', 'block');
				$('#education_info').css('display', 'none');
				$('#aspirations_info').css('display', 'none');
				// window.scrollTo(3000, 820)
				$('html body').animate({
					scrollTop: $('#personal_info').offset().top -125},1000)
			});
			$('#education').click(function(){
				$('#education_info').css('display', 'block');
				$('#aspirations_info').css('display', 'none');
				$('#personal_info').css('display', 'none');
				$('html body').animate({
					scrollTop: $('#education_info').offset().top -125},1000)
			});			
			$('#aspirations').click(function(){
				$('#aspirations_info').css('display', 'block');
				$('#education_info').css('display', 'none');
				$('#personal_info').css('display', 'none');
				$('html body').animate({
					scrollTop: $('#aspirations_info').offset().top -125},1000)
			});
			$('.python').click(function(){
				$('html body').animate({
					scrollTop: $('#python').offset().top -100}, 1000)
			})
			$('.ruby').click(function(){
				$('html body').animate({
					scrollTop: $('#ruby').offset().top -100}, 1000)
			})
			$('.javascript').click(function(){
				$('html body').animate({
					scrollTop: $('#mean').offset().top -100}, 1000)
			})
	// }else if(window.innerWidth<880){
	// 	$('#education_info, #aspirations_info, #personal_info').show()
	// }	
}

$(document).ready(function(){

	$(window).resize(function(){
		showinfo();
		// readme();
	})	
	showinfo();


	var typed = 'Design, when done deliberately, conducts a technical symphony communicating effectively without words, which is why I never develop without the emotion evoking power of colors.'
	console.log(typed[0])


var showWarmth = function(){
	setTimeout(function(){$('.warmth a').css('display','block')}, 14500)
  
}

	var showText = function (target, message, index, interval, callback) {   
	  if (index < message.length) {
	    $(target).append(message[index++]);
    setTimeout(function () { showText(target, message, index, interval); }, interval);
  }

}
	

	showText('#spacer p', typed, 0, 75, showWarmth)
	showWarmth()
	// $('.vertical-txt-mid p').text('')

	// var t = function(letter){
	// 	setTimeout(function){
	// 		$('.vertical-txt-mid p').append(letter)	
	// 	}
	// }	
	// for (var i = 0; i<typed.length; i++){
	// 	setTimeout(function(){
	// 		t('h')
	// 	},1000)
			
	// }


	// readme();
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




