//FUNCTION DECLARATION
	function color(selector,itemToChange,colorValue){
		$(selector).click(function(){
			$(itemToChange).css('color',colorValue)
		})
	}

	function appear(target,arg){
		var i=0;
		$(target).click(function(){
			if(i<6){
				$(arg+i).fadeIn(1000)
				$(target).html('again')
				if(i==5){
					$(target).html('Done')
				}
				i+=1
			}
			else{
				$(target).html('Click Me')
				$(arg+0).fadeOut(100)
				$(arg+1).fadeOut(100)
				$(arg+2).fadeOut(100)
				$(arg+3).fadeOut(100)
				$(arg+4).fadeOut(100)
				$(arg+5).fadeOut(100)
				i = 0;
			}
		})
	}
	function fly(arg){
		$('#github').css('right','-250px')
		$('#github').animate({right:arg || window.innerWidth+100},7000,fly);
		$('#linkedin').css('right','-250px')
		$('#linkedin').animate({right:arg || window.innerWidth+100},8250,fly);
		$('#cloud').css('right','-350px')
		$('#cloud').animate({right:arg || window.innerWidth+100},11250,fly);
	}

fly()
// ONLOAD
$(document).ready(function(){
	color('#red','#title','red')
	color('#purple','#title','purple')
	color('#white','#title','white')
	color('#gray','#title','gray')
	color('#blue','#title','#64d9f7')
	$('#guest_submit').click(function(){
		$('#title').html($('#guest_title').val() || 'Try Again')
		$('#guest_title').val('')
	})
	$(document).keypress(function(e) {
    	if(e.which == 13) {
		$('#title').html($('#guest_title').val() || 'you pressed enter')
		$('#guest_title').val('')
		
    	}
	});
	appear('#appear','#skills')
	
	setInterval(function () {
        $('#man').fadeOut(1000).fadeIn(1000);
    }, 1000);
	$(window).resize(fly())
	//$(document).on('resize',fly(),alert('asd'))
})
