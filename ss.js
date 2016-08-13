var audio = document.getElementById("audio");
function audioplay(){
	audio.play();
}

function audiopause(){
	audio.pause();
}

function audiostop(){
	audio.pause();
	audio.currentTime = 0;
}

/*allows the song to play when the button is pressed*/