var showinfo = function(){
	$('#education_info, #personal_info').hide();
	$('#aspirations_info').css('display','block');

	$('#education, #personal, #aspirations, .python, .ruby, .javascript').mouseenter(function(){
		$(this).css('cursor','pointer')
	});
	$('#personal').click(function(){
		$('#personal_info').css('display', 'block');
		$('#education_info').css('display', 'none');
		$('#aspirations_info').css('display', 'none');
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
}
var showText = function (target, message, index, interval, callback) {   
  if (index < message.length) {
    $(target).append(message[index++]);
	setTimeout(function () { showText(target, message, index, interval); }, interval);
  }
}

var showWarmth = function(){
	setTimeout(function(){$('.warmth a').css('display','block')}, 14500)
}

var about = "Mitty Labs showcases three of Mitchell's full-stack applications, which are in video format below. The code for each app can be found on Github through the links provided."
var typed = 'Design, when done deliberately, conducts a technical symphony communicating effectively without words, which is why I never develop without the emotion evoking power of colors.'



$(document).ready(function(){

	// $(window).resize(function(){
	// 	showinfo();
	// })	
	showinfo();
	showText('#spacer p', about, 0, 75, showWarmth)

});




