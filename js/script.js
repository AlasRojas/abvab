$(document).ready(function(){


	var activeLi = 0;

	setInterval(function(){ 
		changeLi();
	}, 3000);

	function changeLi(){
		$("#background_video .video_txt > div").removeClass('active');
		activeLi++;
		if ( activeLi == 3) {
			activeLi = 0;
		}
		$("#background_video .video_txt > div").eq(activeLi).addClass('active');
	}
});